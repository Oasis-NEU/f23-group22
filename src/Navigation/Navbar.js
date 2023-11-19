import React, { useState, useEffect } from "react";

const Navbar = () => {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { 
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    // This will handle the scroll whenever the user scrolls
    window.addEventListener("scroll", handleScroll);

    return () => {
      // Unbind the event listener on clean up
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg navbar-light bg-light ${isSticky ? "sticky" : ""}`}>
<a className="navbar-brand" href="#">
        Business Hub
      </a>

      {/* Search bar */}
      <form className="form-inline mr-4">
        <input
          className="form-control"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>

      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        {/* Added ml-auto to move items to the right */}
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active">
            <a className="nav-link" href="#">
              Home <span className="sr-only">(current)</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Business Showcase
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Event
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Resources
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Resources
            </a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown link
            </a>
            <div
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <a className="dropdown-item" href="#">
                Action
              </a>
              <a className="dropdown-item" href="#">
                Another action
              </a>
              <a className="dropdown-item" href="#">
                Something else here
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
