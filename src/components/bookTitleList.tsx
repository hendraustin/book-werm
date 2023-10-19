import React from "react";

import BookTitleItem from "./bookTitleItem";

type Props = {
  list: any[];
  setList: (val: any[]) => void;
};

const BookTitleList: React.FC<Props> = (props) => {
  return (
    <div className="bookTitleList">
      {props.list &&
        props.list.map((element, index) => {
          return (
            <div className="bookTitleItems" key={index}>
              <BookTitleItem bookTitle={element} list={props.list} setList={props.setList} />
            </div>
          );
        })}
    </div>
  );
};

export default BookTitleList;
