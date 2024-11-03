interface PageTitleProps {
  title: string;
}

export function PageTitle({ title }: PageTitleProps) {
  return (
    <div className="ui-pt-3 ui-pb-8" foo="" a="">
      <h1 className="ui-text-lg ui-font-semibold">{title}</h1>
    </div>
  );
}
