"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { createContext } from "react";
import { cn } from "@/lib/utils";

const HeaderContext = createContext({});

export function HeaderProvider({ children }: { children: React.ReactNode }) {
	const navbarRef = useRef<HTMLElement>(null);
	const pathname = usePathname();
	const lastScrollY = useRef(0);

	const [isTransparent, setTransparent] = useState(true);
	const [showBar, setShowBar] = useState(true);

	useEffect(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;

			// Hide on scroll down, show on scroll up
			if (currentScrollY > lastScrollY.current && currentScrollY > 64) {
				setShowBar(false);
			} else {
				setShowBar(true);
			}

			lastScrollY.current = currentScrollY;

			// Transparency logic
			if (pathname !== "/") {
				setTransparent(false);
				return;
			}

			if (currentScrollY > 64) {
				setTransparent(false);
			} else {
				setTransparent(true);
			}
		};

		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // initial run

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, [pathname]);

	return (
		<HeaderContext.Provider value={{}}>
			<header
				ref={navbarRef}
				className={cn(
					"fixed top-0 left-0 right-0 w-full z-50 transition-transform duration-300 text-background dark:text-foreground px-4",
					{
						"bg-background/60 backdrop-blur shadow text-foreground dark:text-foreground": !isTransparent,
						"-translate-y-full": !showBar,
					},
				)}
			>
				{children}
			</header>
		</HeaderContext.Provider>
	);
}
