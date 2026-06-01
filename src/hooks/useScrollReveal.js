import { useEffect, useRef } from 'react';

/**
 * Attaches an IntersectionObserver to the returned ref.
 * Adds the 'visible' class when the element enters the viewport.
 *
 * @param {object} options
 * @param {number} [options.threshold=0.15]
 * @param {string} [options.rootMargin='0px 0px -50px 0px']
 * @param {boolean} [options.repeat=false] - Re-animate on every entry/exit
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -50px 0px', repeat = false } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('visible');
          if (!repeat) observer.unobserve(element);
        } else if (repeat) {
          element.classList.remove('visible');
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin, repeat]);

  return ref;
}
