"use client";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Input } from "@ui/components/ui/input";
import { Button } from "@ui/components/ui/button";
import { Checkbox } from "@ui/components/ui/checkbox";
import { useLayoutActiveEffect } from "@web/features/layout/hook/use-layout-active-effect";
import { useQueryNoticeCreate } from "@web/features/notice/hooks/use-query-notice";
import { JustifyPanel } from "@web/shared/ui/panel/justify-panel";

const wirteFormSchema = z.object({
  title: z
    .string()
    .min(1, "타이틀을 입력하세요")
    .min(3, "최소 3글자 이상 입력하세요.")
    .max(50, "최대 50자 까지 입력이 가능합니다."),
  content: z
    .string()
    .min(1, "내용을 입력하세요")
    .min(3, "최소 3글자 이상 입력하세요.")
    .max(3000, "최대 3,000자 까지 입력이 가능합니다."),
  isAgree: z.boolean().refine((v) => v, {
    message: "동의 필수",
  }),
});

type WriteFormSchema = z.infer<typeof wirteFormSchema>;

export function NoticeCreateView() {
  console.log("notice-create-view");
  useLayoutActiveEffect("notice");

  const formMethods = useForm<WriteFormSchema>({
    resolver: zodResolver(wirteFormSchema),
    defaultValues: {
      title: "",
      content: "",
      isAgree: false,
    },
  });

  const { handleSubmit } = formMethods;
  const createAction = useQueryNoticeCreate();
  const router = useRouter();

  const onSubmit = async (payload: WriteFormSchema) => {
    if (createAction.isPending) return;
    const { title, content } = payload;
    const { data, error } = await createAction.mutateAsync({
      title,
      content,
    });
    console.log("response:", data, error);
    if (!error) {
      router.push("/notice/list");
    }
  };

  return (
    <div>
      <Form {...formMethods}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="ui-mt-5">
            <FormField
              control={formMethods.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>타이틀</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="타이틀을 입력하세요."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="ui-mt-5">
            <FormField
              control={formMethods.control}
              name="content"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>내용</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="내용을 입력하세요."
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className=" ui-mt-5">
            <FormField
              control={formMethods.control}
              name="isAgree"
              render={({ field }) => (
                <FormItem className="ui-flex ui-flex-row ui-items-start ui-space-x-3 ui-space-y-0">
                  <FormControl>
                    <Checkbox
                      className="ui-mt-1"
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="ui-space-y-0 leading-none">
                    <FormLabel>동의 체크 테스트</FormLabel>
                    <FormMessage className="ui-pt-1" />
                  </div>
                </FormItem>
              )}
            />
          </div>

          <JustifyPanel bside={<Button type="submit">저장</Button>} />
        </form>
      </Form>
    </div>
  );
}
