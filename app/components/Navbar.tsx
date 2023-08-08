"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { LiaUserCircle } from "react-icons/lia";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
import Container from "./Container";
import { inter, roboto } from "../layout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const handleClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  const routes = [
    { label: "Home", url: "/" },
    { label: "Features", url: "/features", icon: <BsChevronDown /> },
    { label: "Blog", url: "/blog" },
    { label: "Shop", url: "/shop" },
    { label: "About", url: "/about" },
    { label: "Contact", url: "/contact" },
  ];

  return (
    <Container classNames={`${isOpen && "bg-black md:bg-transparent"}`}>
      <nav className={`md:flex md:items-center md:justify-between h-[80px] `}>
        <div className="flex justify-between items-center h-[80px]">
          <span
            className={`text-2xl font-bold md:text-black ${inter.className} ${
              isOpen ? "text-white" : "text-black"
            }`}
          >
            Logo Here
          </span>
          <span
            className={`text-3xl cursor-pointer mx-2 md:hidden block ${
              isOpen ? "text-white" : "text-black"
            }`}
            onClick={handleClick}
          >
            {isOpen ? <AiOutlineClose /> : <HiOutlineMenuAlt3 />}
          </span>
        </div>
        <ul
          className={`md:flex md:items-center md:static absolute bg-black md:bg-transparent text-white md:text-black w-full left-0 md:w-auto md:py-0 py-4 md:pl-0 pl-6 opacity-100 top-[-400px] transition-all ease-in duration-500 ${
            isOpen && "top-[80px]"
          }`}
        >
          {routes.map((route) => (
            <li
              className={`mx-0 mb-7 md:my-0 md:mx-4 hover:font-bold transition-all text-sm md:text-base ${
                roboto.className
              } ${route.url === pathname && "font-bold"}`}
              key={route.label}
              onClick={() => setIsOpen(false)}
            >
              <Link href={route.url} className="flex items-center">
                {route.label}
                {route.icon && <span className="ml-1">{route.icon}</span>}
              </Link>
            </li>
          ))}
          <div className="flex justify-center text-3xl">
            <Link href="/user" className="ml-6">
              <span onClick={() => setIsOpen(false)}>
                <LiaUserCircle />
              </span>
            </Link>
            <Link href="/cart" className="ml-8">
              <span onClick={() => setIsOpen(false)}>
                <PiShoppingCartSimpleLight />
              </span>
            </Link>
          </div>
        </ul>
      </nav>
    </Container>
  );
};

export default Navbar;
