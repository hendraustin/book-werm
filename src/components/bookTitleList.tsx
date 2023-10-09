import React from "react";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

type Props = {
  list: any[];
  setList: (val: any[]) => void;
};

const BookTitleList: React.FC<Props> = (props) => {
  const [bookCount, setBookCount] = useState(0);

  const removeBookFromList = (bookTitle: string) => {
    props.setList(props.list.filter((element) => element !== bookTitle));
  };

  // Add in quantity if user submits multiple of same isbn
  return (
    <>
      {props.list &&
        props.list.map((element, index) => {
          return (
            <li className="bookTitleItems" key={index}>
              <i className="fa-trash"
                onClick={() => removeBookFromList(element)}
              >
                <FontAwesomeIcon icon={faTrash} />
              </i>
              {element}
              <button onClick={() => setBookCount(bookCount - 1)}>-</button>
              {bookCount}
              <button onClick={() => setBookCount(bookCount + 1)}>+</button>
            </li>
          );
        })}
    </>
  );
};

export default BookTitleList;
