'use client';
import { ErrorBox } from '@web/features/error/ui/error-box';
import { FullContentLayout } from '@web/features/layout/ui/composition/full-content-layout';
import { FullPanel } from '@web/shared/ui/panel/full-center-panel';

export default function NotFound() {
  return (
    <FullContentLayout>
      <FullPanel>
        <ErrorBox
          icon={
            <div className="ui-text-7xl ui-font-black ui-text-gray-800">
              404
            </div>
          }
          title={<>요청하신 페이지를 처리할 수 없습니다.</>}
          message={
            <>
              방문하시려는 페이지의 주소가 잘못 입력되었거나,
              <br />
              페이지의 주소가 변경 혹은 삭제되어 요청하신 페이지를 찾을 수
              없습니다.
            </>
          }
        />
      </FullPanel>
    </FullContentLayout>
  );
}
