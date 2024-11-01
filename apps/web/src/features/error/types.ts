export interface ErrorPageProps {
  error: Error;
  reset: () => void;
  title?: string | React.ReactNode;
  message?: string | React.ReactNode;
}
