import { FAQ_ITEMS } from '@/shared/constants/landing-data';
import { FaqItem } from './FaqItem';


export const FaqWidget = () => {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-emerald-100 via-amber-50/20 to-zinc-100 overflow-hidden"
      aria-labelledby="faq-title"
    >
      {/* DECORATIVE BLUR CIRCLES */}
      <div className="absolute top-0 right-1/4 w-96 h-96 rounded-full bg-orange-100/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/3 w-80 h-80 rounded-full bg-amber-100/10 blur-3xl pointer-events-none" />

      {/* GRADIENT LINES */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-orange-200 to-transparent" />

      <div className="relative z-10 max-w-4xl mx-auto px-4">
        {/* EYEBROW LABEL */}
        <div className="inline-block mb-6">
          <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-emerald-600">Câu hỏi thường gặp</span>
        </div>

        {/* HEADER */}
        <div className="mb-16">
          <h2 id="faq-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 mb-4 leading-[1.1]">
            Trả lời các câu hỏi <span className="text-emerald-600">của bạn</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl leading-relaxed">
            Tìm câu trả lời nhanh chóng cho những câu hỏi phổ biến về đặt vé xe khách, thanh toán, hoàn tiền, đổi lịch trình,
            và hỗ trợ khách hàng 24/7. Nếu chưa tìm thấy câu trả lời, liên hệ với đội hỗ trợ của chúng tôi.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-1 bg-white rounded-2xl border border-orange-100 p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow duration-300">
          {FAQ_ITEMS.map((item, idx) => (
            <FaqItem key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* ADDITIONAL SUPPORT SECTION */}
        <div className="mt-16 p-8 md:p-10 bg-gradient-to-br from-orange-50 via-amber-50 to-white rounded-2xl border-2 border-orange-200 relative overflow-hidden group">
          {/* DECORATIVE ACCENT */}
          <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-orange-100/20 blur-2xl pointer-events-none" />

          <div className="relative z-10 text-center">
            <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-3">
              Không tìm thấy câu trả lời?
            </h3>
            <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
              Đội hỗ trợ khách hàng TripBooking sẵn sàng giúp đỡ bạn 24/7. Liên hệ ngay qua chat, email hoặc hotline.
            </p>
            <a
              href="/lien-he"
              className="inline-block px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white font-bold rounded-xl hover:from-emerald-700 hover:to-emerald-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Liên hệ hỗ trợ 24/7
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqWidget;
