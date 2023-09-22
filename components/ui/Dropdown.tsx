"use client";
import { list } from "postcss";
import React, { useState } from "react";
import { AiOutlineCaretDown, AiOutlineCaretUp } from "react-icons/ai";
import { isObject } from "util";

function Dropdown()
{
    const [isOpen, setIsOpen] = useState(false)
    return(
        <div className="relative flex flex-col items-center w-[340px] h-[340px] rounded-lg">
            <button onClick={() => setIsOpen((prev) => !prev)} className="bg-blue-400 p-4 w-full text-allign-left font-bold text-lg rounded-lg tracking-wider border-4 border-transparent hover:border-white duration-300 hover:text-white">
               Dropdown
               {!isOpen ? ( <AiOutlineCaretDown classname="h-8"/> ): (<AiOutlineCaretUp classname="h-8"/>)}
            </button> 
            {isOpen && (
                <div className="bg-blue-400 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full ">
                    <div>
                        <h3 className="bg-blue-400 p-4 w-full text-allign-left font-bold text-lg rounded-lg tracking-wider border-4 border-transparent hover:border-white duration-300 hover:text-white">Kolkata</h3>
                        <h3 className="bg-blue-400 p-4 w-full text-allign-left font-bold text-lg rounded-lg tracking-wider border-4 border-transparent hover:border-white duration-300 hover:text-white">Kolkata</h3>
                        <h3 className="bg-blue-400 p-4 w-full text-allign-left font-bold text-lg rounded-lg tracking-wider border-4 border-transparent hover:border-white duration-300 hover:text-white">Kolkata</h3>
                    </div>
                </div>    
            )}
        </div>
    )
}
export default Dropdown;