import { cn, getAvatarText } from "@/lib/utils";
import { AvatarFallback, AvatarImage, Avatar as ShadcnAvatar } from "../ui/avatar";

type AvatarProps = {
	src?: string;
	alt?: string;
	className?: string;
};

export function Avatar({ src, alt, className = "" }: AvatarProps) {
	return (
		<ShadcnAvatar className={cn(className)}>
			<AvatarImage src={src} alt={alt} />
			<AvatarFallback>{alt ? getAvatarText(alt) : "?"}</AvatarFallback>
		</ShadcnAvatar>
	);
}
