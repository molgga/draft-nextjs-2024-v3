import type { HTMLAttributes, PropsWithChildren } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@ui/components/ui/form";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@ui/components/ui/select";
import { Checkbox } from "@ui/components/ui/checkbox";
import { Input } from "@ui/components/ui/input";
import { Button } from "@ui/components/ui/button";

interface Asample2Props
  extends PropsWithChildren,
    HTMLAttributes<HTMLDivElement> {}

const testScheme = z.object({
  title: z.string().min(3, "타이틀 3자 이상 입력").max(255, "너무 깁니다."),
  checkList: z.string().array().min(1, "1개 이상"),
  selectType: z.string().min(1, "선택 필수"),
});

type TestScheme = z.infer<typeof testScheme>;

const CheckSourceList = [
  { label: "체크1", value: "1" },
  { label: "체크2", value: "2" },
  { label: "체크3", value: "3" },
  { label: "체크4", value: "4" },
];

const SelectSourceList = [
  { label: "select 1", value: "1" },
  { label: "select 2", value: "2" },
  { label: "select 3", value: "3" },
  { label: "select 4", value: "4" },
];

export function Asample2({ ...attrs }: Asample2Props) {
  const formMethods = useForm<TestScheme>({
    resolver: zodResolver(testScheme),
    // reValidateMode: 'onSubmit',
    defaultValues: {
      checkList: [],
      title: "",
      selectType: "",
    },
  });

  const onSubmit = (scheme: TestScheme) => {
    const refine = {
      ...scheme,
      checkList: scheme.checkList.map(Number),
    };
    console.log(refine);
  };

  const fm = formMethods.watch();

  return (
    <div {...attrs}>
      <div>
        <div>{JSON.stringify(fm)}</div>
        <Form {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <div>
              <FormField
                control={formMethods.control}
                name="checkList"
                render={() => (
                  <FormItem>
                    {CheckSourceList.map((check) => {
                      return (
                        <FormField
                          key={check.value}
                          name="checkList"
                          control={formMethods.control}
                          render={({ field }) => {
                            return (
                              <FormItem className="ui-inline-flex ui-p-2">
                                <div className="ui-flex">
                                  <FormControl>
                                    <Checkbox
                                      checked={field.value.includes(
                                        check.value,
                                      )}
                                      onCheckedChange={(checked) => {
                                        field.onChange(
                                          checked
                                            ? [...field.value, check.value]
                                            : field.value.filter(
                                                (value) =>
                                                  value !== check.value,
                                              ),
                                        );
                                      }}
                                    />
                                  </FormControl>
                                  <FormLabel className="ui-pl-2">
                                    {check.label}
                                  </FormLabel>
                                </div>
                              </FormItem>
                            );
                          }}
                        />
                      );
                    })}
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <br />

            <FormField
              control={formMethods.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      maxLength={255}
                      value={field.value}
                      onChange={field.onChange}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <br />
            <FormField
              name="selectType"
              control={formMethods.control}
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Select
                      defaultValue={field.value}
                      onValueChange={field.onChange}
                    >
                      <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="선택하세요" />
                      </SelectTrigger>

                      <SelectContent>
                        <SelectGroup>
                          {/* <SelectLabel>선택</SelectLabel> */}
                          {SelectSourceList.map((v) => {
                            return (
                              <SelectItem key={v.value} value={v.value}>
                                {v.label}
                              </SelectItem>
                            );
                          })}
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <div className="ui-mt-5">
              <Button type="submit">submit</Button>
            </div>
          </form>
        </Form>
      </div>
    </div>
  );
}
