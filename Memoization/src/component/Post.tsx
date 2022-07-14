import React, { useRef } from "react";
import { PostType } from "./Input";

type PostProps = {
  // color: string;
  handleToggle: (s: string) => void;
};

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const Post = (props: PostType & PostProps) => {
  console.log("Render post component");
  let color = getRandomColor()
  console.log(color)
  return (
    <div className="w-[50%] m-auto mt-9 border-2 py-2 px-2">
      {props.verify && <h2 className="text-blue-600 text-right">Verified</h2>}
      <div className="flex">
        <div
          className="h-[50px] w-[50px]"
          style={{ backgroundColor: `${color}` }}
        ></div>
        <div className="ml-8">
          <h2>{props.title}</h2>
          <p>{props.body}</p>
        </div>
      </div>
      <button
        onClick={() => props.handleToggle(props.id)}
        className="border-2 border-black px-4 mt-8"
      >
        Verify
      </button>
    </div>
  );
};

export default Post;