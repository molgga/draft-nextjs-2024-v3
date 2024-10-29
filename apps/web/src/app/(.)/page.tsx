import { Button } from '@ui/components/ui/button';
import { TestUiBox1 } from '@web/shared/ui/test-ui-box1';

export default function Page() {
  return (
    <div>
      MAIN
      <div>
        <Button>Button1</Button>
      </div>
      <div>
        <TestUiBox1 />
      </div>
    </div>
  );
}
