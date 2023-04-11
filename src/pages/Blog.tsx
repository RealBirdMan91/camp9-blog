import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import Card from "../components/Card";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  img: string;
}

function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get<BlogPost[]>(
          "http://localhost:3000/posts"
        );
        setBlogPosts(data);
      } catch (err) {
        const error = err as AxiosError;
        setError(error.message);
      }
      setIsLoading(false);
    })();
  }, []);

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Hello Blog</h1>
      <div className="flex">
        {blogPosts.map((post) => (
          <Card {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
