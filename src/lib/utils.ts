import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function getAvatarText(name: string) {
	return name
		.split(" ")
		.map((word) => word.charAt(0).toUpperCase())
		.slice(0, 2)
		.join("");
}

export function formatCurrency(amount: number) {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
		minimumFractionDigits: 0,
	}).format(amount);
}

export function formatMiles(miles: number) {
	return new Intl.NumberFormat("en-US", {
		style: "unit",
		unit: "mile",
		unitDisplay: "narrow",
	}).format(miles);
}

export async function wait(ms: number = 1000) {
	return new Promise((resolve) => setTimeout(resolve, ms));
}
