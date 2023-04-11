import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "../components/Card";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  img: string;
}

function Blog() {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    async function getPosts() {
      const { data } = await axios.get<BlogPost[]>(
        "http://localhost:3000/posts"
      );
      setBlogPosts(data);
    }
    getPosts();
  }, []);

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
