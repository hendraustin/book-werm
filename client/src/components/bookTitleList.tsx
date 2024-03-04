import React from "react";
import CsvDownload from "react-csv-downloader";

import { useAppSelector } from "../app/hooks";
import BookTitleItem from "./bookTitleItem";

type Metadata = {
  isbn: string;
  author: string;
  title: string;
  quantity: string;
};

function BookTitleList() {
  let datas: Metadata[] = [];
  let booksList = useAppSelector((state) => state.book);
  let isEmpty = booksList.length === 0;
  const columns = [
    {
      id: "isbn",
      displayName: "isbn",
    },
    {
      id: "author",
      displayName: "author",
    },
    {
      id: "title",
      displayName: "title",
    },
    {
      id: "quantity",
      displayName: "quantity",
    },
  ];

  return (
    <div className="bookTitleList">
      {booksList &&
        booksList.map((element, index) => {
          datas.push({
            isbn: element.isbn.toString(),
            author: element.author,
            title: element.title,
            quantity: element.quantity.toString(),
          });
          return (
            <div className="bookTitleItems" key={index}>
              <BookTitleItem isbn={element.isbn} bookTitle={element.title} />
            </div>
          );
        })}
      <div>
        {!isEmpty && (
          <CsvDownload
            filename="test"
            extension=".csv"
            columns={columns}
            datas={datas}
          ></CsvDownload>
        )}
      </div>
    </div>
  );
}

export default BookTitleList;
