import SEO from "../components/SEO";

import styles from "../styles/Home.module.scss";

export default function Home() {
  return (
    <>
      <SEO title="Dev News" excludeTitleSuffix />

      <main className={styles.content}>
        <section className={styles.section}>
          <span>Hello there!</span>
          <h1>
            Welcome to
            <br />
            <span>Dev</span> News!
          </h1>
          <p>
            A blog with full of great <br />
            <span>content to your learning.</span>
          </p>
        </section>
        <img src="/home.svg" alt="Home Image" />
      </main>
    </>
  );
}
