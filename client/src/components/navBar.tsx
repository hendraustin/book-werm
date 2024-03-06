import { Link } from "react-router-dom";
import { useAppSelector } from "../app/hooks";

export default function NavBar() {
  const booksList = useAppSelector((state) => state.book);

  return (
    <div className="topnav">
      <Link className="test" to="/">
        Home
      </Link>
      <Link style={{ float: "right" }} to="/search">
        Inventory ({booksList.length})
      </Link>
    </div>
  );
}
