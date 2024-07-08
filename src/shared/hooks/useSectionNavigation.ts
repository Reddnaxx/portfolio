import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { navigations } from "@/shared/constants/navigation/navigations";

let canScroll = true;
export const useSectionNavigation = () => {
  const [currentSection, setCurrentSection] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    let touchStart = 0;
    function handleTouchStart(e: TouchEvent) {
      e.preventDefault();
      touchStart = e.touches[0].screenY;
      canScroll = true;
    }
    function handleScroll(e: WheelEvent | TouchEvent) {
      e.preventDefault();

      let delta = 0;
      if (e instanceof TouchEvent) {
        if (!canScroll) return;
        canScroll = false;
        delta = touchStart - e.touches[0].screenY;
      } else {
        delta = e.deltaY;
      }

      if (delta > 0) {
        setCurrentSection(prev =>
          prev === navigations.length - 1 ? prev : prev + 1,
        );
      } else if (delta < 0) {
        setCurrentSection(prev => (prev === 0 ? prev : prev - 1));
      }
    }
    window.addEventListener("wheel", handleScroll, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: false });
    window.addEventListener("touchmove", handleScroll, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleScroll);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleScroll);
    };
  });

  useEffect(() => {
    router.replace(navigations[currentSection].url);
  }, [currentSection, router]);

  return { currentSection, setCurrentSection };
};
