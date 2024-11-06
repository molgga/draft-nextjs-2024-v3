"use client";
import { useWatch } from "react-hook-form";
import { type TestFormScheme } from "../hooks/use-sampe-form-a";

export function AboxTest1() {
  console.log("AboxTest1");
  const value = useWatch<TestFormScheme>({ name: "title" });
  return <div>AboxTest1: {value.length}</div>;
}
