import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthModal } from '@/features/auth';

export const ResetPasswordPage = () => {
  const [formValues, setFormValues] = useState({ password: '', confirmPassword: '' });
  const [error, setError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((current) => ({ ...current, [name]: value }));
    setError('');
    setIsSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formValues.password !== formValues.confirmPassword) {
      setError('Mật khẩu xác nhận chưa khớp.');
      return;
    }

    setIsSubmitted(true);
    setFormValues({ password: '', confirmPassword: '' });
  };

  return (
    <>
      <Helmet>
        <title>Đặt lại mật khẩu | TripBooking</title>
        <meta name="description" content="Tạo mật khẩu mới cho tài khoản TripBooking của bạn." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-zinc-50 px-4 pb-12 pt-28">
        <section className="mx-auto max-w-xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-600">Tài khoản TripBooking</p>
          <h1 className="text-3xl font-bold text-zinc-950">Đặt lại mật khẩu</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Tạo mật khẩu mới để tiếp tục đặt vé và quản lý hành trình của bạn.
          </p>

          {error && (
            <p className="mt-5 rounded-2xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm font-semibold text-rose-700" role="alert">
              {error}
            </p>
          )}

          {isSubmitted && (
            <p className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700" role="status">
              Mật khẩu đã được cập nhật ở trạng thái mô phỏng. Bạn có thể đăng nhập lại để tiếp tục.
            </p>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="resetPassword" className="mb-1.5 block text-sm font-semibold text-zinc-800">
                Mật khẩu mới
              </label>
              <input
                id="resetPassword"
                name="password"
                type="password"
                autoComplete="new-password"
                value={formValues.password}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                placeholder="Nhập mật khẩu mới"
              />
            </div>

            <div>
              <label htmlFor="resetConfirmPassword" className="mb-1.5 block text-sm font-semibold text-zinc-800">
                Xác nhận mật khẩu mới
              </label>
              <input
                id="resetConfirmPassword"
                name="confirmPassword"
                type="password"
                autoComplete="new-password"
                value={formValues.confirmPassword}
                onChange={handleChange}
                required
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                placeholder="Nhập lại mật khẩu mới"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Cập nhật mật khẩu
            </button>
          </form>

          {isSubmitted && (
            <button
              type="button"
              onClick={() => setIsAuthModalOpen(true)}
              className="mt-4 w-full rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-bold text-zinc-800 transition hover:border-emerald-300 hover:text-emerald-700 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Đăng nhập
            </button>
          )}
        </section>
      </main>

      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
    </>
  );
};
