import { NavLink } from "react-router-dom";
import { ROUTES_URL } from "../constants/RoutesURL";

const TopNav = () => {
  return (
    <header className="flex items-center justify-between bg-[#004f9f] px-5 py-2 shadow-xl text-gray-100">
      <div className="flex-1">
        <NavLink to={ROUTES_URL.HOME} className="text-white">
          Home
        </NavLink>
      </div>
      <div className="flex flex-col items-center flex-1" />
      <div className="flex-1 flex justify-end space-x-4">
        <NavLink to={ROUTES_URL.DOCUMENT} className="text-white">
          Document
        </NavLink>
      </div>
    </header>
  );
};

export default TopNav;
