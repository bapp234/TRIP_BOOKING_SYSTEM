import React from 'react';
import { BUS_OPERATORS } from '@/shared/constants/landing-data';
import { OperatorBadge } from './OperatorBadge';

export const BusOperatorsWidget = () => {
  return (
    <section 
      aria-labelledby="bus-operators-title"
      className="relative py-12 md:py-20 bg-gradient-to-b from-emerald-100 via-orange-50/20 to-zinc-100 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="absolute top-20 left-10 w-80 h-80 bg-orange-100/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-100/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <div className="text-center mb-10 md:mb-12">
          {/* Eyebrow */}
          <span className="inline-block text-sm font-semibold uppercase tracking-[0.15em] text-emerald-600 mb-3">
            Đối tác đáng tin cậy
          </span>

          {/* Main heading - SEO optimized */}
          <h2 
            id="bus-operators-title"
            className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-950 mb-4 leading-tight tracking-tight"
          >
            Hãng xe <span className="text-emerald-600">đối tác uy tín</span>
          </h2>

          {/* Description - crawlable content */}
          <p className="text-base md:text-lg text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Chúng tôi hợp tác với những hãng xe uy tín nhất trên toàn quốc. Mỗi hãng đều được xác minh an toàn, 
            có bảo hiểm hành khách, và dịch vụ chuyên nghiệp với hàng trăm chuyến xe mỗi ngày.
          </p>
        </div>

        {/* OPERATORS GRID - Horizontal layout, 6 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-5">
          {BUS_OPERATORS.map((operator) => (
            <OperatorBadge key={operator.id} operator={operator} />
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-sm md:text-base text-zinc-600 mb-4">
            Tất cả hãng xe đều được xác minh an toàn và có bảo hiểm hành khách toàn diện
          </p>
          
        </div>
      </div>
    </section>
  );
};

export default BusOperatorsWidget;
