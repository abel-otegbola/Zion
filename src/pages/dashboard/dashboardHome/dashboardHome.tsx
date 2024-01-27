import { useContext, useState } from "react"
import { AuthContext } from "../../../customHooks/useAuth"
import { Links } from "../../resources/books";
import { TbBook, TbDashboard, TbUsers } from "react-icons/tb";
import { FiHome } from "react-icons/fi";
import { FaBars, FaTimes } from "react-icons/fa";

function DashboardHome() {
    const { user } = useContext(AuthContext);
    const [active, setActive] = useState("dashboard") 
    const [open, setOpen] = useState(false)

    const generalLinks: Links = [
            { id: 0, label: "Dashboard", icon: <TbDashboard />, link: "#dashboard" },
            { id: 1, label: "Books", icon: <TbBook />, link: "#book" },
            { id: 2, label: "Users", icon: <TbUsers />, link: "#users" },
        ]

    return (
        <>
            <div className="sticky top-0 left-0 p-4 md:px-[9%] px-[3%] bg-white dark:bg-black border border-transparent border-b-gray-200 dark:border-b-slate-100/[0.09] z-20">
                <div className="flex items-center gap-2 text-[12px] ">
                    <button className="md:hidden p-2 mr-2 text-lg" onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
                    <a href="/" className="text-lg"><FiHome /></a> | <a href="/dashboard" className="opacity-[0.6]"> Account</a> | <span className="opacity-[0.6]"> {active}</span>
                </div>
            </div>

            <div className="w-full md:px-[9%] px-[3%]">
                <div className={`md:w-[25%] w-[240px] h-screen sticky top-0 md:pl-0 p-4 left-0 bg-white dark:bg-black border border-transparent border-r-gray-200 dark:border-r-slate-100/[0.09] overflow-hidden z-10 transition-all duration-700 ${open ? "translate-x-[0]": "md:translate-x-[0] translate-x-[-130%]"}`}>  
                    {
                        generalLinks.map(link => {
                                return (
                                <a key={link.id} href={"/dashboard" + link.link} onClick={() => {setActive(link.label.toLowerCase()); setOpen(false) }} className={`flex items-center justify-between p-1 my-[2px] px-4 hover:bg-green hover:text-white rounded ${active.toLowerCase() === link.label.toLowerCase() ? "bg-green text-white" : ""}`}>
                                    <span className="w-[30px] text-lg">{link.icon}</span>
                                    <span className="flex-1 p-2 break-normal">{link.label}</span>
                                </a>
                                )
                        })
                    }
                </div>
        
                <h1 className="uppercase font-semibold">Welcome: {user?.displayName || user?.email}</h1>

                <h2 className="mt-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.1] text-[14px] text-green">MY PROJECTS</h2>
                <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 py-2 my-4 scrollbar">
                    
                </div>
                <h2 className="mt-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.1] text-[14px] text-green">FEATURED</h2>


            </div>
        </>
    )
}

export default DashboardHome;