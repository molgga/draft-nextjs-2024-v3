import { Button } from '@ui/components/ui/button';
import { TriangleAlert } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface ErrorBoxProps {
  icon?: React.ReactNode;
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
}

export function getErrorIconDefaultAttrs() {
  return {
    className: 'ui-w-24 ui-h-24',
    stroke: '#ccc',
  };
}

export function ErrorBox({ icon, title, message }: ErrorBoxProps) {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="ui-text-center">
      <div className="ui-flex ui-justify-center">
        {icon ? (
          icon
        ) : (
          <TriangleAlert className="ui-w-24 ui-h-24" stroke="#ccc" />
        )}
      </div>

      <div className="ui-mt-5 ui-text-lg ui-text-gray-700 ui-font-semibold">
        {title ? (
          title
        ) : (
          <>
            죄송합니다. <br />
            요청하신 페이지를 처리하지 못했습니다.
          </>
        )}
      </div>

      <div className="ui-mt-3 ui-text-sm ui-text-gray-400">
        {message ? (
          message
        ) : (
          <>
            방문하시려는 페이지의 주소가 잘못 입력되었거나, 일시적인 문제일 수
            있습니다.
            <br />
            잠시 후 다시 시도해 주세요.
          </>
        )}
      </div>

      <div className="ui-flex ui-justify-center ui-mt-6">
        <Button
          className="ui-mx-1"
          size="sm"
          variant="outline"
          onClick={handleBack}
        >
          뒤로가기
        </Button>
        <Button className="ui-mx-1" size="sm" variant="outline" asChild>
          <a href="/">홈으로</a>
        </Button>
      </div>
    </div>
  );
}
