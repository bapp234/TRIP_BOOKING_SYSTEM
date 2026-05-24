import { Link } from 'react-router-dom';
import { useAuthStore } from '../model/useAuthStore';

export const LoginForm = ({ onNavigateAway, onSuccess }) => {
  const { login } = useAuthStore();

  const handleSubmit = (event) => {
    event.preventDefault();
    login();
    onSuccess?.();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <label htmlFor="loginEmail" className="mb-1.5 block text-sm font-semibold text-zinc-800">
          Email
        </label>
        <input
          id="loginEmail"
          name="email"
          type="email"
          autoComplete="email"
          required
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="user@example.com"
        />
      </div>

      <div>
        <label htmlFor="loginPassword" className="mb-1.5 block text-sm font-semibold text-zinc-800">
          Mật khẩu
        </label>
        <input
          id="loginPassword"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="Nhập mật khẩu"
        />
      </div>

      <div className="flex justify-end">
        <Link
          to="/quen-mat-khau"
          onClick={onNavigateAway}
          className="text-sm font-semibold text-emerald-700 transition hover:text-emerald-800"
        >
          Quên mật khẩu?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Đăng nhập
      </button>
    </form>
  );
};
