import { ArrowUpRight, Check, Play } from "lucide-react";
import { Button } from "../ui/button";

export default function VideoBannerSection() {
	return (
		<section className="mx-4 pb-12 sm:pb-20">
			<div className="grid md:grid-cols-2 max-w-7xl mx-auto rounded-lg overflow-hidden bg-muted">
				<div className="overflow-hidden relative max-md:aspect-video">
					<img src="/images/video-banner.jpg" alt="Video Banner" className="w-full h-full object-cover" />
					<div className="absolute inset-0 flex items-center justify-center">
						<Button size={"icon-lg"} variant={"secondary"} className="rounded-full">
							<Play />
						</Button>
					</div>
				</div>

				<div className="p-6 sm:p-12 md:p-15 lg:p-20 flex flex-col justify-center">
					<h2 className="h2">Get A Fair Price For Your Car Sell To Us Today</h2>

					<p className="my-4">
						We are committed to providing our customers with exceptional service, competitive pricing, and a
						wide range of.
					</p>

					<ul className="mb-4 space-y-2">
						<li className="flex items-center gap-2">
							<div className="size-5 flex items-center justify-center aspect-square drop-shadow-sm rounded-full bg-white">
								<Check className="size-3" />
							</div>
							<p>We are the UK{"’"}s largest provider, with more patrols in more places</p>
						</li>
						<li className="flex items-center gap-2">
							<div className="size-5 flex items-center justify-center aspect-square drop-shadow-sm rounded-full bg-white">
								<Check className="size-3" />
							</div>
							<p>You get 24/7 roadside assistance</p>
						</li>
						<li className="flex items-center gap-2">
							<div className="size-5 flex items-center justify-center aspect-square drop-shadow-sm rounded-full bg-white">
								<Check className="size-3" />
							</div>
							<p>We fix 4 out of 5 cars at the roadside</p>
						</li>
					</ul>

					<div className="flex justify-end">
						<Button
							size={"lg"}
							className="rounded-full bg-foreground hover:bg-foreground/90 text-background"
						>
							<span>Get Started</span> <ArrowUpRight />
						</Button>
					</div>
				</div>
			</div>

			<div className="mt-12 md:mt-20 grid grid-cols-2 sm:grid-cols-4 max-w-7xl mx-auto">
				{counts.map((count) => (
					<div key={count.label} className="flex flex-col justify-center items-center gap-2">
						<span className="text-foreground h2">
							{Intl.NumberFormat("en-US", { notation: "compact" }).format(count.count)}
						</span>
						<span className="text-muted-foreground uppercase text-xs font-medium">{count.label}</span>
					</div>
				))}
			</div>
		</section>
	);
}

const counts = [
	{ label: "Car For Sale", count: 836000000 },
	{ label: "Dealer Reviews", count: 738000000 },
	{ label: "Visitors Per Day", count: 100000000 },
	{ label: "Verified Dealers", count: 238000000 },
];
