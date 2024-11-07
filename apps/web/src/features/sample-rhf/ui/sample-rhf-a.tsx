"use client";
import { Asample1 } from "./asample1";
import { Asample2 } from "./asample2";

export function SampleRhfA() {
  console.log("SampleRhfA");

  return (
    <div>
      <Asample1 />
      <Asample2 className="ui-mt-5" />
    </div>
  );
}
