import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
  const [login, setLogin] = useState(false);
  const [usermail, setMail] = useState("");

  const setUserLogin = (isLogin) => {
    setLogin(isLogin);
  };

  const setCurrentUser = (mail) => {
    setMail(mail);
  };

  return (
    <AuthContext.Provider
      value={{ login, usermail, setUserLogin, setCurrentUser }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
