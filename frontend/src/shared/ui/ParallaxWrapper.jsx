import { useParallax } from '@/shared/hooks';

/**
 * Component Parallax effect
 * @param {number} speed - Tốc độ parallax (0.5 = bình thường, càng cao càng nhanh)
 */
export const ParallaxWrapper = ({
  children,
  speed = 0.5,
  className = '',
}) => {
  const { ref, offset } = useParallax(speed);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        transform: `translateY(${offset}px)`,
        transition: 'transform 0.1s ease-out',
      }}
    >
      {children}
    </div>
  );
};

export default ParallaxWrapper;
