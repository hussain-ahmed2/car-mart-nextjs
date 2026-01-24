import { Button } from "../ui/button";
import { User } from "lucide-react";
import AuthDropDown from "./AuthDropDown";
import Link from "next/link";
import { getAuth } from "@/lib/session";

export default async function AuthLinks() {
	const auth = await getAuth();
	return (
		<div className="flex items-center gap-2">
			{!!!auth ? (
				<Button size="icon" variant="secondary" className="rounded-full drop-shadow" asChild>
					<Link href="/sign-in">
						<User />
					</Link>
				</Button>
			) : (
				<AuthDropDown auth={auth} />
			)}
		</div>
	);
}
