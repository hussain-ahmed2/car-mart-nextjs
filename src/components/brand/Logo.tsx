import { cn } from "@/lib/utils";
import { Car } from "lucide-react";
import { Outfit } from "next/font/google";

const outfit = Outfit({ subsets: ["latin"] });

export default function Logo() {
	return (
		<div className={cn("flex items-center gap-1 font-semibold text-lg", outfit.className)}>
			<Car className="size-7" /> CarMart
		</div>
	);
}
