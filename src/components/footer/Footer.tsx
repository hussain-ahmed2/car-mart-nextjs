"use client";

import { footerData } from "@/data/footer-data";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import FooterLinks from "./FooterLinks";
import { AppStoreIcon, PlayStoreIcon } from "../icons/extra.icons";
import { ArrowUp, Dot, Facebook, Instagram, Linkedin, Twitter } from "lucide-react";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

export default function Footer() {
	const pathname = usePathname();
	const isRoot = pathname === "/";

	return (
		<footer
			className={cn(
				"bg-foreground text-background dark:bg-background dark:text-foreground",
				isRoot ? "-mt-12 pt-12 sm:pt-20" : "pt-px sm:pt-8",
			)}
		>
			<div className="px-4">
				<div className="w-full max-w-7xl mx-auto">
					<div className="grid md:grid-cols-2 my-12 gap-4">
						<div>
							<h2 className="h2 mb-1">Join CarMart</h2>
							<p>Receive pricing updates, shopping tips & more!</p>
						</div>

						<div className="flex justify-end items-center">
							<div className="bg-white/10 p-2 rounded-full flex items-center w-full md:max-w-md">
								<Input placeholder="your email address" className="focus:ring-0! border-none" />
								<Button className="rounded-full" variant={"secondary"}>
									Sign Up
								</Button>
							</div>
						</div>
					</div>

					<Separator className="bg-muted-foreground" />

					<div className="my-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
						{footerData.map((data) => (
							<FooterLinks key={data.title} data={data} />
						))}

						<div className="flex flex-col lg:items-end max-lg:col-span-2">
							<div className="max-lg:grid max-lg:grid-cols-2 sm:gap-4 max-sm:grid-cols-1">
								<div>
									<h3 className="text-base font-bold mb-4">Our Mobile App</h3>

									<div className="space-y-4 my-2 flex flex-col w-fit">
										<div className="rounded-xl flex items-center gap-4 p-4 bg-white/10 md:px-5 lg:px-6 justify-center">
											<div>
												<AppStoreIcon />
											</div>
											<div>
												<p className="text-xs">Download on the</p>
												<p className="font-medium">App Store</p>
											</div>
										</div>
										<div className="rounded-xl flex items-center gap-4 p-4 bg-white/10 md:px-5 lg:px-6 justify-center">
											<div>
												<PlayStoreIcon />
											</div>
											<div>
												<p className="text-xs">Get it on</p>
												<p className="font-medium">Google Play</p>
											</div>
										</div>
									</div>
								</div>

								<div>
									<h3 className="text-base font-bold mt-4">Connect With Us</h3>

									<div className="mt-2 space-x-4">
										<Button variant={"ghost"} size={"icon"}>
											<Facebook />
										</Button>
										<Button variant={"ghost"} size={"icon"}>
											<Twitter />
										</Button>
										<Button variant={"ghost"} size={"icon"}>
											<Instagram />
										</Button>
										<Button variant={"ghost"} size={"icon"}>
											<Linkedin />
										</Button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="border-t border-t-muted-foreground flex items-center px-4 relative">
				<div className="w-full max-w-7xl mx-auto flex justify-between items-center py-12">
					<p className="">&copy; {new Date().getFullYear()} CarMart. All rights reserved.</p>

					<p className="flex items-center">
						<span>Privacy Policy</span> <Dot />
						<span>Terms of Use</span>
					</p>
				</div>

				<Button
					className="bg-cyan-500 hover:bg-cyan-500/90 rounded-full max-xl:ml-4 xl:absolute xl:top-1/2 xl:right-4 xl:-translate-y-1/2"
					size="icon-lg"
					onClick={() => {
						window.scrollTo({ top: 0, behavior: "smooth" });
					}}
				>
					<ArrowUp />
				</Button>
			</div>
		</footer>
	);
}
