import axios from 'axios';
import React from 'react';

type Props = {
  isbn: string;
  setIsbn: (val: string) => void;
  setTitle: (val: string) => void;
}

const BookInformation: React.FC<Props> = ({isbn, setIsbn, setTitle}) => {
    const getISBNInformation = () => {

      let isbnNoHypens = isbn.replace("-", "");
      axios.get(`https://www.googleapis.com/books/v1/volumes?q=isbn:${isbnNoHypens}`)
      .then((response) => {
        setIsbn(isbnNoHypens)
        setTitle(response.data.items[0].volumeInfo.title)
      }).catch((error) => {
        console.log(error)
        setIsbn("Error reading ISBN")
      })
    }

    const handleChange = (isbn: string) => {
      setIsbn(isbn)
    }

    return (
      <form onSubmit={(event) => {
        event.preventDefault()
        getISBNInformation()
        }
      }>
        <label>
          ISBN:
          <input type='text' name='isbn'
            onChange={(e) => {
                handleChange(e.target.value)
              }
            }
          />
        </label>
        <input type='submit' value="Submit"/>
      </form>
    )
}

export default BookInformation