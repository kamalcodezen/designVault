"use client";

import Link from "next/link";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import { Avatar } from "@heroui/react";
import { usePathname } from "next/navigation";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { PiTrendUpLight } from "react-icons/pi";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const links = [
    // { label: "Home", path: "/" },
    { label: "Ideas", path: "/ideas" },
    { label: "Add Idea", path: "/add-idea" },
    { label: "My Ideas", path: "/my-idea" },
    { label: "My Interactions", path: "/my-interactions" },
  ];

  const user = false;
  const isPending = false;

  return (
    <div className="fixed top-0 left-0  w-full z-50">
      {/* left side */}
      <div className=" w-11/12 mx-auto px-6 py-4 flex justify-between items-center text-white">
        <div className="flex items-center justify-center gap-10">
          {/* logo */}
          <Link href={"/"}>
            <p
              className="text-3xl font-semibold flex items-center "
              title="Home"
            >
              Design<span className="text-[#D95C78]">Vault</span>
            </p>
          </Link>

          <div className="hidden md:flex gap-5 text-[17px]">
            {links.map((link, ind) => {
              return (
                <Link
                  key={ind}
                  href={link.path}
                  className={`${pathname === link.path ? "text-[#ff58ae]" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>

        {/*desktop right side dropdown */}
        <div>
          {/* Loading skeleton */}
          {isPending && (
            <div className="h-10 w-24 animate-pulse rounded-2xl bg-muted" />
          )}

          <>
            {/* dropdown Avatar */}
            <div className="flex items-center justify-center">
              {user && (
                <div className="flex items-center gap-4 mr-4 md:mr-0">
                  {/* Avatar + Dropdown */}
                  <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="cursor-pointer">
                      <Avatar className="ring-2 ring-[#D95C78]/40 hover:ring-[#F29BAE] transition-all duration-300">
                        <Avatar.Image
                          alt={user?.name}
                          src={user?.image}
                          referrerPolicy="no-referrer"
                        />

                        <Avatar.Fallback className="bg-[#D95C78] text-white font-semibold">
                          {user?.name?.charAt(0)}
                        </Avatar.Fallback>
                      </Avatar>
                    </div>

                    {/* Dropdown Content */}
                    <ul
                      tabIndex={0}
                      className="
            dropdown-content 
            z-[100]
            mt-4
            w-60
            md:w-72
            p-5
            rounded-xl
            bg-[#2B1E22]/95
            backdrop-blur-xl
            border
            border-white/10
            shadow-2xl
          "
                    >
                      {/* User Info */}
                      <div className="pb-4 border-b border-white/10">
                        <div className="flex items-center gap-3">
                          <Avatar>
                            <Avatar.Image
                              alt={user?.name}
                              src={user?.image}
                              referrerPolicy="no-referrer"
                            />

                            <Avatar.Fallback className="bg-[#D95C78] text-white">
                              {user?.name?.charAt(0)}
                            </Avatar.Fallback>
                          </Avatar>

                          <div>
                            <h2 className="font-semibold text-[#FFF4F5]">
                              {user?.name}
                            </h2>

                            <p className="text-sm text-[#FFF4F5]/50">
                              {user?.email}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Profile */}
                      <li className="mt-4 list-none">
                        <Link
                          href="/profile"
                          className="
                flex
                items-center
                gap-3
                px-4
                py-3
                rounded-xl
                hover:bg-white/5
                transition-all
                text-[#FFF4F5]
              "
                        >
                          <span>👤</span>
                          <span>My Profile</span>
                        </Link>
                      </li>

                      {/* Logout */}
                      <li className="mt-3 list-none">
                        <button
                          // onClick={handleLogout}
                          className="  w-full  px-4 py-1 rounded  bg-[#D95C78]/35 text-[#fff] text-center py-[8.7px]  flex-1 hover:text-[#FFF4F5] hover:bg-white/5 cursor-pointer "
                        >
                          Logout
                        </button>
                      </li>
                    </ul>
                  </div>

                  {/* Desktop Logout */}
                  <button
                    // onClick={handleLogout}
                    className=" hidden md:flex items-center gap-2 px-5 py-1 text-[14px]  bg-white text-black hover:bg-[#fff]/95 px-5 py-2 rounded-md font-medium  transition-all duration-300 cursor-pointer"
                  >
                    Logout
                  </button>
                </div>
              )}

              {/* Mobile Menu */}
              <button
                onClick={() => setOpen(true)}
                className="md:hidden text-3xl text-[#FFF4F5] hover:text-[#F29BAE] transition-all duration-300 cursor-pointer"
              >
                <HiMenu />
              </button>
            </div>
          </>

          <>
            {!user && (
              <div className="flex items-center justify-center gap-2 text-[14px]">
                <Link
                  href="/login"
                  className="hidden md:block hover:text-[#FFF4F5] hover:bg-white/5 px-5 py-2 rounded-md hover:bg-"
                >
                  Login
                </Link>

                <Link
                  href="/signup"
                  className="hidden md:block bg-white text-black hover:bg-[#fff]/95 px-5 py-2 rounded-md"
                >
                  Register
                </Link>
              </div>
            )}
          </>
        </div>
      </div>

      {/* =============== mobile dropdown ================== */}

      {/* mobile dropdown/slide */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-[80%] max-w-sm bg-[#1e293b] z-50 transform transition-transform duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center px-6 py-4 text-white border-b border-gray-700">
          {/* heading */}
          <h1 className="text-lg font-bold flex items-center gap-2">
            {/* <MdMenuBook className="text-xl text-[#F29BAE]" /> */}
            <span className="text-[#F29BAE]">Design</span> Vault
          </h1>

          <button
            onClick={() => setOpen(false)}
            className="text-2xl rotate-6 cursor-pointer"
          >
            <HiX />
          </button>
        </div>

        {/* all menu mobile */}
        <div className="px-6 py-6 space-y-5 text-white">
          {links.map((link, ind) => (
            <Link
              key={ind}
              href={link.path}
              onClick={() => setOpen(false)}
              className={`flex items-center justify-between px-4 py-1 rounded-sm transition-all duration-300 ${
                pathname === link.path
                  ? "bg-[#D95C78]/15 text-[#F29BAE] border border-[#D95C78]/20"
                  : "text-[#FFF4F5]/70 hover:text-[#FFF4F5] hover:bg-white/5"
              }`}
            >
              <span>{link.label}</span>

              <IoIosArrowDroprightCircle
                className={`text-xl ${
                  pathname === link.path
                    ? "text-[#D95C78]"
                    : "text-[#FFF4F5]/40"
                }`}
              />
            </Link>
          ))}

          {/* <Link
            href="/"
            onClick={() => setOpen(false)}
            // className={`block ${activeClass("/")}`}
          >
            Home
          </Link> */}

          {user ? (
            <>
              <div className="flex items-center justify-between px-4 py-1 rounded-sm transition-all duration-300 text-[#FFF4F5]/70 hover:text-[#FFF4F5] hover:bg-white/5 cursor-pointer">
                <span>Profile</span>

                <IoIosArrowDroprightCircle className="text-[#FFF4F5]/40 text-xl" />
              </div>

              <span
                // onClick={handleSignOut}
                onClick={() => setOpen(false)}
                className="block bg-[#D95C78]/35 text-[#fff] text-center py-[8.7px]  flex-1 hover:text-[#FFF4F5] hover:bg-white/5 "
              >
                Logout
              </span>
            </>
          ) : (
            <div className=" mt-8 flex items-center justify-center border-2 border-[#D95C78]/20 rounded-sm ">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="block bg-[#D95C78]/35 text-[#fff] text-center py-[8.7px]  flex-1 hover:text-[#FFF4F5] hover:bg-white/5 "
              >
                Login
              </Link>

              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="block  text-center py-[8.7px] flex-1 hover:text-[#FFF4F5] hover:bg-white/5"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
