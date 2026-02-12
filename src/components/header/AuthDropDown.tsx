import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Avatar } from "../custom-ui/Avatar";
import SignOutButton from "../auth/SignOutButton";
import { User as UserIcon, Settings, LayoutDashboard } from "lucide-react";
import Link from "next/link";
import { auth } from "@/lib/auth";

export default function AuthDropDown({ session }: { session: typeof auth.$Infer.Session }) {
	return (
		<div className="flex items-center justify-center">
			<DropdownMenu>
				<DropdownMenuTrigger className="h-auto w-auto p-0 rounded-full focus:outline-none">
					<Avatar
						className="size-9 ring-1 ring-border hover:ring-primary transition"
						src={session.user.image || ""}
						alt={session.user.name}
					/>
				</DropdownMenuTrigger>

				<DropdownMenuContent align="end">
					{/* User Info */}
					<DropdownMenuLabel>
						<div className="flex items-center gap-3">
							<Avatar className="size-8" src={session.user.image || ""} />
							<div>
								<p className="text-sm font-medium">{session.user.name}</p>
								<p className="text-xs text-muted-foreground line-clamp-1">{session.user.email}</p>
							</div>
						</div>
					</DropdownMenuLabel>

					<DropdownMenuSeparator />

					{/* Links */}
					<DropdownMenuItem asChild>
						<Link href="/profile" className="flex items-center gap-2">
							<UserIcon className="size-4" />
							Profile
						</Link>
					</DropdownMenuItem>

					<DropdownMenuItem asChild>
						<Link href="/dashboard" className="flex items-center gap-2">
							<LayoutDashboard className="size-4" />
							Dashboard
						</Link>
					</DropdownMenuItem>

					<DropdownMenuItem asChild>
						<Link href="/dashboard/settings" className="flex items-center gap-2">
							<Settings className="size-4" />
							Settings
						</Link>
					</DropdownMenuItem>

					<DropdownMenuSeparator />

					{/* Sign out */}
					<DropdownMenuItem className="text-red-600 focus:text-red-600" asChild>
						<SignOutButton />
					</DropdownMenuItem>
				</DropdownMenuContent>
			</DropdownMenu>
		</div>
	);
}
