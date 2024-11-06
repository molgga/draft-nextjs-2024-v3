import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const testFormScheme = z.object({
  title: z.string().min(1, "min 1").max(10, "max"),
  content: z.string(),
});

export type TestFormScheme = z.infer<typeof testFormScheme>;

export const useSampleFormB = () => {
  console.log("useSampleFormB");
  const formMethods = useForm<TestFormScheme>({
    resolver: zodResolver(testFormScheme),
    mode: "onSubmit",
    defaultValues: {
      title: "",
      content: "",
    },
  });
  return {
    formMethods,
  };
};
