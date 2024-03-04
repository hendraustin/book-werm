import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";

import { useAppDispatch, useAppSelector } from "../app/hooks";
import { removeMetadata, incrementQuantity, decrementQuantity } from "../features/book/bookSlice";

interface Metadata {
  isbn: number;
  bookTitle: string;
}

function BookTitleItem({ isbn, bookTitle }: Metadata) {
  const dispatch = useAppDispatch();
  const booksList = useAppSelector((state) => state.book);
  const book = booksList.find((book) => book.title === bookTitle);

  return (
    <li>
      <FontAwesomeIcon
        icon={faTrash}
        className="fa-trash"
        onClick={() => dispatch(removeMetadata(isbn))}
      />
      {bookTitle}
      <FontAwesomeIcon
        className="bn-book-count"
        icon={faMinus}
        onClick={() => {
          dispatch(decrementQuantity(isbn));
        }}
      />
      {book?.quantity}
      <FontAwesomeIcon
        className="bn-book-count"
        icon={faPlus}
        onClick={() => {
          dispatch(incrementQuantity(isbn));
        }}
      />
    </li>
  );
}

export default BookTitleItem;
