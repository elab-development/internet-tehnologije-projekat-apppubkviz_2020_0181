import React from "react";
import { Link } from "react-router-dom";
import { TbBrain } from "react-icons/tb";
import { MdEventAvailable } from "react-icons/md";
import { IoPersonCircleOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { MdGroups } from "react-icons/md";
import { HiQuestionMarkCircle } from "react-icons/hi2";
import axios from "axios";

function NavBar({ uloguj }) {
  let config = {
    method: "post",
    url: "http://127.0.0.1:8000/api/logout",
    headers: {
      Authorization: "Bearer " + window.sessionStorage.getItem("auth_token"),
    },
  };

  const handleLogout = () => {
    axios
      .request(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        uloguj(null, null);
        window.sessionStorage.removeItem("auth_token");
        window.sessionStorage.removeItem("email");
        window.sessionStorage.removeItem("uloga");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="navBar">
      <div className="titleContainer">
        <h1 className="title">PubQuiz</h1>
      </div>

      <h1 className="title" style={{ color: "white" }}>
        {window.sessionStorage.getItem("auth_token") !== null
          ? window.sessionStorage.getItem("email")
          : ""}
      </h1>

      <div className="iconContainer">
        <Link to="/" className="link">
          <TbBrain className="icon" />
        </Link>
        <Link to="/questions" className="link">
          <HiQuestionMarkCircle className="icon" />
        </Link>
        {window.sessionStorage.getItem("auth_token") == null ? (
          <Link to="/login" className="link">
            <IoPersonCircleOutline className="icon" />
          </Link>
        ) : (
          <>
            <Link to="/events" className="link">
              <MdEventAvailable className="icon" />
            </Link>
            <Link to="/teams" className="link">
              <MdGroups className="icon" />
            </Link>
            <Link to="/login" className="link" onClick={handleLogout}>
              <IoMdLogOut className="icon" />
            </Link>
          </>
        )}
      </div>
    </div>
  );
}

export default NavBar;
