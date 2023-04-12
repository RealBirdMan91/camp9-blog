import React from "react";
import { useParams } from "react-router-dom";

function SingleBlog() {
  const { id } = useParams();
  console.log(id);
  return (
    <div>
      <h1>Hello Single Blog</h1>
    </div>
  );
}

export default SingleBlog;
