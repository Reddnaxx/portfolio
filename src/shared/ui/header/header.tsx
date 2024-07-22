"use client";

import clsx from "clsx";
import React, { useContext, useEffect } from "react";

import { NavigationContext } from "@/app/providers";

import HeaderFullNavbar from "./components/header-full-navbar";
import styles from "./header.module.scss";
import type { HeaderProps } from "./header.props";

function Header({ className, navigations }: HeaderProps) {
	const { setSection, currentSection } = useContext(NavigationContext);

	useEffect(() => {
		const hash = window.location.hash;
		const index = navigations.findIndex(nav => nav.url === hash);
		setSection(index === -1 ? 0 : index);
	}, [navigations, setSection]);

	return (
		<header className={clsx(styles["header"], className)}>
			<HeaderFullNavbar
				navigations={navigations}
				currentSection={currentSection}
				setCurrentSection={setSection}
			/>
		</header>
	);
}

export default Header;
