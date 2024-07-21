"use client";

import clsx from "clsx";
import React, { useEffect } from "react";

import { useSectionNavigation } from "@/shared/hooks/useSectionNavigation";

import HeaderFullNavbar from "./components/header-full-navbar";
import styles from "./header.module.scss";
import type { HeaderProps } from "./header.props";

function Header({ className, navigations }: HeaderProps) {
	const { setCurrentSection, currentSection } = useSectionNavigation();

	useEffect(() => {
		const hash = window.location.hash;
		const index = navigations.findIndex(nav => nav.url === hash);
		setCurrentSection(index === -1 ? 0 : index);
	}, [navigations, setCurrentSection]);

	return (
		<header className={clsx(styles["header"], className)}>
			<HeaderFullNavbar
				navigations={navigations}
				currentSection={currentSection}
				setCurrentSection={setCurrentSection}
			/>
		</header>
	);
}

export default Header;
