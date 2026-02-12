"use client";

import {
	Bell,
	Car,
	ChevronDown,
	LayoutDashboard,
	LogOut,
	Menu,
	MessageSquare,
	Settings,
	Star,
	Tags,
	Users,
	X,
} from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import Link from "next/link";

interface SidebarLink {
	label: string;
	href: string;
	icon: React.ElementType;
	badge?: number;
}

const sidebarLinks: SidebarLink[] = [
	{ label: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
	{ label: "Vehicles", href: "/dashboard/vehicles", icon: Car },
	{ label: "Users", href: "/dashboard/users", icon: Users },
	{ label: "Categories", href: "/dashboard/categories", icon: Tags },
	{ label: "Messages", href: "/dashboard/messages", icon: MessageSquare },
	{ label: "Reviews", href: "/dashboard/reviews", icon: Star },
	{ label: "Settings", href: "/dashboard/settings", icon: Settings },
];

interface AdminLayoutProps {
	children: React.ReactNode;
	user?: {
		name: string;
		email: string;
		image?: string;
	};
	pendingCount?: number;
	unreadMessages?: number;
}

export function AdminLayout({ children, user, pendingCount = 0, unreadMessages = 0 }: AdminLayoutProps) {
	const [sidebarOpen, setSidebarOpen] = useState(false);
	const pathname = usePathname();

	const isActiveLink = (href: string) => {
		if (href === "/dashboard") {
			return pathname === "/dashboard" || pathname === "/dashboard/";
		}
		return pathname.startsWith(href);
	};

	const getBadge = (label: string) => {
		if (label === "Vehicles" && pendingCount > 0) return pendingCount;
		if (label === "Messages" && unreadMessages > 0) return unreadMessages;
		return undefined;
	};

	return (
		<div className="flex h-screen bg-gray-100">
			{/* Mobile sidebar overlay */}
			{sidebarOpen && (
				<button
					type="button"
					className="fixed inset-0 z-40 bg-black/50 lg:hidden w-full h-full border-none cursor-pointer"
					onClick={() => setSidebarOpen(false)}
					aria-label="Close sidebar"
				/>
			)}

			{/* Sidebar */}
			<aside
				className={cn(
					"fixed inset-y-0 left-0 z-50 flex w-64 flex-col bg-gray-900 transition-transform duration-300 lg:static lg:translate-x-0",
					sidebarOpen ? "translate-x-0" : "-translate-x-full",
				)}
			>
				{/* Logo */}
				<div className="flex h-16 items-center justify-between border-b border-gray-800 px-6">
					<Link href="/" className="flex items-center gap-2">
						<Car className="h-8 w-8 text-blue-500" />
						<span className="text-xl font-bold text-white">CarMarket</span>
					</Link>
					<button
						type="button"
						onClick={() => setSidebarOpen(false)}
						className="text-gray-400 hover:text-white lg:hidden"
					>
						<X className="h-6 w-6" />
					</button>
				</div>

				{/* Navigation */}
				<ScrollArea className="flex-1 px-3 py-4">
					<nav className="space-y-1">
						{sidebarLinks.map((link) => {
							const Icon = link.icon;
							const isActive = isActiveLink(link.href);
							const badge = getBadge(link.label);

							return (
								<Link
									key={link.href}
									href={link.href}
									className={cn(
										"flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
										isActive
											? "bg-blue-600 text-white"
											: "text-gray-300 hover:bg-gray-800 hover:text-white",
									)}
									onClick={() => setSidebarOpen(false)}
								>
									<Icon className="h-5 w-5" />
									<span className="flex-1">{link.label}</span>
									{badge && (
										<span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-red-500 px-1.5 text-xs font-semibold text-white">
											{badge}
										</span>
									)}
								</Link>
							);
						})}
					</nav>
				</ScrollArea>

				{/* User section */}
				<div className="border-t border-gray-800 p-4">
					<div className="flex items-center gap-3">
						<Avatar className="h-10 w-10">
							<AvatarImage src={user?.image} />
							<AvatarFallback className="bg-blue-600 text-white">
								{user?.name?.charAt(0)?.toUpperCase() || "A"}
							</AvatarFallback>
						</Avatar>
						<div className="flex-1 min-w-0">
							<p className="text-sm font-medium text-white truncate">{user?.name || "Admin"}</p>
							<p className="text-xs text-gray-400 truncate">{user?.email || "admin@example.com"}</p>
						</div>
					</div>
				</div>
			</aside>

			{/* Main content */}
			<div className="flex flex-1 flex-col overflow-hidden">
				{/* Top header */}
				<header className="flex h-16 items-center justify-between border-b bg-white px-4 lg:px-6">
					<button
						type="button"
						onClick={() => setSidebarOpen(true)}
						className="text-gray-600 hover:text-gray-900 lg:hidden"
					>
						<Menu className="h-6 w-6" />
					</button>

					{/* Breadcrumb placeholder */}
					<div className="hidden lg:block">
						<h1 className="text-lg font-semibold text-gray-900">Admin Dashboard</h1>
					</div>

					{/* Right side actions */}
					<div className="flex items-center gap-4">
						{/* Notifications */}
						<Button variant="ghost" size="icon" className="relative">
							<Bell className="h-5 w-5" />
							{(pendingCount > 0 || unreadMessages > 0) && (
								<span className="absolute -right-1 -top-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-[10px] font-bold text-white">
									{pendingCount + unreadMessages}
								</span>
							)}
						</Button>

						{/* User menu */}
						<DropdownMenu>
							<DropdownMenuTrigger asChild>
								<Button variant="ghost" className="flex items-center gap-2">
									<Avatar className="h-8 w-8">
										<AvatarImage src={user?.image} />
										<AvatarFallback className="bg-blue-600 text-white text-sm">
											{user?.name?.charAt(0)?.toUpperCase() || "A"}
										</AvatarFallback>
									</Avatar>
									<span className="hidden md:inline-block">{user?.name || "Admin"}</span>
									<ChevronDown className="h-4 w-4" />
								</Button>
							</DropdownMenuTrigger>
							<DropdownMenuContent align="end" className="w-56">
								<DropdownMenuLabel>My Account</DropdownMenuLabel>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/profile">Profile</Link>
								</DropdownMenuItem>
								<DropdownMenuItem asChild>
									<Link href="/dashboard/settings">Settings</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem asChild>
									<Link href="/">View Site</Link>
								</DropdownMenuItem>
								<DropdownMenuSeparator />
								<DropdownMenuItem className="text-red-600">
									<LogOut className="mr-2 h-4 w-4" />
									Sign Out
								</DropdownMenuItem>
							</DropdownMenuContent>
						</DropdownMenu>
					</div>
				</header>

				{/* Main content area */}
				<main className="flex-1 overflow-auto bg-gray-50 p-4 lg:p-6">{children}</main>
			</div>
		</div>
	);
}
