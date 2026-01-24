import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import { BuyCarIcon, SellCarIcon } from "../icons/extra.icons";

export default function BuySellCTASection() {
	return (
		<section className="py-12 sm:py-20 rounded-b-4xl relative bg-accent">
			<div className="w-full max-w-7xl mx-auto grid md:grid-cols-2 gap-4">
				<div className="flex items-end gap-4 p-8 sm:p-10 md:p-12 lg:p-16 bg-cyan-50 dark:bg-cyan-950 rounded-lg">
					<div className="space-y-4">
						<h2 className="h2">Are you looking for a car?</h2>
						<p className="max-w-sm">
							We are committed to providing our customers with exceptional service.
						</p>

						<Button className="py-6 bg-cyan-500 hover:bg-cyan-500/90">
							Get started <ArrowUpRight />
						</Button>
					</div>
					<div className="max-md:scale-50">
						<BuyCarIcon />
					</div>
				</div>
				<div className="flex items-end gap-4 p-8 sm:p-10 md:p-12 lg:p-16 bg-fuchsia-50 dark:bg-fuchsia-950 rounded-lg">
					<div className="space-y-4">
						<h2 className="h2">Do You Want to Sell a Car ?</h2>
						<p className="max-w-sm">
							We are committed to providing our customers with exceptional service.
						</p>

						<Button className="py-6 bg-fuchsia-500 hover:bg-fuchsia-500/90">
							Get started <ArrowUpRight />
						</Button>
					</div>
					<div className="max-md:scale-50">
						<SellCarIcon />
					</div>
				</div>
			</div>
		</section>
	);
}
