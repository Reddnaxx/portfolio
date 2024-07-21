import Image from "next/image";
import React from "react";

import { technicalSkills } from "@/sections/about/constants/technical-skills";
import Chip from "@/shared/ui/chip/chip";

import styles from "./technical-skills.module.scss";

function TechnicalSkills() {
	return (
		<div className={styles["technical-skills"]}>
			<h3>Technical skills</h3>
			<ul>
				{technicalSkills.map((skill, index) => {
					return (
						<li key={index}>
							<Chip
								title={skill.title}
								color={skill.color}
								icon={
									<Image
										src={skill.icon}
										alt=""
										width={32}
										height={32}
									/>
								}
							/>
						</li>
					);
				})}
			</ul>
		</div>
	);
}

export default TechnicalSkills;
