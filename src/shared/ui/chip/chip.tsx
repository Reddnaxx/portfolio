import React from "react";
import type { ChipProps } from "./chip.props";
import styles from "./chip.module.scss";

function Chip({ title, icon, color }: ChipProps) {
  return (
    <div
      className={styles["chip"]}
      style={{ backgroundColor: color ?? "var(--app-primary)" }}
    >
      {icon}
      <p>{title}</p>
    </div>
  );
}

export default Chip;
