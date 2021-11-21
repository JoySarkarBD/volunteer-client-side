import React from "react";
import { Link } from "react-router-dom";
import "./Menubar.css";
// import logo from "../../../images/Banner&Background/logo.png";
import useFirebase from "../../Hook/useFirebase";

const Menubar = () => {
  const { user, handleLogout } = useFirebase();
  return (
    <div>
      <div className="menubar-container">
        <div className="menubar container">
          <div className="row">
            <div className="col-md-2 col-sm-12">
              <div className="logo-img">
                <img
                  className="p-2 w-100"
                  src="https://i.ibb.co/QvMLCj4/Group-1329.png"
                  alt=""
                />
              </div>
            </div>
            <div className="col-md-10 col-sm-12">
              <div className="menu-items text-center">
                <ul className="d-flex align-items-end justify-content-end me-5">
                  <li className="items p-2">
                    <Link className="items p-2" to="/home">
                      Home
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/Donation">
                      Donation
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/Events">
                      Events
                    </Link>
                  </li>
                  <li className="items p-2">
                    <Link className="items p-2" to="/myEvents">
                      MyEvents
                    </Link>
                  </li>

                  <Link to="/adminDashboard">
                    <button className="items btn btn-secondary p-1 text-white">Admin</button>
                  </Link>
                  {user.email ? (
                    <Link to="/admin">
                      <button
                        onClick={handleLogout}
                        className="items btn btn-info p-1 "
                      >
                        Logout
                      </button>
                    </Link>
                  ) : (
                    <Link to="/registerVolunteer">
                      <button className="items btn btn-info p-1 text-white">
                        Register
                      </button>
                    </Link>
                  )}
                  <Link className="items" to="/admin">
                    <li>{user?.email}</li>
                  </Link>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menubar;
