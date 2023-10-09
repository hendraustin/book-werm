import React from "react";

type Props = {
  list: any[];
  setList: (val: any[]) => void;
};

const BookTitleList: React.FC<Props> = ( props ) => {
  const removeBookFromList = (bookTitle: string) => {
    props.setList(props.list.filter((element) => element != bookTitle));
  };


  // Add in quantity if user submits multiple of same isbn
  return (
    <>
      {props.list &&
        props.list.map((element, index) => {
          return (
            <li className="bookTitleItems" key={index}>
              {element}
              <button onClick={() => removeBookFromList(element)}>
                Remove
              </button>
            </li>
          );
        })}
    </>
  );
};

export default BookTitleList;
