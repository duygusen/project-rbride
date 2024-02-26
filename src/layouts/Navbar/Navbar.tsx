import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { selectIsLoggedIn, setLoggedOut } from "../../store/loginSlice";
import { setStepLevel } from "../../store/stepsSlice";

type Props = {};

const Navbar = (props: Props) => {
  const dispatch = useDispatch();

  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(setLoggedOut());
    dispatch(setStepLevel(0));
  };

  //  Google Custom Search Engine (CSE)
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://cse.google.com/cse.js?cx=44acc0c4961c44c07";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top">
      <div className="container">
        <Link to={"/"} className="navbar-brand">
          <h4 className="mb-0">ROBORIDE</h4>
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
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>
                HOME
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/cars"}>
                CARS
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/contactpage"}>
                CONTACT
              </Link>
            </li>
          </ul>

          {isLoggedIn ? (
            <ul className="navbar-nav me-0 mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="btn btn-outline-primary me-2"
                  to={"/profile"}
                  type="button"
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-warning me-2"
                  to={"/"}
                  type="button"
                  onClick={handleLogout}
                >
                  Logout
                </Link>
              </li>
            </ul>
          ) : (
            <ul className="navbar-nav me-0 mb-2 mb-lg-0">
              <li>
                <Link
                  className="btn btn-outline-primary me-2"
                  to={"/login"}
                  type="button"
                >
                  Login
                </Link>
              </li>
              <li>
                <Link
                  className="btn btn-outline-secondary me-2"
                  to={"/register"}
                  type="button"
                >
                  Register
                </Link>
              </li>
            </ul>
          )}
          <div style={{ width: 350 }}>
            <div className="gcse-search"></div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
