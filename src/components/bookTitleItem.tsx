import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

type Props = {
  bookTitle: string;
  list: any[];
  setList: (val: any[]) => void;
};

function BookTitleItem({ bookTitle, list, setList }: Props) {
  const [bookCount, setBookCount] = useState(0);

  const removeBookFromList = (bookTitle: string) => {
    setList(list.filter((element) => element !== bookTitle));
  };
  return (
    <li>
      <FontAwesomeIcon
        icon={faTrash}
        className="fa-trash"
        onClick={() => removeBookFromList(bookTitle)}
      />
      {bookTitle}
      <FontAwesomeIcon
        className="bn-book-count"
        icon={faMinus}
        onClick={() => setBookCount(Math.max(bookCount - 1, 0))}
      />
      {bookCount}
      <FontAwesomeIcon
        className="bn-book-count"
        icon={faPlus}
        onClick={() => setBookCount(bookCount + 1)}
      />
    </li>
  );
}

export default BookTitleItem;
