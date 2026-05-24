# Modern Scroll Effects & Animations Guide

Hướng dẫn sử dụng hiệu ứng cuộn hiện đại cho trang web TripBooking.

## 🎨 Tính năng

### 1. **Ẩn thanh Scrollbar**
- Scrollbar đã bị ẩn trên tất cả trình duyệt (Chrome, Firefox, Safari, Edge)
- Vẫn giữ nguyên chức năng cuộn smooth
- CSS được thêm vào `index.css`

```css
::-webkit-scrollbar { width: 8px; display: none; }
scrollbar-width: none; /* Firefox */
```

### 2. **Scroll Animation Hooks**

#### `useScrollAnimation(options)`
- Trigger animation khi element vào viewport
- Sử dụng Intersection Observer API

**Cách sử dụng:**
```jsx
const { ref, isVisible } = useScrollAnimation({ 
  threshold: 0.1,  // Trigger khi 10% element visible
  once: true       // Chỉ trigger một lần
});

return (
  <div ref={ref} className={isVisible ? 'fade-in-up' : ''}>
    Content
  </div>
);
```

#### `useParallax(speed)`
- Tạo hiệu ứng parallax khi cuộn
- `speed`: 0.5 = bình thường, cao hơn = nhanh hơn

**Cách sử dụng:**
```jsx
const { ref, offset } = useParallax(0.5);

return (
  <div ref={ref} style={{ transform: `translateY(${offset}px)` }}>
    Parallax Content
  </div>
);
```

### 3. **UI Components**

#### `ScrollAnimateWrapper`
- Wrapper component dễ sử dụng cho scroll animations

**Props:**
```jsx
<ScrollAnimateWrapper
  animation="fadeInUp"           // Animation type
  delay={1}                      // Stagger delay (1-6)
  threshold={0.1}                // Intersection threshold
  duration="md"                  // sm, md, lg
  className=""                   // Additional classes
>
  Content
</ScrollAnimateWrapper>
```

#### `ParallaxWrapper`
- Component wrapper cho parallax effects

```jsx
<ParallaxWrapper speed={0.5} className="">
  Content
</ParallaxWrapper>
```

#### `AnimatedCard`
- Card component với hover animations và scroll animations

```jsx
<AnimatedCard
  animation="scaleIn"
  delay={index + 1}
  hover={true}
  className=""
>
  Card Content
</AnimatedCard>
```

## 🎬 Animation Types

Các loại animation có sẵn:

| Animation | Mô tả |
|-----------|-------|
| `fadeInUp` | Fade in từ dưới lên trên |
| `fadeInDown` | Fade in từ trên xuống dưới |
| `fadeIn` | Fade in đơn giản |
| `slideInLeft` | Slide vào từ trái |
| `slideInRight` | Slide vào từ phải |
| `scaleIn` | Phóng to từ nhỏ |
| `float` | Nổi (loop) |
| `pulse-glow` | Nhấp nháy glow (loop) |

## ⏱️ Stagger Classes

Tạo độ trễ cho animations theo thứ tự:

```jsx
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
.stagger-3 { animation-delay: 0.3s; }
.stagger-4 { animation-delay: 0.4s; }
.stagger-5 { animation-delay: 0.5s; }
.stagger-6 { animation-delay: 0.6s; }
```

## 📍 File Structure

```
src/
├── shared/
│   ├── hooks/
│   │   ├── useScrollAnimation.js    # Hook chính
│   │   └── index.js
│   └── ui/
│       ├── ScrollAnimateWrapper.jsx  # Wrapper component
│       ├── ParallaxWrapper.jsx       # Parallax wrapper
│       ├── AnimatedCard.jsx          # Card component
│       └── index.js
├── pages/
│   └── home/
│       └── ui/
│           └── HomePage.jsx         # Updated with animations
└── index.css                         # Animation styles
```

## 🚀 Ví dụ Sử Dụng

### Ví dụ 1: Wrap toàn section
```jsx
<ScrollAnimateWrapper animation="fadeInUp" threshold={0.2}>
  <PopularRoutesWidget />
</ScrollAnimateWrapper>
```

### Ví dụ 2: Parallax + Scroll Animation
```jsx
<ParallaxWrapper speed={0.3}>
  <ScrollAnimateWrapper animation="fadeInUp">
    <HeroSearchWidget />
  </ScrollAnimateWrapper>
</ParallaxWrapper>
```

### Ví dụ 3: Animated Cards with Stagger
```jsx
{items.map((item, idx) => (
  <AnimatedCard key={item.id} delay={idx + 1}>
    {item.content}
  </AnimatedCard>
))}
```

## ⚙️ Cấu hình Tùy Chỉnh

### Thêm Animation Mới
Thêm vào `index.css`:

```css
@keyframes myAnimation {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.my-animation {
  animation: myAnimation 0.8s ease-out forwards;
}
```

### Điều Chỉnh Tốc Độ
Sửa trong `ScrollAnimateWrapper`:

```jsx
const durationClass = {
  sm: 'duration-500',
  md: 'duration-700',
  lg: 'duration-1000',
}[duration];
```

## 🎯 Performance Tips

1. **Sử dụng `once: true`** - Chỉ trigger animation một lần
2. **Điều chỉnh `threshold`** - Trigger sớm hơn hoặc muộn hơn
3. **Tránh quá nhiều parallax** - Chỉ dùng trên section lớn
4. **Test trên mobile** - Hạn chế animations trên thiết bị yếu

## 📱 Responsive Considerations

Tất cả animations đều responsive và hoạt động tốt trên:
- Desktop
- Tablet  
- Mobile

Tailwind duration classes tự động thích ứng với kích thước màn hình.

## 🐛 Troubleshooting

**Animation không chạy?**
- Kiểm tra `threshold` value
- Kiểm tra `ref` được attach đúng không
- Đảm bảo component được mounted

**Scrollbar vẫn hiện?**
- Clear cache browser
- Reload trang
- Kiểm tra CSS được load đúng không

**Performance chậm?**
- Giảm số lượng `useParallax` hooks
- Tăng `threshold` để reduce observers
- Dùng `will-change` CSS property

## 📚 Tham Khảo

- [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API)
- [CSS Animations](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Animations)
- [Tailwind CSS](https://tailwindcss.com/)
