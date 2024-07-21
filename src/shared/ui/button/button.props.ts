import { CSSProperties, MouseEventHandler, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
	className?: string;
	style?: CSSProperties;
	type?: "button" | "submit" | "reset";
	size?: "small" | "medium" | "large";
	variant?: "filled" | "outlined";
	onClick?: () => MouseEventHandler<HTMLButtonElement> | void;
	onlyIcon?: boolean;
}
