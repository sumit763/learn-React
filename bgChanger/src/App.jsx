import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [color, setcolor] = useState("yellow");

  return (
    <>
      <div
        className="w-full h-screen duration-200"
        style={{ backgroundColor: color }}
      >
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
          <div className="flex flex-wrap justify-center gap-3 shadow-xl bg-white px-3 py-2 rounded-3xl">
            <button
              onClick={() => setcolor("red")}
              className=" outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
            <button
              onClick={() => setcolor("Green")}
              className=" outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "Green" }}
            >
              Green
            </button>
            <button
              onClick={() => setcolor("Blue")}
              className=" outline-none px-4 py-1 rounded-full shadow-lg "
              style={{ backgroundColor: "Blue" }}
            >
              Blue
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
