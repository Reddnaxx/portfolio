import React from "react";
import styles from "./projects-section.module.scss";

function ProjectsSection() {
  return (
    <>
      <span className="section-spacer" id="projects-section" />
      <section className={styles["projects-section"]}></section>
    </>
  );
}

export default ProjectsSection;
