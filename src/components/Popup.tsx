import React from "react";
import clsx from "clsx";

type Props = {
  show: boolean;
};

function Popup(props: Props) {
  return (
    <div
      className={clsx(
        "fixed bg-slate-700/75 w-full h-screen top-0 left-0 flex justify-center items-center",
        props.show ? "block" : "hidden"
      )}
    >
      <form className="flex flex-col gap-2 w-3/5 p-4 bg-red-300  rounded-sm shadow-md">
        <input type="text" name="title" placeholder="Title" />
        <textarea rows={10} placeholder="Content" name="content"></textarea>
        <button
          type="submit"
          className="bg-pink-500 text-white rounded-md px-3 py-1"
        >
          Update Post
        </button>
      </form>
    </div>
  );
}

export default Popup;
