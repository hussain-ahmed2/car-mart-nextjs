import Link from "next/link";
import { Audi, BMW, Ford, MercedesBenz, Peugeot, Volkswagen } from "../icons/brand.icons";
import { Card, CardHeader, CardTitle } from "../ui/card";
import AllButton from "../custom-ui/AllButton";

export default function TopBrandsSection() {
	return (
		<section className="bg-accent py-12 sm:py-20 rounded-t-4xl -mt-12 relative px-4">
			<div className="w-full max-w-7xl mx-auto">
				<div className="mb-8 flex items-center justify-between gap-4">
					<h2 className="h2">Explore Our Premium Brands</h2>
					<AllButton label="Show All Brands" variant={"link"} href="/" />
				</div>

				<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 w-full">
					{brands.map((brand) => (
						<Link key={brand.label} href={brand.href}>
							<Card className="hover:ring transition">
								<CardHeader>
									<div className="flex justify-center aspect-4/3">
										<brand.icon className="w-full h-full" />
									</div>
									<CardTitle className="text-center">{brand.label}</CardTitle>
								</CardHeader>
							</Card>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}

const brands = [
	{ label: "Audi", icon: Audi, href: "/" },
	{ label: "BMW", icon: BMW, href: "/" },
	{ label: "Ford", icon: Ford, href: "/" },
	{ label: "Mercedes Benz", icon: MercedesBenz, href: "/" },
	{ label: "Peugeot", icon: Peugeot, href: "/" },
	{ label: "Volkswagen", icon: Volkswagen, href: "/" },
];
