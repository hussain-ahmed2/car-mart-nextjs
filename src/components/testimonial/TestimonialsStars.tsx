import StarWithColor from "./StarWithColor";

export default function TestimonialsStars({ rating }: { rating: number }) {
	return (
		<div className="flex gap-1">
			{Array.from({ length: 5 }).map((_, index) => {
				const fill = Math.max(0, Math.min(1, rating - index));
				const width = fill * 100;

				return <StarWithColor key={index} width={width} />;
			})}
		</div>
	);
}
