import ProjectGrid from "../../components/projectGrid/projectGrid";
import { useEffect, useState } from "react";
import { database } from "../../firebase/firebase";
import { onValue, ref } from "firebase/database";
import Skeleton from "../../components/projectGrid/projectSkeleton";


function Home()  {
    const [data, setData] = useState<any>([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        setLoading(true)
        const projectsRef = ref(database, 'projects/');
        let arr: any[] = []
        onValue(projectsRef, (snapshot) => {
            const data: any = snapshot.val();
            Object.keys(data).map((key: any) => {
                arr.push({id: key, data: data[key]})
            })
            setData(arr)
            setLoading(false)
        });
    }, [])

    return (
        <main>
            <header className="md:px-[8%] p-[5%] py-[60px] relative bg-gradient-to-br from-white dark:from-black via-white dark:via-black to-purple/[0.05]">
            
                <div className="m-auto flex flex-col md:items-center md:text-center md:w-[45%] w-full">
                    <p className="text-purple p-1 px-4 md:rounded-full w-fit rounded bg-purple/[0.1] animate-zoom-in">All resources in one place</p>
                    <h1 className="py-3 md:text-[40px] font-bold md:leading-[45px] leading-[40px] text-[35px] animate-zoom-in">ZION LIBRARY</h1>
                    
                </div>
            
                <div className="grid lg:grid-cols-4 grid-cols-2 py-[60px] gap-4 overflow-hidden">
                    {
                        ["", "", "", ""].map((img, i:number) => (
                            <div key={i} style={{ backgroundImage: `url("${img}")` }} className="flex bg-cover bg-center animate-zoom-in items-center justify-center md:h-[250px] h-[200px] w-full rounded-[10px] border border-gray-500/[0.1] bg-gray-200 dark:bg-gray-300/[0.07]">
                                
                            </div>
                        ))
                    }
                </div>
            </header>

            <section className="py-[70px] dark:bg-gray-100/[0.02] bg-gray-300/[0.2] md:px-[9%] px-[3%]">

                <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 py-2 pb-8 my-4 overflow-x-auto scrollbar">
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
                </div>
            </section>

        </main>
    )
}

export default Home;