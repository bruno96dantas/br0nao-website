import React, { useRef, useEffect, useState } from "react";

interface InfiniteMovingCardsProps {
  items: React.ReactNode[];
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export const InfiniteMovingCards: React.FC<InfiniteMovingCardsProps> = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className = "",
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addAnimation = () => {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);
      
      // Set the animation duration based on the speed prop
      let animationDuration = 20;
      if (speed === "slow") animationDuration = 40;
      if (speed === "fast") animationDuration = 10;

      // Clone the scroller items to create a continuous flow
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      setStart(true);
    }
  };

  const getDirectionStyle = () => {
    if (direction === "left") {
      return "animate-scroll-left";
    }
    return "animate-scroll-right";
  };

  const getSpeedStyle = () => {
    if (speed === "slow") {
      return "duration-[40s]";
    }
    if (speed === "fast") {
      return "duration-[10s]";
    }
    return "duration-[20s]";
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative overflow-hidden ${className}`}
      style={{ maskImage: "linear-gradient(to right, transparent, black 20%, black 80%, transparent 100%)" }}
    >
      <ul
        ref={scrollerRef}
        className={`flex min-w-full gap-4 py-4 ${
          start ? `${getDirectionStyle()} ${getSpeedStyle()}` : ""
        } ${pauseOnHover ? "hover:[animation-play-state:paused]" : ""}`}
      >
        {items.map((item, idx) => (
          <li
            className="flex-shrink-0"
            key={idx}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};