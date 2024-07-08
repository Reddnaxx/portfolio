import React from "react";
import Image from "next/image";
import Button from "@/shared/ui/button/button";
import styles from "./welcome-section.module.scss";

function WelcomeSection() {
  return (
    <>
      <span id="welcome-section" />
      <section className={styles["welcome-section"]}>
        <div className={styles["left-container"]}>
          <h1 className={styles["hello"]}>
            Hi,
            <br />
            I’m Alexander,
            <br />
            Front-end developer
          </h1>
          <Button size="large" className={styles["contact-btn"]}>
            Contact me!
          </Button>
        </div>
        <div className={styles["right-container"]}>
          <Image
            src="/face.jpg"
            alt=""
            className={styles["face"]}
            fetchPriority="high"
            width={600}
            height={600}
          />
          <div className={styles["face__bg"]} />
        </div>
      </section>
    </>
  );
}

export default WelcomeSection;
