import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="px-4 md:px-10 pt-10 ">
        <div className="bg-rose-100 px-6 py-10 md:py-15 rounded-3xl flex flex-col md:flex-row justify-between  ">
          <p className="text-xl">
            <span className="italic font-[10]">SONU</span>{" "}
            <span className="font-bold">GUPTA</span>{" "}
          </p>
          <div className=" flex gap-15 pt-8 md:pt-0">
            <p className="font-bold  font-thin text-sm">PROJECTS</p>
            <p className="font-bold  font-thin text-sm">ABOUT</p>
            <p className="font-bold font-thin text-sm">CONTACT</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
