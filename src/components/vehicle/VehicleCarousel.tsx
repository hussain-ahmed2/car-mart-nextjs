"use client";

import Link from "next/link";
import VehicleCard, { VehicleCardSkeleton } from "../vehicle/VehicleCard";
import { Carousel, CarouselApi, CarouselContent, CarouselItem } from "../ui/carousel";
import AutoPlay from "embla-carousel-autoplay";
import { useRef } from "react";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Vehicle } from "@/generated/prisma/client";
import { Skeleton } from "../ui/skeleton";

export default function VehicleCarousel({ vehicles }: { vehicles: Vehicle[] }) {
	const carouselRef = useRef<CarouselApi>(null);

	const setApi = (api: CarouselApi) => {
		carouselRef.current = api;
	};

	const handleNext = () => {
		carouselRef.current?.scrollNext();
	};

	const handlePrev = () => {
		carouselRef.current?.scrollPrev();
	};

	return (
		<Carousel
			setApi={setApi}
			opts={{ loop: true, skipSnaps: true, align: "start" }}
			plugins={[AutoPlay({ delay: 3000, stopOnInteraction: false })]}
		>
			<CarouselContent>
				{vehicles.map((vehicle) => (
					<CarouselItem key={vehicle.id} className="sm:basis-1/2 md:basis-1/3 lg:basis-1/4">
						<Link href={`/vehicles/${vehicle.slug}`}>
							<VehicleCard vehicle={vehicle} />
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
			<div className="mt-4 flex gap-4 justify-center">
				<Button onClick={handlePrev} variant={"outline"} size={"icon-lg"}>
					<ChevronLeft className="size-5" />
				</Button>
				<Button onClick={handleNext} variant={"outline"} size={"icon-lg"}>
					<ChevronRight className="size-5" />
				</Button>
			</div>
		</Carousel>
	);
}

export function VehicleCarouselSkeleton() {
	return (
		<div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
				{Array.from({ length: 4 }).map((_, index) => (
					<VehicleCardSkeleton key={index} />
				))}
			</div>
			<div className="mt-4 flex gap-4 justify-center">
				<Skeleton className="h-10 w-10" />
				<Skeleton className="h-10 w-10" />
			</div>
		</div>
	);
}
