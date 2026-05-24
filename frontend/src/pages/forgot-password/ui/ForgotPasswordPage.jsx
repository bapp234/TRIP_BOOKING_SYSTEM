import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

export const ForgotPasswordPage = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitted(true);
    setEmail('');
  };

  return (
    <>
      <Helmet>
        <title>Quên mật khẩu | TripBooking</title>
        <meta
          name="description"
          content="Nhập email để nhận hướng dẫn đặt lại mật khẩu tài khoản TripBooking."
        />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-zinc-50 px-4 pb-12 pt-28">
        <section className="mx-auto max-w-xl rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
          <p className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-600">Tài khoản TripBooking</p>
          <h1 className="text-3xl font-bold text-zinc-950">Quên mật khẩu</h1>
          <p className="mt-3 text-sm leading-6 text-zinc-600">
            Nhập email để nhận hướng dẫn đặt lại mật khẩu.
          </p>

          {isSubmitted && (
            <p className="mt-5 rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-semibold text-emerald-700" role="status">
              Nếu email tồn tại trong hệ thống, hướng dẫn đặt lại mật khẩu sẽ được gửi đến hộp thư của bạn.
            </p>
          )}

          <form className="mt-6 space-y-4" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="forgotEmail" className="mb-1.5 block text-sm font-semibold text-zinc-800">
                Email
              </label>
              <input
                id="forgotEmail"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setIsSubmitted(false);
                }}
                required
                className="w-full rounded-xl border border-zinc-300 bg-white px-4 py-3 text-sm text-zinc-950 outline-none transition focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100"
                placeholder="email@example.com"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-xl bg-emerald-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
            >
              Gửi hướng dẫn
            </button>
          </form>
        </section>
      </main>
    </>
  );
};
