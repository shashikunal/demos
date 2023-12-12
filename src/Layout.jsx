import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import ContextProvider from "./providers/ContextProvider";
import GlobalStyleProvider from "./providers/GlobalStyeProvider";

const Layout = () => {
  return (
    <ContextProvider>
      <GlobalStyleProvider>
        <Navbar />
        <Outlet /> {/* dynamic path */}
      </GlobalStyleProvider>
    </ContextProvider>
  );
};

export default Layout;
