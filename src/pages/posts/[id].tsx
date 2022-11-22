import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import SEO from "../../components/SEO";

import styles from "./post.module.scss";

export default function Post() {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SEO title="Post" />

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>Title</h1>
          <p>Body</p>
        </article>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async (context) => {
  const router = useRouter();
  const { id } = router.query;
  // const { id } = context.params;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const comments = await response.json();

  return {
    props: {},
  };
};
