import BlogSection from "@/components/home/BlogSection";
import BuySellCTASection from "@/components/home/BuySellCTASection";
import HeroSection from "@/components/home/HeroSection";
import PopularMakesSection from "@/components/home/PopularMakesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TopBrandsSection from "@/components/home/TopBrandsSection";
import VehicleSection from "@/components/home/VehicleSection";
import VideoBannerSection from "@/components/home/VideoBannerSection";
import WaySection from "@/components/home/WaySection";
import WhyChoseUsSection from "@/components/home/WhyChoseUsSection";
import { Separator } from "@/components/ui/separator";
import { prisma } from "@/lib/prisma";
import { Suspense } from "react";

export default async function HomePage() {
	const make_models = await prisma.make.findMany({ include: { models: true } });

	return (
		<div className="flex flex-col -mt-16">
			<Suspense fallback={<div>Loading...</div>}>
				<HeroSection make_models={make_models} />
			</Suspense>

			<TopBrandsSection />

			<Suspense fallback={<div>Loading...</div>}>
				<VehicleSection />
			</Suspense>

			<VideoBannerSection />

			<Separator />

			<WhyChoseUsSection />

			<Suspense fallback={<div>Loading...</div>}>
				<PopularMakesSection />
			</Suspense>

			<WaySection />

			<TestimonialsSection />

			<BlogSection />

			<BuySellCTASection />
		</div>
	);
}
