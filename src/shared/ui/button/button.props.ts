import { MouseEventHandler, PropsWithChildren } from "react";

export interface ButtonProps extends PropsWithChildren {
  className?: string;
  type?: "button" | "submit" | "reset";
  size?: "small" | "medium" | "large";
  variant?: "filled" | "outlined";
  onClick?: () => MouseEventHandler<HTMLButtonElement>;
  onlyIcon?: boolean;
}
