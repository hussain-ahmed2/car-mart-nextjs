import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { ArrowUpRight, Bookmark, Fuel, Gauge, Settings } from "lucide-react";
import { Button } from "../ui/button";
import { formatCurrency, formatMiles } from "@/lib/utils";
import { Vehicle } from "@/generated/prisma/client";
import Image from "next/image";

export default function VehicleCard({ vehicle }: { vehicle: Vehicle }) {
	return (
		<Card className="py-0 overflow-hidden gap-0 hover:border-primary transition">
			<div className="relative aspect-4/3">
				<Image
					src={vehicle.images[0] || "/placeholder.png"}
					width={1280}
					height={720}
					alt={vehicle.title}
					className="w-full aspect-4/3 object-cover"
					loading="lazy"
				/>
				<Button
					variant="secondary"
					size="icon"
					className="absolute right-4 top-4 rounded-full bg-background hover:bg-background/90 drop-shadow-sm shadow-none"
				>
					<Bookmark />
				</Button>
			</div>

			<CardHeader className="my-4">
				<CardTitle className="line-clamp-1 text-base">{vehicle.title}</CardTitle>
				<CardDescription className="line-clamp-1">{vehicle.description}</CardDescription>
			</CardHeader>

			<CardContent className="my-4">
				<div className="grid grid-cols-3 text-center text-xs">
					<div className="flex flex-col items-center gap-2">
						<Gauge className="size-5" />
						<span>{formatMiles(vehicle.mileage)}</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Fuel className="size-5" />
						<span>{vehicle.fuelType}</span>
					</div>
					<div className="flex flex-col items-center gap-2">
						<Settings className="size-5" />
						<span>{vehicle.transmission}</span>
					</div>
				</div>
			</CardContent>

			<CardFooter className="flex items-center justify-between border-t py-2!">
				<span className="text-lg font-bold">{formatCurrency(vehicle.price)}</span>
				<Button className="rounded-full" variant="link">
					<span>View Details</span>
					<ArrowUpRight />
				</Button>
			</CardFooter>
		</Card>
	);
}
