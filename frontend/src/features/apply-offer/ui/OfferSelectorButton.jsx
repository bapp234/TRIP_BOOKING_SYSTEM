import { MdLocalOffer } from 'react-icons/md';

/**
 * OfferSelectorButton - Button to open offer selection modal
 * Shows current offer code if selected
 */
export const OfferSelectorButton = ({
  isOfferApplied,
  selectedOfferCode,
  onOpenModal,
}) => {
  return (
    <button
      type="button"
      onClick={onOpenModal}
      className="w-full flex items-center justify-between px-3 py-2.5 bg-white border-2 border-dashed border-amber-300 rounded-lg hover:bg-amber-50 transition-colors"
      aria-label={
        isOfferApplied
          ? `Đã áp dụng mã ${selectedOfferCode}. Nhấn để thay đổi`
          : 'Nhấn để chọn mã ưu đãi'
      }
    >
      <div className="flex items-center gap-2 min-w-0">
        <MdLocalOffer className="w-4 h-4 text-amber-600 flex-shrink-0" />
        <span className="text-sm font-medium text-zinc-900">
          {isOfferApplied ? `Mã: ${selectedOfferCode}` : 'Chọn ưu đãi'}
        </span>
      </div>
      <span className="text-xs text-amber-600 flex-shrink-0">
        {isOfferApplied ? '✓' : '+'}
      </span>
    </button>
  );
};
