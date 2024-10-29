'use client';
import { useSearchParams } from 'next/navigation';
import { Loader2 as IconPending } from 'lucide-react';
import { Button } from '@ui/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@ui/components/ui/card';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@ui/components/ui/form';
import { Input } from '@ui/components/ui/input';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { FullPanel } from '@web/shared/ui/panel/full-center-panel';
import { useQueryLogin } from '../hooks/use-query-login';

const loginScheme = z.object({
  username: z.string().min(1, '아이디를 입력하세요.'),
  password: z.string().min(1, '비밀번호를 입력하세요.'),
});

type LoginScheme = z.infer<typeof loginScheme>;

export default function LoginView() {
  const actionLogin = useQueryLogin();
  const searchParams = useSearchParams();
  const callbackUrl = decodeURIComponent(
    searchParams.get('callbackUrl') || '/'
  );

  const loginForm = useForm<LoginScheme>({
    resolver: zodResolver(loginScheme),
    defaultValues: {
      username: 'testuser',
      password: 'test1234$#@!',
    },
  });

  const onSubmit = async (payload: LoginScheme) => {
    console.log('login start');
    const { username, password } = payload;
    const result = await actionLogin.mutateAsync({ username, password });
    if (result && result.ok && !result.error) {
      window.location.href = callbackUrl;
    }
  };

  return (
    <FullPanel>
      <Card className="ui-mx-auto ui-max-w-sm ui-min-w-96">
        <Form {...loginForm}>
          <form onSubmit={loginForm.handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="ui-text-2xl">로그인</CardTitle>
              <CardDescription className="ui-pt-2">
                Draft NextJS 14 AppRouter + shadcn
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="ui-grid ui-gap-4">
                <div className="ui-grid ui-gap-2">
                  <FormField
                    control={loginForm.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>ID</FormLabel>
                        <FormControl>
                          <Input
                            type="text"
                            placeholder="로그인 아이디"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="ui-grid ui-gap-2">
                  <FormField
                    control={loginForm.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>비밀번호</FormLabel>
                        <FormControl>
                          <Input
                            type="password"
                            placeholder="비밀번호"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <Button
                  type="submit"
                  className="ui-w-full"
                  disabled={actionLogin.isPending}
                >
                  {Boolean(actionLogin.isPending) && (
                    <IconPending className="ui-mr-2 ui-h-4 ui-w-4 ui-animate-spin" />
                  )}
                  Login
                </Button>
                {/*               
              <Button variant="outline" className="ui-w-full">
                Login with Google
              </Button>
               */}
              </div>
              <div className="ui-mt-4 ui-text-center ui-text-sm">
                로그인 테스트 화면 testuser 외에는 오류
              </div>
            </CardContent>
          </form>
        </Form>
      </Card>
    </FullPanel>
  );
}
