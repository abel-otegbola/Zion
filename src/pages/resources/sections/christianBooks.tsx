export default function ChristianBooks({ christianBooks, display }: any) {
    return (
        <div>
            <h1 className="font-semibold uppercase text-[15px] text-purple mb-2">Christian Books</h1>
            <p className="leading-[130%] text-[12px]">Welcome to the christian books repository. We have both softcopy<span className="text-purple">(s)</span> for download as well as hardcopies<span className="text-purple">(h)</span>.</p>

            {
                display === "List" ?
                <div className="w-full min-h-[70vh] overflow-x-auto">
                    <table className="w-full my-6 min-w-[600px]">
                        <thead className="">
                            <tr className="text-left border border-transparent border-b-gray-500/[0.4]">
                                <th className="p-2"></th>
                                <th className="p-2">Title</th>
                                <th className="p-2">Author</th>
                                <th className="p-2">type</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                            christianBooks.map((item: any, i: number) => (
                                <tr className=" border border-transparent border-b-gray-400/[0.08]">
                                    <td className="p-2">{i + 1}.</td>
                                    <td className="p-2">{item.title}</td>
                                    <td className="p-2">{item.author}</td>
                                    <td className="p-2">{item.type}</td>
                                    <td className="flex items-center justify-end gap-2 p-2">
                                        <button className="p-[2px] md:px-4 px-2 rounded text-[10px] bg-purple/[0.1] border border-gray-100/[0.09] px-3 bg-purple">Download</button>
                                        <button className="p-[2px] md:px-4 px-2 rounded text-[10px] bg-purple/[0.1] border border-gray-100/[0.09] px-3 bg-purple">Request</button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
                :
                <div className="grid lg:grid-cols-3 grid-cols-2 gap-4 my-8">
                    {
                    christianBooks.map((book: any, i: number) => (
                            <a href={"/note?query=" + book.title} key={i} className={`pb-3 p-5 animate-zoom-in h-[150px] rounded-[10px] border border-gray-500/[0.3] dark:bg-gray-300/[0.07]`}>
                                <p className="uppercase font-semibold leading-[130%] mb-2 h-[35px] overflow-hidden">{book.title}</p>
                                <p className="opacity-[0.6] text-[12px] leading-[130%] h-[30px] overflow-hidden">{book.author} - {book.type}</p>
                                
                                <td className="flex items-center gap-2">
                                    { 
                                        book.type.indexOf("s") !== -1 ?
                                        <button className="p-[1px] md:px-4 rounded text-[10px] bg-purple/[0.1] border border-gray-100/[0.09] px-3 bg-purple">Download</button>
                                        : ""
                                    }
                                    {
                                        book.type.indexOf("h") !== -1 ?
                                        <button className="p-[1px] md:px-4 rounded text-[10px] bg-purple/[0.1] border border-gray-100/[0.09] px-3 bg-purple">Request</button>
                                        : ""
                                    }
                                </td>
                            </a>
                        ))
                    }
                </div>
            }

            
        </div>
    )
}