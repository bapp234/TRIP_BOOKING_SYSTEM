import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { AuthModal, useAuthStore } from '@/features/auth';

const recentTrips = [
  {
    id: 'trip-hcm-dalat',
    route: 'TP. Hồ Chí Minh → Đà Lạt',
    date: '12/06/2026',
    status: 'Đã giữ chỗ mô phỏng',
  },
  {
    id: 'trip-hanoi-sapa',
    route: 'Hà Nội → Sa Pa',
    date: '28/06/2026',
    status: 'Đang chờ thanh toán',
  },
];

const savedPromotions = ['WELCOME20', 'FLEXBOOK'];

export const ProfilePage = () => {
  const { isAuthenticated, user } = useAuthStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <>
      <Helmet>
        <title>Tài khoản cá nhân | TripBooking</title>
        <meta name="description" content="Quản lý thông tin cá nhân, chuyến đi và ưu đãi trong tài khoản TripBooking." />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <main className="min-h-screen bg-zinc-50 px-4 pb-12 pt-28">
        <div className="mx-auto max-w-6xl">
          <section className="mb-6 rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm md:p-8">
            <p className="mb-3 text-sm font-bold uppercase tracking-wide text-emerald-600">TripBooking ID</p>
            <h1 className="text-3xl font-bold text-zinc-950">Thông tin cá nhân</h1>
            <p className="mt-3 max-w-2xl text-sm leading-6 text-zinc-600">
              Theo dõi thông tin tài khoản, chuyến đi gần đây và các ưu đãi đã lưu trong hệ thống mô phỏng.
            </p>
          </section>

          {!isAuthenticated ? (
            <section className="rounded-3xl border border-zinc-200 bg-white p-6 text-center shadow-sm md:p-8">
              <h2 className="text-2xl font-bold text-zinc-950">Bạn cần đăng nhập để xem thông tin cá nhân.</h2>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-zinc-600">
                Đăng nhập để quản lý chuyến đi, thông tin liên hệ và kho ưu đãi cá nhân trên TripBooking.
              </p>
              <button
                type="button"
                onClick={() => setIsAuthModalOpen(true)}
                className="mt-6 rounded-xl bg-emerald-500 px-6 py-3 text-sm font-bold text-white transition hover:bg-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                Đăng nhập
              </button>
            </section>
          ) : (
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
              <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm" aria-labelledby="profile-info-title">
                <h2 id="profile-info-title" className="text-2xl font-bold text-zinc-950">
                  Hồ sơ tài khoản
                </h2>
                <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <dt className="text-sm font-semibold text-zinc-500">Họ tên</dt>
                    <dd className="mt-1 font-bold text-zinc-950">{user.name}</dd>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <dt className="text-sm font-semibold text-zinc-500">Email</dt>
                    <dd className="mt-1 break-words font-bold text-zinc-950">{user.email}</dd>
                  </div>
                  <div className="rounded-2xl bg-zinc-50 p-4">
                    <dt className="text-sm font-semibold text-zinc-500">Số điện thoại</dt>
                    <dd className="mt-1 font-bold text-zinc-950">{user.phone}</dd>
                  </div>
                </dl>
              </section>

              <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm" aria-labelledby="promotion-wallet-title">
                <h2 id="promotion-wallet-title" className="text-2xl font-bold text-zinc-950">
                  Kho ưu đãi
                </h2>
                <p className="mt-2 text-sm leading-6 text-zinc-600">
                  Các mã ưu đãi mock sẽ có thể áp dụng ở bước thanh toán khi hệ thống tài khoản được kích hoạt.
                </p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {savedPromotions.map((code) => (
                    <li key={code} className="rounded-lg border border-emerald-200 bg-emerald-50 px-3 py-2 text-sm font-bold text-emerald-700">
                      {code}
                    </li>
                  ))}
                </ul>
              </section>

              <section className="rounded-3xl border border-zinc-200 bg-white p-6 shadow-sm lg:col-span-2" aria-labelledby="recent-trips-title">
                <h2 id="recent-trips-title" className="text-2xl font-bold text-zinc-950">
                  Chuyến đi gần đây
                </h2>
                <div className="mt-5 grid gap-3 md:grid-cols-2">
                  {recentTrips.map((trip) => (
                    <article key={trip.id} className="rounded-2xl border border-zinc-200 bg-zinc-50 p-4">
                      <h3 className="font-bold text-zinc-950">{trip.route}</h3>
                      <p className="mt-2 text-sm text-zinc-600">Ngày đi: {trip.date}</p>
                      <p className="mt-1 text-sm font-semibold text-emerald-700">{trip.status}</p>
                    </article>
                  ))}
                </div>
              </section>
            </div>
          )}
        </div>
      </main>

      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
    </>
  );
};
