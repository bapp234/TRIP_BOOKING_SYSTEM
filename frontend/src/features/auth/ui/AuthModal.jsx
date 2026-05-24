import { useId, useState } from 'react';
import { FaTimes } from 'react-icons/fa';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';

export const AuthModal = ({ defaultMode = 'login', onClose }) => {
  const [mode, setMode] = useState(defaultMode);
  const titleId = useId();
  const isLogin = mode === 'login';

  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-zinc-950/60 px-4 py-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      onMouseDown={handleOverlayClick}
    >
      <div className="w-full max-w-lg rounded-3xl bg-white p-5 shadow-xl sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-emerald-600">TripBooking</p>
            <h2 id={titleId} className="mt-1 text-2xl font-bold text-zinc-950">
              {isLogin ? 'Đăng nhập tài khoản' : 'Tạo tài khoản mới'}
            </h2>
            <p className="mt-1 text-sm text-zinc-600">
              {isLogin
                ? 'Tiếp tục đặt vé và quản lý hành trình của bạn.'
                : 'Lưu thông tin đặt vé và nhận ưu đãi phù hợp hơn.'}
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Đóng đăng nhập"
            className="rounded-full p-2 text-zinc-500 transition hover:bg-zinc-100 hover:text-zinc-800 focus:outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <FaTimes aria-hidden="true" />
          </button>
        </div>

        <div className="mb-5 grid grid-cols-2 rounded-2xl bg-zinc-100 p-1">
          <button
            type="button"
            onClick={() => setMode('login')}
            className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
              isLogin ? 'bg-white text-emerald-700 shadow-sm' : 'text-zinc-600 hover:text-zinc-950'
            }`}
          >
            Đăng nhập
          </button>
          <button
            type="button"
            onClick={() => setMode('register')}
            className={`rounded-xl px-4 py-2 text-sm font-bold transition ${
              !isLogin ? 'bg-white text-emerald-700 shadow-sm' : 'text-zinc-600 hover:text-zinc-950'
            }`}
          >
            Đăng ký
          </button>
        </div>

        {isLogin ? <LoginForm onNavigateAway={onClose} onSuccess={onClose} /> : <RegisterForm onSuccess={onClose} />}
      </div>
    </div>
  );
};
