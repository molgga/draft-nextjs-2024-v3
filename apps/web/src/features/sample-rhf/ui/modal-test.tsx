import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import { Input } from "@ui/components/ui/input";
import { Button } from "@ui/components/ui/button";
import { useJdModalRef } from "@web/shared/libs/jd-modal";
import { useSampleFormB } from "../hooks/use-sample-form-b";

export function ModalTest() {
  console.log("ModalTest");
  const { formMethods } = useSampleFormB();
  const modalRef = useJdModalRef();

  const handleCancel = () => {
    modalRef.close();
  };

  const onSubmit = (payload: unknown) => {
    console.log(payload);
    modalRef.close(payload);
  };

  return (
    <div className="ui-p-5">
      <Form {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)}>
          <FormField
            name="title"
            control={formMethods.control}
            render={({ field }) => (
              <FormItem className="ui-py-2">
                <FormLabel>title</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            name="content"
            control={formMethods.control}
            render={({ field }) => (
              <FormItem className="ui-py-2">
                <FormLabel>content</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    value={field.value}
                    onChange={field.onChange}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div>
            <Button type="button" onClick={handleCancel}>
              cancel
            </Button>
            <Button type="submit">save</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
