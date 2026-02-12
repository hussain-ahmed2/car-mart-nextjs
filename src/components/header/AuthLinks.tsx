import { Button } from "../ui/button";
import { User } from "lucide-react";
import AuthDropDown from "./AuthDropDown";
import Link from "next/link";
import { getSession } from "@/lib/actions/auth.action";

export default async function AuthLinks() {
	const session = await getSession();
	return (
		<div className="flex items-center gap-2">
			{!session.success ? (
				<Button size="icon" variant="secondary" className="rounded-full drop-shadow" asChild>
					<Link href="/sign-in">
						<User />
					</Link>
				</Button>
			) : (
				<AuthDropDown session={session.data} />
			)}
		</div>
	);
}
