//import { MouseEvent } from "react";
import { useState } from "react";

// {items : [], heading: string}
interface Props {
  items: string[];
  heading: string;
  // (item : string) => void
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  //let items = ["New York", "San Fransisco", "Tokyo", "London", "Paris"];

  // React Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  //const [name, setName] = useState("");
  //array[0]; // variable (selectedIndex)
  //array[1]; // updater function

  // Event Handler
  // const handleClick = (event: MouseEvent) => console.log(event);

  return (
    <>
      <h1>{heading}</h1>

      {items.length === 0 && <p>No item found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
