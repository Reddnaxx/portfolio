import React from "react";
import PersonalQualities from "./components/personal-qualities/personal-qualities";
import TechnicalSkills from "./components/technical-skills/technical-skills";
import styles from "./about-section.module.scss";

function AboutSection() {
  return (
    <>
      <span className="section-spacer" id="about-section" />
      <section className={styles["about-section"]}>
        <h2>About me</h2>
        <p className={styles["about-section__about"]}>
          I am studying at the Ural Federal University in the direction of
          <span> software engineering</span> in the 3rd year. <br /> Looking for
          a job as a frontend developer in order to further develop in an area
          of interest to me.
        </p>
        <div className={styles["about-section__content"]}>
          <PersonalQualities />
          <TechnicalSkills />
        </div>
      </section>
    </>
  );
}

export default AboutSection;
