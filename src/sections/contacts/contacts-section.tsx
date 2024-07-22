import React from "react";

import styles from "./contacts-section.module.scss";

function ContactsSection() {
	return (
		<>
			<span
				className="section-spacer"
				id="contacts-section"
			/>
			<section className={styles["contacts-section"]}>
				<p style={{ fontSize: "3rem", color: "#00ff51" }}>IN PROGRESS...</p>
			</section>
		</>
	);
}

export default ContactsSection;
