import { z } from "zod";
import { useForm, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const testFormScheme = z.object({
  title: z.string().min(1, "min 1").max(10, "max"),
  content: z.string(),
});

export type TestFormScheme = z.infer<typeof testFormScheme>;

export const useSampleFormAContext = () => {
  return useFormContext<TestFormScheme>();
};

export const useSampleFormA = () => {
  console.log("useSampleFormA");
  const formMethods = useForm<TestFormScheme>({
    resolver: zodResolver(testFormScheme),
    defaultValues: {
      title: "",
      content: "",
    },
  });
  return {
    formMethods,
  };
};
