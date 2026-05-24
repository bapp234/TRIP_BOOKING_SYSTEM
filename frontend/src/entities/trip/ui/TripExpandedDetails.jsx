import { MdLocationOn } from 'react-icons/md';
import { FaWifi, FaUsb } from 'react-icons/fa';
import { FaDroplet, FaRegSnowflake } from 'react-icons/fa6';
import { RiDiscountPercentFill } from 'react-icons/ri';

/**
 * TripExpandedDetails - Trip details shown when card is expanded
 * Displays: amenities, policy, offerings
 */
export const TripExpandedDetails = ({ trip }) => {
  const amenities = [
    { icon: <FaWifi />, name: 'WiFi', available: true },
    { icon: <FaDroplet />, name: 'Nước uống', available: true },
    { icon: <FaRegSnowflake />, name: 'Điều hòa', available: true },
    { icon: <FaUsb />, name: 'Sạc USB', available: true },
  ];

  return (
    <section className="space-y-5 border-t border-zinc-200 py-4">
      {/* Pickup & Dropoff Details */}
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-zinc-900">Điểm đón/trả</h4>
        <div className="grid gap-2.5 text-sm sm:grid-cols-2">
          <div className="flex min-w-0 items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <MdLocationOn className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-xs text-zinc-500">Điểm đón</p>
              <p className="break-words font-medium text-zinc-900">{trip.pickupPoint}</p>
            </div>
          </div>
          <div className="flex min-w-0 items-start gap-3 rounded-xl border border-zinc-200 bg-zinc-50 p-3">
            <MdLocationOn className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
            <div className="min-w-0">
              <p className="text-xs text-zinc-500">Điểm trả</p>
              <p className="break-words font-medium text-zinc-900">{trip.dropoffPoint}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Amenities */}
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-zinc-900">Tiện ích</h4>
        <ul className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {amenities.map((item) => (
            <li
              key={item.name}
              className="flex min-w-0 items-center gap-2.5 rounded-lg border border-zinc-200 bg-zinc-50 px-3 py-2.5"
            >
              <span className="shrink-0 text-lg text-zinc-900">{item.icon}</span>
              <span className="min-w-0 truncate text-sm text-zinc-900">{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Cancellation Policy */}
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-zinc-900">Chính sách hủy</h4>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Miễn phí hủy hoàn toàn trước 24 giờ khởi hành. Sau 24 giờ sẽ mất 10% giá vé.
        </p>
      </div>

      {/* Offers */}
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-zinc-900">Ưu đãi từ nhà xe</h4>
        <div className="flex items-start gap-3 rounded-lg border border-orange-200 bg-orange-50 p-3">
          <RiDiscountPercentFill className="mt-0.5 h-5 w-5 shrink-0 text-orange-500" />
          <p className="min-w-0 text-sm font-medium leading-5 text-orange-900">Giảm 5% cho khách hàng mới</p>
        </div>
      </div>

      {/* Bus Description */}
      <div className="space-y-3">
        <h4 className="font-semibold text-sm text-zinc-900">Mô tả chuyến xe</h4>
        <p className="text-sm text-zinc-600 leading-relaxed">
          Xe {trip.busType} {trip.totalSeats} chỗ, đi từ {trip.from} đến {trip.to}. Thời gian di chuyển:{' '}
          <strong>{trip.duration}</strong>. Khởi hành lúc <strong>{trip.departureTime}</strong>, dự kiến đến lúc{' '}
          <strong>{trip.arrivalTime}</strong>.
        </p>
      </div>
    </section>
  );
};
