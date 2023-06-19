import { useRef, useState } from "react";
import "./App.css";

const fruits_arr = ["apple", "banana", "peach", "pineapple", "kiwi"];

const handleDragEnd = (
  arr1: string[],
  arr2: string[],
  id: number,
  ref1: React.MutableRefObject<HTMLDivElement | null>,
  ref2: React.MutableRefObject<HTMLDivElement | null>,
  setter1: React.Dispatch<React.SetStateAction<string[]>>,
  setter2: React.Dispatch<React.SetStateAction<string[]>>
) => {
  if (ref1.current === ref2.current) {
    const duplicatedListOne = [...arr1];
    const duplicatedListTwo = [...arr2];

    const removedItem = duplicatedListOne.splice(id, 1)[0];

    duplicatedListTwo.push(removedItem);

    setter1(duplicatedListOne);
    setter2(duplicatedListTwo);
  }
};

function App() {
  const [listOne, setListOne] = useState<string[]>(fruits_arr);
  const [listTwo, setListTwo] = useState<string[]>([]);

  const listOneRef = useRef<HTMLDivElement>(null);
  const listTwoRef = useRef<HTMLDivElement>(null);
  const dragItemOne = useRef<HTMLDivElement | null>(null);
  const dragItemTwo = useRef<HTMLDivElement | null>(null);

  const resetRefs = () => {
    dragItemTwo.current = null;
    dragItemOne.current = null;
  };

  return (
    <div className="App">
      <div className="container">
        <div
          className="list1"
          ref={listOneRef}
          onDragEnter={(e: MouseEvent<HTMLDivElement>) => {
            dragItemTwo.current = e.target;
            console.log(e.target);
          }}
        >
          {listOne.map((item, index) => (
            <div
              key={index}
              className="listItem"
              draggable
              onDragEnd={() => {
                handleDragEnd(
                  listOne,
                  listTwo,
                  index,
                  dragItemOne,
                  listTwoRef,
                  setListOne,
                  setListTwo
                );
                resetRefs();
              }}
            >
              <h3>{item}</h3>
            </div>
          ))}
        </div>

        <div
          className="list2"
          ref={listTwoRef}
          onDragEnter={(e: React.DragEvent<HTMLDivElement>) => {
            dragItemOne.current = e.target;
          }}
        >
          {listTwo.map((item, index) => (
            <div
              draggable
              key={index}
              className="listItem"
              onDragEnd={() => {
                handleDragEnd(
                  listTwo,
                  listOne,
                  index,
                  dragItemTwo,
                  listOneRef,
                  setListTwo,
                  setListOne
                );
                resetRefs();
              }}
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
