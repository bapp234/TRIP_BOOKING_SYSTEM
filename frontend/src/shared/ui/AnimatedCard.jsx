import { useScrollAnimation } from '@/shared/hooks';

/**
 * Animated card component với scroll animation
 */
export const AnimatedCard = ({
  children,
  animation = 'scaleIn',
  delay = 0,
  className = '',
  hover = true,
}) => {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.2, once: true });

  const animationClass = isVisible ? animation : '';
  const staggerClass = delay > 0 ? `stagger-${Math.min(delay, 6)}` : '';

  return (
    <div
      ref={ref}
      className={`
        ${animationClass}
        ${staggerClass}
        ${hover ? 'transition-all duration-300 hover:shadow-xl hover:scale-105' : ''}
        ${className}
      `}
      style={{
        opacity: isVisible ? 1 : 0,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedCard;
