import AboutSection from "@/sections/about/about-section";
import ContactsSection from "@/sections/contacts/contacts-section";
import ProjectsSection from "@/sections/projects/projects-section";
import WelcomeSection from "@/sections/welocome/welcome-section";

import styles from "./page.module.scss";

export default function Home() {
	return (
		<main className={styles["main"]}>
			<WelcomeSection />
			<AboutSection />
			<ProjectsSection />
			<ContactsSection />
		</main>
	);
}
