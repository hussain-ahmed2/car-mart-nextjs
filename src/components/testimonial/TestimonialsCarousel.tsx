"use client";

import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { testimonials } from "@/data/testimonials-data";
import TestimonialCard from "./TestimonialCard";
import Link from "next/link";

export default function TestimonialsCarousel() {
	return (
		<Carousel
			opts={{ loop: true, skipSnaps: true, align: "start" }}
			plugins={[Autoplay({ delay: 3000, stopOnInteraction: false })]}
		>
			<CarouselContent>
				{testimonials.map((testimonial) => (
					<CarouselItem key={testimonial.id} className="">
						<Link href={"/"}>
							<TestimonialCard testimonial={testimonial} />
						</Link>
					</CarouselItem>
				))}
			</CarouselContent>
		</Carousel>
	);
}
