import Image from "next/image";
import HeroFilter from "./HeroFilter";
import HeroModels from "./HeroModels";
import { MakeModel } from "@/types/type";

export default function HeroSection({ make_models }: { make_models: MakeModel[] }) {
	return (
		<section className="relative">
			<div className="">
				<Image
					src="/images/banner.jpg"
					alt="Banner"
					width={1440}
					height={960}
					className="object-cover w-full h-screen"
				/>
			</div>
			<div className="absolute inset-0 flex items-center justify-center mx-4">
				<div className="flex flex-col">
					<p className="text-center text-background/90 dark:text-foreground/90 mb-3 md:text-base">
						Find cars for sale and rent at the best price near you
					</p>
					<h1 className="text-3xl sm:text-5xl md:text-7xl text-center font-bold mb-2 md:mb-4 text-background dark:text-foreground">
						Find Your Dream Car
					</h1>

					<div>
						<HeroFilter make_models={make_models} />
					</div>

					<div>
						<HeroModels />
					</div>
				</div>
			</div>
		</section>
	);
}
