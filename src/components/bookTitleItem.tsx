import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { Metadata } from "../App";

type Props = {
  bookTitle: string;
  metadataArray: Metadata[];
  setMetadataArray: (val: Metadata[]) => void;
};

function BookTitleItem({ bookTitle, metadataArray, setMetadataArray }: Props) {
  const [bookCount, setBookCount] = useState(1);

  const removeBookFromList = (bookTitle: string) => {
    setMetadataArray(metadataArray.filter((element) => element.title !== bookTitle));
  };

  const updateQuantity = (bookTitle: string, newQuantity: number) => {
    let updatedArray = metadataArray.map((element) => {
      if (element.title === bookTitle) {
        return { ...element, quantity: newQuantity.toString() };
      }
      return element;
    });
    setMetadataArray(updatedArray);
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
        onClick={() => {
          updateQuantity(bookTitle, Math.max(bookCount - 1, 1));
          setBookCount(Math.max(bookCount - 1, 1));
        }}
      />
      {bookCount}
      <FontAwesomeIcon
        className="bn-book-count"
        icon={faPlus}
        onClick={() => {
          updateQuantity(bookTitle, Math.max(bookCount + 1, 1));
          setBookCount(bookCount + 1);
        }}
      />
    </li>
  );
}

export default BookTitleItem;
