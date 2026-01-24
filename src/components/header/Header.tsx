import Link from "next/link";
import Logo from "../brand/Logo";
import NavLinks from "./NavLinks";
import AuthLinks from "./AuthLinks";
import { Suspense } from "react";
import { Button } from "../ui/button";
import { HeaderProvider } from "./header-provider";
import { ThemeModeToggle } from "../theme-mode-toggle";

export default function Header() {
	return (
		<Suspense>
			<HeaderProvider>
				<nav className="flex items-center gap-8 justify-between min-h-16 container mx-auto px-4">
					<Link href="/">
						<Logo />
					</Link>

					<div className="flex items-center gap-8">
						<NavLinks />

						<div className="flex items-center gap-4">
							<Button variant="secondary" className="rounded-full" asChild>
								<Link href="/sign-in">Submit Listing</Link>
							</Button>

							<Suspense fallback={<div>Loading...</div>}>
								<AuthLinks />
							</Suspense>
							<ThemeModeToggle />
						</div>
					</div>
				</nav>
			</HeaderProvider>
		</Suspense>
	);
}
