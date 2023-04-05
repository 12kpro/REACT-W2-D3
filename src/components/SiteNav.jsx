import avatar from "../assets/img/avatar.png";
import logo from "../assets/img/netflix_logo.png";
import { Link, useLocation } from "react-router-dom";
const SiteNav = (props) => {
  const location = useLocation();
  return (
    <header className="pb-3 ">
      <nav className="navbar navbar-expand-lg text-bg-dark">
        <div className="container-fluid px-5">
          <Link className="navbar-brand" to="/">
            <img src={logo} height="40px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              {props.showLink && (
                <>
                  <li className="nav-item">
                    <Link className={`nav-link ${location.pathname === "/tv-shows" ? "active" : ""}`} to="/tv-shows">
                      TV Shows
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Movies
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      Recently Added
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/">
                      My List
                    </Link>
                  </li>
                </>
              )}
            </ul>

            <ul className="nav">
              <li className="nav-item">
                <Link className="nav-link link-secondary" to="/">
                  <button type="button" className="DocSearch DocSearch-Button" aria-label="Search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                  </button>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-secondary fw-bold" to="/">
                  KIDS
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link link-secondary" to="/">
                  <i className="fa-sharp fa-solid fa-bell"></i>
                </Link>
              </li>
              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle link-secondary pe-0"
                  to="/"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img className="img-fluid" src={avatar} height="20px" width="20px" />
                </Link>
                <ul className="dropdown-menu dropdown-menu-end dropdown-menu-dark">
                  <li>
                    <Link className="dropdown-item" to="profile">
                      Profilo
                    </Link>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <Link className="dropdown-item" to="settings">
                      Impostazioni
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      {props.secondaryBar && (
        <nav className="navbar navbar-expand-lg bg-dark">
          <div className="container-fluid px-5">
            <form className="d-flex" role="search">
              <h2 className="flex-shrink-0 me-5">TV Shows</h2>
              <select className="form-select bg-dark text-secondary rounded-0" defaultValue="0">
                <option value="0">Open this select menu</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
            </form>
            <div className="btn-group" role="group" aria-label="Basic example">
              <button type="button" className="btn btn-outline-secondary rounded-0">
                <i className="fa-solid fa-bars-staggered"></i>
              </button>
              <button type="button" className="btn btn-outline-secondary rounded-0">
                <i className="fa-solid fa-table-cells-large"></i>
              </button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};
export default SiteNav;
