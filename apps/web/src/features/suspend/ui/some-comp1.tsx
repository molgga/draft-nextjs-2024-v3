import { useQueryDelay } from "../hooks/use-query-delay";

export function SomeComp1() {
  const query = useQueryDelay();

  // console.log({ ...query });

  return (
    <div>
      some-comp1
      <div>{JSON.stringify(query.data)}</div>
    </div>
  );
}
