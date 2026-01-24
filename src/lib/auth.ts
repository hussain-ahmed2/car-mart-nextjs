import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { prisma } from "@/lib/prisma";
import { nextCookies } from "better-auth/next-js";
import { UserRole } from "@/generated/prisma/enums";

export const auth = betterAuth({
	database: prismaAdapter(prisma, {
		provider: "postgresql",
	}),
	emailAndPassword: { enabled: true },
	socialProviders: {
		github: { clientId: process.env.GITHUB_CLIENT_ID!, clientSecret: process.env.GITHUB_CLIENT_SECRET! },
	},
	plugins: [nextCookies()],
	user: {
		additionalFields: {
			role: { type: "string", defaultValue: UserRole.BUYER, required: true },
			phone: { type: "string", defaultValue: "", required: false },
			address: { type: "string", defaultValue: "", required: false },
			bio: { type: "string", defaultValue: "", required: false },
		},
	},
});
