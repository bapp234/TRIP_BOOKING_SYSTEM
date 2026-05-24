import React from 'react';
import { AnimatedCard } from '@/shared/ui';

const buildRouteHref = (route) => {
  const params = new URLSearchParams({
    from: route.from,
    to: route.to,
  });

  return `/chuyen-xe?${params.toString()}`;
};

export const PopularRouteCard = ({ route, index }) => {
  return (
    <AnimatedCard
      animation="scaleIn"
      delay={index + 1}
      className="w-full rounded-[24px] overflow-hidden"
    >
      <article
        aria-labelledby={`route-${route.id}-title`}
        className="w-full rounded-3xl border border-emerald-200 bg-emerald-50/60 p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md hover:border-emerald-300 h-full"
      >
        <div className="flex h-full flex-col justify-between gap-4">

        {/* Tiêu đề chuyến xe - SEO optimized */}
        <div>
          <h3
            id={`route-${route.id}-title`}
            className="text-lg md:text-xl font-black tracking-tight leading-snug text-zinc-950"
          >
            Đặt vé xe {route.from} đi {route.to}
          </h3>

          {/* Mô tả lộ trình chuẩn SEO ngắn gọn */}
          <p className="mt-2 text-sm leading-6 text-zinc-700 line-clamp-2">
            {route.description}
          </p>
        </div>

        {/* Metadata: Giá, thời gian, chuyến */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">Giá vé:</span>
            <span className="text-lg font-bold text-orange-600">{route.price}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">Thời lượng:</span>
            <span className="text-sm font-semibold text-zinc-900">{route.duration}</span>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-zinc-500">Số chuyến (ngày):</span>
            <span className="text-sm font-semibold text-zinc-900">{route.trips}</span>
          </div>
        </div>

        {/* CTA Button */}
        <div className="pt-2">
          <a
            href={buildRouteHref(route)}
            className="inline-flex w-full items-center justify-center rounded-full bg-emerald-600 px-4 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-emerald-700 hover:shadow-md active:scale-95"
          >
            Đặt vé xe ngay
          </a>
        </div>
      </div>
    </article>
    </AnimatedCard>
  );
};

export default PopularRouteCard;
