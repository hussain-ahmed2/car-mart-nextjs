import { Tab, tabs } from "@/data/way-data";
import { cn } from "@/lib/utils";

type Props = {
	activeTab: Tab["id"];
	onTabClick: (id: Tab["id"]) => void;
};

export default function WayTabs({ activeTab, onTabClick }: Props) {
	return (
		<div className="text-base font-medium flex flex-wrap gap-4 md:gap-8 border-b">
			{tabs.map((tab) => (
				<button
					key={tab.id}
					onClick={() => onTabClick(tab.id)}
					className={cn("py-2 border-b-3 border-transparent transition", {
						"border-b-cyan-500": tab.id === activeTab,
					})}
				>
					{tab.label}
				</button>
			))}
		</div>
	);
}
