import { Testimonial } from "@/data/testimonials-data";
import TestimonialsStars from "./TestimonialsStars";
import { Badge } from "../ui/badge";

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
	return (
		<article className="flex items-center justify-between gap-4 sm:gap-8 md:gap-12 lg:gap-16">
			<div className="basis-1/3 aspect-4/5 rounded-2xl overflow-hidden">
				<img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
			</div>
			<div className="flex-1">
				<div className="flex items-center gap-2 my-2">
					<TestimonialsStars rating={testimonial.rating} />{" "}
					<Badge variant="secondary" className="bg-amber-500 text-white">
						{testimonial.rating}
					</Badge>
				</div>
				<h4 className="font-semibold mb-1 text-base">{testimonial.name}</h4>
				<p className="text-xs">{testimonial.role}</p>

				<p className="my-4 font-medium text-lg">{testimonial.review}</p>
			</div>
		</article>
	);
}
