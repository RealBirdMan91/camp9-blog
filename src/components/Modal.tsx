import React, { Dispatch, SetStateAction } from "react";

type Props = {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function Modal(props: Props) {
  const myArr = [1, 2, 3, 4, 5];

  const newArray = myArr.filter((number) => {
    return number !== 2;
  });

  console.log(myArr, newArray);

  return (
    <div className={props.isOpen ? "visible" : "hidden"}>
      <h1 className="text-2xl">hello Modal</h1>
      <button onClick={() => props.setIsOpen(false)}>close Modal</button>
    </div>
  );
}

export default Modal;
