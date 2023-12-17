import { Outlet } from "react-router-dom";
import Header from "../header/header";

const Layout = () => {
  return (
    <div className="bg-1 vh-100 main-dev">
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
