import React, { useState } from "react";
import DocViewer, { DocViewerRenderers } from "react-doc-viewer";
import Control from "./assets/control.png";
import Chartfill from "./assets/Chart_fill.png";
import Chat from "./assets/Chat.png";
import User from "./assets/User.png";
import Search from "./assets/Search.png";
import Setting from "./assets/Setting.png";
import Chart from "./assets/Chart.png";
import Folder from "./assets/Folder.png";
import Logo from "./assets/logo.png";
import Calender from "./assets/Calendar.png";
import WordOne from "./assets/wordone.docx"
import { NavLink } from "react-router-dom";

function Docs({data}) {

  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Guide", src: Chartfill,url:"/docshome" },
    { title: "API referance", src: Chat ,url:"/about"},
    { title: "Best Practices", src: User,url:"/docshome" },
    { title: "Mobile ", src: Calender  ,url:"/docshome"},
    { title: "Snaps", src: Search  ,url:"/docshome"},
    { title: "Resources", src: Chart  ,url:"/docshome"},

  ];
  const docs = [
       
    { uri:WordOne}
 
  ];
  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-purple-600 h-auto p-5  pt-8 relative duration-300`}
      >
        <img
          src={Control}
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
             border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src={Logo}
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Balance Wallet
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
           <NavLink to={Menu.url}>
             <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-slate-50 text-gray-300 text-sm items-center gap-x-4 
                ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              {/* <img src={Menu.src} /> */}
              <span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
            </li>
           </NavLink>
          ))}
        </ul>
      </div>
      <>
        <div className="h-screen flex-1 p-7">
              {data}
        </div>
      </>
    </div>
  );
}
export default Docs;
