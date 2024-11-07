"use client";
import { useWatch } from "react-hook-form";
import { type TestFormScheme } from "../hooks/use-sample-form-a";

export function AboxUseWatch() {
  console.log("AboxTest1");
  const value = useWatch<TestFormScheme>({ name: "title" });
  return <div>AboxTest1: {value.length}</div>;
}
