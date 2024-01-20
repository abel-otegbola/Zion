import { useState } from "react"
import { FiGrid, FiList, FiPlus } from "react-icons/fi"

export default function Notes() {
    const [display, setDisplay] = useState("Grid")

    return (
        <div className="md:px-[9%] px-[3%] min-h-[90vh]">
            <div className="flex items-center justify-between py-[40px]">
                <div>
                    <a href="/note?query=new" className="flex items-center gap-2 p-2 px-6 rounded bg-purple/[0.1] border border-purple"><span>Create new</span> <FiPlus /> </a>
                </div>
                <div className="flex">
                    <button className={`p-2 text-[16px] ${display === "List" ? "bg-purple text-white" : "bg-gray-200/[0.08]"}`} onClick={() => setDisplay("List")}><FiList /></button>
                    <button className={`p-2 text-[16px] ${display === "Grid" ? "bg-purple text-white" : "bg-gray-200/[0.08]"}`} onClick={() => setDisplay("Grid")}><FiGrid /></button>
                </div>
            </div>
            <h1 className="pt-3 text-purple border border-transparent border-b-gray-500/[0.1] font-semibold md:leading-[45px] leading-[40px] animate-zoom-in">Pinned</h1>

           
            <div className={`min-h-[160px] grid gap-4 py-4 ${display === "List" ? "" : "md:grid-cols-4 grid-cols-2"}`}>
            {
                [
                    {id: 0, heading: "Jesus the Good Shepherd", text: "John 10: 11, The type of relationahip we have with jesus is one that involves total dependence on Jesus. A sheep as expressed here always look to the shepherd for guideance, protection, providion and every other things"},
                ]
                .map((category) => (
                    <a href={"/note?query=" + category.heading} key={category.id} className={`pb-3 p-5 animate-zoom-in transition-all ${ display === "List" ? "" : "h-[150px]"} rounded-[10px] border border-gray-500/[0.3] dark:bg-gray-300/[0.07]`}>
                        <p className="uppercase font-semibold leading-[130%] mb-2 h-[35px] overflow-hidden">{category.heading}</p>
                        <p className="opacity-[0.6] text-[10px] leading-[130%] h-[50px] overflow-hidden">{category.text}</p>
                    </a>
                ))
            }
            </div>

            <h1 className="pt-3 text-purple border border-transparent border-b-gray-500/[0.1] font-semibold md:leading-[45px] leading-[40px] animate-zoom-in">Others</h1>
            <div className={`min-h-[160px] grid gap-4 py-4 ${display === "List" ? "" : "md:grid-cols-4 grid-cols-2"}`}>
            {
                [
                    {id: 0, heading: "Exemplifying Christ", text: "Let this mind be in you as it was in christ. -Salt of the world -Light of the world -Discipling -Sacrificing"},
                    {id: 1, heading: "Hardness of Heart", text: "Cold, insensitive, unfeeling, unyielding. Faith is our positive response to God "},
                    {id: 2, heading: "Question to peter", text: "3 times Jesus asked peter 'Lovest thou me?', then, 'if you do, feed my lamb' "},
                ]
                .map((category) => (
                    <a href={"/note?query=" + category.heading} key={category.id} className={`pb-3 p-5 animate-zoom-in ${ display === "List" ? "" : "h-[150px]"} rounded-[10px] border border-gray-500/[0.3] dark:bg-gray-300/[0.07]`}>
                        <p className="uppercase font-semibold leading-[130%] mb-2 h-[35px] overflow-hidden">{category.heading}</p>
                        <p className="opacity-[0.6] text-[10px] leading-[130%] h-[50px] overflow-hidden">{category.text}</p>
                    </a>
                ))
            }

            </div>

        </div>
    )
}