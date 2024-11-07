"use client";
import type { KeyboardEventHandler } from "react";
import { FormProvider } from "react-hook-form";
import { Input } from "@ui/components/ui/input";
import { Textarea } from "@ui/components/ui/textarea";
import { Button } from "@ui/components/ui/button";
import {
  useSampleFormA,
  type TestFormScheme,
} from "../hooks/use-sample-form-a";
import { AboxUseWatch } from "./abox-use-watch";

export function Asample1() {
  console.log("SampleRhfA");
  const { formMethods } = useSampleFormA();

  const onSubmit = (payload: TestFormScheme) => {
    console.log(formMethods.getValues());
    console.log(payload);
  };

  const handleFormKeyDown: KeyboardEventHandler = (evt) => {
    if (evt.key === "Enter" || evt.keyCode === 13) evt.preventDefault();
  };

  return (
    <FormProvider {...formMethods}>
      <form
        role="presentation"
        onKeyDown={handleFormKeyDown}
        onSubmit={formMethods.handleSubmit(onSubmit)}
      >
        <div>
          <Input type="text" {...formMethods.register("title")} />
        </div>
        <div>
          <AboxUseWatch />
        </div>
        <div>
          <Textarea {...formMethods.register("content")} />
        </div>
        <div>
          <Button type="submit">submit</Button>
        </div>
      </form>
    </FormProvider>
  );
}
