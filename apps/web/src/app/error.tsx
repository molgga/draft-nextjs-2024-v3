'use client';

type ErrorInstance = Error & {
  message?: string;
  digest?: string;
};

interface ErrorPageProps {
  error: ErrorInstance;
}

export default function ErrorPage({ error }: ErrorPageProps) {
  console.log('#####################');
  console.log('error:', error);
  console.log('error message:', error?.message);
  console.log('error digest:', error?.digest);
  return (
    <div>
      <div>Root ErrorPage</div>
      <div>message: {error.message}</div>
      <div>digest: {error.digest}</div>
      <div>{JSON.stringify(error)}</div>
    </div>
  );
}
