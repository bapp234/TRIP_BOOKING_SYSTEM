import React from 'react';
import { WHY_CHOOSE_US, WHY_CHOOSE_US_INTRO } from '@/shared/constants/landing-data';
import { BenefitCard } from './BenefitCard';

export const WhyChooseUsWidget = () => {
  return (
    <section 
      aria-labelledby="why-choose-us-title"
      className="relative py-12 md:py-20 bg-gradient-to-b from-emerald-100 via-emerald-50/30 to-zinc-100 overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-emerald-200 to-transparent" />
      
      <div className="absolute top-10 right-10 w-72 h-72 bg-emerald-100/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-50/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* SPLIT LAYOUT - Editorial left, Benefits right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-start">
          {/* LEFT: Editorial Text Block */}
          <div className="flex flex-col justify-start">
            {/* Eyebrow label */}
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-emerald-600 mb-3">
              Tại sao chọn chúng tôi
            </span>

            {/* Main heading - SEO optimized */}
            <h2 
              id="why-choose-us-title"
              className="text-3xl md:text-4xl lg:text-5xl font-black text-zinc-950 mb-5 md:mb-6 leading-tight tracking-tight"
            >
              Tại sao lựa chọn <span className="text-emerald-600">TripBooking?</span>
            </h2>

            {/* Editorial content */}
            <div className="space-y-4">
              <p className="text-base md:text-lg text-zinc-700 leading-relaxed">
                {WHY_CHOOSE_US_INTRO}
              </p>

              <p className="text-sm md:text-base text-zinc-600 leading-relaxed">
                Được thành lập năm 2020, TripBooking đã trở thành nền tảng đặt vé xe khách hàng đầu Việt Nam. 
                Chúng tôi kết nối hành khách với hơn 200 hãng xe đáng tin cậy, mang lại sự lựa chọn tối ưu và 
                trải nghiệm đặt vé xe nhanh chóng, an toàn và tiết kiệm.
              </p>

              {/* CTA - internal link, not hash */}
              <div className="pt-2">
                <a
                  href="/chuyen-xe"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors group"
                >
                  Khám phá tuyến xe phổ biến
                </a>
              </div>
            </div>
          </div>

          {/* RIGHT: Benefits Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6">
            {WHY_CHOOSE_US.map((benefit, index) => (
              <BenefitCard 
                key={benefit.id} 
                benefit={benefit}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsWidget;
