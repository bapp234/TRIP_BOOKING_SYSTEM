export const LogoutConfirmModal = ({ onCancel, onConfirm }) => (
  <div
    className="fixed inset-0 z-[110] flex items-center justify-center bg-zinc-950/60 px-4 py-6"
    role="dialog"
    aria-modal="true"
    aria-labelledby="logout-confirm-title"
    onMouseDown={(event) => {
      if (event.target === event.currentTarget) onCancel();
    }}
  >
    <div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-xl">
      <h2 id="logout-confirm-title" className="text-2xl font-bold text-zinc-950">
        Đăng xuất tài khoản?
      </h2>
      <p className="mt-3 text-sm leading-6 text-zinc-600">
        Bạn sẽ cần đăng nhập lại để tiếp tục đặt vé và quản lý chuyến đi.
      </p>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="rounded-xl border border-zinc-300 bg-white px-5 py-3 text-sm font-bold text-zinc-800 transition hover:border-zinc-400 hover:bg-zinc-50 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
        >
          Huỷ
        </button>
        <button
          type="button"
          onClick={onConfirm}
          className="rounded-xl bg-rose-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-rose-600 focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2"
        >
          Đăng xuất
        </button>
      </div>
    </div>
  </div>
);
