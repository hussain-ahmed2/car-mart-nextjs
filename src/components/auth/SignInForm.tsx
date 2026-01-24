import { SignInData, signInSchema } from "@/lib/validations/auth.validation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../form/InputField";
import { Button } from "../ui/button";
import { useServerFn } from "@tanstack/react-start";
import { signInFn } from "@/server/auth.fn";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";

export default function SignInForm() {
	"use no memo";
	const form = useForm({ resolver: zodResolver(signInSchema) });
	const signIn = useServerFn(signInFn);
	const router = useRouter();

	const onSubmit = async (data: SignInData) => {
		try {
			await signIn({ data });
			router.invalidate();
			router.navigate({ to: "/" });
			toast.success("Signed in successfully!");
		} catch (error) {
			toast.error(error instanceof Error ? error.message : "An unexpected error occurred. Please try again.");
		}
	};

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 my-6 w-full max-w-lg">
				<InputField name="email" type="email" label="Email" placeholder="Enter your email" />
				<InputField name="password" type="password" label="Password" placeholder="Enter your password" />

				<Button type="submit" className="mt-4" disabled={form.formState.isSubmitting}>
					{form.formState.isSubmitting ? "Signing in..." : "Sign In"}
				</Button>
			</form>
		</FormProvider>
	);
}
