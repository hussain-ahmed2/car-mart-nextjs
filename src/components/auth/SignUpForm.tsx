"use client";

import { SignUpData, signUpSchema } from "@/lib/validations/auth.validation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../form/InputField";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signUp } from "@/lib/actions/auth.action";
import { tryCatch } from "@/lib/async";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Spinner } from "../ui/spinner";

export default function SignUpForm() {
	"use no memo";
	const form = useForm<SignUpData>({ resolver: zodResolver(signUpSchema) });
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const onSubmit = async (data: SignUpData) => {
		startTransition(async () => {
			const [error, result] = await tryCatch(() => signUp(data));
			if (error) {
				toast.error(error.message);
				form.setError("root", { message: error.message });
				return;
			}

			if (result.success) {
				toast.success("Signed up successfully!");
				router.push("/profile");
				router.refresh();
			} else {
				form.setError("root", { message: result.message });
				toast.error(result.message);
			}
		});
	};

	const isSubmitting = form.formState.isSubmitting || isPending;

	return (
		<FormProvider {...form}>
			<form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col gap-3 my-6 w-full max-w-lg">
				{form.formState.errors.root && (
					<div className="space-y-2">
						<p className="text-red-500 text-center">{form.formState.errors.root.message}</p>
					</div>
				)}

				<InputField name="name" type="text" label="Name" placeholder="Enter your name" />
				<InputField name="email" type="email" label="Email" placeholder="Enter your email" />
				<InputField name="password" type="password" label="Password" placeholder="Enter your password" />
				<InputField
					name="confirmPassword"
					type="password"
					label="Confirm Password"
					placeholder="Confirm your password"
				/>

				<Button type="submit" className="mt-4" disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<Spinner />
							Signing up...
						</>
					) : (
						"Sign up"
					)}
				</Button>
			</form>
		</FormProvider>
	);
}
