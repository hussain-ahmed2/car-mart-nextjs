import type { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatsCardProps {
	title: string;
	value: string | number;
	description?: string;
	icon: LucideIcon;
	trend?: {
		value: number;
		isPositive: boolean;
	};
	className?: string;
	iconClassName?: string;
}

export function StatsCard({
	title,
	value,
	description,
	icon: Icon,
	trend,
	className,
	iconClassName,
}: StatsCardProps) {
	return (
		<div
			className={cn(
				"rounded-xl border bg-white p-6 shadow-sm transition-shadow hover:shadow-md",
				className,
			)}
		>
			<div className="flex items-start justify-between">
				<div className="space-y-1">
					<p className="text-sm font-medium text-gray-500">{title}</p>
					<p className="text-3xl font-bold tracking-tight">{value}</p>
					{description && (
						<p className="text-xs text-gray-500">{description}</p>
					)}
					{trend && (
						<div className="flex items-center gap-1 pt-1">
							<span
								className={cn(
									"text-xs font-medium",
									trend.isPositive ? "text-green-600" : "text-red-600",
								)}
							>
								{trend.isPositive ? "+" : "-"}
								{Math.abs(trend.value)}%
							</span>
							<span className="text-xs text-gray-500">from last month</span>
						</div>
					)}
				</div>
				<div
					className={cn(
						"flex h-12 w-12 items-center justify-center rounded-lg",
						iconClassName || "bg-blue-100 text-blue-600",
					)}
				>
					<Icon className="h-6 w-6" />
				</div>
			</div>
		</div>
	);
}

interface StatsGridProps {
	children: React.ReactNode;
}

export function StatsGrid({ children }: StatsGridProps) {
	return (
		<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">{children}</div>
	);
}
