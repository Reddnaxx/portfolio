import React from "react";
import Chip from "@/shared/ui/chip/chip";
import Image from "next/image";
import { personalQualities } from "@/sections/about/constants/personal-qualities";
import styles from "./personal-qualities.module.scss";

function PersonalQualities() {
  return (
    <div className={styles["personal-qualities"]}>
      <h3>Personal qualities</h3>
      <ul>
        {personalQualities.map((personalQuality, index) => {
          return (
            <li key={index}>
              <Chip
                title={personalQuality.title}
                color={personalQuality.color}
                icon={
                  <Image
                    src={personalQuality.icon}
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

export default PersonalQualities;
