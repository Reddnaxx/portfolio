import React from "react";

import styles from "./contacts-section.module.scss";

function ContactsSection() {
	return (
		<>
			<span
				className="section-spacer"
				id="contacts-section"
			/>
			<section className={styles["contacts-section"]}></section>
		</>
	);
}

export default ContactsSection;
