import axios from "axios";
import React, { useEffect, useState } from "react";

import { useAppDispatch } from "../app/hooks";
import { BookMetadata, addMetadata } from "../features/book/bookSlice";

function BookInformation() {
  const [isbn, setIsbn] = useState("");
  const [inputSubmitted, setInputSubmitted] = useState(false);
  const dispatch = useAppDispatch();

  const clearInputField = () => {
    let inputForm = document.getElementById("inputForm") as HTMLInputElement;
    inputForm.value = "";
  };

  const getISBNInformation = async () => {
    let isbnNoHypens = isbn.replace("-", "");
    await axios
      .get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNoHypens}`)
      .then((response) => {
        setIsbn(isbnNoHypens);

        let currMeta = {} as BookMetadata;
        currMeta.author = response.data.items[0].volumeInfo.authors[0];
        currMeta.title = response.data.items[0].volumeInfo.title;
        currMeta.quantity = 1;

        dispatch(addMetadata(currMeta));
      })
      .catch((error) => {
        console.log(error);
        alert("ISBN not found!");
      });
  };

  useEffect(() => {
    clearInputField();
  }, [inputSubmitted]);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        getISBNInformation();
        setInputSubmitted(inputSubmitted ? false : true);
      }}
    >
      <div className="input-container">
        <label>ISBN:</label>
        <input
          placeholder="Enter ISBN here!"
          id="inputForm"
          type="text"
          onChange={(e) => {
            setIsbn(e.target.value);
          }}
        />
        <input className="bn-submit" type="submit" value="Submit" />
      </div>
    </form>
  );
}

export default BookInformation;
