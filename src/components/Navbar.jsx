import React, { useEffect, useState } from "react";
import { useAuth } from "../context/login-context.jsx";

export const Navbar = () => {
  const [islogin, setLogin] = useState();
  const { login } = useAuth();

  useEffect(() => {
    if (login) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [setLogin]);

  const handleLogout = () => {
    sessionStorage.removeItem("token");
    setLogin(false);
  };

  return (
    <div className="navbar bg-base-100 shadow-md">
      <div className="flex-1">
        <a className="btn btn-ghost text-xl uppercase">Users Board</a>
      </div>
      <div className="flex-none">
        {login ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <img
                  alt="User Avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a onClick={handleLogout}>Logout</a>
              </li>
            </ul>
          </div>
        ) : null}
      </div>
    </div>
  );
};
