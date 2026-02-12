"use client";

import { tryCatch } from "@/lib/async";
import { Button } from "../ui/button";
import { Github } from "lucide-react";
import { signInWithSocial } from "@/lib/actions/auth.action";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export default function SignInWithGithubButton() {
	const router = useRouter();

	const handleClick = async () => {
		const [error, result] = await tryCatch(() => signInWithSocial("github"));
		if (error) toast.error(error.message);
		else if (result.success) {
			if (result.data.url) router.push(result.data.url);
		} else toast.error(result.message);
	};

	return (
		<Button onClick={handleClick} variant="outline">
			<Github />
			<span>Sign In with GitHub</span>
		</Button>
	);
}
