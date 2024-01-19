import { useState } from "react";
import { FiDatabase, FiDownload, FiGrid, FiHome, FiList, FiMessageSquare, FiRadio, FiSettings } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbCalculator } from "react-icons/tb";
import AllBooks, { BooksStack } from './appliances';
import { useLocation } from "react-router-dom";


interface Link {
    id: number; label: string; icon: any, link: string
}
interface Links extends Array<Link>{}

export default function Books() {
    const { hash } = useLocation()
    const [active, setActive] = useState(hash.replace("#", "")) 
    const [open, setOpen] = useState(false)
    const [display, setDisplay] = useState("Grid")
    const { christianBooks }: BooksStack = AllBooks;



    const generalLinks: Links = [
        { id: 0, label: "Featured", icon: <FiDatabase />, link: "#Featured" },
        { id: 1, label: "Christian", icon: <FiSettings />, link: "#Christian" },
        { id: 2, label: "Academics", icon: <TbCalculator />, link: "#Academics" },
        { id: 3, label: "Sermons", icon: <FiMessageSquare />, link: "#Sermons" }
    ]

    return (
        <div className="">

            <div className="flex items-center gap-2 text-[12px] py-4 md:px-[9%] px-[3%] border border-transparent border-b-gray-200 dark:border-b-slate-100/[0.09] ">
                <button className="md:hidden p-2 mr-2 text-lg" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
                <a href="/" className="text-lg"><FiHome /></a> | <a href="/resources" className="opacity-[0.6]"> Books</a> | <span className="opacity-[0.6]"> {active}</span>
            </div>
            
            <div className="md:flex relative min-h-[100vh] md:px-[9%] px-[3%] bg-white dark:bg-transparent">
                <div className={`lg:w-[25%] md:w-[27%] w-[240px] h-screen md:sticky absolute top-[0px] md:pl-0 p-4 left-0 bg-white dark:bg-black border border-transparent border-r-gray-200 dark:border-r-slate-100/[0.09] overflow-hidden z-10 transition-all duration-700 ${open ? "translate-x-[0]": "md:translate-x-[0] translate-x-[-130%]"}`}>  
                    {
                        generalLinks.map(link => {
                                return (
                                <a key={link.id} href={link.link} onClick={() => {setActive(link.label); setOpen(false) }} className={`flex items-center justify-between p-1 my-[2px] px-4 hover:bg-purple hover:text-white rounded ${active === link.label ? "bg-purple text-white" : ""}`}>
                                    <span className="w-[30px] text-lg">{link.icon}</span>
                                    <span className="flex-1 p-2 break-normal">{link.label}</span>
                                </a>
                                )
                        })
                    }
                </div>

                <div className="md:p-[3%] md:w-[73%] w-full py-3 ">
                <div className="flex items-center justify-between gap-[3%]">
                    <div>
                        <h1 className="font-semibold uppercase text-[15px] text-purple mb-2">Christian Books</h1>
                        <p className="leading-[130%] text-[12px]">Welcome to the christian books repository. We have both softcopy<span className="text-purple">(s)</span> for download as well as hardcopies<span className="text-purple">(h)</span>.</p>
                    </div>
                    <div className="flex">
                        <button className={`p-2 text-[16px] ${display === "List" ? "bg-purple text-white" : "bg-gray-200/[0.08]"}`} onClick={() => setDisplay("List")}><FiList /></button>
                        <button className={`p-2 text-[16px] ${display === "Grid" ? "bg-purple text-white" : "bg-gray-200/[0.08]"}`} onClick={() => setDisplay("Grid")}><FiGrid /></button>
                    </div>
                </div>
                    <div className="w-full min-h-[70vh] overflow-x-auto">
                        <table className="w-full my-6 min-w-[600px]">
                            <thead className="">
                                <tr className="text-left border border-transparent border-b-gray-500/[0.4]">
                                    <th className="p-2"></th>
                                    <th className="p-2">Title</th>
                                    <th className="p-2">Author</th>
                                    <th className="p-2">type</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                christianBooks.map((item: any, i: number) => (
                                    <tr className=" border border-transparent border-b-gray-400/[0.08]">
                                        <td className="p-2">{i + 1}.</td>
                                        <td className="p-2">{item.title}</td>
                                        <td className="p-2">{item.author}</td>
                                        <td className="p-2">{item.type}</td>
                                        <td className="flex items-center justify-end gap-2 p-2">
                                            <button className="p-[2px] md:px-4 px-2 rounded text-[10px] bg-purple/[0.1] border border-gray-100/[0.09] px-3bg-purple"><span className="md:block hidden">Download</span><FiDownload className="md:hidden py-2 px-0 text-[30px]"/></button>
                                            <button className="p-[2px] md:px-4 px-2 rounded text-[10px] bg-purple/[0.1] border border-gray-100/[0.09] px-3bg-purple"><span className="md:block hidden">Request</span><FiRadio className="md:hidden py-2 px-0 text-[30px]"/></button>
                                        </td>
                                    </tr>
                                ))
                            }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    )
}