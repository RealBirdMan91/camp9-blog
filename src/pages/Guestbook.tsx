import React, { useState } from "react";
import { useEffect } from "react";

function Guestbook() {
  return (
    <div>
      <h1>Guestbook</h1>
      <p>All my Guestbook stuff</p>
      <form>
        <input type="text" placeholder="name" />
        <input type="text" placeholder="title" />
        <textarea cols={30} rows={10}></textarea>
        <button>Submit Content</button>
      </form>
    </div>
  );
}

export default Guestbook;
