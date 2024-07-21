import Image from "next/image";
import React from "react";

import Chip from "@/shared/ui/chip/chip";

import styles from "./stack-list.module.scss";
import { StackListProps } from "./stack-list.props";

function StackList({ stack }: StackListProps) {
	return (
		<ul className={styles["stack"]}>
			{stack.map((item, index) => {
				return (
					<li
						key={index}
						className={styles["stack-item"]}
					>
						<Chip
							title={item.title}
							size={"small"}
							icon={
								<Image
									src={item.icon}
									alt=""
									width={24}
									height={24}
								/>
							}
							color={item.color}
						/>
					</li>
				);
			})}
		</ul>
	);
}

export default StackList;
