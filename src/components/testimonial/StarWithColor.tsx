import { cn } from "@/lib/utils";
import { Star } from "lucide-react";

export default function StarWithColor({ width }: { width: number }) {
	return (
		<div className="relative">
			<div>
				<Star className="size-4" />
			</div>
			<div className={cn("absolute h-full top-0 left-0 z-10 overflow-hidden")} style={{ width: `${width}%` }}>
				<Star className={"size-4 fill-amber-500 text-amber-500"} />
			</div>
		</div>
	);
}
