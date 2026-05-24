import { useScrollAnimation } from '@/shared/hooks';

/**
 * Component wrapper để apply scroll animations
 * @param {string} animation - Tên animation: 'fadeInUp', 'fadeInDown', 'slideInLeft', 'slideInRight', 'scaleIn'
 * @param {number} delay - Độ trễ animation (dùng stagger classes)
 * @param {number} threshold - Threshold cho Intersection Observer
 */
export const ScrollAnimateWrapper = ({
  children,
  animation = 'fadeInUp',
  delay = 0,
  threshold = 0.1,
  className = '',
  once = true,
  duration = 'md',
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold, once });

  const animationClass = isVisible ? animation : '';
  const staggerClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';
  const durationClass = {
    sm: 'duration-500',
    md: 'duration-700',
    lg: 'duration-1000',
  }[duration] || 'duration-700';

  return (
    <div
      ref={ref}
      className={`${animationClass} ${staggerClass} ${durationClass} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimateWrapper;
