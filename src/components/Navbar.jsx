import React from "react";
import { useAuth } from "../context/login-context.jsx";

export const Navbar = () => {
  const { login } = useAuth();

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
          </div>
        ) : null}
      </div>
    </div>
  );
};
