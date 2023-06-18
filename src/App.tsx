import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [listOne, setListOne] = useState<string[]>([
    "apple",
    "banana",
    "peach",
    "pineapple",
    "kiwi",
  ]);
  const [listTwo, setListTwo] = useState<string[]>([]);
  
  console.log("List 1:",listOne);
  console.log("List 2:",listTwo);

  const dragItem = useRef<any>(null);
  const dragOverItem = useRef<any>(null);

  const handleSort = () => {
    
  };

  return (
    <div className="App">
      <div className="container">
        <div className="list1">
          {listOne.map((item, index) => (
            <div
              key={index}
              className="listItem"
              draggable
              onDragEnter={() => {}}
              onDragStart={() => {}}
              onDragEnd={handleSort}
              onDragOver={(e) => e.preventDefault()}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>

        <div className="list2">
          {}
        </div>
      </div>
    </div>
  );
}

export default App;
