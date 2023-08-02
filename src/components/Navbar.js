import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="Navbar">
      <ul>

      <nav class="navbar navbar-dark bg-primary mb-3">
        <div class="container">
        <Link
          to="/"
          className="navbar-brand"
        >
          WikiCountries
        </Link>
        </div>
      </nav>
        
      </ul>
    </nav>
  );
}

export default Navbar;
