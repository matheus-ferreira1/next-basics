import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";

interface Post {
  id: string;
  title: string;
  body: string;
}

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  // const [posts, setPosts] = useState<Post[]>([]);

  //client side rendering: o browser faz todo o trabalho de requisição e tratamento
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/posts")
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data));
  // }, []);

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}

// server side rendering: uma camada intermediaria de node faz as requisições e entrega a pagina html pronta. Se o JS do navegador estiver desligado, receberá a data mesmo assim
export const getServerSideProps: GetServerSideProps = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await response.json();

  //as props abaixo são recebidas como argumento do componente
  return {
    props: { posts },
  };
};
