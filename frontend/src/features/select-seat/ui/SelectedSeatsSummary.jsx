import { useState } from 'react';
import {
    OfferSelectorButton,
    OfferModal,
    useOfferSelection,
} from '@/features/apply-offer';
import { formatPrice } from '@/shared/utils/formatPrice';

/**
 * SelectedSeatsSummary - Shows selected seats, offers, and total price
 * Integrates offer selection with discount calculation
 */
export const SelectedSeatsSummary = ({ selectedSeats, totalPrice, seatCount }) => {
    const [isOfferModalOpen, setIsOfferModalOpen] = useState(false);

    const {
        selectedOffer,
        discountAmount,
        finalPrice,
        applyOfferByCode,
        removeOffer,
        isOfferApplied,
    } = useOfferSelection(totalPrice);

    const handleSelectOffer = (codeOrOffer) => {
        // If it's a string (code from input), use applyOfferByCode
        if (typeof codeOrOffer === 'string') {
            return applyOfferByCode(codeOrOffer);
        }
        // If it's an object (offer object), use the code
        return applyOfferByCode(codeOrOffer.code);
    };

    return (
        <aside className="bg-zinc-50 rounded-xl p-4 border border-zinc-200">
            <h4 className="font-semibold text-sm text-zinc-900 mb-3">Tóm tắt đơn hàng</h4>

            {seatCount > 0 ? (
                <div className="space-y-3">
                    {/* Selected Seats */}
                    <div className="space-y-2">
                        <p className="text-xs text-zinc-600">Ghế đã chọn:</p>
                        <div className="flex flex-wrap gap-2">
                            {selectedSeats.map((seat) => (
                                <span
                                    key={seat.id}
                                    className="px-2.5 py-1 bg-emerald-100 text-emerald-700 rounded-lg text-xs font-medium border border-emerald-200"
                                >
                                    {seat.id.replace('seat-', '')}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* Offer Selector */}
                    <div className="pt-2">
                        <OfferSelectorButton
                            isOfferApplied={isOfferApplied}
                            selectedOfferCode={selectedOffer?.code}
                            onOpenModal={() => setIsOfferModalOpen(true)}
                        />
                    </div>

                    {/* Price Breakdown */}
                    <div className="border-t border-zinc-200 pt-3 space-y-1.5">
                        <div className="flex justify-between items-center">
                            <span className="text-xs text-zinc-600">Số lượng:</span>
                            <span className="font-medium text-sm text-zinc-900">{seatCount} ghế</span>
                        </div>

                        <div className="flex justify-between items-center">
                            <span className="text-xs text-zinc-600">Giá gốc:</span>
                            <span className="text-sm text-zinc-900">{formatPrice(totalPrice)}</span>
                        </div>

                        {/* Discount Section */}
                        {isOfferApplied && discountAmount > 0 && (
                            <>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center gap-1">
                                        <span className="text-xs text-emerald-600">Mã: {selectedOffer?.code}</span>
                                        <button
                                            type="button"
                                            onClick={removeOffer}
                                            className="text-xs text-zinc-400 hover:text-red-600 transition-colors"
                                            aria-label={`Xóa mã ưu đãi ${selectedOffer?.code}`}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                    <span className="text-sm font-medium text-emerald-600">
                                        -{formatPrice(discountAmount)}
                                    </span>
                                </div>
                                <div className="bg-emerald-50 rounded border border-emerald-200 p-2">
                                    <div className="flex justify-between items-center">
                                        <span className="text-xs font-semibold text-emerald-900">Thành tiền:</span>
                                        <span className="text-lg font-bold text-emerald-600">{formatPrice(finalPrice)}</span>
                                    </div>
                                </div>
                            </>
                        )}

                        {/* Regular Total (no discount) */}
                        {!isOfferApplied && (
                            <div className="flex justify-between items-center pt-1.5">
                                <span className="text-xs font-semibold text-zinc-600">Thành tiền:</span>
                                <span className="font-bold text-lg text-emerald-600">{formatPrice(totalPrice)}</span>
                            </div>
                        )}
                    </div>
                </div>
            ) : (
                <p className="text-xs text-zinc-500 italic">Chọn ghế để tiếp tục</p>
            )}

            {/* Offer Modal */}
            <OfferModal
                isOpen={isOfferModalOpen}
                onClose={() => setIsOfferModalOpen(false)}
                onSelectOffer={handleSelectOffer}
                totalPrice={totalPrice}
            />
        </aside>
    );
};
