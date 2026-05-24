import { PROMOTIONS } from '@/shared/constants/landing-data';
import { PromotionCard } from './PromotionCard';

export const PromotionsWidget = () => {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-emerald-100 via-amber-50/20 to-zinc-100 overflow-hidden"
      aria-labelledby="promotions-title"
    >
      {/* DECORATIVE BLUR CIRCLES */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-amber-100/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/3 w-80 h-80 rounded-full bg-rose-100/10 blur-3xl pointer-events-none" />

      {/* GRADIENT LINES */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        {/* EYEBROW LABEL */}
        <div className="inline-block mb-6">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-orange-600"> Khuyến mãi hôm nay</span>
        </div>

        {/* HEADER */}
        <div className="mb-16">
          <h2 id="promotions-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4">
            Giảm giá <span className="text-orange-600">lên tới 20%</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            Tận dụng các ưu đãi độc quyền, mã khuyến mãi và phần thưởng VIP. Đặt vé xe khách tiết kiệm hơn với
            <span className="font-semibold text-orange-600"> discount từ 10-20%</span>, quà tặng voucher khách sạn, và
            hoàn tiền cashback. Áp dụng cho tất cả tuyến đường toàn quốc, không bị giới hạn.
          </p>
        </div>

        {/* PROMOTIONS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {PROMOTIONS.map((promo, index) => (
            <PromotionCard key={promo.id} promo={promo} index={index} />
          ))}
        </div>

        {/* CTA SECTION */}
        <div className="mt-16 text-center">
          <p className="text-gray-600 mb-6">
            Chưa thấy mã khuyến mãi phù hợp?{' '}
            <a href="/khuyen-mai" className="font-semibold text-orange-600 hover:text-orange-700 transition-colors">
              Khám phá thêm ưu đãi khác
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default PromotionsWidget;
