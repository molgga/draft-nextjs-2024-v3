import { Button } from '@repo/ui/components/button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@repo/ui/components/card';

export default function Page() {
  return (
    <div>
      <div>HOME</div>
      <div>
        <Button>Button</Button>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Create project</CardTitle>
            <CardDescription>
              Deploy your new project in one-click.
            </CardDescription>
          </CardHeader>
        </Card>
      </div>
    </div>
  );
}
