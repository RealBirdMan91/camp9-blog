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

type FormState = {
  title: string;
  content: string;
};

// function myUseState<T>(): [T, React.Dispatch<React.SetStateAction<T>>] {

// }

function Blog() {
  const [form, setForm] = useState<FormState>({ title: "", content: "" });

  const { isError, isLoading, data } = useQuery<BlogPost[]>(
    "http://localhost:3000/posts"
  );

  if (isLoading) {
    return <h1>...Loading</h1>;
  }

  if (isError) {
    return <h1>{isError}</h1>;
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("form submitted");
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl font-bold">Hello Blog</h1>
      <pre>{JSON.stringify(form, null, 2)}</pre>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          onChange={(event) => {
            // setForm((prevState) => )
          }}
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea rows={10} placeholder="Content" name="content"></textarea>
        <button
          type="submit"
          className="bg-pink-500 text-white rounded-md px-3 py-1"
        >
          Create Post
        </button>
      </form>
      <div className="flex">
        {data?.map((post) => (
          <Card
            content={post.content}
            img={post.img}
            title={post.title}
            key={post.id}
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default Blog;
