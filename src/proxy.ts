import { NextRequest, NextResponse } from "next/server";
import { getSessionCookie } from "better-auth/cookies";

const GUEST_PATHS = ["/sign-in", "/sign-up"];
const AUTH_PATHS = ["/profile"];

export function proxy(request: NextRequest) {
	const sessionCookie = getSessionCookie(request);
	const { pathname } = request.nextUrl;

	const isAuthPath = AUTH_PATHS.some((path) => pathname.startsWith(path));

	const isGuestPath = GUEST_PATHS.some((path) => pathname.startsWith(path));

	if (!sessionCookie && isAuthPath) {
		const signInUrl = new URL("/sign-in", request.url);
		signInUrl.searchParams.set("callbackUrl", pathname);
		return NextResponse.redirect(signInUrl);
	}

	if (sessionCookie && isGuestPath) {
		return NextResponse.redirect(new URL("/", request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
