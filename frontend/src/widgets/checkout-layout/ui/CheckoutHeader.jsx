export const CheckoutHeader = ({ onBack }) => (
  <header className="mb-6 sm:mb-8">
    <button
      type="button"
      onClick={onBack}
      className="mb-4 inline-flex items-center gap-2 rounded-lg px-1 py-1 text-sm font-semibold text-emerald-700 transition-colors hover:text-emerald-800 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
    >
      <span aria-hidden="true">←</span>
      Quay lại
    </button>
    <div>
      <h1 className="text-2xl font-bold tracking-tight text-zinc-950 sm:text-3xl">
        Hoàn tất đặt vé
      </h1>
      <p className="mt-2 text-sm text-zinc-600 sm:text-base">
        Kiểm tra thông tin và chọn phương thức thanh toán
      </p>
    </div>
  </header>
);
