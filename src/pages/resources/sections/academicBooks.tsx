import { useState } from "react"
import { FaFolder, FaTimes} from "react-icons/fa"

export default function AcademicBooks({ data, display }: any) {
    const [faculty, setFaculty] = useState("Technology")
    const [department, setDepartment] = useState("Chemical Engineering")
    const [open, setOpen] = useState(false)

    return (
        <div className="relative overflow-hidden">
            <h1 className="font-semibold uppercase text-[15px] text-purple mb-2">Academic Books</h1>
            <p className="leading-[130%] text-[12px]">Welcome to the academic books repository. We have both softcopy<span className="text-purple">(s)</span> for download as well as hardcopies<span className="text-purple">(h)</span>.</p>

            <div className="flex items-center gap-2 p-4 my-4 border border-gray-600/[0.2] rounded">
                
                <div>
                    <p className="opacity-[0.7] text-[12px]">Choose faculty:</p>
                    <select className="p-[11px] md:px-4 px-2 rounded bg-transparent border border-gray-100 dark:border-gray-100/[0.09] px-3 focus:outline outline-purple/[0.3] outline-offset-1" onChange={(e) => setFaculty(e.target.value)}>
                        <option className="bg-black text-white">Technology</option>
                        <option className="bg-black text-white">Science</option>
                        <option className="bg-black text-white">Clinical Sciences</option>
                        <option className="bg-black text-white">Education</option>
                        <option className="bg-black text-white">Pharmacy</option>
                        <option className="bg-black text-white">Dentistry</option>
                        <option className="bg-black text-white">Law</option>
                        <option className="bg-black text-white">Administration</option>
                        <option className="bg-black text-white">Arts</option>
                        <option className="bg-black text-white">Social Sciences</option>
                        <option className="bg-black text-white">Environmental Design and Management</option>
                    </select>
                </div>
            </div>

            <div className="">
                <div className={`grid gap-4 ${display === "List" ? "" : "md:grid-cols-4 grid-cols-2 "}`}>
                   {
                        data.filter((item: any) => item.name === faculty).map((item: any) => item.departments.map((department: any, i: number) => (
                            
                            <a key={i} href={"#" + department} onClick={() => {setOpen(true); setDepartment(department)}} className={`transition-all duration-700 ${display === "List" ? "flex items-center gap-4 p-2 px-4 rounded": "pt-3 p-5 rounded-[10px]"} w-full animate-zoom-in  border border-gray-500/[0.3] dark:bg-gray-300/[0.04]`}>
                                <FaFolder className={`opacity-[0.2] ${display === "List" ? "text-[30px]" : "text-[80px] mb-4"}`} />
                                <p className="leading-[130%] text-[12px]" >{department}</p>
                            </a>
                        )))
                    } 
                </div>
                
            </div>

            <div className={`absolute top-0 left-0 w-full h-full bg-white dark:bg-black transition-all duration-500 ${open ? "left-0" : "left-[110%]"}`}>
                <div className="flex justify-between items-center">
                    <h1>{department}</h1>
                    <FaTimes onClick={() => setOpen(false)} />
                </div>
            </div>
        </div>
    )
}