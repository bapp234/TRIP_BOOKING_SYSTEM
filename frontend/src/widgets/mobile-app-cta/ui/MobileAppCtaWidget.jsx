import { MobileAppFeature } from './MobileAppFeature';

const MOBILE_FEATURES = [
  'Đặt vé xe khách trong 2 phút',
  'Thông báo cập nhật chuyến đi theo thời gian thực',
  'Quản lý đơn đặt vé và lịch sử hành trình',
  'Hỗ trợ 24/7 trên ứng dụng',
];

export const MobileAppCtaWidget = () => {
  return (
    <section
      className="relative py-24 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
      aria-labelledby="mobile-app-title"
    >
      {/* DECORATIVE BLUR CIRCLES */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-teal-100/15 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-80 h-80 rounded-full bg-cyan-100/10 blur-3xl pointer-events-none" />

      {/* GRADIENT LINES */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-teal-200 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* TEXT CONTENT */}
          <div>
            {/* EYEBROW LABEL */}
            <div className="inline-block mb-6">
              <span className="text-xs md:text-sm font-bold uppercase tracking-widest text-white">Ứng dụng di động</span>
            </div>

            {/* HEADING */}
            <h2 id="mobile-app-title" className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 leading-[1.1]">
              Tải TripBooking<span className="text-teal-600"> miễn phí</span>
            </h2>

            {/* DESCRIPTION */}
            <p className="text-lg md:text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              Ứng dụng di động TripBooking cho phép bạn đặt vé xe khách mọi lúc mọi nơi. Tìm chuyến xe, so sánh giá, quản lý
              đơn đặt vé, nhận thông báo cập nhật - mọi thứ trong một ứng dụng.
            </p>

            {/* BENEFITS LIST */}
            <ul className="space-y-3 mb-10">
              {MOBILE_FEATURES.map((feature, idx) => (
                <MobileAppFeature key={idx} feature={feature} />
              ))}
            </ul>

            {/* CTA BUTTON */}
            <div>
              <a
                href="/chuyen-xe"
                className="inline-block px-8 py-4 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-xl hover:from-teal-700 hover:to-teal-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 text-center"
              >
                Tải ứng dụng ngay
              </a>
            </div>
          </div>

          {/* PHONE MOCKUP */}
          <div className="relative h-full flex items-center justify-center perspective">
            <style>{`
              .phone-perspective {
                perspective: 1200px;
              }
              .phone-frame-3d {
                transform: rotateX(5deg) rotateZ(-15deg);
                transition: transform 0.3s ease;
              }
              .phone-frame-3d:hover {
                transform: rotateX(2deg) rotateZ(-10deg);
              }
            `}</style>
            {/* PHONE FRAME */}
            <div className="phone-perspective">
              <div className="phone-frame-3d relative w-80 h-[600px] bg-black rounded-3xl shadow-2xl overflow-hidden border-4 border-gray-800 flex flex-col group">
                {/* NOTCH */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-20" />

                {/* SCREEN */}
                <div className="flex-1 bg-white flex flex-col relative overflow-hidden">
                  {/* iOS STATUS BAR */}
                  <div className="bg-gray-900 text-white px-4 py-1 text-xs font-semibold flex items-center justify-between h-6">
                    <span>9:41</span>
                    
                  </div>

                  {/* APP HEADER */}
                  <div className="bg-gradient-to-b from-teal-600 to-teal-500 px-4 py-3 text-white">
                    <h3 className="text-xl font-black">TripBooking</h3>
                    <p className="text-xs opacity-90 font-medium">Đặt vé xe khách dễ dàng</p>
                  </div>

                  {/* SEARCH SECTION */}
                  <div className="bg-gradient-to-b from-teal-500 to-teal-400 px-3 py-3">
                    <div className="bg-white/90 rounded-2xl px-3 py-2 flex items-center gap-2">
                      <input
                        type="text"
                        placeholder="Tìm chuyến xe..."
                        className="flex-1 text-xs bg-transparent placeholder-gray-400 outline-none font-medium"
                        disabled
                      />
                    </div>
                  </div>

                  {/* CONTENT AREA WITH ANIMATION */}
                  <div className="flex-1 overflow-y-auto bg-white px-3 py-4 space-y-3 animate-pulse-scroll">
                    
                    {/* FEATURED ROUTE */}
                    <div className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-3 border border-emerald-200">
                      <h4 className="font-bold text-sm text-gray-900 mb-2">TP.HCM → Hà Nội</h4>
                      <div className="flex justify-between text-xs text-gray-700">
                        <span>350.000đ</span>
                        <span>22h30</span>
                        <span>15 chuyến</span>
                      </div>
                    </div>

                    {/* POPULAR ROUTE 2 */}
                    <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-xl p-3 border border-amber-200">
                      <h4 className="font-bold text-sm text-gray-900 mb-2">TP.HCM → Nha Trang</h4>
                      <div className="flex justify-between text-xs text-gray-700">
                        <span>200.000đ</span>
                        <span>8h45</span>
                        <span> 10 chuyến</span>
                      </div>
                    </div>

                    {/* ROUTE 3 */}
                    <div className="bg-gradient-to-br from-rose-50 to-rose-100 rounded-xl p-3 border border-rose-200">
                      <h4 className="font-bold text-sm text-gray-900 mb-2">Hà Nội → Hải Phòng</h4>
                      <div className="flex justify-between text-xs text-gray-700">
                        <span>75.000đ</span>
                        <span>2h30</span>
                        <span>12 chuyến</span>
                      </div>
                    </div>

                    {/* BENEFITS PREVIEW */}
                    <div className="bg-teal-50 rounded-xl p-3 border border-teal-200">
                      <p className="text-xs font-semibold text-teal-900">✓ Thanh toán an toàn 24/7</p>
                    </div>
                  </div>

                  {/* HOME INDICATOR */}
                  <div className="h-5 bg-black/80 rounded-t-2xl flex items-center justify-center">
                    <div className="w-24 h-1 bg-black/40 rounded-full" />
                  </div>
                </div>

                {/* GLOW EFFECT */}
                <div className="absolute -inset-6 rounded-3xl bg-gradient-to-r from-teal-500/20 to-cyan-500/20 blur-3xl -z-10 opacity-60" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileAppCtaWidget;
