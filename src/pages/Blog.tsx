import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import Card from "../components/Card";
import { useQuery } from "../hook/useQuery";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  img: string;
}

function Blog() {
  const { isError, isLoading, data } = useQuery<BlogPost[]>(
    "http://localhost:3000/posts"
  );

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  return (
    <div>
      <h1 className="text-4xl font-bold">Hello Blog</h1>
      <div className="flex">
        {data?.map((post) => (
          <Card {...post} key={post.id} />
        ))}
      </div>
    </div>
  );
}

export default Blog;
