import { ArrowUpRight } from "lucide-react";
import { Button } from "../ui/button";
import Link from "next/link";

type ButtonProps = React.ComponentProps<typeof Button> & {
	label: string;
	href?: string;
};

export default function AllButton({ label, href, ...props }: ButtonProps) {
	return (
		<Button {...props} {...(href && { asChild: true })}>
			{href ? (
				<Link href={href}>
					<span>{label}</span>
					<ArrowUpRight />
				</Link>
			) : (
				<>
					<span>{label}</span>
					<ArrowUpRight />
				</>
			)}
		</Button>
	);
}
