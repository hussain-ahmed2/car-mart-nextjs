import SignInForm from "@/components/auth/SignInForm";
import SignInWithGithubButton from "@/components/auth/SignInWithGithubButton";
import Link from "next/link";

export default async function SignInPage() {
	return (
		<div className="flex flex-col flex-1 justify-center items-center">
			<section className="w-full max-w-lg p-4">
				<div className="space-y-2 mb-4">
					<h1 className="h1">Sign In</h1>
					<p className="text-muted-foreground">
						Welcome back! Please enter your credentials to access your account.
					</p>
				</div>
				<SignInForm />

				<div>
					<p className="text-center text-sm text-muted-foreground flex items-center">
						<span className="flex-1 border-t"></span>
						<span>Or Continue with</span>
						<span className="flex-1 border-t"></span>
					</p>
					<div className="flex flex-col mt-4">
						<SignInWithGithubButton />
					</div>
				</div>

				<div className="my-4">
					<p className="text-muted-foreground">
						Don&apos;t have an account?{" "}
						<Link href="/sign-up" className="text-primary underline">
							Sign Up
						</Link>
					</p>
				</div>
			</section>
		</div>
	);
}
