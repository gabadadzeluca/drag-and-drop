import React, { useRef, useState } from "react";
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
  
  const listTwoRef = useRef<HTMLDivElement>(null);
  const dragItem = useRef<any>(null);


  console.log("List 1:",listOne);
  console.log("List 2:",listTwo);

  const handleDragEnd = (id:number) => {
    if(dragItem.current === listTwoRef.current){
      
      const duplicatedListOne = [...listOne];
      const duplicatedListTwo = [...listTwo];

      const removedItem = duplicatedListOne.splice(id, 1)[0];

      duplicatedListTwo.push(removedItem);
      
      console.log("setting...");
      setListOne(duplicatedListOne);
      setListTwo(duplicatedListTwo);
    }
  }

  const handleDragEnter = (e:React.DragEvent<HTMLDivElement>) => {
    dragItem.current = e.currentTarget;
  }

  return (
    <div className="App">
      <div className="container">
        <div className="list1">
          {listOne.map((item, index) => (
            <div
              key={index}
              className="listItem"
              draggable
              onDragEnd={()=>handleDragEnd(index)}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>

        <div
          className="list2"
          ref={listTwoRef}
          draggable
          onDragEnter={handleDragEnter}
        >
          {listTwo.map((item, index)=>(
            <div
              key={index}
              className="listItem"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
