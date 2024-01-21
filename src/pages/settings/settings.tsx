import { useContext, useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import dark from "../../assets/dark.png";
import light from "../../assets/light.png";
import system from "../../assets/system.png";
import { AuthContext } from "../../customHooks/useAuth";
import { useLocalStorage } from "../../customHooks/useLocalStorage";
import Button from "../../components/button/button";

interface Theme {
    id: number, img: any, title: string
}
interface Themes extends Array<Theme>{}


function Settings() {
    const [theme, setTheme] = useState(localStorage.theme)
    const [fontSize, setFontSize] = useLocalStorage("size", "14px")
    const { user } = useContext(AuthContext)

    const themes: Themes = [
        { id: 0, img: system, title: "System" },
        { id: 1, img: light, title: "light" },
        { id: 2, img: dark, title: "dark" },
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
        if(!localStorage.theme) {
            setTheme("System")
        }
    }, [theme])

    return (
        <>
        <div className="md:flex items-start md:px-[9%] px-[3%]">
            
            <div className="md:m-2 flex-1 pt-[60px]">
                <h2 className="flex items-center gap-3 font-semibold uppercase text-green pb-3 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">Settings</h2>


                <div className="py-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">
                    <h3 id="appearance" className="py-2 text-green/[0.6]">Appearance</h3>
                    <p className="opacity-[0.6]">Select or customize your ui theme</p>
                    <div className="md:w-[50%] grid grid-cols-3 gap-4 py-2">
                        {
                            themes.map(item => {
                                return (
                                    <div key={item.id} className={`relative ${item.title === theme ? "text-darkgreen" : "hover:text-darkgreen"}`} aria-label={"Theme setting changed to "+ theme} onClick={() => setTheme(item.title)}>
                                        { theme === item.title ? <FaCheckCircle className="absolute -top-1 -right-1 text-lg text-darkgreen" /> : "" }
                                        <div className={`w-full bg-gray-200 dark:bg-slate-200/[0.08] cursor-pointer rounded  ${theme === item.title ? "border border-darkgreen/[0.5]" : "hover:border hover:border-darkgreen/[0.5]"}`}>
                                            <img src={item.img} className="w-full rounded" />
                                        </div>
                                        <h2 className="p-2 capitalize">{item.title}</h2>
                                    </div>
                                )
                            })
                        }
                    </div>

                    
                </div>

                <div className="py-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">
                    <h3 id="preferences" className="py-2 text-green/[0.6]">Preferences</h3>
                    <p className="opacity-[0.6]">Font size</p>
                    <div className="">
                        <select className="w-[100px] p-4 rounded border border-gray-600/[0.2] bg-black text-white" aria-label={"Font size changed to "+ fontSize} onChange={(e) => setFontSize(e.target.value)} defaultValue={fontSize}>
                        {
                            ["10px", "12px", "14px", "16px", "18px", "20px"].map((item, i) => (
                                <option key={i} className="bg-black text-white">{item}</option>
                            ))
                        }
                        </select>
                        <p style={{ fontSize: fontSize }} className="p-2 px-4 rounded bg-green/[0.1] w-fit mt-2">A cat inside a bag</p>
                    </div>
                </div>

                {
                    user ?
                    <div className="md:w-[50%] py-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.08]">
                        <h3 id="account" className="py-2 text-green/[0.6]">Account</h3>
                        <h3 className="pb-2 pt-4 text-sm">Profile</h3>
                        <p className="opacity-[0.6]">Update your photo and personal details</p>
                        <div className="py-2">
                            <div className="">
                                <p className="md:w-[23%] md:mb-0 mb-2">Profile Image: </p>
                                <div className="h-[60px] w-[60px] rounded-full bg-slate-200 dark:bg-slate-200/[0.04]"></div>
                            </div>
                        </div>
                        <div className="py-2">
                            <div className="">
                                <p className="md:w-[30%] md:mb-0 mb-2">Username: </p>
                                <input className="p-[12px] rounded border border-gray-600/[0.4] bg-transparent w-full outline-none focus:border-2 focus:border-darkgreen" type="text" placeholder="Change your username" defaultValue={user?.displayName} />
                            </div>
                        </div>
                        <div className="py-2 mb-4">
                            <div className="">
                                <p className="md:w-[30%] md:mb-0 mb-2">Email: </p>
                                <input className="p-[12px] rounded border border-gray-600/[0.4] bg-transparent w-full outline-none focus:border-2 focus:border-darkgreen" type="email" placeholder="Change your email" defaultValue={user?.email} />
                            </div>
                        </div>
                        <Button text="Save changes" link="#" />
                    </div>
                    : ""
                }
                
            </div>

        </div>
        </>
    )
}

export default Settings;