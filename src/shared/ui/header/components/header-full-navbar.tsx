import React from "react";
import clsx from "clsx";
import { HeaderFullNavbarProps } from "./header-full-navbar.props";
import styles from "./header-full-navbar.module.scss";

function HeaderFullNavbar({
  navigations,
  currentSection,
  setCurrentSection,
}: HeaderFullNavbarProps) {
  return (
    <nav className={styles["navbar"]}>
      {navigations.map((navigation, index) => {
        return (
          <a
            key={index}
            className={clsx(styles["navbar__link"], {
              [styles["navbar__link_active"]]: currentSection === index,
            })}
            href={navigation.url}
            onClick={() => setCurrentSection(index)}
          >
            {navigation.title}
          </a>
        );
      })}
      <span
        style={{
          width: `${100 / navigations.length}%`,
          left: `${(100 / navigations.length) * currentSection}%`,
        }}
        className={styles["navbar__active"]}
      />
    </nav>
  );
}

export default HeaderFullNavbar;
