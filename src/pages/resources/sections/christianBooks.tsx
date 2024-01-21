import { useState } from "react";
import { FaTimes } from "react-icons/fa";

export default function ChristianBooks({ christianBooks, display }: any) {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("")

    return (
        <div className="relative overflow-hidden">
            <h1 className="font-semibold uppercase text-[15px] text-green mb-2">Christian Books</h1>
            <p className="leading-[130%] text-[12px]">Welcome to the christian books repository. We have both softcopy<span className="text-green">(s)</span> for download as well as hardcopies<span className="text-green">(h)</span>.</p>

            <div className={`grid gap-4 my-8 ${display === "List" ? "" : "lg:grid-cols-3 grid-cols-2 "}`}>
                {
                christianBooks.map((book: any, i: number) => (
                        <a href={"#" + book.title} onClick={() => {setActive(book.title); setOpen(true)}} key={i} className={`flex gap-4 animate-zoom-in border border-gray-500/[0.3] dark:bg-gray-300/[0.07] ${display === "List" ? "items-center justify-between rounded p-2 px-4" : "flex-col justify-between rounded-[10px] p-5 "}`}>
                            <div className="flex flex-col gap-2">
                                <p className={`font-semibold leading-[130%] overflow-hidden ${display === "List" ? "" : ""}`}>{book.title}</p>
                                <p className="opacity-[0.6] text-[12px] leading-[130%] overflow-hidden">{book.author}</p>
                            </div>
                            
                            <div className="flex items-center gap-2">
                                { 
                                    book.type.indexOf("s") !== -1 ?
                                    <button className="p-[1px] md:px-4 rounded text-[10px] bg-green/[0.1] border border-gray-100/[0.09] px-3 bg-green">Softcopy</button>
                                    : ""
                                }
                                {
                                    book.type.indexOf("h") !== -1 ?
                                    <button className="p-[1px] md:px-4 rounded text-[10px] bg-green/[0.1] border border-gray-100/[0.09] px-3 bg-green">Hardcopy</button>
                                    : ""
                                }
                            </div>
                        </a>
                    ))
                }
            </div>

            <div className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-black transition-all duration-500 ${open ? "left-0" : "left-[110%]"}`}>
                <div className="flex justify-between items-center">
                    <h1>{active}</h1>
                    <FaTimes onClick={() => setOpen(false)} />
                </div>
            </div>
            
        </div>
    )
}