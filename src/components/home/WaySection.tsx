"use client";

import { Tab } from "@/data/way-data";
import AllButton from "../custom-ui/AllButton";
import WayTabs from "./WayTabs";
import { useState } from "react";
import WayContents from "./WayContents";

export default function WaySection() {
	const [tab, setTab] = useState<Tab["id"]>("new");

	const handleTabClick = (id: Tab["id"]) => {
		setTab(id);
	};

	return (
		<section className="py-12 sm:py-20 relative px-4">
			<div className="w-full max-w-7xl mx-auto">
				<div className="mb-8 flex items-center justify-between gap-4">
					<h2 className="h2">Discover Cars, Your Way</h2>
					<AllButton label="View More" variant={"link"} href="/" />
				</div>

				<WayTabs activeTab={tab} onTabClick={handleTabClick} />

				<div className="mt-4">
					<WayContents activeTab={tab} />
				</div>
			</div>
		</section>
	);
}
