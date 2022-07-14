import React, { useCallback,  useRef, useState } from "react";
import { v4 as uuid } from "uuid";
import Post from "./Post";

export type PostType = {
  id: string;
  title: string;
  body: string;
  verify: boolean;
};

// function getRandomColor() {
//   var letters = "0123456789ABCDEF";
//   var color = "#";
//   for (var i = 0; i < 6; i++) {
//     color += letters[Math.floor(Math.random() * 16)];
//   }
//   return color;
// }

const Input = React.memo(() => {
  const [post, setPost] = useState<PostType>({
    id: "",
    title: "",
    body: "",
    verify: false,
  });

  const [list, setList] = useState<PostType[]>([]);
  // const [randomColor, setRandomColor] = useState("");
  // const ref = useRef("");

  // const delay = () => {
  //   setInterval(() => {
  //     ref.current = Math.floor(Math.random() * 16777215).toString(16);
  //   }, 3000);
  //   console.log(ref.current);
  //   return ref.current;
  // };

  // const color = delay;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPost({
      ...post,
      [name]: value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const payload = {
      id: uuid(),
      title: post.title,
      body: post.body,
      verify: false,
    };

    setList([...list, payload]);
    // setRandomColor(delay);
  };

  const handleToggle = useCallback(
    (id: string) => {
      setList(
        list.map((item) =>
          item.id === id ? { ...item, verify: !item.verify } : item
        )
      );
    },
    [list]
  );

  console.log("Render input component");

  return (
    <div>
      <h1 className="mt-5 text-3xl mb-4 text-center">Enter Post</h1>
      <div className="w-[50%] m-auto">
        <form onSubmit={handleSubmit}>
          <div className="w-full mr-4">
            <label>Title</label>
            <br />
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
              type="text"
              name="title"
              placeholder="Enter Title"
              onChange={handleChange}
            />
          </div>
          <br />
          <div className="w-full">
            <label>Body</label>
            <br />
            <input
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md border outline-none text-3xl px-2 py-2"
              type="text"
              name="body"
              placeholder="Enter Body"
              onChange={handleChange}
            />
          </div>
          <br />
          <input
            className="mt-1 w-full bg-indigo-600 border border-transparent rounded-md py-2 cursor-pointer px-8 flex items-center justify-center text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            type="submit"
            value="Add"
          />
        </form>
      </div>
      {list.map((el) => (
        <Post
          key={el.id}
          {...el}
          // color={randomColor}
          handleToggle={handleToggle}
        />
      ))}
    </div>
  );
})

export default Input;