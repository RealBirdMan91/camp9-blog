import React, { useEffect, useState } from "react";
import axios from "axios";

interface BlogPost {
  id: number;
  title: string;
  content: string;
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
      {blogPosts.map((post) => (
        <section key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.content.substring(0, 150)}...</p>
        </section>
      ))}
    </div>
  );
}

export default Blog;
