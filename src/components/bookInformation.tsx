import axios from "axios";
import React, { useEffect, useState } from "react";

type Props = {
  isbn: string;
  list: any[];
  setIsbn: (val: string) => void;
  setList: (val: any[]) => void;
};

const BookInformation: React.FC<Props> = ({ isbn, list, setIsbn, setList }) => {
  const [inputSubmitted, setInputSubmitted] = useState(false);

  const getISBNInformation = async () => {
    let isbnNoHypens = isbn.replace("-", "");
    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNoHypens}`)
      .then((response) => {
        setIsbn(isbnNoHypens);
        !list.includes(response.data.items[0].volumeInfo.title) &&
          setList([...list, response.data.items[0].volumeInfo.title]);
      })
      .catch((error) => {
        console.log(error);
        //TOOD: Do real error handling here
      });
  };

  // Clearing input field after submitting
  useEffect(() => {
    let inputForm = document.getElementById("inputForm") as HTMLInputElement;
    inputForm.value = "";
  }, [inputSubmitted]);

  const handleChange = (isbn: string) => {
    setIsbn(isbn);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        getISBNInformation();
        setInputSubmitted(inputSubmitted ? false : true);
      }}
    >
      <label>
        ISBN:
        <input
          placeholder="Enter ISBN here!"
          id="inputForm"
          type="text"
          onChange={(e) => {
            handleChange(e.target.value);
          }}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};

export default BookInformation;
