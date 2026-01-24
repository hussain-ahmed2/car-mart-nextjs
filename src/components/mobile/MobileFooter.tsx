import { Home, ShoppingCart, BadgeDollarSign, Search } from "lucide-react";
import Link from "next/link";
import MobileAuth from "./MobileAuth";
import MobileSearch from "./MobileSearch";
import { Suspense } from "react";

export default function MobileFooter() {
	return (
		<div className="sticky bottom-0 md:hidden border-t bg-background">
			<nav className="container mx-auto">
				<div className="flex items-center justify-center font-medium">
					{links.map(({ label, href, icon: Icon }) =>
						label === "Search" ? (
							<MobileSearch key={href} label={label} Icon={Icon} />
						) : (
							<Link
								key={href}
								href={href}
								className="flex flex-col gap-1 justify-center items-center flex-1 p-2"
							>
								<span>
									<Icon />
								</span>
								<span>{label}</span>
							</Link>
						),
					)}
					<Suspense fallback={<div>Loading...</div>}>
						<MobileAuth />
					</Suspense>
				</div>
			</nav>
		</div>
	);
}

const links = [
	{ href: "/", label: "Home", icon: Home },
	{ href: "/search", label: "Search", icon: Search },
	{ href: "/buy", label: "Buy", icon: ShoppingCart },
	{ href: "/sell", label: "Sell", icon: BadgeDollarSign },
];
