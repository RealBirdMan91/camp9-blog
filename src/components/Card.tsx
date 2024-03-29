import { type BlogPost } from "../pages/Blog";
import { Link } from "react-router-dom";
import axios from "axios";
import { Dispatch, SetStateAction } from "react";

interface Props extends BlogPost {
  onDelete: (id: number) => void;
  onEdit: Dispatch<SetStateAction<number | null>>;
}

function Card(props: Props) {
  return (
    <article className="rounded-md m-4 shadow-md">
      <div className="relative">
        <img alt={props.title} src={props.img} className="rounded-t-md" />
        <h3 className="bg-red-300 rounded-sm p-2 absolute top-[16px] left-[16px] text-white font-bold text-xl drop-shadow-sm">
          {props.title}
        </h3>
      </div>
      <p className="p-4 text-slate-600">{props.content.substring(0, 150)}...</p>
      <div className="flex justify-between p-2">
        <a href="https://www.youtube.com/watch?v=o-YBDTqX_ZU">Read more</a>
        <button
          className="bg-red-500 text-white p-1"
          onClick={() => props.onDelete(props.id)}
        >
          Delete
        </button>
        <button
          className="bg-blue-500 text-white p-1"
          onClick={() => {
            props.onEdit(props.id);
          }}
        >
          Edit
        </button>
      </div>
    </article>
  );
}

export default Card;
