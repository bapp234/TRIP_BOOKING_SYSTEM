import { useState } from 'react';
import { MdClose, MdCheck } from 'react-icons/md';
import { MOCK_OFFERS, isOfferEligible } from '../config';

/**
 * OfferModal - Modal for selecting offers/vouchers
 * Features: code input, available offers list, eligibility checking
 */
export const OfferModal = ({
  isOpen,
  onClose,
  onSelectOffer,
  totalPrice,
}) => {
  const [inputCode, setInputCode] = useState('');
  const [inputError, setInputError] = useState('');

  const handleApplyCode = () => {
    const trimmedCode = inputCode.trim();
    if (!trimmedCode) {
      setInputError('Vui lòng nhập mã ưu đãi');
      return;
    }

    const result = onSelectOffer(trimmedCode);
    if (result.success) {
      setInputCode('');
      setInputError('');
      onClose();
    } else {
      setInputError(result.message || 'Mã không hợp lệ');
    }
  };

  const handleSelectOffer = (offer) => {
    const result = onSelectOffer(offer.code);
    if (result.success) {
      setInputCode('');
      setInputError('');
      onClose();
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleApplyCode();
    }
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/30 z-40"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-4"
        onClick={(e) => e.target === e.currentTarget && onClose()}
      >
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="offer-modal-title"
          className="w-full sm:max-w-md bg-white rounded-t-2xl sm:rounded-2xl shadow-xl max-h-[90vh] overflow-y-auto"
        >
          {/* Header */}
          <div className="sticky top-0 bg-white border-b border-zinc-200 px-6 py-4 flex items-center justify-between">
            <h2 id="offer-modal-title" className="text-lg font-semibold text-zinc-900">
              Chọn ưu đãi
            </h2>
            <button
              type="button"
              onClick={onClose}
              className="p-1.5 hover:bg-zinc-100 rounded-lg transition-colors"
              aria-label="Đóng"
            >
              <MdClose className="w-5 h-5 text-zinc-600" />
            </button>
          </div>

          {/* Content */}
          <div className="px-6 py-4 space-y-4">
            {/* Code Input Section */}
            <div className="space-y-2">
              <label htmlFor="offer-code" className="text-sm font-medium text-zinc-900">
                Nhập mã ưu đãi
              </label>
              <div className="flex gap-2">
                <input
                  id="offer-code"
                  type="text"
                  value={inputCode}
                  onChange={(e) => {
                    setInputCode(e.target.value.toUpperCase());
                    setInputError('');
                  }}
                  onKeyPress={handleKeyPress}
                  placeholder="VD: SUMMER25"
                  className={`flex-1 px-3 py-2 border-2 rounded-lg font-medium transition-colors ${
                    inputError
                      ? 'border-red-300 bg-red-50 text-red-900'
                      : 'border-zinc-300 bg-white text-zinc-900'
                  }`}
                  aria-invalid={!!inputError}
                  aria-describedby={inputError ? 'offer-error' : undefined}
                />
                <button
                  type="button"
                  onClick={handleApplyCode}
                  className="px-4 py-2 bg-emerald-500 text-white font-semibold rounded-lg hover:bg-emerald-600 transition-colors"
                >
                  Áp dụng
                </button>
              </div>
              {inputError && (
                <p id="offer-error" className="text-xs text-red-600 font-medium">
                  ✗ {inputError}
                </p>
              )}
            </div>

            {/* Divider */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-zinc-200" />
              <span className="text-xs text-zinc-500">HOẶC CHỌN TỪ DANH SÁCH</span>
              <div className="flex-1 h-px bg-zinc-200" />
            </div>

            {/* Offers List */}
            <div className="space-y-2">
              {MOCK_OFFERS.map((offer) => {
                const isEligible = isOfferEligible(offer, totalPrice);
                let discount = 0;
                if (isEligible) {
                  if (offer.discountType === 'percent') {
                    discount = (totalPrice * offer.discountValue) / 100;
                  } else {
                    discount = offer.discountValue;
                  }
                  if (offer.maxDiscount !== null && discount > offer.maxDiscount) {
                    discount = offer.maxDiscount;
                  }
                }

                return (
                  <button
                    key={offer.id}
                    type="button"
                    onClick={() => isEligible && handleSelectOffer(offer)}
                    disabled={!isEligible}
                    className={`w-full p-3 rounded-lg border-2 transition-all text-left ${
                      isEligible
                        ? 'border-emerald-300 bg-emerald-50 hover:bg-emerald-100 cursor-pointer'
                        : 'border-red-200 bg-red-50 opacity-60 cursor-not-allowed'
                    }`}
                    aria-disabled={!isEligible}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2">
                          <span className={`text-sm font-semibold ${isEligible ? 'text-emerald-700' : 'text-red-600'}`}>
                            {offer.code}
                          </span>
                          {isEligible && <MdCheck className="w-4 h-4 text-emerald-600 flex-shrink-0" />}
                        </div>
                        <p className={`text-xs mt-1 ${isEligible ? 'text-emerald-700' : 'text-red-600'}`}>
                          {offer.title}
                        </p>
                        <p className={`text-xs mt-1 ${isEligible ? 'text-emerald-600' : 'text-red-500'}`}>
                          {offer.description}
                        </p>
                        {!isEligible && offer.unavailableReason && (
                          <p className="text-xs mt-1.5 text-red-600 font-medium">
                            Lý do: {offer.unavailableReason}
                          </p>
                        )}
                        {isEligible && discount > 0 && (
                          <p className="text-xs mt-1.5 font-semibold text-emerald-700">
                            Giảm: {discount.toLocaleString('vi-VN')}đ
                          </p>
                        )}
                      </div>
                      {isEligible && (
                        <div className="ml-2 flex-shrink-0 p-1.5 bg-emerald-200 rounded-full">
                          <MdCheck className="w-4 h-4 text-emerald-700" />
                        </div>
                      )}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-zinc-200 px-6 py-3 bg-zinc-50">
            <button
              type="button"
              onClick={onClose}
              className="w-full px-4 py-2 text-zinc-900 font-medium hover:bg-orange-500 rounded-lg transition-colors"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
