export function ErrorTest1() {
  testThrow();
  return <div>ErrorTest1</div>;
}

function testThrow() {
  throw new Error('Error B');
}
