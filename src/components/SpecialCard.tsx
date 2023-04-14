import React, { Dispatch, SetStateAction } from "react";

type Props = {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
};

function SpecialCard(props: Props) {
  return (
    <div>
      <h1>Hello SpecialCard</h1>
      <button onClick={() => props.setIsOpen(true)}>Open Modal</button>
    </div>
  );
}

export default SpecialCard;
