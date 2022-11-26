import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import SEO from "../../components/SEO";

import styles from "./post.module.scss";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface Comments {
  id: string;
  name: string;
  email: string;
  body: string;
}

export default function Post({ post, comments }: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <SEO title="Post" />

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <div className={styles.content}>
            <p>{post.body}</p>
            <ul>
              {comments.map((comment) => (
                <li key={comment.id}>
                  <h4>{comment.name}</h4>
                  <p>{comment.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </article>
      </main>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { id } = context.query;
  console.log(id);

  const [post, comments] = await Promise.all([
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
      res.json()
    ),
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then(
      (res) => res.json()
    ),
  ]);

  return {
    props: { post, comments },
  };
};
