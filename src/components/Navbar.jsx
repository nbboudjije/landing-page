import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [toogle, setToogle] = useState(false);

  const openToogle = () => {
    setToogle(!toogle);
  };

  return (
    <div className="text-white flex justify-between items-center h-20 max-w-[1240px] m-auto px-6">
      <h1 className="text-3xl font-bold text-white">NADJIB</h1>
      <ul className="hidden md:flex ">
        <li className="p-3 cursor-pointer">Home</li>
        <li className="p-3 cursor-pointer">Company</li>
        <li className="p-3 cursor-pointer">Resources</li>
        <li className="p-3 cursor-pointer">About</li>
        <li className="p-3 cursor-pointer">Contact</li>
      </ul>

      <div onClick={openToogle} className="block md:hidden">
        {!toogle ? <AiOutlineMenu size={20} /> : <AiOutlineClose size={20} />}
      </div>
      <div
        className={
          !toogle
            ? "fixed left-[-100%]"
            : "fixed left-0 top-0 w-[60%] h-full border-r border-r-slate-300 bg-[#1F6E8C] ease-in-out duration-500"
        }
      >
        <h1 className="text-3xl font-bold text-white m-4">NADJIB</h1>
        <ul className="uppercase p-4">
          <li className="p-3 cursor-pointer border-b border-b-[#2E8A99]">
            Home
          </li>
          <li className="p-3 cursor-pointer border-b border-b-[#2E8A99]">
            Company
          </li>
          <li className="p-3 cursor-pointer border-b border-b-[#2E8A99]">
            Resources
          </li>
          <li className="p-3 cursor-pointer border-b border-b-[#2E8A99]">
            About
          </li>
          <li className="p-3 cursor-pointer ">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
