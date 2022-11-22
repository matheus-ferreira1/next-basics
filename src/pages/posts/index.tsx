import { GetStaticProps } from "next";
import Link from "next/link";
import SEO from "../../components/SEO";

import styles from "./posts.module.scss";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <>
      <SEO title="Posts" />

      <main className={styles.container}>
        <div className={styles.posts}>
          {posts.map((post) => (
            <Link href={`/posts/${post.id}`} key={post.id}>
              <strong>{post.title}</strong>
              <p>{post.body}</p>
            </Link>
          ))}
        </div>
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: { posts },
    revalidate: 60 * 60 * 12, //12 horas
  };
};
