"use server";

import { UserRole } from "@/generated/prisma/enums";
import { getSession } from "../actions/auth.action";
import { BetterAuthError } from "better-auth";
import { redirect } from "next/navigation";

type PermissionCallback = (role: UserRole) => Promise<boolean> | boolean;

type PermissionCheckResult = { success: true } | { success: false; message: string };

export async function permissionCheck(callback: PermissionCallback): Promise<PermissionCheckResult> {
	try {
		const session = await getSession();

		if (!session.success) {
			return { success: false, message: "No active session found." };
		}

		const result = await callback(session.data.user.role as UserRole);
		if (!result) {
			return { success: false, message: "Permission denied." };
		}

		return { success: true };
	} catch (error) {
		console.error("Permission check failed:", error);
		return {
			success: false,
			message:
				error instanceof BetterAuthError
					? error.message
					: "An unexpected error occurred during permission check.",
		};
	}
}

export async function isAdmin() {
	try {
		const result = await permissionCheck((role) => role === UserRole.ADMIN);
		return result.success;
	} catch (error) {
		console.error("Permission check failed:", error);
		return false;
	}
}

export async function isBuyer() {
	try {
		const result = await permissionCheck((role) => role === UserRole.BUYER);
		return result.success;
	} catch (error) {
		console.error("Permission check failed:", error);
		return false;
	}
}

export async function isSeller() {
	try {
		const result = await permissionCheck((role) => role === UserRole.SELLER);
		return result.success;
	} catch (error) {
		console.error("Permission check failed:", error);
		return false;
	}
}

export async function isSellerOrAdmin() {
	try {
		const result = await permissionCheck((role) => role === UserRole.SELLER || role === UserRole.ADMIN);
		return result.success;
	} catch (error) {
		console.error("Permission check failed:", error);
		return false;
	}
}

export async function isBuyerOrAdmin() {
	try {
		const result = await permissionCheck((role) => role === UserRole.BUYER || role === UserRole.ADMIN);
		return result.success;
	} catch (error) {
		console.error("Permission check failed:", error);
		return false;
	}
}

export async function isAuthenticated() {
	try {
		const session = await getSession();
		return session.success;
	} catch (error) {
		console.error("Authentication check failed:", error);
		return false;
	}
}

export async function isGuest() {
	try {
		const session = await getSession();
		if (!session.success) return true;
		return false;
	} catch (error) {
		console.error("Guest check failed:", error);
		return false;
	}
}

export async function guest() {
	try {
		const result = await isGuest();
		if (!result) redirect("/profile");
	} catch (error) {
		console.error("Guest check failed:", error);
		redirect("/");
	}
}
