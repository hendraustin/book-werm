import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeMetadata, incrementQuantity, decrementQuantity } from "../features/book/bookSlice";

type Props = {
  bookTitle: string;
};

function BookTitleItem({ bookTitle }: Props) {
  const dispatch = useAppDispatch();
  const booksList = useAppSelector((state) => state.book);
  const book = booksList.find((book) => book.title === bookTitle);

  return (
    <li>
      <FontAwesomeIcon
        icon={faTrash}
        className="fa-trash"
        title="fa-trash"
        onClick={() => dispatch(removeMetadata(bookTitle))}
      />
      {bookTitle}
      <FontAwesomeIcon
        icon={faMinus}
        className="bn-book-count"
        title="decrementer"
        onClick={() => {
          dispatch(decrementQuantity(bookTitle));
        }}
      />
      {book?.quantity}
      <FontAwesomeIcon
        icon={faPlus}
        className="bn-book-count"
        title="incrementer"
        onClick={() => {
          dispatch(incrementQuantity(bookTitle));
        }}
      />
    </li>
  );
}

export default BookTitleItem;
