import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";

export default function DashboardBooks() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative overflow-hidden h-full">
            <h1 className="font-semibold uppercase text-[15px] text-green mb-2">Books</h1>
            <p className="leading-[130%] text-[12px]">Edit books, Add new books or delete books</p>
            <a href="#new" onClick={() => setOpen(true)} className="flex items-center gap-2 p-2 px-6 w-fit my-4 rounded bg-green/[0.1] border border-green"><span>Add new book</span> <FiPlus /> </a>
               
            
            <div className={`absolute top-0 w-full bg-white dark:bg-black mb-8 p-2 transition-all duration-500 ${open ? "left-0" : "left-[120%]"}`}>
                <div className="flex justify-between items-center pb-6">
                    <button onClick={() => setOpen(false)} ><FaChevronLeft className="p-2 text-[30px] rounded bg-green/[0.1]" /></button>
                </div>
                <p className="py-1 text-green uppercase animate-zoom-in mb-8">New book</p>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-2 mb-4">
                        <p className="md:w-[30%] md:mb-0 mb-2">Book Title: </p>
                        <input className="p-[5px] px-3 rounded border border-gray-500/[0.5] bg-transparent w-full focus:outline outline-green outline-offset-1" type="text" placeholder="Add a title" />
                    </div>
                    
                    <div className="flex flex-col gap-2 mb-4">
                        <p className="md:w-[30%] md:mb-0 mb-2">Category: </p>
                        <input className="p-[5px] px-3 rounded border border-gray-500/[0.5] bg-transparent w-full focus:outline outline-green outline-offset-1" type="text" placeholder="Add a category" />
                    </div>

                    
                <button className="flex items-center gap-2 p-2 px-6 w-fit my-4 rounded bg-green text-white"><span>Publish</span> <FiPlus /> </button>
                </div>
            </div>
        </div>
    )
}