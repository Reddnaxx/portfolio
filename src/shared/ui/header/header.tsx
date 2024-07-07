"use client";

import React, { useEffect, useState } from "react";
import clsx from "clsx";
import HeaderFullNavbar from "./components/header-full-navbar";
import type { HeaderProps } from "./header.props";
import styles from "./header.module.scss";

function Header({ className, navigations }: HeaderProps) {
  const [currentSection, setCurrentSection] = useState<number>(0);

  useEffect(() => {
    const hash = window.location.hash;
    const index = navigations.findIndex(nav => nav.url === hash);
    setCurrentSection(index === -1 ? 0 : index);
  }, [navigations]);

  return (
    <header className={clsx(styles["header"], className)}>
      <HeaderFullNavbar
        navigations={navigations}
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
    </header>
  );
}

export default Header;
