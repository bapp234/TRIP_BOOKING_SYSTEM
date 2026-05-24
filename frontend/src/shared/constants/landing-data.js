/**
 * Landing Page Data & Constants
 * Contains all static data for landing page sections
 */

// Hero Search Banner Config
export const HERO_SEARCH_BANNER = {
  imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=1400&q=80',
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  overlayClassName: 'bg-gradient-to-b from-black/50 via-black/60 to-black/70',
  glowClassName: 'absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 rounded-full bg-emerald-500/10 blur-3xl',
  titlePrefix: 'Hành trình ',
  titleAccent: 'linh hoạt',
  titleSuffix: '. Tiết kiệm tối đa',
  description: 'Tìm và đặt vé xe khách trên các tuyến đường toàn quốc. Thanh toán an toàn, lịch trình rõ ràng và hỗ trợ 24/7.',
};

// Popular Routes Data
export const POPULAR_ROUTES = [
  {
    id: 'featured-hcm-hanoi',
    from: 'TP. Hồ Chí Minh',
    to: 'Hà Nội',
    price: '350,000₫',
    trips: '15 chuyến',
    duration: '22 giờ 30 phút',
    featured: true,
    description: 'Đặt vé xe khách tuyến TP. Hồ Chí Minh đi Hà Nội với nhiều khung giờ và hãng xe uy tín. Giá cạnh tranh từ Phương Trang, Thành Bưởi, Sao Việt, phù hợp cho cả công tác và du lịch.',
  },
  {
    id: 'hcm-phan-thiet',
    from: 'TP. Hồ Chí Minh',
    to: 'Phan Thiết',
    price: '120,000₫',
    trips: '8 chuyến',
    duration: '4 giờ 30 phút',
    description: 'Đặt vé đi biển Phan Thiết nhanh chóng, ghế thoải mái, có WC và lạnh đầu tiên.',
  },
  {
    id: 'hanoi-haiphong',
    from: 'Hà Nội',
    to: 'Hải Phòng',
    price: '75,000₫',
    trips: '12 chuyến',
    duration: '2 giờ 30 phút',
    description: 'Chuyến đi gần, giá rẻ, nhiều lựa chọn giờ đi. Hoàn hảo cho chuyến công tác hoặc du lịch ngắn.',
  },
  {
    id: 'hcm-nhatrang',
    from: 'TP. Hồ Chí Minh',
    to: 'Nha Trang',
    price: '200,000₫',
    trips: '10 chuyến',
    duration: '8 giờ 45 phút',
    description: 'Xu hướng hot cho du lịch Nha Trang. Xe ngủ 34 ghế, dịch vụ xịn, anh lái chuyên nghiệp.',
  },
  {
    id: 'hanoi-sapa',
    from: 'Hà Nội',
    to: 'Sa Pa',
    price: '150,000₫',
    trips: '5 chuyến',
    duration: '5 giờ 00 phút',
    description: 'Đặt vé tập thể du lịch Sa Pa. Chiếu phim, cảnh đẹp, hướng dẫn viên chu đáo. Nhận booking nhóm chiết khấu.',
  },
];

// Trust Stats Data
export const TRUST_STATS = [
  {
    id: 'customers',
    label: 'Khách hàng',
    value: '1.2M+',
    description: 'tin tưởng chúng tôi',
  },
  {
    id: 'routes',
    label: 'Tuyến đường',
    value: '450+',
    description: 'khắp toàn quốc',
  },
  {
    id: 'operators',
    label: 'Hãng xe',
    value: '200+',
    description: 'đối tác uy tín',
  },
  {
    id: 'support',
    label: 'Hỗ trợ',
    value: '24/7',
    description: 'sẵn sàng giúp đỡ',
  },
];

// Why Choose Us Data
export const WHY_CHOOSE_US = [
  {
    id: 'payment',
    title: 'Thanh toán an toàn',
    description: 'Chúng tôi bảo vệ mọi giao dịch của bạn với công nghệ mã hóa SSL 256-bit. Hỗ trợ nhiều phương thức thanh toán: thẻ tín dụng, ví điện tử, chuyển khoản ngân hàng.',
    icon: 'FaLock',
  },
  {
    id: 'speed',
    title: 'Đặt vé nhanh hơn',
    description: 'Tìm được chuyến phù hợp, chọn ghế, thanh toán - hoàn tất trong 2-3 phút. Mã xác nhận gửi ngay qua email và SMS.',
    icon: 'FaRocket',
  },
  {
    id: 'support',
    title: 'Hỗ trợ khi cần',
    description: 'Đội tư vấn viên phục vụ 24/7. Giải quyết vấn đề đổi lịch, hoàn tiền trong vòng 2 giờ. Chat trực tuyến hoặc hotline nhanh.',
    icon: 'FaHeadset',
  },
  {
    id: 'variety',
    title: 'So sánh giá tốt nhất',
    description: 'Hơn 200 hãng xe đối tác, hàng ngàn chuyến mỗi ngày. So sánh giá, ghế, giờ đi - chọn thế nào là tốt nhất cho bạn.',
    icon: 'FaBus',
  },
];

// Why Choose Us - Intro Text
export const WHY_CHOOSE_US_INTRO = `Hơn một triệu hành khách mỗi năm tin tưởng TripBooking để so sánh giá, 
đặt vé xe khách nhanh chóng. Chúng tôi hiểu nhu cầu của bạn - muốn tìm chuyến xe tốt nhất với giá cực rẻ, 
không khí an toàn, lịch trình đúng giờ.`;

// Bus Operators Data
export const BUS_OPERATORS = [
  {
    id: 'op1',
    name: 'Thành Bưởi',
    logo: 'TB',
    image: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&w=400&q=80',
    description: 'Nhà xe chuyên tuyến TP.HCM - Hà Nội với 15+ năm kinh nghiệm.',
    rating: 4.8,
    trips: 120,
    accentColor: 'emerald',
  },
  {
    id: 'op2',
    name: 'Phương Trang',
    logo: 'PT',
    image: 'https://images.unsplash.com/photo-1552820728-8ac41f1ce891?auto=format&fit=crop&w=400&q=80',
    description: 'Hãng xe uy tín phục vụ toàn quốc với xe mới và an toàn.',
    rating: 4.9,
    trips: 145,
    accentColor: 'amber',
  },
  {
    id: 'op3',
    name: 'Sao Việt',
    logo: 'SV',
    image: 'https://images.unsplash.com/photo-1567818735868-e71b99932e29?auto=format&fit=crop&w=400&q=80',
    description: 'Chuyên các tuyến miền Bắc với dịch vụ hạng sang.',
    rating: 4.7,
    trips: 95,
    accentColor: 'emerald',
  },
  {
    id: 'op4',
    name: 'Nam Cường',
    logo: 'NC',
    image: 'https://images.unsplash.com/photo-1464207687429-7505649dae38?auto=format&fit=crop&w=400&q=80',
    description: 'Nhà xe hiện đại với xe khách giường nằm 24 chỗ.',
    rating: 4.6,
    trips: 78,
    accentColor: 'orange',
  },
  {
    id: 'op5',
    name: 'Hoa Anh Đào',
    logo: 'HAD',
    image: 'https://images.unsplash.com/photo-1533573528-f9dbd73c5d42?auto=format&fit=crop&w=400&q=80',
    description: 'Dịch vụ xe du lịch cao cấp và tour du lịch trọn gói.',
    rating: 4.8,
    trips: 65,
    accentColor: 'rose',
  },
  {
    id: 'op6',
    name: 'Galaxy',
    logo: 'GX',
    image: 'https://images.unsplash.com/photo-1464219414143-9c9d0a4cc91d?auto=format&fit=crop&w=400&q=80',
    description: 'Nhà xe premium với tiện nghi cao cấp và hỗ trợ 24/7.',
    rating: 4.9,
    trips: 110,
    accentColor: 'blue',
  },
];

// Promotions Data
export const PROMOTIONS = [
  {
    id: 'promo1',
    title: 'Giảm 20% cho khách hàng mới',
    description: 'Đặt vé lần đầu, tiết kiệm ngay. Ưu đãi áp dụng cho nhiều tuyến đường xe khách toàn quốc.',
    discount: '20%',
    code: 'WELCOME20',
    validity: 'Đến 31/12/2026',
    badge: 'HOT',
    accentColor: 'emerald',
  },
  {
    id: 'promo2',
    title: 'Miễn phí đổi lịch',
    description: 'Đổi chuyến tùy ý trong 24 giờ trước hành trình. Không phí thêm, không rắc rối.',
    code: 'FLEXBOOK',
    validity: 'Áp dụng liên tục',
    badge: 'CLASSIC',
    accentColor: 'orange',
  },
  {
    id: 'promo3',
    title: 'Giảm 15% chuyến buổi sáng',
    description: 'Đi sáng sớm, tiết kiệm hơn. Áp dụng cho các chuyến khởi hành trong khung giờ 5h-9h.',
    discount: '15%',
    code: 'MORNING15',
    validity: 'Mỗi ngày',
    badge: 'NEW',
    accentColor: 'amber',
  },
  {
    id: 'promo4',
    title: 'Giảm 10% khi đặt 3+ vé',
    description: 'Đi nhóm tiết kiệm. Đặt 3 vé trở lên, tự động giảm 10% toàn bộ đơn.',
    discount: '10%',
    code: 'GROUP10',
    validity: 'Áp dụng liên tục',
    badge: null,
    accentColor: 'rose',
  },
  {
    id: 'promo5',
    title: 'Quà tặng voucher khách sạn',
    description: 'Đặt vé, nhận voucher giảm 20% phòng 3+ sao. Trị giá lên đến 500,000₫.',
    bonus: 'Voucher 500K',
    code: 'STAYPLUS',
    validity: 'Cho 500 khách hàng đầu',
    badge: 'LIMITED',
    accentColor: 'blue',
  },
  {
    id: 'promo6',
    title: 'Hoàn tiền 5% cho hội viên VIP',
    description: 'Mỗi vé đặt được 5% hoàn lại TripCredit. Dùng cho lần tiếp theo hoặc đổi tiền mặt.',
    bonus: 'Cashback 5%',
    code: 'VIPCLUB',
    validity: 'Hội viên VIP',
    badge: null,
    accentColor: 'teal',
  },
];

// FAQ Data
export const FAQ_ITEMS = [
  {
    id: 'faq1',
    question: 'Làm thế nào để đặt vé xe trên TripBooking?',
    answer: 'Đơn giản chỉ với 3 bước: (1) Chọn điểm đi, điểm đến, ngày đi, số hành khách, (2) So sánh các chuyến xe khác nhau về giá, giờ, hãng xe, (3) Chọn ghế, nhập thông tin hành khách, thanh toán. Bạn sẽ nhận mã xác nhận trong vòng 5 phút.',
  },
  {
    id: 'faq2',
    question: 'Tôi có thể đổi hoặc hủy vé sau khi đã đặt không?',
    answer: 'Có, bạn có thể đổi lịch hoặc hủy vé miễn phí nếu hủy trước 24 giờ. Nếu hủy trong vòng 12 giờ trước chuyến, bạn sẽ nhận 50% tiền hoàn lại. Sau 3 giờ trước chuyến thì không thể hủy. Liên hệ hỗ trợ 24/7 để được hỗ trợ đổi lịch nhanh chóng.',
  },
  {
    id: 'faq3',
    question: 'Những phương thức thanh toán nào được chấp nhận?',
    answer: 'Chúng tôi chấp nhận nhiều phương thức: thẻ tín dụng/ghi nợ (VISA, Mastercard), ví điện tử (Momo, ZaloPay), chuyển khoản ngân hàng, và thanh toán khi lên xe. Tất cả giao dịch được bảo mật 100% với SSL encryption.',
  },
  {
    id: 'faq4',
    question: 'Tôi có cần tạo tài khoản để đặt vé không?',
    answer: 'Không, bạn có thể đặt vé mà không cần tài khoản. Chỉ cần nhập số điện thoại và email. Tuy nhiên, tạo tài khoản sẽ giúp bạn quản lý các đơn đặt vé cũ, lưu thông tin hành khách, và nhận các ưu đãi độc quyền.',
  },
];

// Footer Data
export const FOOTER_LINKS = {
  about: [
    { label: 'Về chúng tôi', href: '/about' },
    { label: 'Cơ hội việc làm', href: '/careers' },
    { label: 'Blog', href: '/blog' },
  ],
  support: [
    { label: 'Trung tâm hỗ trợ', href: '/support' },
    { label: 'Liên hệ chúng tôi', href: '/lien-he' },
    { label: 'FAQ', href: '/faq' },
  ],
  legal: [
    { label: 'Điều khoản sử dụng', href: '/terms' },
    { label: 'Chính sách riêng tư', href: '/privacy' },
    { label: 'Chính sách cookie', href: '/cookies' },
  ],
  social: [
    { label: 'Facebook', href: 'https://facebook.com/tripbooking' },
    { label: 'Twitter', href: 'https://twitter.com/tripbooking' },
    { label: 'Instagram', href: 'https://instagram.com/tripbooking' },
  ],
};
