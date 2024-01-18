import { FaSearch } from "react-icons/fa";


function Searchbar() {

    return (
        <form action="/search" className="w-full text-[12px] gap-2 flex p-[4px] border border-gray-200 dark:border-slate-100/[0.09] rounded">
            <input className="px-2 bg-transparent flex-1 outline-none border-transparent focus:outline-purple/[0.1]" name="search" type="search" placeholder="Search projects..." />
            <button className="px-[12px] bg-purple rounded hover:bg-purple/[0.7] text-white" type="submit" aria-label="Search projects"><FaSearch /></button>
        </form>
    )
}

export default Searchbar;