import { Link } from "react-router";

export default function Navbar() {
  return (
    <>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/reports">Reports</Link>
      </div>
    </>
  );
}
