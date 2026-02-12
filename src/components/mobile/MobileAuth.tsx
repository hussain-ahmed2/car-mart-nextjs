import { User } from "lucide-react";
import { Avatar } from "../custom-ui/Avatar";
import { getAvatarText } from "@/lib/utils";
import Link from "next/link";
import { getSession } from "@/lib/actions/auth.action";

export default async function MobileAuth() {
	const session = await getSession();

	return (
		<>
			{!session.success ? (
				<Link href={"/sign-in"} className="flex flex-col gap-1 justify-center items-center flex-1 p-2">
					<span>
						<User />
					</span>
					<span>Sign In</span>
				</Link>
			) : (
				<Link href={"/profile"} className="flex flex-col gap-1 justify-center items-center flex-1 p-2">
					<Avatar className="size-6" src={session.data.user.image || ""} alt={session.data.user.name} />
					<span>{getAvatarText(session.data.user.name)}</span>
				</Link>
			)}
		</>
	);
}
