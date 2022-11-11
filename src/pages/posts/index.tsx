import { GetStaticProps } from "next";

interface Post {
  id: string;
  title: string;
}

interface PostsProps {
  posts: Post[];
}

export default function Posts({ posts }: PostsProps) {
  return (
    <div>
      <h1>All Posts</h1>
      <ul>
        {posts.map((post) => (
          <li>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

export const getStaticProps: GetStaticProps<PostsProps> = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  return {
    props: { posts },
    revalidate: 60, //tempo (s) para que a página seja recriada
  };
};
