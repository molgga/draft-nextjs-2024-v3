'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRouter } from 'next/navigation';
import { useLayoutActiveEffect } from '@web/features/layout/hook/use-layout-active-effect';
import { useQueryNoticeCreate } from '@web/features/notice/hooks/use-query-notice';

const wirteFormSchema = z.object({
  title: z
    .string()
    .min(1, '타이틀을 입력하세요')
    .min(3, '최소 3글자 이상 입력하세요.')
    .max(50, '최대 50자 까지 입력이 가능합니다.'),
  content: z
    .string()
    .min(1, '내용을 입력하세요')
    .min(3, '최소 3글자 이상 입력하세요.')
    .max(3000, '최대 3,000자 까지 입력이 가능합니다.'),
  isCheckTest: z.boolean().optional(),
  isAgree: z.boolean().refine((v) => v, {
    message: '동의 필수',
  }),
});

type WriteFormSchema = z.infer<typeof wirteFormSchema>;

export function NoticeCreateView() {
  console.log('notice-create-view');
  useLayoutActiveEffect('notice');

  const { register, handleSubmit, formState } = useForm<WriteFormSchema>({
    resolver: zodResolver(wirteFormSchema),
    defaultValues: {
      title: '',
      content: '',
      isCheckTest: false,
      isAgree: false,
    },
  });

  const createAction = useQueryNoticeCreate();
  const router = useRouter();

  const onSubmit = async (payload: WriteFormSchema) => {
    if (createAction.isPending) {
      return;
    }
    const { title, content } = payload;
    const { data, error } = await createAction.mutateAsync({
      title,
      content,
    });

    console.log('response:', data, error);
    if (!error) {
      router.push('/notice/list');
    }
  };

  return (
    <div>
      <div>notice create view</div>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <div>
              <input type="text" {...register('title')} placeholder="title" />
            </div>

            {Boolean(formState.errors.title) && (
              <div className="my-2 text-sm text-red-500">
                {formState.errors.title?.message}
              </div>
            )}
          </div>
          <div>
            <div>
              <input
                type="text"
                {...register('content')}
                placeholder="content"
              />
            </div>
            {Boolean(formState.errors.content) && (
              <div className="my-2 text-sm text-red-500">
                {formState.errors.content?.message}
              </div>
            )}
          </div>
          <div>
            <label>
              <input type="checkbox" {...register('isCheckTest')} />
              체크 테스트
            </label>
            {Boolean(formState.errors.isCheckTest) && (
              <div className="my-2 text-sm text-red-500">
                {formState.errors.isCheckTest?.message}
              </div>
            )}
          </div>
          <div>
            <label>
              <input type="checkbox" {...register('isAgree')} />
              동의
            </label>
            {Boolean(formState.errors.isAgree) && (
              <div className="my-2 text-sm text-red-500">
                {formState.errors.isAgree?.message}
              </div>
            )}
          </div>
          <div>
            <button type="submit">submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
