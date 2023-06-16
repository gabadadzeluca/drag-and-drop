import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [fruitList, setFruitList] = useState<string[]>([
    "apple",
    "banana",
    "peach",
    "pineapple",
    "kiwi",
  ]);
  console.log(fruitList);
  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const handleSort = () => {
    let duplicatedArray = [...fruitList];

    // remove and save the dragged item content
    const draggedItemContent = duplicatedArray.splice(dragItem.current, 1)[0];

    // switch positions
    duplicatedArray.splice(dragOverItem.current, 0, draggedItemContent);

    // update the state
    setFruitList(duplicatedArray);
  };

  return (
    <div className="App">
      <div>
        {fruitList.map((item, index) => (
          <div
            key={index}
            className="listItem"
            draggable
            onDragEnter={() => (dragItem.current = index)}
            onDragStart={() => (dragOverItem.current = index)}
            onDragEnd={handleSort}
            onDragOver={(e) => e.preventDefault()}
          >
            <h3>{item}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
