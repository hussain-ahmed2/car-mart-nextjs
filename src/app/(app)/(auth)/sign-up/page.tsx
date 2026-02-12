import SignUpForm from "@/components/auth/SignUpForm";
import Link from "next/link";

export default function SignUpPage() {
	return (
		<div className="flex flex-col flex-1 justify-center items-center">
			<section className="w-full max-w-lg p-4">
				<div className="space-y-2 mb-4">
					<h1 className="h1">Sign Up</h1>
					<p className="text-muted-foreground">Create a new account to get started.</p>
				</div>

				<div className="space-y-4">
					<SignUpForm />
				</div>

				<div className="my-4">
					<p className="text-muted-foreground">
						Already have an account?{" "}
						<Link href="/sign-in" className="text-primary underline">
							Sign In
						</Link>
					</p>
				</div>
			</section>
		</div>
	);
}
