import { Link } from 'react-router-dom';

export const UserMenu = ({ onClose, onRequestLogout }) => (
  <div className="absolute right-0 top-full mt-3 w-52 rounded-2xl border border-zinc-200 bg-white p-2 text-sm shadow-xl">
    <Link
      to="/ca-nhan"
      onClick={onClose}
      className="block rounded-xl px-4 py-3 font-semibold text-zinc-700 transition hover:bg-emerald-50 hover:text-emerald-700"
    >
      Cá nhân
    </Link>
    <button
      type="button"
      onClick={onRequestLogout}
      className="w-full rounded-xl px-4 py-3 text-left font-semibold text-zinc-700 transition hover:bg-rose-50 hover:text-rose-700"
    >
      Đăng xuất
    </button>
  </div>
);
