import { FaSearch } from "react-icons/fa";


function Searchbar({ options }: any) {

    return (
        <form action="/search" className="w-full text-[12px] gap-2 flex p-[4px] border border-gray-200 dark:border-slate-100/[0.09] rounded">
            <input className="px-2 bg-transparent flex-1 outline-none border-transparent focus:outline-green/[0.1]" name="search" type="search" placeholder={`Search ${options.map((option: string) => option)}...`} />
            <select className="px-2 rounded bg-transparent focus:outline focus:outline-green/[0.3] outline-offset-1 border border-gray-500/[0.1] py-2">
                {
                    options.map((option: string, i:number) => (
                        <option key={i} className="bg-black text-white">{option}</option>
                    ))
                }
            </select>
            <button className="px-[12px] bg-green rounded hover:bg-green/[0.7] text-white" type="submit" aria-label="Search projects"><FaSearch /></button>
        </form>
    )
}

export default Searchbar;