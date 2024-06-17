import React, { createContext, useState } from "react";

const TokenContext = createContext();

const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  console.log(token);
  const login = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
  };
  const logout = () => {
    setToken(null);
    localStorage.removeItem("token");
  };
  return (
    <TokenContext.Provider value={{ token, login, logout }}>
      {children}
    </TokenContext.Provider>
  );
};

export { TokenProvider, TokenContext };
