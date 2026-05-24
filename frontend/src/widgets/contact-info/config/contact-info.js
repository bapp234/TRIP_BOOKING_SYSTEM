import { FaClock, FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';

export const CONTACT_METHODS = [
  {
    id: 'hotline',
    title: 'Hotline',
    value: '1900 0000',
    description: 'Hỗ trợ đặt vé và đổi lịch',
    href: 'tel:19000000',
    icon: FaPhoneAlt,
  },
  {
    id: 'email',
    title: 'Email',
    value: 'support@tripbooking.com',
    description: 'Phản hồi trong 24 giờ',
    href: 'mailto:support@tripbooking.com',
    icon: FaEnvelope,
  },
  {
    id: 'office',
    title: 'Văn phòng',
    value: 'TP. Hồ Chí Minh, Việt Nam',
    description: 'Thông tin mô phỏng cho dự án',
    icon: FaMapMarkerAlt,
  },
  {
    id: 'hours',
    title: 'Thời gian hỗ trợ',
    value: '07:00 - 22:00 hằng ngày',
    description: 'Tư vấn hành trình và xử lý yêu cầu',
    icon: FaClock,
  },
];
