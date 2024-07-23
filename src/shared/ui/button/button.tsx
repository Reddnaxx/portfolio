"use client";

import clsx from "clsx";
import React from "react";

import styles from "./button.module.scss";
import type { ButtonProps } from "./button.props";

const initialProps = {
	type: "button",
	size: "medium",
	variant: "filled",
	btnType: "button",
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
	btnType = initialProps.btnType,
	href,
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
		<>
			{btnType === "link" ? (
				<a style={style} className={cn} onClick={onClick} href={href}>
					{children}
				</a>
			) : (
				<button style={style} className={cn} type={type} onClick={onClick}>
					{children}
				</button>
			)}
		</>
	);
}

export default Button;
