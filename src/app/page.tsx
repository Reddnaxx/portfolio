import WelcomeSection from "@/sections/welocome/welcome-section";
import AboutSection from "@/sections/about/about-section";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <main className={styles["main"]}>
      <WelcomeSection />
      <AboutSection />
    </main>
  );
}
