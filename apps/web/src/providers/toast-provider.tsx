import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

export function ToastProvider() {
  return <ToastContainer autoClose={2000} />;
}
