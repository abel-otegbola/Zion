import { useState } from "react";
import { FiDatabase, FiGrid, FiHome, FiList, FiMessageSquare, FiSettings } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";
import { TbCalculator } from "react-icons/tb";
import AllBooks, { BooksStack } from './BooksData';
import { useLocation } from "react-router-dom";
import ChristianBooks from "./sections/christianBooks";
import Featured from "./sections/featured";
import AcademicBooks from "./sections/academicBooks";


interface Link {
    id: number; label: string; icon: any, link: string
}
interface Links extends Array<Link>{}

export default function Books() {
    const { hash } = useLocation()
    const [active, setActive] = useState(hash.replace("#", "") || "featured") 
    const [open, setOpen] = useState(false)
    const [display, setDisplay] = useState("Grid")
    const { christianBooks, faculties }: BooksStack = AllBooks;

    const generalLinks: Links = [
        { id: 0, label: "Featured", icon: <FiDatabase />, link: "#featured" },
        { id: 1, label: "Christian", icon: <FiSettings />, link: "#christian" },
        { id: 2, label: "Academics", icon: <TbCalculator />, link: "#academics" },
        { id: 3, label: "Sermons", icon: <FiMessageSquare />, link: "#sermons" }
    ]

    return (
        <div className="">

            <div className="py-4 md:px-[9%] px-[3%] border border-transparent border-b-gray-200 dark:border-b-slate-100/[0.09] ">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-[12px] ">
                        <button className="md:hidden p-2 mr-2 text-lg" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
                        <a href="/" className="text-lg"><FiHome /></a> | <a href="/resources" className="opacity-[0.6]"> Books</a> | <span className="opacity-[0.6]"> {active}</span>
                    </div>
                    <div className="flex">
                        <button className={`p-2 text-[16px] ${display === "List" ? "bg-purple text-white" : "bg-gray-200/[0.08]"}`} onClick={() => setDisplay("List")}><FiList /></button>
                        <button className={`p-2 text-[16px] ${display === "Grid" ? "bg-purple text-white" : "bg-gray-200/[0.08]"}`} onClick={() => setDisplay("Grid")}><FiGrid /></button>
                    </div>
                </div>
            </div>
            
            <div className="md:flex relative min-h-[100vh] md:px-[9%] px-[3%] bg-white dark:bg-transparent">
                <div className={`md:w-[25%] w-[240px] h-screen md:sticky absolute top-[0px] md:pl-0 p-4 left-0 bg-white dark:bg-black border border-transparent border-r-gray-200 dark:border-r-slate-100/[0.09] overflow-hidden z-10 transition-all duration-700 ${open ? "translate-x-[0]": "md:translate-x-[0] translate-x-[-130%]"}`}>  
                    {
                        generalLinks.map(link => {
                                return (
                                <a key={link.id} href={link.link} onClick={() => {setActive(link.label.toLowerCase()); setOpen(false) }} className={`flex items-center justify-between p-1 my-[2px] px-4 hover:bg-purple hover:text-white rounded ${active === link.label.toLowerCase() ? "bg-purple text-white" : ""}`}>
                                    <span className="w-[30px] text-lg">{link.icon}</span>
                                    <span className="flex-1 p-2 break-normal">{link.label}</span>
                                </a>
                                )
                        })
                    }
                </div>

                <div className="md:p-[3%] md:w-[75%] w-full py-[40px] ">
                    {
                        active === "christian" ? 
                            <ChristianBooks christianBooks={christianBooks} display={display} />
                        : 
                        active === "academics" ?
                            <AcademicBooks data={faculties} display={display} />
                        :
                            <Featured />
                    }
                </div>
            </div>
        </div>
    )
}