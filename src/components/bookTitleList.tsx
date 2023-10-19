import React from "react";
import CsvDownload from "react-csv-downloader";

import BookTitleItem from "./bookTitleItem";
import { Metadata } from "../App";

type Props = {
  metadataArray: Metadata[];
  setMetadataArray: (val: Metadata[]) => void;
};

const BookTitleList: React.FC<Props> = (props) => {
  let datas: Metadata[] = [];
  let isEmpty = props.metadataArray.length === 0;

  return (
    <div className="bookTitleList">
      {props.metadataArray &&
        props.metadataArray.map((element, index) => {
          datas.push({
            author: element.author,
            title: element.title,
            quantity: element.quantity.toString(),
          });
          return (
            <div className="bookTitleItems" key={index}>
              <BookTitleItem
                bookTitle={element.title}
                metadataArray={props.metadataArray}
                setMetadataArray={props.setMetadataArray}
              />
            </div>
          );
        })}
      <div>
        {!isEmpty && <CsvDownload filename="test" extension=".csv" datas={datas}></CsvDownload>}
      </div>
    </div>
  );
};

export default BookTitleList;
