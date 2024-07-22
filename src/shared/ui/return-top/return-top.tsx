"use client";

import clsx from "clsx";
import Image from "next/image";
import React, { useContext } from "react";

import { NavigationContext } from "@/app/providers";
import Button from "@/shared/ui/button/button";

import styles from "./return-top.module.scss";

function ReturnTop() {
	const { currentSection, setSection } = useContext(NavigationContext);

	return (
		<Button
			size={"small"}
			className={clsx(styles["return-top"], {
				[styles["return-top_active"]]: currentSection !== 0,
			})}
			onClick={() => setSection(0)}
			onlyIcon
		>
			<Image
				src="/svg/arrow-up.svg"
				alt=""
				width={24}
				height={24}
			/>
		</Button>
	);
}

export default ReturnTop;
