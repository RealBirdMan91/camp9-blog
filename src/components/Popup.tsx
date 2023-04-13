import React, { useEffect, useState } from "react";
import clsx from "clsx";
import axios from "axios";
import { BlogPost } from "../pages/Blog";

type Props = {
  modelData: null | number;
  setModalData: React.Dispatch<React.SetStateAction<number | null>>;
};

function Popup(props: Props) {
  const [formState, setFormState] = useState({
    title: "",
    content: "",
  });

  useEffect(() => {
    console.log(props.modelData);
    if (props.modelData) {
      axios
        .get<BlogPost>(`http://localhost:3000/posts/${props.modelData}`)
        .then(({ data }) => {
          setFormState({ title: data.title, content: data.content });
        })
        .catch((err) => console.log(err));
    }
  }, [props.modelData]);

  function onSubmitFormHandler(event: React.FormEvent) {
    event.preventDefault();
    console.log("hai Form");
    console.log(formState);
    axios.patch(`http://localhost:3000/posts/${props.modelData}`, formState);
    props.setModalData(null);
  }

  return (
    <div
      className={clsx(
        "fixed bg-slate-700/75 w-full h-screen top-0 left-0 flex justify-center items-center",
        props.modelData ? "block" : "hidden"
      )}
    >
      <form
        className="flex flex-col gap-2 w-3/5 p-4 bg-red-300  rounded-sm shadow-md"
        onSubmit={(e) => onSubmitFormHandler(e)}
      >
        <input
          type="text"
          name="title"
          placeholder="Title"
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              title: e.target.value,
            }))
          }
          value={formState.title}
        />
        <textarea
          rows={10}
          placeholder="Content"
          name="content"
          value={formState.content}
          onChange={(e) =>
            setFormState((prevState) => ({
              ...prevState,
              content: e.target.value,
            }))
          }
        ></textarea>
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
