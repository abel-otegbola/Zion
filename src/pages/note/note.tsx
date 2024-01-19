import { useSearchParams } from "react-router-dom"


export default function Note() {
    const [URLSearchParams] = useSearchParams()

    const query = URLSearchParams.get("query")

    return (
        <div className="md:px-[9%] px-[3%] md:py-[60px] py-[30px] min-h-[90vh]">
            <textarea className="w-full bg-transparent outline-none px-2 uppercase border border-transparent border-b-gray-500/[0.2] font-semibold leading-[130%] mb-2 overflow-hidden" defaultValue={!query || query === "new" ? "" : query.toString()} placeholder="Title"></textarea>
            <textarea className="w-full bg-transparent outline-none p-2 opacity-[0.6] min-h-[80vh] leading-[130%] overflow-hidden" placeholder="Note"></textarea>
        </div>
    )
}