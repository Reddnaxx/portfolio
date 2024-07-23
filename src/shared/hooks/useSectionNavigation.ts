import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

import { navigations } from "@/shared/constants/navigation/navigations";

let canScroll = true;
export const useSectionNavigation = (isLocked: boolean) => {
	const [currentSection, setCurrentSection] = useState<number>(0);
	const router = useRouter();

	useEffect(() => {
		let touchStart = 0;
		function handleTouchStart(e: TouchEvent) {
			e.preventDefault();
			touchStart = e.touches[0].screenY;
			canScroll = true;
		}
		function handleScroll(e: WheelEvent | TouchEvent | KeyboardEvent) {
			let delta = 0;
			if (e instanceof TouchEvent) {
				e.preventDefault();
				if (!canScroll) return;
				canScroll = false;
				delta = touchStart - e.touches[0].screenY;
			} else if (e instanceof KeyboardEvent) {
				if (e.key === "ArrowUp" || e.key === "ArrowDown") {
					e.preventDefault();
					if (!canScroll) return;
					delta = e.key === "ArrowUp" ? -1 : 1;
					canScroll = false;
				}
			} else {
				e.preventDefault();
				delta = e.deltaY;
			}

			if (isLocked) return;

			if (delta > 0) {
				setCurrentSection(prev =>
					prev === navigations.length - 1 ? prev : prev + 1,
				);
			} else if (delta < 0) {
				setCurrentSection(prev => (prev === 0 ? prev : prev - 1));
			}
		}

		function handleKeyUp() {
			canScroll = true;
		}

		window.addEventListener("wheel", handleScroll, { passive: false });
		window.addEventListener("keydown", handleScroll);
		window.addEventListener("keyup", handleKeyUp);
		window.addEventListener("touchstart", handleTouchStart, { passive: false });
		window.addEventListener("touchmove", handleScroll, { passive: false });
		return () => {
			window.removeEventListener("wheel", handleScroll);
			window.removeEventListener("touchstart", handleTouchStart);
			window.removeEventListener("touchmove", handleScroll);
			window.removeEventListener("keydown", handleScroll);
			window.addEventListener("keyup", handleKeyUp);
		};
	});

	useEffect(() => {
		router.replace(navigations[currentSection].url);
	}, [currentSection, router]);

	return { currentSection, setCurrentSection };
};
