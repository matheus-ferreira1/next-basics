import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import SEO from "../../components/SEO";

import styles from "./post.module.scss";

interface PostData {
  0: {
    id: string;
    title: string;
    body: string;
  };
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
              <span>
                <h2>Comments:</h2>
              </span>
              {comments.map((comment: any) => (
                <li key={comment.id}>
                  <h4>
                    Comment by: {comment.name} | {comment.email}
                  </h4>
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
