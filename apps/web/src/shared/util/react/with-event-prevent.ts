export const withEventPrevent = (fn: () => void) => {
  return (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    fn();
  };
};
