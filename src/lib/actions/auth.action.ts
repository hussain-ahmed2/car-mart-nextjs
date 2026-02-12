"use server";

import { headers } from "next/headers";
import { auth } from "../auth";
import { SignInData, SignUpData } from "../validations/auth.validation";
import { tryCatch } from "../async";
import { SocialProvider } from "better-auth";

export async function signIn(body: SignInData) {
	const [error, result] = await tryCatch(async () => auth.api.signInEmail({ body }));
	if (error) {
		return { success: false, message: error.message } as const;
	}
	return { success: true, data: result } as const;
}

export async function signInWithSocial(provider: SocialProvider) {
	const [error, result] = await tryCatch(() => auth.api.signInSocial({ body: { provider } }));
	if (error) {
		return { success: false, message: error.message } as const;
	}
	return { success: true, data: result } as const;
}

export async function getSession() {
	const [error, result] = await tryCatch(async () => auth.api.getSession({ headers: await headers() }));
	if (error || !result) {
		return { success: false, message: error ? error.message : "No active session." } as const;
	}
	return { success: true, data: result } as const;
}

export async function signUp(body: SignUpData) {
	const [error, result] = await tryCatch(async () => auth.api.signUpEmail({ body }));
	if (error) {
		return { success: false, message: error.message } as const;
	}
	return { success: true, data: result } as const;
}

export async function signOut() {
	const [error, result] = await tryCatch(async () => auth.api.signOut({ headers: await headers() }));
	if (error || !result.success) {
		return { success: false, message: error ? error.message : "Something went wrong" } as const;
	}
	return { success: true } as const;
}
