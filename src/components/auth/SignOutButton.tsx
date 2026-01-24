"use client";

import { signOut } from "@/lib/session";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useTransition } from "react";
import { Spinner } from "../ui/spinner";

export default function SignOutButton() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();

	async function signOutHandler() {
		startTransition(async () => {
			const result = await signOut();
			if (result.success) {
				toast.success("Signed out successfully!");
				router.push("/sign-in");
			}
		});
	}

	return (
		<Button onClick={signOutHandler} disabled={isPending} variant="destructive" size="sm" className="w-full">
			{isPending ? (
				<>
					<Spinner />
					<span>Signing Out...</span>
				</>
			) : (
				<span>Sign Out</span>
			)}
		</Button>
	);
}
