import clsx from "clsx";
import type { Metadata } from "next";
import { Anton, Montserrat, Ubuntu } from "next/font/google";
import React from "react";

import Providers from "@/app/providers";
import { navigations } from "@/shared/constants/navigation/navigations";
import Header from "@/shared/ui/header/header";
import Modal from "@/shared/ui/modal/modal";
import ReturnTop from "@/shared/ui/return-top/return-top";

import "./globals.scss";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const anton = Anton({
	weight: "400",
	subsets: ["latin"],
	variable: "--app-anton",
});
const ubuntu = Ubuntu({
	weight: ["300", "400", "500", "700"],
	subsets: ["latin", "cyrillic"],
	variable: "--app-ubuntu",
});
const montserrat = Montserrat({
	subsets: ["latin", "cyrillic"],
	variable: "--app-montserrat",
});

export const metadata: Metadata = {
	title: "Alexander Rukavishnkiov | Portfolio",
	description: "Alexander Rukavishnkiov's frontend portfolio",
	category: "frontend",
	keywords: ["frontend", "Rukavishnkiov", "Alexander", "portfolio"],
	creator: "Alexander Rukavishnkiov",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={clsx(montserrat.className, anton.variable, ubuntu.variable)}
			>
				<Providers>
					<Header navigations={navigations} />
					<ReturnTop />
					{children}
					<Modal />
				</Providers>
			</body>
		</html>
	);
}
