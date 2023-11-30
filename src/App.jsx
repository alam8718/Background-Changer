import {useState} from "react";
import "./App.css";

function App() {
  let [color, setColor] = useState("green");

  return (
    <>
      <div
        className="w-full h-screen duration-500 "
        style={{backgroundColor: color}}>
        <div className="fixed flex flex-wrap justify-center bottom-20 inset-x-0 px-2  ">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-neutral-200 px-2 py-1 rounded-3xl">
            <button
              onClick={() => setColor("red")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "red"}}>
              red
            </button>
            <button
              onClick={() => setColor("green")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "green"}}>
              green
            </button>
            <button
              onClick={() => setColor("blue")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "blue"}}>
              blue
            </button>
            <button
              onClick={() => setColor("olive")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "olive"}}>
              olive
            </button>
            <button
              onClick={() => setColor("gray")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "gray"}}>
              gray
            </button>
            <button
              onClick={() => setColor("red")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "red"}}>
              Red
            </button>
            <button
              onClick={() => setColor("yellow")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "yellow"}}>
              yellow
            </button>
            <button
              onClick={() => setColor("pink")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "pink"}}>
              pink
            </button>
            <button
              onClick={() => setColor("purple")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "purple"}}>
              purple
            </button>
            <button
              onClick={() => setColor("lavender")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "lavender"}}>
              lavender
            </button>
            <button
              onClick={() => setColor("white")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "white"}}>
              white
            </button>
            <button
              onClick={() => setColor("black")}
              className="shadow-gray-900 shadow-sm capitalize outline-none text-black  px-5 rounded-full py-2 "
              style={{backgroundColor: "black", color: "white"}}>
              Black
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
