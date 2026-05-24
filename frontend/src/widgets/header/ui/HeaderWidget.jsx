import { useState } from 'react';
import { Logo } from '@/shared/ui/logo/Logo';
import { Navbar } from './Navbar';
import { HeaderActions } from './HeaderActions';
import { FaBars, FaTimes } from 'react-icons/fa'; // Đổi thành react-icons/fa để có FaTimes (Dấu X)

export const HeaderWidget = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="absolute top-4 lg:top-6 left-0 w-full z-50 px-4 flex flex-col items-center">

      {/* THANH HEADER CHÍNH (VIÊN THUỐC) */}
      <header className="bg-white rounded-full h-14 lg:h-[58px] px-4 lg:px-5 flex items-center justify-between w-full max-w-6xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all">
        {/* --- BÊN TRÁI --- */}
        {/* Mobile: Nút 3 gạch + Logo */}
        <div className="flex lg:hidden flex-1 justify-start items-center gap-2 sm:gap-4">
          <button
            type="button"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-controls="mobile-navigation"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? 'Đóng menu điều hướng' : 'Mở menu điều hướng'}
            className="p-1 text-gray-600 hover:text-orange-400 transition-colors"
          >
            {isMenuOpen ? <FaTimes className="text-[20px]" /> : <FaBars className="text-[20px]" />}
          </button>
          <div className="scale-75 origin-left">
            <Logo />
          </div>
        </div>

        {/* Desktop: Navbar Trái */}
        <div className="hidden lg:flex flex-1 justify-start">
          <Navbar className="flex items-center gap-6" />
        </div>

        {/* --- Ở GIỮA --- */}
        {/* Desktop: Logo giữa (Trên Mobile nó bị ẩn đi vì đã dời sang trái) */}
        <div className="hidden lg:flex flex-1 justify-center">
          <Logo />
        </div>

        {/* --- BÊN PHẢI --- */}
        {/* Cả Mobile & Desktop đều xài chung (Đã xử lý ẩn chữ bên trong file HeaderActions) */}
        <div className="flex flex-1 justify-end">
          <HeaderActions />
        </div>

      </header>

      {/* MENU XỔ XUỐNG DÀNH CHO MOBILE */}
      {isMenuOpen && (
        <div id="mobile-navigation" className="lg:hidden w-full max-w-6xl mt-2 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="p-4 px-6 flex flex-col">
            <Navbar className="flex flex-col" />
          </div>
        </div>
      )}

    </div>
  );
};