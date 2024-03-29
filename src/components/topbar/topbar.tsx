import Searchbar from "../searchbar/searchbar";
import { FiBook, FiHome, FiSettings } from "react-icons/fi";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../customHooks/useAuth";
import { useLocation } from "react-router-dom";
import { FaQuestion } from "react-icons/fa";
import { TbTextCaption } from "react-icons/tb";


function Topbar() {
    const [open, setOpen] = useState(false)
    const {user} = useContext(AuthContext)
    const pathname = useLocation().pathname;
    const menuRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const checkIfClickedOutside = (e: any) => {
            if(open && menuRef.current && !menuRef.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            document.removeEventListener("mousedown", checkIfClickedOutside)
        }
    })

    return (
        <div className="flex items-center justify-between w-full bg-white dark:bg-black p-[2px] lg:px-[9%] px-[4%] border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.09] z-20">

            <div className="flex gap-8 items-center">
                {/* Brand name and logo */}
                <a href="/" className={`md:ml-0 py-2 flex gap-1`}>
                    <h1 className="font-bold text-[18px] text-green">CAOL.</h1>
                </a>

                {/* Menu links for desktop */}
                <ul className="flex gap-2 items-center md:justify-start justify-between md:p-0 px-[3%] pt-2 border md:border-none border-transparent border-t-gray-300/[0.5] md:static fixed bottom-0 left-0 z-5 bg-white dark:bg-black md:w-auto w-full">
                    <li><a href="/" className={`flex md:gap-2 items-center px-4 py-1 md:text-[14px] text-[9px] md:flex-row flex-col rounded-full ${pathname === "/" ? "md:bg-green/[0.1] text-green" : "hover:md:bg-green/[0.1]"}`}><FiHome className="text-[16px]"/> Home</a></li>
                    <li><a href="/books" className={`flex md:gap-2 items-center px-4 py-1 md:text-[14px] text-[9px] md:flex-row flex-col rounded-full ${pathname === "/books" ? "md:bg-green/[0.1] text-green" : "hover:md:bg-green/[0.1]"}`}><FiBook className="text-[16px]"/> Books</a></li>
                    <li><a href="/quest" className={`flex md:gap-2 items-center px-4 py-1 md:text-[14px] text-[9px] md:flex-row flex-col rounded-full ${pathname === "/quest" ? "md:bg-green/[0.1] text-green" : "hover:md:bg-green/[0.1]"}`}><FaQuestion className="text-[16px]"/> Quest</a></li>
                    <li><a href="/topics" className={`flex md:gap-2 items-center px-4 py-1 md:text-[14px] text-[9px] md:flex-row flex-col rounded-full ${pathname === "/topics" ? "md:bg-green/[0.1] text-green" : "hover:md:bg-green/[0.1]"}`}><TbTextCaption className="text-[16px]"/> Topics</a></li>
                </ul>
            </div>

            <div ref={menuRef} className="flex items-center gap-6 relative">
                <div className="lg:w-[300px] flex-1 sm:block hidden">
                    <Searchbar options={[ "Books", "Topics", "Questions" ]}/>
                </div>
                 
                <a
                        href="/settings"
                        className="flex items-center justify-center w-[30px] h-[30px] py-0 rounded-full bg-slate-200 dark:bg-slate-300/[0.1] focus:outline focus:outline-offset-2 outline-green/[0.3] hover:text-darkgreen"
                        role="menuitem" 
                    >
                        <FiSettings />
                    </a>

                {
                    user ? 
                    <a
                        href="/dashboard"
                        className="flex items-center justify-center w-[25px] h-[25px] py-0 rounded-full bg-slate-300/[0.5] outline outline-offset-2 outline-green/[0.3] hover:text-darkgreen"
                        role="menuitem" 
                    >
                        { user?.photoURL ? <img src={user?.photoURL} alt="user" className="rounded-full" width={25} height={25} /> : user?.displayName.charAt(0)}
                    </a>
                    :
                    <a href="/login" className="md:block hidden px-6 py-[4px] bg-green text-white rounded">Login</a>
                }
                    
            </div>
        </div>
    )
}

export default Topbar;