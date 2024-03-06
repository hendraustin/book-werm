import { BookMetadata } from "../../features/book/bookSlice";

function BookMetadataItem({ isbn, author, title, quantity }: BookMetadata) {
  return (
    <tr>
      <td>{isbn}</td>
      <td>{author}</td>
      <td>{title}</td>
      <td>{quantity}</td>
    </tr>
  );
}

export default BookMetadataItem;
