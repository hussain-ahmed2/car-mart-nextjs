import { Hatchback, Suv, Sedan, Coupe, Hybrid } from "../icons/cars.icons";
import { Button } from "../ui/button";

export default function HeroModels() {
	return (
		<div className="mt-3 md:mt-6">
			<p className="text-center text-background/90 dark:text-foreground/90">Or Browse Featured Model</p>

			<div className="my-2 md:my-4 flex items-center justify-center flex-wrap gap-2">
				{featured_models.map((model) => (
					<Button
						key={model.value}
						variant="secondary"
						className="rounded-full drop-shadow bg-white/10 backdrop-blur hover:bg-white/20 text-white text-xs"
					>
						<model.icon className="size-6" /> <span>{model.label}</span>
					</Button>
				))}
			</div>
		</div>
	);
}

const featured_models = [
	{ label: "SUV", value: "SUV", icon: Suv },
	{ label: "Sedan", value: "Sedan", icon: Sedan },
	{ label: "Hatchback", value: "Hatchback", icon: Hatchback },
	{ label: "Coupe", value: "Coupe", icon: Coupe },
	{ label: "Hybrid", value: "Hybrid", icon: Hybrid },
];
