"use client";

import { ComponentType, useEffect, useRef, useState } from "react";

type LazySectionProps = {
  component: ComponentType;
  minHeight?: number;
};

export function LazySection({ component: Component, minHeight = 420 }: LazySectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`lazy-section ${visible ? "lazy-section-ready" : ""}`}
      style={{ minHeight: visible ? undefined : minHeight }}
    >
      {visible ? <Component /> : <div className="section-loader" aria-hidden="true" />}
    </div>
  );
}
