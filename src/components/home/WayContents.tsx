import { Tab, tabContent } from "@/data/way-data";
import Link from "next/link";

type Props = {
	activeTab: Tab["id"];
};

export default function WayContents({ activeTab }: Props) {
	const contents = tabContent[activeTab];

	return (
		<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
			{contents.map((content) => (
				<Link className="hover:underline" key={content} href="/">
					{content}
				</Link>
			))}
		</div>
	);
}
