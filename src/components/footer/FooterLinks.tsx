import { footerData } from "@/data/footer-data";
import Link from "next/link";

type Props = {
	data: (typeof footerData)[number];
};

export default function FooterLinks({ data }: Props) {
	return (
		<div>
			<h3 className="text-base font-bold mb-4">{data.title}</h3>

			<ul className="flex flex-col gap-4">
				{data.links.map((link) => (
					<li key={link.href}>
						<Link href={link.href} className="hover:underline">
							{link.label}
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
}
