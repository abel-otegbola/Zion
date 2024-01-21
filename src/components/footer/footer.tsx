import { FaHeart } from "react-icons/fa";

function Footer() {
    return (
        <div className="">
            <div className="grid lg:grid-cols-4 sm:grid-cols-2 grid-cols-1 gap-[30px] py-[30px] md:px-[9%] px-[3%] border border-transparent border-t-gray-700/[0.09] dark:border-t-gray-100/[0.09]">
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase text-green">Books</h2>
                    <li className="flex w-full"><a href="/books?query=christian" className="py-[5px] w-full hover:text-darkgreen">Christian books</a></li>
                    <li className="flex w-full"><a href="/books?query=academics" className="py-[5px] w-full hover:text-darkgreen">Academics</a></li>
                    <li className="flex w-full"><a href="/books?query=textbooks" className="py-[5px] w-full hover:text-darkgreen">Textbooks</a></li>
                    <li className="flex w-full"><a href="/books?query=past-questions" className="py-[5px] w-full hover:text-darkgreen">Past Questions</a></li>
                </ul>
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase text-green">Questions</h2>
                    <li className="flex w-full"><a href="/FAQs" className="py-[5px] w-full hover:text-darkgreen">What is discernment?</a></li>
                    <li className="flex w-full"><a href="/terms&conditions" className="py-[5px] w-full hover:text-darkgreen">How do I grow as a christian?</a></li>
                    <li className="flex w-full"><a href="/privacypolicy" className="py-[5px] w-full hover:text-darkgreen">Service to God, what does it mean?</a></li>
                </ul>
                <ul className="w-full">
                    <h2 className="py-2 font-semibold uppercase text-green">Topics</h2>
                    <li className="flex w-full"><a href="/topics?query=spiritual-knowlegde" className="py-[5px] w-full hover:text-darkgreen">Spiritual Knowledge</a></li>
                    <li className="flex w-full"><a href="/topics?query=salvation" className="py-[5px] w-full hover:text-darkgreen">Salvation</a></li>
                    <li className="flex w-full"><a href="/topics?query=faith" className="py-[5px] w-full hover:text-darkgreen">Faith</a></li>
                </ul>
                <ul className="w-full">
                    <h2 className="py-1 text-lg mb-3 font-bold text-green">ZION LIBRARY</h2>
                    <p className="py-1">OAU, Ile-Ife, Osun state, Nigeria</p>
                    <a href="tel:+2347060989331" className="block mt-4 py-1">+2347060989331</a>
                    <a href="mailto:support@ennovate.com" className="block py-1">Support@zion-library.com</a>
                </ul>
            </div>
            <div className="bg-gray-100 dark:bg-green/[0.03] dark:text-white text-center">
                <p className="p-[3%] flex items-center gap-2 justify-center">Built with <FaHeart className="text-red-500 text-[14px]"/> Copyright &copy; {new Date().getFullYear()}</p>
            </div>
        </div>
    )
}

export default Footer;