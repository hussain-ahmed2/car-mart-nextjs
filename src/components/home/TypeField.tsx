import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";

export default function TypeField() {
	"use no memo";
	const { watch, setValue } = useFormContext();
	const type = watch("type");

	const handleClick = (value: string) => {
		setValue("type", value);
	};

	return (
		<div className="items-center justify-center mb-2 md:mb-4 grid grid-cols-3 text-background w-fit mx-auto gap-2">
			<button
				type="button"
				className={cn(
					"text-left pr-2 pb-1 border-b-2 border-b-transparent transition text-background dark:text-foreground",
					{
						"border-b-background dark:border-b-foreground": type === "all",
					},
				)}
				onClick={() => handleClick("all")}
			>
				All
			</button>
			<button
				type="button"
				className={cn(
					"text-left pr-2 pb-1 border-b-2 border-b-transparent transition text-background dark:text-foreground",
					{
						"border-b-background dark:border-b-foreground": type === "new",
					},
				)}
				onClick={() => handleClick("new")}
			>
				New
			</button>
			<button
				type="button"
				className={cn(
					"text-left pr-2 pb-1 border-b-2 border-b-transparent transition text-background dark:text-foreground",
					{
						"border-b-background dark:border-b-foreground": type === "used",
					},
				)}
				onClick={() => handleClick("used")}
			>
				Used
			</button>
		</div>
	);
}
