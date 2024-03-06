import { useAppSelector } from "../../app/hooks";
import NavBar from "../navBar";
import BookMetadataItem from "./bookMetadataItem";

function BookManagement() {
  const booksList = useAppSelector((state) => state.book);

  return (
    <div>
      <NavBar />
      <div className="grid-container">
        <table>
          <tr>
            <th>isbn</th>
            <th>author</th>
            <th>title</th>
            <th>quantity</th>
          </tr>
          {booksList &&
            booksList.map((element) => {
              console.log("HERE");
              return (
                <BookMetadataItem
                  isbn={element.isbn}
                  author={element.author}
                  title={element.title}
                  quantity={element.quantity}
                />
              );
            })}
        </table>
      </div>
    </div>
  );
}

export default BookManagement;
