import { FiUser, FiSettings, FiShield, FiGlobe, FiTablet } from "react-icons/fi";
import { useEffect, useState } from "react";
import { FaBars, FaCheckCircle, FaTimes } from "react-icons/fa";

interface Link {
    id: number; label: string; icon: any, link: string
}

interface Links extends Array<Link>{}

interface Theme {
    id: number, img: any, title: string
}
interface Themes extends Array<Theme>{}


function Settings() {
    const [open, setOpen] = useState(false)
    const [active, setActive] = useState("General")
    const [theme, setTheme] = useState("System preference")

    const themes: Themes = [
        { id: 0, img: "./", title: "System preference" },
        { id: 1, img: "./", title: "light" },
        { id: 2, img: "./", title: "dark" },
    ]

    const generalLinks: Links = [
        { id: 0, label: "General", icon: <FiSettings />, link: "#general" },
        { id: 1, label: "Account", icon: <FiUser />, link: "#account" },
        { id: 2, label: "Authorized Apps", icon: <FiTablet />, link: "#apps" },
        { id: 3, label: "App language", icon: <FiGlobe />, link: "#language" },
        { id: 4, label: "Privacy & Safety", icon: <FiShield />, link: "#privacy" },
    ]

    useEffect(() => {
        if(theme === 'light') {
            // Whenever the user explicitly chooses light mode
            localStorage.theme = 'light'
        }
        else if(theme === 'dark') {
            // Whenever the user explicitly chooses dark mode
            localStorage.theme = 'dark'
        }  
        else {
            // Whenever the user explicitly chooses to respect the OS preference
            localStorage.removeItem('theme')
        }  
    }, [theme])
    
    useEffect(() => {
        // On page load or when changing themes, best to add inline in `head` to avoid FOUC
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        } else {
        document.documentElement.classList.remove('dark')
        }
    }, [theme])

    return (
        <>
        <button className="md:hidden fixed z-50 top-0 left-0 p-5 text-lg opacity-[0.6] " onClick={() => setOpen(!open)}>{open ? <FaTimes /> : <FaBars />}</button>
        <div className="md:flex items-start">
            <div className={`xl:w-[18%] lg:w-[22%] md:w-[27%] text-[12px] h-screen md:sticky fixed top-[60px] left-0 bg-white dark:bg-black border border-transparent border-r-gray-200 dark:border-r-slate-100/[0.09] overflow-hidden z-10 transition-all duration-700 ${open ? " w-[240px]": "w-0"}`}>  
                <div className="flex items-center my-2 gap-4 p-4">
                    <div className="h-[40px] w-[40px] rounded bg-slate-100 dark:bg-slate-200/[0.04]"></div>
                    <div className="text-[10px]">
                        <h3>Abel Otegbola</h3>
                        <div className="flex items-center gap-4">
                            <p>Abelo</p>
                        </div>
                    </div>                    
                </div>
            {
                generalLinks.map(link => {return (
                    <a key={link.id} href={link.link} onClick={() => setActive(link.label)} className={`flex items-center justify-between w-full p-2 my-[1px] px-4 hover:bg-slate-100 dark:hover:bg-gray-200/[0.07] ${active === link.label ? "bg-slate-100 dark:bg-gray-200/[0.07] border border-transparent border-r-green text-green" : ""}`}>
                        <span className="w-[30px]">{link.icon}</span>
                        <span className="flex-1 p-2 break-normal">{link.label}</span>
                    </a>
                )})
            }
            </div>
            <div className="md:m-2 p-4 bg-white dark:bg-[#1d1d23]/[0.5] flex-1">
                <h2 className="text-xl pb-3 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">Settings</h2>
                <div className="py-8 text-[12px]">
                    <h3 id="general" className="py-2 opacity-[0.6] text-lg">General</h3>
                    <h3 className="pb-2 pt-4 text-sm">Interface theme</h3>
                    <p className="opacity-[0.6]">Select or customize your ui theme</p>
                    <div className="grid grid-cols-3 gap-4 py-2">
                        {
                            themes.map(item => {
                                return (
                                    <div key={item.id} className={`relative ${item.title === theme ? "text-green" : "hover:text-green"}`} onClick={() => setTheme(item.title)}>
                                        { theme === item.title ? <FaCheckCircle className="absolute -top-1 -right-1 text-lg text-green" /> : "" }
                                        <div className={`h-[150px] w-full bg-gray-200 dark:bg-slate-200/[0.08] cursor-pointer rounded ${theme === item.title ? "border border-green/[0.5]" : "hover:border hover:border-green/[0.5]"}`}></div>
                                        <h2 className="p-2 capitalize">{item.title}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="py-8 text-[12px]">
                    <h3 id="account" className="py-2 opacity-[0.6] text-lg">Account</h3>
                    <h3 className="pb-2 pt-4 text-sm">Profile</h3>
                    <p className="opacity-[0.6]">Update your photo and personal details</p>
                    
                </div>
            </div>

        </div>
        </>
    )
}

export default Settings;