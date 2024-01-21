import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

export default function ChristianBooks({ christianBooks, display }: any) {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("")
    const [type, setType] = useState("Softcopies")

    return (
        <div className="relative overflow-hidden">
            <h1 className="font-semibold uppercase text-[15px] text-green mb-2">Christian Books</h1>
            <p className="leading-[130%] text-[12px]">Welcome to the christian books repository. We have softcopies for download and hardcopies you can borrow</p>

            <div className="flex items-center gap-2 py-4 my-4 border border-transparent border-y-gray-600/[0.2] rounded">
                
                <div>
                    <p className="opacity-[0.7] text-[12px]">Choose type:</p>
                    <select className="p-[11px] md:px-4 px-2 rounded bg-transparent border border-gray-100 dark:border-gray-100/[0.09] px-3 focus:outline outline-green/[0.3] outline-offset-1" onChange={(e) => setType(e.target.value)}>
                        <option className="bg-black text-white">Softcopies</option>
                        <option className="bg-black text-white">Hardcopies</option>
                    </select>
                </div>
            </div>

            <div className={`grid gap-4 my-8 ${display === "List" ? "" : "lg:grid-cols-3 grid-cols-2 "}`}>
                {
                christianBooks.filter((item: any) => item.type.indexOf(type.charAt(0).toLowerCase()) !== -1).map((book: any, i: number) => (
                        <a href={"#" + book.title} onClick={() => {setActive(book.title); setOpen(true)}} key={i} className={`flex gap-4 animate-zoom-in border border-gray-500/[0.3] dark:bg-gray-300/[0.07] ${display === "List" ? "items-center justify-between rounded p-2 px-4" : "flex-col justify-end rounded-[10px] min-h-[130px] p-5 "}`}>
                            <div className="flex flex-col justify-end gap-2">
                                <p className={`font-semibold leading-[140%] overflow-hidden ${display === "List" ? "" : ""}`}>{book.title}</p>
                                <p className="opacity-[0.6] text-[12px] leading-[140%] overflow-hidden bg-green/[0.1] px-2 p-1 rounded w-fit">{book.author}</p>
                            </div>
                        </a>
                    ))
                }
            </div>

            <div className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-black transition-all duration-500 ${open ? "left-0" : "left-[110%]"}`}>
                <div className="flex justify-between items-center py-4">
                    <button onClick={() => setOpen(false)} ><FaChevronLeft className="p-2 text-[30px] rounded bg-green/[0.1]" /></button>
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold">{active}</h1> 
                </div>
            </div>
            
        </div>
    )
}