import { Logo } from '@/shared/ui/logo/Logo';
import { FOOTER_LINKS } from '@/shared/constants/landing-data';
import { FooterSection } from './FooterSection';
import { FooterLink } from './FooterLink';
import { FaBus } from 'react-icons/fa';

export const FooterWidget = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-gray-300">
      {/* DECORATIVE TOP LINE */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />

      {/* MAIN FOOTER */}
      <div className="border-b border-gray-700">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* GRID SECTION */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 md:gap-8 mb-16">
            {/* BRAND SECTION */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <FaBus className="text-2xl text-white inline-block mr-2" />
                <span className="text-2xl font-bold text-white">TripBooking</span>
              </div>
              <p className="text-sm text-gray-300 leading-relaxed font-medium mb-4">
                TripBooking - Nền tảng đặt vé xe khách trực tuyến hàng đầu Việt Nam. Đặt vé an toàn, nhanh chóng và tiện lợi 
                trên toàn quốc.
              </p>
              <div className="flex gap-3">
                {FOOTER_LINKS.social.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-gray-700 text-gray-300 hover:bg-teal-600 hover:text-white transition-all duration-300 font-bold"
                    aria-label={`Theo dõi TripBooking trên ${link.label}`}
                    title={link.label}
                  >
                    {link.label.charAt(0).toUpperCase()}
                  </a>
                ))}
              </div>
            </div>

            {/* ABOUT LINKS */}
            <FooterSection 
              title="Về TripBooking" 
              links={FOOTER_LINKS.about}
              isDarkBackground={true}
            />

            {/* SUPPORT LINKS */}
            <FooterSection 
              title="Hỗ trợ khách hàng" 
              links={FOOTER_LINKS.support}
              isDarkBackground={true}
            />

            {/* LEGAL LINKS */}
            <FooterSection 
              title="Pháp lý" 
              links={FOOTER_LINKS.legal}
              isDarkBackground={true}
            />

            {/* NEWSLETTER */}
            <div>
              <h3 className="font-black text-white mb-5 text-sm uppercase tracking-wider">
                Nhận cập nhật
              </h3>
              <p className="text-sm text-gray-400 mb-4 font-medium">
                Đăng ký email để nhận ưu đãi, khuyến mãi và tin tức mới nhất từ TripBooking.
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="w-full px-4 py-3 rounded-lg bg-gray-700 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all text-sm font-medium"
                  required
                  aria-label="Nhập email để đăng ký"
                />
                <button
                  type="submit"
                  className="w-full px-4 py-3 bg-gradient-to-r from-teal-600 to-teal-700 text-white font-bold rounded-lg hover:from-teal-700 hover:to-teal-800 transition-all duration-300 text-sm"
                >
                  Đăng ký ngay
                </button>
              </form>
            </div>
          </div>

          {/* DIVIDER */}
          <div className="border-t border-gray-700 my-12" />

          {/* DISCLAIMER & PORTFOLIO NOTICE */}
          <div className="mb-12 p-6 bg-gradient-to-r from-orange-900/20 to-amber-900/20 border border-orange-700/30 rounded-xl">
            <h4 className="font-bold text-orange-400 text-sm uppercase tracking-wider mb-3">
              ⚠️ Lưu ý quan trọng: Đây là dự án portfolio, không phải nền tảng thương mại thực tế
            </h4>
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              <strong>TripBooking</strong> là một dự án <strong>portfolio / web phi lợi nhuận</strong> được xây dựng với mục đích 
              giáo dục và thực hành kỹ năng phát triển web. <strong>Đây không phải là nền tảng thương mại thực tế</strong> và không 
              được phép sử dụng cho mục đích kinh doanh hoặc giao dịch tiền thực. Tất cả dữ liệu, giá cả và thông tin chuyến xe 
              trên trang web này là <strong>dữ liệu giả lập</strong> cho mục đích demo. 
              <br />
              <br />
              Nếu bạn tìm kiếm các dịch vụ đặt vé xe khách thực tế, vui lòng liên hệ với các công ty vận tải hoặc nền tảng đặt vé 
              chính thức được cấp phép bởi Bộ Giao thông Vận tải.
            </p>
          </div>

          {/* SOCIAL & CONTACT */}
          <div className="border-t border-gray-700 pt-8">
            <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
              {/* CONTACT INFO */}
              <div>
                <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">
                  Thông tin liên hệ
                </h4>
                <p className="text-sm text-gray-400 mb-1">
                  📧 Email: <a href="mailto:info@tripbooking.dev" className="text-teal-400 hover:text-teal-300 font-medium">
                    info@tripbooking.dev
                  </a>
                </p>
                <p className="text-sm text-gray-400">
                  🌐 Website: <a href="https://tripbooking.dev" className="text-teal-400 hover:text-teal-300 font-medium">
                    tripbooking.dev
                  </a>
                </p>
              </div>

              {/* CREDITS */}
              <div className="text-right">
                <p className="text-xs text-gray-500 font-medium">
                  Phát triển bởi <span className="text-teal-400 font-bold">Developer Portfolio</span>
                </p>
                <p className="text-xs text-gray-600 mt-1">
                  © {currentYear} - Tất cả quyền được bảo lưu
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

     

      {/* DECORATIVE BOTTOM LINE */}
      <div className="h-px bg-gradient-to-r from-transparent via-teal-500/30 to-transparent" />
    </footer>
  );
};

export default FooterWidget;
