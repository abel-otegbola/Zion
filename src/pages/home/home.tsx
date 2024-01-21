// import { useEffect, useState } from "react";
// import { database } from "../../firebase/firebase";
// import { onValue, ref } from "firebase/database";
import { FiBook, FiDatabase, FiFile, FiList } from "react-icons/fi";
import Searchbar from "../../components/searchbar/searchbar";


function Home()  {
    // const [data, setData] = useState<any>([])
    // const [loading, setLoading] = useState(false)

    // useEffect(() => {
    //     setLoading(true)
    //     const projectsRef = ref(database, 'projects/');
    //     let arr: any[] = []
    //     onValue(projectsRef, (snapshot) => {
    //         const data: any = snapshot.val();
    //         Object.keys(data).map((key: any) => {
    //             arr.push({id: key, data: data[key]})
    //         })
    //         setData(arr)
    //         setLoading(false)
    //     });
    // }, [])

    return (
        <main>
            <header className="md:px-[9%] p-[3%] py-[60px] relative bg-gradient-to-br from-white dark:from-black via-white dark:via-black to-green/[0.05]">
            
                <div className="m-auto flex flex-col gap-4 md:items-center md:text-center md:w-[45%] w-full">
                    <p className="text-green p-1 px-4 rounded-full w-fit rounded bg-green/[0.1] animate-zoom-in">All resources in one place</p>
                    <Searchbar />
                    
                </div>
            
                <div className="grid lg:grid-cols-4 grid-cols-2 py-[60px] gap-4 overflow-hidden">
                    {
                        [
                            {id: 0, text: "notes", to: "notes", icon: <FiFile/>, subText: "20 items"},
                            {id: 0, text: "snippets", to: "books#snippets", icon: <FiList />, subText: "100+ items"},
                            {id: 0, text: "Academic Books", to: "books#academics", icon: <FiDatabase />, subText: "200 items"},
                            {id: 0, text: "Christian Books", to: "books#christian", icon: <FiBook />, subText: "10 new items"},
                        ].map((category) => (
                            <a href={category.to} key={category.id} className="flex flex-col justify-between pb-3 p-5 animate-zoom-in md:h-[200px] h-[200px] rounded-[10px] border border-gray-500/[0.3] bg-white dark:bg-gray-300/[0.04]">
                                <p className="text-green text-[25px] p-2 rounded bg-gray-200/[0.08] w-fit">{category.icon}</p>
                                <div>
                                    <p className="uppercase font-semibold">{category.text}</p>
                                    <p className="opacity-[0.6]">{category.subText}</p>
                                </div>
                            </a>
                        ))
                    }
                </div>
            </header>

            <section className="grid md:grid-cols-2 gap-4 py-[70px] dark:bg-gray-100/[0.02] bg-gray-300/[0.2] md:px-[9%] px-[3%]">
                    <a href={"/topics"} className="flex flex-col justify-between pb-3 p-5 animate-zoom-in md:h-[200px] h-[200px] rounded-[10px] border border-gray-500/[0.3] bg-white dark:bg-gray-300/[0.04]">
                        <p className="text-green p-1 px-4 rounded-full w-fit rounded bg-green/[0.1] animate-zoom-in">Topic of the week</p>
                        <div>
                            <p className="uppercase font-semibold">Service to God</p>
                            <p className="opacity-[0.6]">Text: 1 corinthians 6:20</p>
                        </div>
                    </a>
                    
                    <a href={"/topics"} className="flex flex-col justify-between pb-3 p-5 animate-zoom-in md:h-[200px] h-[200px] rounded-[10px] border border-gray-500/[0.3] bg-white dark:bg-gray-300/[0.04]">
                        <p className="text-green p-1 px-4 rounded-full w-fit rounded bg-green/[0.1] animate-zoom-in">Announcement</p>
                        <div>
                            <p className="uppercase font-semibold">Crash class</p>
                            <p className="opacity-[0.6]">CHM 101 - Tues 23rd Jan 2024</p>
                        </div>
                    </a>

                {/* <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 py-2 pb-8 my-4 overflow-x-auto scrollbar">
                    {
                        !loading ?
                        data?.map((project:any) => {
                            return (
                                <ProjectGrid key={project.id} id={project.id} project={project.data} />
                            )
                        })
                        :
                        <Skeleton numbers={[0, 1, 2, 3]} />
                    }
                </div> */}

            </section>

        </main>
    )
}

export default Home;