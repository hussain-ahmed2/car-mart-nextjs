import Link from "next/link";

export default function NavLinks() {
	return (
		<div className="flex items-center gap-8 max-md:hidden">
			{links.map((link) => (
				<Link href={link.href} className="font-medium hover:underline" key={link.href}>
					{link.label}
				</Link>
			))}
		</div>
	);
}

const links = [
	{ href: "/", label: "Home" },
	{ href: "/buy", label: "Buy" },
	{ href: "/sell", label: "Sell" },
	{ href: "/about", label: "About" },
	{ href: "/contact", label: "Contact" },
];
