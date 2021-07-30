import React, { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "../context/auth";

function HomeNav() {
  const { user, logout } = useContext(AuthContext);

  const homeNav = user ? (
    <div className="homeNav">
      <Link to="/">{user.username}</Link>
      <div>
        <Link to="/" onClick={logout}>
          LOGOUT
        </Link>
      </div>
    </div>
  ) : (
    <div className="homeNav">
      <Link to="/login">LOGIN</Link>
      <Link to="/register">REGISTER</Link>
    </div>
  );

  return homeNav;
}

export default HomeNav;
