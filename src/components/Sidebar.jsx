import React from 'react';
import "../index.css"
import {HiUserCircle} from "react-icons/hi"
import {RiFileUserFill} from "react-icons/ri"
const Sidebar = () => {
    return (
    
        <div class="sidebar text-white hover:text-white font-bold opacity-60 bg-gray-700  ">
          <h1 className="flex items-center gap-2  text-xl opacity-100 cursor-pointer m-2 bg-gray-600 text-white font-bold p-2 rounded hover:bg-gray-800  " >
          <RiFileUserFill className="text-3xl text-blue-700 " /> Daily Trello's </h1>

            <hr/>
          <h1 className="flex items-center gap-2  text-lg opacity-100 cursor-pointer m-2 bg-gray-600 text-white font-bold p-2 rounded hover:bg-gray-800  " > Your Board's 
          <HiUserCircle className="text-3xl text-red-500" /></h1>
          <h1 className="text-md opacity-100 cursor-pointer m-2 bg-gray-600 text-white font-bold p-2 rounded hover:bg-gray-800 " >Eco-System</h1>
          <h1 className="text-md opacity-100 cursor-pointer m-2 bg-gray-600 text-white font-bold p-2 rounded hover:bg-gray-800 " >Part Dekho</h1>
          <h1 className="text-md opacity-100 cursor-pointer m-2 bg-gray-600 text-white font-bold p-2 rounded hover:bg-gray-800 " >Mushin</h1>
          <h1 className="text-md opacity-100 cursor-pointer m-2 bg-gray-600 text-white font-bold p-2 rounded hover:bg-gray-800 " >Aarnova</h1>
          <h1 className="text-md opacity-100 cursor-pointer m-2 bg-gray-600 text-white font-bold p-2 rounded hover:bg-gray-800 " >New  Project</h1>


          <h1 className="absolute bottom-16 font-normal p-2 text-xs" >
          You are a guest on these boards. To see other boards and members in this Workspace, an admin must add you as a Workspace member.You are a guest on these boards. To see other boards and members in this Workspace, an admin must add you as a Workspace member.</h1>
        </div>

        
    );
};


export default Sidebar;
