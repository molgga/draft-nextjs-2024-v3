'use client';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { toast } from 'react-toastify';
import { Loader2 as IconPending, House as IconHome } from 'lucide-react';
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
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
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
  const { handleSubmit } = loginForm;

  const onSubmit = async (payload: LoginScheme) => {
    console.log('login start');
    const { username, password } = payload;
    const result = await actionLogin.mutateAsync({ username, password });
    console.log(result);
    if (result && result.ok && !result.error) {
      window.location.href = callbackUrl;
    } else {
      toast.error(result?.error || 'error', {
        autoClose: 3000,
      });
    }
  };

  return (
    <div className="ui-flex ui-h-screen ui-w-full ui-items-center ui-justify-center ui-px-4">
      <Card className="ui-mx-auto ui-max-w-sm ui-min-w-96">
        <Form {...loginForm}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <CardHeader>
              <CardTitle className="ui-text-2xl">
                <Button variant="outline" size="icon" asChild>
                  <Link href="/">
                    <IconHome />
                  </Link>
                </Button>
                <span className="ui-ml-2">로그인</span>
              </CardTitle>
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
    </div>
  );
}
