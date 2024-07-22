import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
	className?: string;
	style?: CSSProperties;
	type?: "button" | "submit" | "reset";
	btnType?: "button" | "link";
	size?: "small" | "medium" | "large";
	variant?: "filled" | "outlined";
	onClick?: () => MouseEventHandler<HTMLButtonElement> | void;
	href?: string;
	onlyIcon?: boolean;
}
