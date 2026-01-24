import { SignInData, signUpSchema } from "@/lib/validations/auth.validation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../form/InputField";
import { Button } from "../ui/button";
import { useServerFn } from "@tanstack/react-start";
import { signUpFn } from "@/server/auth.fn";
import { toast } from "sonner";
import { useRouter } from "@tanstack/react-router";

export default function SignUpForm() {
	"use no memo";
	const form = useForm({ resolver: zodResolver(signUpSchema) });
	const signIn = useServerFn(signUpFn);
	const router = useRouter();

	const onSubmit = async (data: SignInData) => {
		try {
			await signIn({ data });
			router.invalidate();
			router.navigate({ to: "/" });
			toast.success("Signed up successfully!");
		} catch (error) {
			toast.error("An unexpected error occurred. Please try again.");
		}
	};

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 my-6 w-full max-w-lg">
				<InputField name="name" type="text" label="Name" placeholder="Enter your name" />
				<InputField name="email" type="email" label="Email" placeholder="Enter your email" />
				<InputField name="password" type="password" label="Password" placeholder="Enter your password" />
				<InputField
					name="confirmPassword"
					type="password"
					label="Confirm Password"
					placeholder="Confirm your password"
				/>

				<Button type="submit" className="mt-4" disabled={form.formState.isSubmitting}>
					Sign Up
				</Button>
			</form>
		</FormProvider>
	);
}
