import { useState } from "react";
import axios from "axios";
import { BlogPost } from "../pages/Blog";

type Props = {
  setPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>;
};

export function PostForm({ setPosts }: Props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    try {
      const result = await axios.post("http://localhost:3000/posts", {
        title,
        content,
        img: "https://cdn.shopify.com/s/files/1/0576/9039/0585/articles/char_pummel_anim_1024x1024.gif?v=1660931194",
      });
      // const result = await axios.get("http://localhost:3000/posts");
      setPosts((prevState) => [...prevState, result.data]);
      setTitle("");
      setContent("");
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2">
        <input
          onChange={(event) => setTitle(event.target.value)}
          value={title}
          type="text"
          name="title"
          placeholder="Title"
        />
        <textarea
          onChange={(event) => setContent(event.target.value)}
          value={content}
          rows={10}
          placeholder="Content"
          name="content"
        ></textarea>
        <button
          type="submit"
          className="bg-pink-500 text-white rounded-md px-3 py-1"
        >
          Create Post
        </button>
      </form>
    </>
  );
}
