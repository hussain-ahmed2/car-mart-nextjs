import { prisma } from "@/lib/prisma";
import AllButton from "../custom-ui/AllButton";
import VehicleCarousel from "../vehicle/VehicleCarousel";

export default async function PopularMakesSection() {
	const vehicles = await prisma.vehicle.findMany({ take: 10 });

	return (
		<section className="py-12 sm:py-20 relative px-4 bg-muted">
			<div className="w-full max-w-7xl mx-auto">
				<div className="mb-8 flex items-center justify-between gap-4">
					<h2 className="h2">Popular Makes</h2>
					<AllButton label="View All" variant={"link"} href="/" />
				</div>

				<VehicleCarousel vehicles={vehicles} />
			</div>
		</section>
	);
}
