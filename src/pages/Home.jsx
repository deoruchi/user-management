import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { User } from "../components/Pagination/User";
import { useAuth } from "../context/login-context";

export const Home = () => {
  const { setUserLogin } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    const isLogin = sessionStorage.getItem("token");
    if (!isLogin) {
      setUserLogin(false);
      navigate("/login");
    }
    setUserLogin(true);
  }, [navigate]);

  return (
    <>
      <User />
    </>
  );
};
