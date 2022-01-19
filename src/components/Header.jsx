import React from "react";
import {MdOutlineDashboardCustomize} from "react-icons/md"
import {BiGridSmall} from "react-icons/bi"
import {ImNotification} from "react-icons/im"
import {IoIosNotifications} from "react-icons/io"
import {HiUserCircle} from "react-icons/hi"
const Header = () => {
      return (
          
            <div className=" app  opacity-50 bg-black  flex justify-between text-white p-1.5 " >
                  <div className="flex gap-6 items-center " >
                   <div className="flex items-center gap-2">
                        
                        <h3 className="flex gap-1 items-center ml-2 opacity-100   text-xl mt-1 font-bold cursor-pointer ">
                   <MdOutlineDashboardCustomize className="text-2xl" />
                        Trello</h3>
                   </div>
                        <h3 className="text-sm mt-1  opacity-100  text-white   hover:rounded p-2 cursor-pointer " >Workspaces</h3>
                        <h3 className="text-sm mt-1 opacity-100  text-white   hover:rounded p-2 cursor-pointer " >Recent</h3>
                        <h3 className="text-sm mt-1 opacity-100  text-white  hover:rounded p-2 cursor-pointer " >Starred</h3>
                        <h3 className="text-sm mt-1 opacity-100  text-white  hover:rounded p-2 cursor-pointer " >Templates</h3>
                        <h3 className="text-sm mt-1 opacity-100  text-white   hover:rounded p-2 cursor-pointer" >Create</h3>

                  </div>
                  <div className="flex items-center  opacity-100 gap-2" >
                       <input 
                       type="text" 
                      placeholder="search..."
                       className="p-1.5 text-sm  opacity-100  bg-gray-400 rounded " />
                        <ImNotification  className="text-xl opacity-100  text-white"/>
                        <IoIosNotifications className="text-2xl bg-red-700 rounded m-1 p-0.5 text-white" />
                        <HiUserCircle className="text-4xl text-red-600 " />
                  </div>
            </div>
       
      )
}

export default Header;