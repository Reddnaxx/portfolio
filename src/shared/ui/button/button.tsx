"use client";

import clsx from "clsx";
import React from "react";

import styles from "./button.module.scss";
import type { ButtonProps } from "./button.props";

const initialProps = {
	type: "button",
	size: "medium",
	variant: "filled",
} satisfies ButtonProps;

function Button({
	onClick,
	children,
	className,
	onlyIcon,
	style,
	variant = initialProps.variant,
	size = initialProps.size,
	type = initialProps.type,
}: ButtonProps) {
	const cn = clsx(
		className,
		styles["btn"],
		{
			[styles["btn_small"]]: size === "small",
			[styles["btn_medium"]]: size === "medium",
			[styles["btn_large"]]: size === "large",
		},
		{
			[styles["btn_filled"]]: variant === "filled",
			[styles["btn_outlined"]]: variant === "outlined",
		},
		{
			[styles["btn_icon"]]: onlyIcon,
		},
	);

	return (
		<button
			style={style}
			className={cn}
			type={type}
			onClick={onClick}
		>
			{children}
		</button>
	);
}

export default Button;
