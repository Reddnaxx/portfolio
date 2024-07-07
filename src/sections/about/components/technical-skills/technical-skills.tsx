import React from "react";
import Chip from "@/shared/ui/chip/chip";
import Image from "next/image";
import styles from "./technical-skills.module.scss";
import { technicalSkills } from "@/sections/about/constants/technical-skills";

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
                icon={<Image src={skill.icon} alt="" width={32} height={32} />}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TechnicalSkills;
