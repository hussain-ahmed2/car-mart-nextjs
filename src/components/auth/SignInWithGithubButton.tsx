import { useServerFn } from "@tanstack/react-start";
import { Button } from "../ui/button";
import { signInWithGithubFn } from "@/server/auth.fn";
import { Github } from "lucide-react";
import { useRouter } from "@tanstack/react-router";

export default function LoginWithGithubButton() {
	const signInWithGithub = useServerFn(signInWithGithubFn);
	const router = useRouter();

	const handleClick = async () => {
		try {
			const result = await signInWithGithub();
			console.log("GitHub sign-in successful:", result);
			router.navigate({ href: result.url });
		} catch (error) {
			console.error("GitHub sign-in failed:", error);
		}
	};

	return (
		<Button onClick={handleClick} variant="outline">
			<Github />
			<span>Sign In with GitHub</span>
		</Button>
	);
}
