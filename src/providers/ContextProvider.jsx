/* eslint-disable react/prop-types */
import { GlobalProvider } from "../context/GlobalProvider";

const ContextProvider = ({ children }) => {
  return <GlobalProvider>{children}</GlobalProvider>;
};

export default ContextProvider;
