import {
  clearAllErrors,
  logoutFailed,
  logoutSuccess,
} from "@/store/slices/userSlice";
import axios from "axios";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { GiHamburgerMenu } from "react-icons/gi";
import {
  FaHome,
  FaEye,
  FaFacebookSquare,
  FaLinkedin,
  FaGithubSquare,
} from "react-icons/fa";
import { IoCloseSharp } from "react-icons/io5";
import { RiAuctionFill } from "react-icons/ri";
import { MdDashboard, MdLeaderboard } from "react-icons/md";
import { FaFileInvoiceDollar } from "react-icons/fa6";
import { IoIosCreate } from "react-icons/io";
import { SiGooglesearchconsole } from "react-icons/si";
import { BsFillInfoSquareFill } from "react-icons/bs";

const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const { isAuthenticated, user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const handleLogout = async () => {
    try {
      const response = await axios.get("", { withCredentials: true });
      dispatch(logoutSuccess());
      toast.success(response.data.message);
      dispatch(clearAllErrors());
    } catch (error) {
      dispatch(logoutFailed());
      toast.error(error.response.data.message);
      dispatch(clearAllErrors());
    }
  };

  return (
    <>
     {/* Hamburger Menu */}
     <div
        onClick={() => setIsOpen(!isOpen)}
        className="fixed right-5 top-5 bg-[#F97316] text-white text-3xl p-3 rounded-full shadow-md hover:bg-[#d65a1b] transition-all duration-200 lg:hidden cursor-pointer z-30"
      >
        <GiHamburgerMenu />
      </div>

      {/* Side Drawer */}
      <div className="flex z-10">
        <div
          className={`fixed top-0 z-10 h-full w-[100%] sm:w-[300px] bg-[#1f2937] text-white transition-all duration-300 ${
            isOpen ? "left-0" : "-left-full"
          } lg:left-0  shadow-lg `}
        >
          <div className="flex flex-col h-full justify-between">
            {/* Header */}
            <div className="flex justify-between items-center p-6 bg-[#111827]">
              <h2 className="text-2xl font-bold text-orange-400">Bid Out</h2>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="block sm:hidden p-2 rounded-full hover:bg-gray-700"
              >
                <IoCloseSharp size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="mt-6">
              <ul>
                <NavItem to="/" icon={<FaHome size={24} />} label="Home" />
                <NavItem
                  to="/auctions"
                  icon={<RiAuctionFill size={24} />}
                  label="Auctions"
                />
                <NavItem
                  to="/leaderboard"
                  icon={<MdLeaderboard size={24} />}
                  label="Leaderboard"
                />
                 {isAuthenticated && user && user.role === "Auctioneer" && (
                  <>
                    <NavItem
                      to="/submitcommission"
                      icon={<FaFileInvoiceDollar size={24} />}
                      label="Submit Commission"
                    />
                    <NavItem
                      to="/create-auction"
                      icon={<IoIosCreate size={24} />}
                      label="Create Auction"
                    />
                    <NavItem
                      to="/view-my-auctions"
                      icon={<FaEye size={24} />}
                      label="View My Auctions"
                    />
                  </>
                )}
                {isAuthenticated && user && user.role === "admin" && (
                  <NavItem
                    to="/dashboard"
                    icon={<MdDashboard size={24} />}
                    label="Dashboard"
                  />
                )}

                <NavItem
                  to="/howitworks"
                  icon={<SiGooglesearchconsole size={24} />}
                  label="How It Works"
                />
                <NavItem
                  to="/about"
                  icon={<BsFillInfoSquareFill size={24} />}
                  label="About"
                />

               

                
              </ul>
            </nav>

            {/* Auth Buttons */}
            <div className="px-6 py-4">
              {!isAuthenticated ? (
                <div className="flex justify-between gap-4">
                  <AuthButton  to="/signup" label="Sign Up" />
                  <AuthButton to="/login" label="Login" />
                </div>
              ) : (
                <button
                  onClick={handleLogout}
                  className="w-full bg-red-500 py-2 rounded-md text-white hover:bg-red-600 transition-all"
                >
                  Logout
                </button>
              )}
            </div>

            

            {/* Footer */}
            <div className="px-6 py-4 border-t border-gray-600">
              <ul className="flex gap-6 justify-center mb-4">
                <FooterIcon to="/" icon={<FaFacebookSquare size={24} />} />
                <FooterIcon to="/" icon={<FaLinkedin size={24} />} />
                <FooterIcon to="/" icon={<FaGithubSquare size={24} />} />
              </ul>
              <p className="text-center text-gray-400 text-sm">
                &copy; 2024 BidOut, LLC. Designed by{" "}
                <Link
                  to="/"
                  className="text-orange-400 hover:underline"
                >
                  Amaldev
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// Reusable Components
const NavItem = ({ to, icon, label }) => (
  <Link to={to}>
    <li className="flex items-center p-4 hover:bg-gray-600 hover:text-orange-300 transition-all cursor-pointer">
      {icon}
      <span className="ml-4">{label}</span>
    </li>
  </Link>
);

const AuthButton = ({ to, label }) => (
  <Link
    to={to}
    className="flex-1 bg-gray-600 py-2 text-center text-white rounded-md hover:bg-gray-700 transition-all"
  >
    {label}
  </Link>
);

const FooterIcon = ({ to, icon }) => (
  <Link to={to} className="text-gray-400 hover:text-white transition-all">
    {icon}
  </Link>
);

export default SideDrawer;
