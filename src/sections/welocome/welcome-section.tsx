import Image from "next/image";
import React from "react";

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
					<Button
						size="large"
						className={styles["contact-btn"]}
					>
						Contact me!
					</Button>
				</div>
				<div className={styles["right-container"]}>
					<Image
						src="/img/face.jpg"
						alt=""
						className={styles["face"]}
						fetchPriority="high"
						width={500}
						height={500}
					/>
					<div className={styles["face__bg"]} />
				</div>
			</section>
		</>
	);
}

export default WelcomeSection;
