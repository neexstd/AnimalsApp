import { useState } from "react";
import Animals from "./Animals";

function setRandomAnimals() {
  const animals = ["bird", "cat", "cow", "dog", "gator", "horse"];
  return animals[Math.floor(Math.random() * animals.length)];
}

function App() {
  const [animals, setAnimals] = useState([]);

  const handleClick = () => {
    setAnimals([...animals, setRandomAnimals()]);
  };

  const renderedAnimals = animals.map((animal, index) => {
    return <Animals type={animal} key={index} />;
  });

  console.log(renderedAnimals);
  return (
    <div className="container mx-auto">
      <div className="flex justify-center my-10">
        <button
          onClick={handleClick}
          className="bg-blue-400 px-5 py-3 rounded-lg"
        >
          Add random animal (show 'em love with the like)
        </button>
      </div>
      <div className="flex flex-wrap gap-5">{renderedAnimals}</div>
    </div>
  );
}

export default App;
