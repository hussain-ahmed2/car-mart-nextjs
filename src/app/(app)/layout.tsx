import type { Metadata } from "next";
import { DM_Sans } from "next/font/google";
import "../globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Header from "@/components/header/Header";
import Footer from "@/components/footer/Footer";
import { Toaster } from "@/components/ui/sonner";
import MobileFooter from "@/components/mobile/MobileFooter";

const dmSans = DM_Sans({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Car Mart",
	description: "The best place to buy and sell cars online",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning className="scrollbar-thin scrollbar-track-transparent">
			<body className={`${dmSans.className} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
					<Header />
					<main className="flex flex-col min-h-screen pt-16 w-full">{children}</main>
					<Footer />
					<MobileFooter />
					<Toaster position="top-center" richColors closeButton />
				</ThemeProvider>
			</body>
		</html>
	);
}
