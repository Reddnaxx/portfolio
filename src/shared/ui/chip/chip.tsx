import clsx from "clsx";
import React from "react";

import styles from "./chip.module.scss";
import type { ChipProps } from "./chip.props";

function Chip({ title, icon, color, size }: ChipProps) {
	return (
		<div
			className={clsx(styles["chip"], {
				[styles["chip_small"]]: size === "small",
			})}
			style={{ backgroundColor: color ?? "var(--app-primary)" }}
		>
			{icon}
			<p>{title}</p>
		</div>
	);
}

export default Chip;
