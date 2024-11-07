"use client";
import { Asample1 } from "./asample1";
import { Asample2 } from "./asample2";
import { Asample3 } from "./asample3";

export function SampleRhfA() {
  console.log("SampleRhfA");

  return (
    <div>
      <div className="ui-mt-5">
        <Asample1 />
      </div>
      <div className="ui-mt-5">
        <Asample2 />
      </div>
      <div className="ui-mt-5">
        <Asample3 />
      </div>
    </div>
  );
}
