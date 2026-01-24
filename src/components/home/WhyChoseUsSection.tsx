import { BadgeDollarSign, Gift, Settings, Sparkles } from "lucide-react";

export default function WhyChoseUsSection() {
	return (
		<section className="mx-4">
			<div className="py-12 sm:py-20 max-w-7xl mx-auto">
				<h2 className="h2 mb-8">Why Choose Us?</h2>
				<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
					{data.map((item) => (
						<div key={item.id}>
							<div className="mb-2">
								<item.icon className="size-8" />
							</div>
							<h3 className="text-base sm:text-lg font-semibold mb-1">{item.title}</h3>
							<p>{item.description}</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

const data = [
	{
		id: 1,
		title: "Special Financing Offers",
		description: "Our stress-free finance department that can find financial solutions to save you money.",
		icon: Gift,
	},
	{
		id: 2,
		title: "Trusted Car Dealership",
		description: "Our stress-free finance department that can find financial solutions to save you money.",
		icon: Sparkles,
	},
	{
		id: 3,
		title: "Transparent Pricing",
		description: "Our stress-free finance department that can find financial solutions to save you money.",
		icon: BadgeDollarSign,
	},
	{
		id: 4,
		title: "Expert Car Service",
		description: "Our stress-free finance department that can find financial solutions to save you money.",
		icon: Settings,
	},
];
