import { useState } from 'react';
import { useAuthStore } from '../model/useAuthStore';

const initialForm = {
  fullName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};

export const RegisterForm = ({ onSuccess }) => {
  const { register } = useAuthStore();
  const [formValues, setFormValues] = useState(initialForm);
  const [error, setError] = useState('');

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setError('');
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      setError('Mật khẩu xác nhận chưa khớp.');
      return;
    }

    register(formValues);
    onSuccess?.();
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      {error && (
        <p className="rounded-xl border border-rose-200 bg-rose-50 px-3 py-2 text-sm font-medium text-rose-700" role="alert">
          {error}
        </p>
      )}

      <div>
        <label htmlFor="registerFullName" className="mb-1.5 block text-sm font-semibold text-zinc-800">
          Họ tên
        </label>
        <input
          id="registerFullName"
          name="fullName"
          type="text"
          autoComplete="name"
          value={formValues.fullName}
          onChange={handleChange}
          required
          className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
          placeholder="Nguyễn Văn A"
        />
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="registerEmail" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Email
          </label>
          <input
            id="registerEmail"
            name="email"
            type="email"
            autoComplete="email"
            value={formValues.email}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="email@example.com"
          />
        </div>

        <div>
          <label htmlFor="registerPhone" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Số điện thoại
          </label>
          <input
            id="registerPhone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={formValues.phone}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="0901234567"
          />
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label htmlFor="registerPassword" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Mật khẩu
          </label>
          <input
            id="registerPassword"
            name="password"
            type="password"
            autoComplete="new-password"
            value={formValues.password}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="Tạo mật khẩu"
          />
        </div>

        <div>
          <label htmlFor="registerConfirmPassword" className="mb-1.5 block text-sm font-semibold text-zinc-800">
            Xác nhận mật khẩu
          </label>
          <input
            id="registerConfirmPassword"
            name="confirmPassword"
            type="password"
            autoComplete="new-password"
            value={formValues.confirmPassword}
            onChange={handleChange}
            required
            className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
            placeholder="Nhập lại mật khẩu"
          />
        </div>
      </div>

      <button
        type="submit"
        className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      >
        Tạo tài khoản
      </button>
    </form>
  );
};
