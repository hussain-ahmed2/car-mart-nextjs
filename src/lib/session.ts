"use server";

import { headers } from "next/headers";
import { auth } from "./auth";
import { Session, User } from "better-auth";

export async function getAuth() {
	try {
		const session = await auth.api.getSession({ headers: await headers() });
		return session;
	} catch (error) {
		console.error("Error getting session:", error);
		return null;
	}
}

export type Auth = { session: Session; user: User };

export async function signOut() {
	try {
		const result = await auth.api.signOut({ headers: await headers() });
		return result;
	} catch (error) {
		console.error("Error during sign out:", error);
		return { success: false };
	}
}
