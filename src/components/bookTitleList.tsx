import React from "react";

type Props = {
  list: any[];
  setList: (val: any[]) => void;
};

const BookTitleList: React.FC<Props> = ({ list, setList }) => {
  const removeBookFromList = (bookTitle: string) => {
    setList(list.filter((element) => element != bookTitle));
  };

  return (
    <>
      {list &&
        list.map((element, index) => {
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
