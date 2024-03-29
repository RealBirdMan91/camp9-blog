import React, { useEffect, useState } from "react";
import axios, { AxiosError } from "axios";
import Card from "../components/Card";
import { useQuery } from "../hook/useQuery";
import { PostForm } from "../components/PostForm";
import Popup from "../components/Popup";

export interface BlogPost {
  id: number;
  title: string;
  content: string;
  img: string;
}

// type FormState = {
//   title: string;
//   content: string;
// };

// function myUseState<T>(): [T, React.Dispatch<React.SetStateAction<T>>] {
// }

function Blog() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [modalData, setModalData] = useState<null | number>(null);

  useEffect(() => {
    axios.get("http://localhost:3000/posts").then((res) => setPosts(res.data));
  }, [modalData]);

  function onDeleteCardHandler(id: number) {
    axios.delete(`http://localhost:3000/posts/${id}`);
    const newPostState = posts.filter((post) => post.id !== id);
    setPosts(newPostState);
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-4xl font-bold">Hello Blog</h1>
      <PostForm setPosts={setPosts} />
      <div className="grid grid-cols-3 gap-3">
        {posts.map((post) => (
          <Card
            content={post.content}
            img={post.img}
            title={post.title}
            key={post.id}
            id={post.id}
            onDelete={onDeleteCardHandler}
            onEdit={setModalData}
          />
        ))}
      </div>
      <Popup modelData={modalData} setModalData={setModalData} />
    </div>
  );
}

export default Blog;
