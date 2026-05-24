import React from 'react';
import { POPULAR_ROUTES } from '@/shared/constants/landing-data';
import { PopularRouteCard } from './PopularRouteCard';

export const PopularRoutesWidget = () => {
  const topRoutes = POPULAR_ROUTES.slice(0, 5);

  return (
    <section aria-labelledby="popular-routes-title" className="bg-gradient-to-b from-emerald-100 to-zinc-100 py-10 md:py-16">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-600">Chuyến phổ biến</p>
            <h2 id="popular-routes-title" className="mt-2 text-3xl md:text-4xl font-black tracking-tight leading-tight text-zinc-950">Các chuyến xe được đặt nhiều nhất</h2>
            <p className="mt-3 text-base leading-7 text-zinc-600 md:text-lg">Top 5 chuyến xe phổ biến nhất — đặt vé xe khách, so sánh giá vé và giờ chạy từ các hãng uy tín.</p>
          </div>

          <a href="/chuyen-xe" className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800">Xem tất cả tuyến </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {topRoutes.map((route, idx) => (
            <PopularRouteCard key={route.id} route={route} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularRoutesWidget;