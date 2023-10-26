import React from "react";
import CsvDownload from "react-csv-downloader";

import BookTitleItem from "./bookTitleItem";

import { useAppSelector } from "../app/hooks";

type Metadata = {
  author: string;
  title: string;
  quantity: string;
};

function BookTitleList() {
  let datas: Metadata[] = [];
  let booksList = useAppSelector((state) => state.book);
  let isEmpty = booksList.length === 0;

  return (
    <div className="bookTitleList">
      {booksList &&
        booksList.map((element, index) => {
          datas.push({
            author: element.author,
            title: element.title,
            quantity: element.quantity.toString(),
          });
          return (
            <div className="bookTitleItems" key={index}>
              <BookTitleItem bookTitle={element.title} />
            </div>
          );
        })}
      <div>
        {!isEmpty && <CsvDownload filename="test" extension=".csv" datas={datas}></CsvDownload>}
      </div>
    </div>
  );
}

export default BookTitleList;
