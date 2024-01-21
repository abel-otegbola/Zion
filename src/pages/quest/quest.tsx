import { useState } from "react"
import { FaChevronLeft } from "react-icons/fa"
import { FiGrid, FiList, FiPlus } from "react-icons/fi"

export default function Quest() {
    const [display, setDisplay] = useState("Grid")
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState({ id: 0, heading: "", text: "" })

    return (
        <div className="md:px-[9%] px-[3%] min-h-[90vh] relative overflow-hidden">
            <div className="flex items-center justify-between py-[40px]">
                <div>
                    <a href="#new" onClick={() => {setSelected({id: 0, heading: "", text: ""}); setOpen(true)}} className="flex items-center gap-2 p-2 px-6 rounded bg-green/[0.1] border border-green"><span>Ask new question</span> <FiPlus /> </a>
                </div>
                <div className="flex">
                    <button className={`p-2 text-[16px] ${display === "List" ? "bg-green text-white" : "bg-gray-200/[0.08]"}`} onClick={() => setDisplay("List")}><FiList /></button>
                    <button className={`p-2 text-[16px] ${display === "Grid" ? "bg-green text-white" : "bg-gray-200/[0.08]"}`} onClick={() => setDisplay("Grid")}><FiGrid /></button>
                </div>
            </div>
            <h1 className="pt-3 text-green border border-transparent border-b-gray-500/[0.1] font-semibold md:leading-[45px] leading-[40px] animate-zoom-in">Newest</h1>

           
            <div className={`min-h-[160px] grid gap-4 py-4 ${display === "List" ? "" : "md:grid-cols-4 grid-cols-2"}`}>
            {
                [
                    {id: 0, heading: "How do I study the word", text: "<p>- Purposely set aside time. I make an appointment with God in the mornings, but if that doesnt work for you, find a time that does…even if its not every day. Whatever you can do, thats what you need to do. Just start somewhere and youll see the fruit that this time brings to your life! </p><p>- Make preparation for your Bible study. Have a place that you enjoy being—a room in your house where you can be alone, or somewhere you are comfortable and like to be.</p><p>- Have all your materials available. Youll want your Bible of course, but also get a good Bible dictionary, concordance, a pen and paper. That way, you dont have to stop every few minutes to reference something or write something down.</p><p>- Prepare your heart. Talk to God about things you may need to confess, and enter your study time peacefully and without anything that may block you from receiving revelation during your study.</p>"},
                ]
                .map((category) => (
                    <a href={"#" + category.heading} onClick={() => {setSelected(category); setOpen(true)}} key={category.id} className={`pb-3 p-5 animate-zoom-in transition-all ${ display === "List" ? "" : "h-[130px]"} rounded-[10px] border border-gray-500/[0.3] dark:bg-gray-300/[0.07]`}>
                        <p className="uppercase font-semibold leading-[130%] mb-2 h-[35px] overflow-hidden">{category.heading}</p>                        
                        <div className="opacity-[0.6] text-[10px] leading-[130%] h-[40px] overflow-hidden" dangerouslySetInnerHTML={{__html: category.text}}></div>

                    </a>
                ))
            }
            </div>

            <h1 className="pt-3 text-green border border-transparent border-b-gray-500/[0.1] font-semibold md:leading-[45px] leading-[40px] animate-zoom-in">Others</h1>
            <div className={`min-h-[160px] grid gap-4 py-4 ${display === "List" ? "" : "md:grid-cols-4 grid-cols-2"}`}>
            {
                [
                    {id: 0, heading: "How do I exemplify Christ", text: "<p>Let this mind be in you as it was in christ.</p> <ul><li>-Salt of the world</li><li>-Light of the world</li> <li>-Discipling</li> <li>-Sacrificing</li></ul>"},
                    {id: 1, heading: "Hardness of Heart", text: "Cold, insensitive, unfeeling, unyielding. Faith is our positive response to God "},
                    {id: 2, heading: "Question to peter", text: "3 times Jesus asked peter 'Lovest thou me?', then, 'if you do, feed my lamb' "},
                ]
                .map((category) => (
                    <a href={"#" + category.heading} onClick={() => {setSelected(category); setOpen(true)}} key={category.id} className={`pb-3 p-5 animate-zoom-in ${ display === "List" ? "" : "h-[130px]"} rounded-[10px] border border-gray-500/[0.3] dark:bg-gray-300/[0.07]`}>
                        <p className="uppercase font-semibold leading-[130%] mb-2 h-[35px] overflow-hidden">{category.heading}</p>
                        <div className="opacity-[0.6] text-[10px] leading-[130%] h-[40px] overflow-hidden" dangerouslySetInnerHTML={{__html: category.text}}></div>
                    </a>
                ))
            }

            </div>

            <div className={`absolute top-0 md:px-[9%] px-[3%] py-[20px] w-full h-full bg-white dark:bg-black mb-8 transition-all duration-500 ${open ? "left-0" : "left-[120%]"}`}>
                <div className="flex justify-between items-center py-4">
                    <button onClick={() => setOpen(false)} ><FaChevronLeft className="p-2 text-[30px] rounded bg-green/[0.1]" /></button>
                </div>
                <div className="relative">

                    <p className="text-green p-1 px-4 rounded-full w-fit rounded bg-green/[0.1] animate-zoom-in mb-2">Question</p>
                    <textarea className="w-full bg-transparent outline-none px-2 uppercase border border-transparent border-b-gray-500/[0.2] font-semibold leading-[130%] mb-2 overflow-hidden" defaultValue={selected.heading} placeholder="Type your question"></textarea>

                    <p className="text-green p-1 px-4 rounded-full w-fit rounded bg-green/[0.1] animate-zoom-in mb-2">Answers</p>
                    <div className="w-full bg-transparent outline-none p-2 min-h-[50vh] leading-[180%] overflow-hidden pb-20" dangerouslySetInnerHTML={{ __html: selected.text }}></div>

                    <div className="absolute bottom-0 left-0 w-full flex items-center p-[2px] bg-white dark:bg-black border border-gray-200 dark:border-gray-100/[0.09] rounded w-[100%] z-100">
                        <input className="p-[8px] flex-1 border-none rounded bg-transparent focus:outline focus:outline-green/[0.4]" placeholder="Type answer"/>
                        <button className="bg-green p-2 px-5 rounded text-white">Send answer</button>
                    </div>
                </div>
            </div>

        </div>
    )
}