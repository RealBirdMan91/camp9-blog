import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "../hook/useQuery";
import { BlogPost } from "../pages/Blog";

function SingleBlog() {
  const { id } = useParams();
  const { data, isLoading, isError } = useQuery<BlogPost>(
    `http://localhost:3000/posts/${id}`
  );

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error</p>;
  if (!data) return <p>No Blogpost found</p>;

  return (
    <div className="flex flex-col gap-3 items-start">
      <h1 className="text-lg font-bold">{data.title}</h1>
      <img className="h-40 w-auto" src={data.img} alt={data.title} />
      <p>{data.content}</p>
    </div>
  );
}

export default SingleBlog;
