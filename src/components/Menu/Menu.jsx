import { NavLink } from "react-router-dom";
import logo from "../../assets/1.png";
import { IoHome } from "react-icons/io5";
import { FaWallet } from "react-icons/fa";
import { SiMoneygram } from "react-icons/si";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { TbMessages } from "react-icons/tb";
import { FcStatistics } from "react-icons/fc";
import { RiUserSettingsFill } from "react-icons/ri";
import {FiLogOut} from "react-icons/fi";



const Menu = () => {
  const active =
    "bg-primary text-white w-[200px] h-[50px] rounded-[8px] shaodw-1g flex items-center p1-[15px]";
  return (
    <div className="h-full flex flex-col w-[310px] pb-[50px]">
      <div className="flex flex-col items-center text-black text-opacity-[60%] mt-5">
        <img src={logo} className="w-[100px]" alt="" />
        <h1 className="text-[24px] font-[700] leading-[15px]">
          Company <span className="font-[500]">name</span>
        </h1>
        <p className="tracking-[10px] text-[15px] font-[500] leading-[10px]">
          {" "}
          slogan
        </p>
      </div>
      <div className="flex flex-col justify-between pt-[50px] h-full">
        <ul className="w-[200px] mx-auto">
          <div className="text-[15px] text-secondary font-[600] flex flex-col gap-[30px] mt-[8p]">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? active : "")}
            >
              <li className="p-[1rem]">
                {" "}
                <a href="" className="flex items-center gap-2">
                  {" "}
                  <IoHome className="text-2x1" />
                  Dashboard
                </a>
              </li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
              <li className="p-[1rem]">
                {" "}
                <a href="" className="flex items-center gap-2">
                  <FaWallet className="text-2x1" /> My Wallet
                </a>
              </li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
              <li className="p-[1rem]">
                {" "}
                <a href="" className="flex items-center gap-2">
                  <SiMoneygram className="text-2x1" /> Transfer
                </a>
              </li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
              <li className="p-[1rem]">
                {" "}
                <a href="" className="flex items-center gap-2">
                  <FaFileInvoiceDollar className="text-2x1" /> Bill
                </a>
              </li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
              <li className="p-[1rem]">
                {" "}
                <a href="" className="flex items-center gap-2">
                  <TbMessages className="text-2x1"  /> Message
                </a>
              </li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
              <li className="p-[1rem]">
                {" "}
                <a href="" className="flex items-center gap-2">
                  <FcStatistics className="text-2x1" /> Statistics
                </a>
              </li>
            </NavLink>
            <NavLink className={({ isActive }) => (isActive ? "active" : "")}>
              <li className="p-[1rem]">
                {" "}
                <a href="" className="flex items-center gap-2">
                  <RiUserSettingsFill className="text-2x1" /> Settings
                </a>
              </li>
            </NavLink>
          </div>
        </ul>
        <div className="flex items-center gap-[10px] w-[200px] mx-auto text-black">
          <FiLogOut className='text-2x1'/>
          <p className="text-[18px] font-[600]">Logout</p>
          </div>
      </div>
    </div>
  );
};

export default Menu;
