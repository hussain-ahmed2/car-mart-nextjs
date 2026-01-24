import TestimonialsCarousel from "../testimonial/TestimonialsCarousel";

export default function TestimonialsSection() {
	return (
		<section className="py-12 sm:py-20 relative px-4 bg-muted">
			<div className="w-full max-w-7xl mx-auto">
				<div className="mb-8 flex items-center justify-between gap-4">
					<h2 className="h2">What our customers say</h2>
					<p>Rated 4.7 / 5 based on 28,370 reviews Showing our 4 & 5 star reviews</p>
				</div>

				<TestimonialsCarousel />
			</div>
		</section>
	);
}
