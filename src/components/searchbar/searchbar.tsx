import { FaSearch } from "react-icons/fa";


function Searchbar() {

    return (
        <form action="/search" className="w-full text-[12px] gap-2 flex p-[4px] border border-gray-200 dark:border-slate-100/[0.09] rounded">
            <input className="px-2 bg-transparent flex-1 outline-none border-transparent focus:outline-green/[0.1]" name="search" type="search" placeholder="Search for books, topics, snippets..." />
            <button className="px-[12px] bg-green rounded hover:bg-green/[0.7] text-white" type="submit" aria-label="Search projects"><FaSearch /></button>
        </form>
    )
}

export default Searchbar;