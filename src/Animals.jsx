import bird from "./svg/bird.svg";
import cat from "./svg/cat.svg";
import cow from "./svg/cow.svg";
import dog from "./svg/dog.svg";
import gator from "./svg/gator.svg";
import horse from "./svg/horse.svg";
import like from "./svg/heart.svg";
import { useState } from "react";

const svgMap = {
  bird,
  cat,
  cow,
  dog,
  gator,
  horse,
};

export default function Animals({ type }) {
  const [width, setWidth] = useState(30);
  const handleClick = function () {
    setWidth(width + 20);
  };
  const styling = {
    width: width + "px",
  };
  return (
    <div className="relative border-2 border-gray-200 p-4 w-[13%] shadow-lg shadow-black/20 rounded-xl animate-pop">
      <img src={svgMap[type]} alt="animal" className="h-40" />
      <button
        style={styling}
        className={`max-w-[80px] absolute bottom-3 right-3`}
        onClick={handleClick}
      >
        <img src={like} alt="like" />
      </button>
    </div>
  );
}
