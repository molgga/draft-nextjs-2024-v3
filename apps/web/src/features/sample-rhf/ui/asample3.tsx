import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form } from "@ui/components/ui/form";
import { Button } from "@ui/components/ui/button";
import { CheckboxList } from "./checkbox-list";

const testScheme = z.object({
  checkList: z.string().array().min(1, "1개 이상"),
  checkList2: z.number().array().min(1, "1개 이상"),
});

type TestScheme = z.infer<typeof testScheme>;

const CheckSourceList = [
  { label: "체크1-1", value: "1" },
  { label: "체크1-2", value: "2" },
  { label: "체크1-3", value: "3" },
  { label: "체크1-4", value: "4" },
];

const CheckSourceList2 = [
  { label: "체크2-1", value: 1 },
  { label: "체크2-2", value: 2 },
  { label: "체크2-3", value: 3 },
  { label: "체크2-4", value: 4 },
];

export function Asample3() {
  const formMethods = useForm<TestScheme>({
    resolver: zodResolver(testScheme),
    defaultValues: {
      checkList: [],
      checkList2: [],
    },
  });

  const onSubmit = (scheme: TestScheme) => {
    const refine = {
      ...scheme,
      checkList: scheme.checkList.map(Number),
    };
    console.log(refine);
  };

  const handleSetValueTest = () => {
    const expectCheckList1 = CheckSourceList.filter(
      () => Math.random() > 0.5,
    ).map((v) => v.value);
    const expectCheckList2 = CheckSourceList2.filter(
      () => Math.random() > 0.5,
    ).map((v) => v.value);

    console.log("expectCheckList1:", expectCheckList1);
    console.log("expectCheckList2:", expectCheckList2);
    formMethods.setValue("checkList", expectCheckList1);
    formMethods.setValue("checkList2", expectCheckList2);
  };

  const fm = formMethods.watch();

  return (
    <div>
      <div>sample3</div>
      <div>{JSON.stringify(fm)}</div>
      <div>
        <Button type="button" variant="outline" onClick={handleSetValueTest}>
          setValue 테스트
        </Button>
      </div>
      <div>
        <Form {...formMethods}>
          <form onSubmit={formMethods.handleSubmit(onSubmit)}>
            <CheckboxList fieldName="checkList" sourceList={CheckSourceList} />
            <CheckboxList
              fieldName="checkList2"
              sourceList={CheckSourceList2}
            />
          </form>
          <div className="ui-mt-5">
            <Button type="submit">submit</Button>
          </div>
        </Form>
      </div>
    </div>
  );
}
