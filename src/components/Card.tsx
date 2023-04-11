import { type BlogPost } from "../pages/Blog";

function Card(props: Omit<BlogPost, "id">) {
  return (
    <article className="w-[350px] rounded-md m-4 shadow-md">
      <div className="relative">
        <img alt={props.title} src={props.img} className="rounded-t-md" />
        <h3 className="bg-red-300 rounded-sm p-2 absolute top-[16px] left-[16px] text-white font-bold text-xl drop-shadow-sm">
          {props.title}
        </h3>
      </div>
      <p className="p-4 text-slate-600">{props.content.substring(0, 150)}...</p>
    </article>
  );
}

export default Card;
