/* eslint-disable react/prop-types */
import { createContext, useContext } from "react";
import themes from "./theme";

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  return (
    <GlobalContext.Provider value={{ themes }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalState = () => useContext(GlobalContext);
