const buttonStateMap = {
  idle: {
    label: 'Lấy mã',
    disabled: false,
  },
  loading: {
    label: 'Đang kiểm tra...',
    disabled: true,
  },
  collected: {
    label: 'Đã nhận mã',
    disabled: true,
  },
  unavailable: {
    label: 'Không đủ điều kiện',
    disabled: true,
  },
};

const accentButtonClassMap = {
  emerald: {
    idle: 'bg-emerald-600 text-white hover:bg-emerald-700 hover:shadow-md',
    loading: 'cursor-wait bg-emerald-100 text-emerald-800',
    collected: 'cursor-not-allowed bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200',
  },
  orange: {
    idle: 'bg-orange-600 text-white hover:bg-orange-700 hover:shadow-md',
    loading: 'cursor-wait bg-orange-100 text-orange-800',
    collected: 'cursor-not-allowed bg-orange-50 text-orange-700 ring-1 ring-orange-200',
  },
  amber: {
    idle: 'bg-amber-600 text-white hover:bg-amber-700 hover:shadow-md',
    loading: 'cursor-wait bg-amber-100 text-amber-800',
    collected: 'cursor-not-allowed bg-amber-50 text-amber-700 ring-1 ring-amber-200',
  },
  rose: {
    idle: 'bg-rose-600 text-white hover:bg-rose-700 hover:shadow-md',
    loading: 'cursor-wait bg-rose-100 text-rose-800',
    collected: 'cursor-not-allowed bg-rose-50 text-rose-700 ring-1 ring-rose-200',
  },
  blue: {
    idle: 'bg-blue-600 text-white hover:bg-blue-700 hover:shadow-md',
    loading: 'cursor-wait bg-blue-100 text-blue-800',
    collected: 'cursor-not-allowed bg-blue-50 text-blue-700 ring-1 ring-blue-200',
  },
  teal: {
    idle: 'bg-teal-600 text-white hover:bg-teal-700 hover:shadow-md',
    loading: 'cursor-wait bg-teal-100 text-teal-800',
    collected: 'cursor-not-allowed bg-teal-50 text-teal-700 ring-1 ring-teal-200',
  },
};

const unavailableClassName =
  'cursor-not-allowed bg-rose-50 text-rose-700 ring-1 ring-rose-200';

export const CollectPromotionButton = ({ promo, status = 'idle', onCollect }) => {
  const buttonState = buttonStateMap[status] || buttonStateMap.idle;
  const isLoading = status === 'loading';

  const accentColor = promo?.accentColor || 'emerald';
  const accentClasses = accentButtonClassMap[accentColor] || accentButtonClassMap.emerald;

  const buttonClassName =
    status === 'unavailable'
      ? unavailableClassName
      : accentClasses[status] || accentClasses.idle;

  return (
    <button
      type="button"
      onClick={() => onCollect(promo)}
      disabled={buttonState.disabled}
      aria-busy={isLoading}
      className={`w-full rounded-lg px-4 py-2.5 text-center font-semibold transition-all duration-300 disabled:opacity-100 ${buttonClassName}`}
    >
      {buttonState.label}
    </button>
  );
};