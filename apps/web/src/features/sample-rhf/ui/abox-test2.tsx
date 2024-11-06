"use client";
import { useEffect } from "react";
import { useFormContext, useWatch } from "react-hook-form";
import { type TestFormScheme } from "../hooks/use-sampe-form-a";

export function AboxTest2() {
  console.log("AboxTest2");
  const testForm = useFormContext<TestFormScheme>();
  // const w1 = testForm.watch('title');
  // return <>AboxTest2: {w1.length}</>;
  return (
    <>
      AboxTest2
      <div>{JSON.stringify(testForm.formState)}</div>
      <div>{JSON.stringify(testForm.getValues())}</div>
    </>
  );
}
