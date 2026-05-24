import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { BiSupport } from "react-icons/bi";
import { AuthModal, LogoutConfirmModal, UserMenu, useAuthStore } from '@/features/auth';


export const HeaderActions = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout, user } = useAuthStore();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [isLogoutModalOpen, setIsLogoutModalOpen] = useState(false);

  const handleLogout = () => {
    logout();
    setIsLogoutModalOpen(false);
    setIsUserMenuOpen(false);
    navigate('/');
  };

  return (
    <div className="relative flex items-center gap-3 text-sm font-bold lg:gap-5">

      {/* Nút Hỗ trợ */}
      <a href="/lien-he" aria-label="Hỗ trợ" className=" flex items-center justify-center gap-2 text-gray-600 hover:text-orange-400 transition-colors p-2 lg:p-0">
        <BiSupport className="text-2xl lg:text-lg" /> {/* Chỉ hiện Icon trên Mobile */}
        <span className="hidden lg:inline">Liên hệ</span> {/* Chỉ hiện Chữ trên Desktop */}
      </a>

      {isAuthenticated ? (
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsUserMenuOpen((current) => !current)}
            aria-label="Mở menu tài khoản"
            aria-expanded={isUserMenuOpen}
            aria-haspopup="menu"
            className="flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-green-400 font-bold text-black shadow-sm transition-colors hover:bg-green-500 lg:h-auto lg:w-auto lg:px-5 lg:py-2"
          >
            <FaUserCircle className="text-2xl lg:text-lg" />
            <span className="hidden max-w-28 truncate lg:inline">{user?.name || 'Tài khoản'}</span>
          </button>

          {isUserMenuOpen && (
            <UserMenu
              onClose={() => setIsUserMenuOpen(false)}
              onRequestLogout={() => {
                setIsUserMenuOpen(false);
                setIsLogoutModalOpen(true);
              }}
            />
          )}
        </div>
      ) : (
        <button
          type="button"
          aria-label="Đăng nhập"
          onClick={() => setIsAuthModalOpen(true)}
          className="flex h-10 w-10 items-center justify-center gap-2 rounded-full bg-green-400 font-bold text-black shadow-sm transition-colors hover:bg-green-500 lg:h-auto lg:w-auto lg:px-5 lg:py-2"
        >
          <FaUserCircle className="text-2xl lg:text-lg" />
          <span className="hidden lg:inline">Đăng nhập</span>
        </button>
      )}

      {isAuthModalOpen && <AuthModal onClose={() => setIsAuthModalOpen(false)} />}
      {isLogoutModalOpen && (
        <LogoutConfirmModal onCancel={() => setIsLogoutModalOpen(false)} onConfirm={handleLogout} />
      )}

    </div>
  );
};
