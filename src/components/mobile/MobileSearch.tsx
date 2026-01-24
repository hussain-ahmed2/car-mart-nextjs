import { LucideProps } from "lucide-react";
import { ForwardRefExoticComponent, RefAttributes } from "react";

export default function MobileSearch({
	label,
	Icon,
}: {
	label: string;
	Icon: ForwardRefExoticComponent<Omit<LucideProps, "ref"> & RefAttributes<SVGSVGElement>>;
}) {
	return (
		<>
			<button type="button" className="flex flex-col gap-1 justify-center items-center flex-1 p-2 cursor-pointer">
				<span>
					<Icon />
				</span>
				<span>{label}</span>
			</button>
		</>
	);
}
