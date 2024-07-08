import WelcomeSection from "@/sections/welocome/welcome-section";
import AboutSection from "@/sections/about/about-section";
import styles from "./page.module.scss";
import ProjectsSection from "@/sections/projects/projects-section";
import ContactsSection from "@/sections/contacts/contacts-section";

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
