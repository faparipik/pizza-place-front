import { toast } from 'react-toastify';

const createToast = (content, toastType) => {
  toast[toastType](content, {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
  });
};

export default {
  error: (content) => createToast(content, 'error'),
  success: (content) => createToast(content, 'success'),
  warning: (content) => createToast(content, 'warning'),
  info: (content) => createToast(content, 'info'),
};
