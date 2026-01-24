import { User } from "lucide-react";
import { Avatar } from "../custom-ui/Avatar";
import { getAvatarText } from "@/lib/utils";
import Link from "next/link";
import { getAuth } from "@/lib/session";

export default async function MobileAuth() {
	const auth = await getAuth();

	return (
		<>
			{!!!auth ? (
				<Link href={"/sign-in"} className="flex flex-col gap-1 justify-center items-center flex-1 p-2">
					<span>
						<User />
					</span>
					<span>Sign In</span>
				</Link>
			) : (
				<Link href={"/profile"} className="flex flex-col gap-1 justify-center items-center flex-1 p-2">
					<Avatar className="size-6" src={auth.user.image || ""} alt={auth.user.name} />
					<span>{getAvatarText(auth.user.name)}</span>
				</Link>
			)}
		</>
	);
}
