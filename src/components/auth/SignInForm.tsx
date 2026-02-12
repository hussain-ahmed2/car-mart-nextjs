"use client";

import { SignInData, signInSchema } from "@/lib/validations/auth.validation";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "../form/InputField";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { signIn } from "@/lib/actions/auth.action";
import { useRouter } from "next/navigation";
import { tryCatch } from "@/lib/async";
import { useTransition } from "react";
import { cn } from "@/lib/utils";
import { Spinner } from "../ui/spinner";

export default function SignInForm() {
	"use no memo";
	const form = useForm({ resolver: zodResolver(signInSchema) });
	const router = useRouter();
	const [isPending, startTransition] = useTransition();

	const onSubmit = async (data: SignInData) => {
		startTransition(async () => {
			const [error, result] = await tryCatch(() => signIn(data));
			if (error) {
				toast.error(error.message);
				form.setError("root", { message: error.message });
				return;
			}

			if (result.success) {
				toast.success("Signed in successfully!");
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
			<form onSubmit={form.handleSubmit(onSubmit)} className={cn("flex flex-col gap-3 my-6 w-full max-w-lg")}>
				{form.formState.errors.root && (
					<div className="space-y-2">
						<p className="text-red-500 text-center">{form.formState.errors.root.message}</p>
					</div>
				)}
				<InputField name="email" type="email" label="Email" placeholder="Enter your email" />
				<InputField name="password" type="password" label="Password" placeholder="Enter your password" />

				<Button type="submit" className="mt-4" disabled={isSubmitting}>
					{isSubmitting ? (
						<>
							<Spinner />
							Signing in...
						</>
					) : (
						"Sign In"
					)}
				</Button>
			</form>
		</FormProvider>
	);
}
