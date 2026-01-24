import z from "zod/v3";

export const userSchema = z.object({
	name: z.string().min(1, "Name is required"),
	email: z.string().email("Invalid email address"),
	password: z.string().min(6, "Password must be at least 6 characters long"),
	image: z.string().url().optional(),
});
export type UserData = z.infer<typeof userSchema>;

export const signUpSchema = userSchema
	.extend({
		confirmPassword: z.string().min(6, "Confirm Password must be at least 6 characters long"),
	})
	.refine((data) => data.password === data.confirmPassword, {
		message: "Passwords do not match",
		path: ["confirmPassword"],
	});
export type SignUpData = z.infer<typeof signUpSchema>;

export const signInSchema = userSchema.pick({
	email: true,
	password: true,
});
export type SignInData = z.infer<typeof signInSchema>;
