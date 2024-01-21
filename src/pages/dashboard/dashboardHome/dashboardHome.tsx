import { useContext, useEffect, useState } from "react"
import Button from "../../../components/button/button"
import { database } from "../../../firebase/firebase"
import { onValue, ref } from "firebase/database"
import { AuthContext } from "../../../customHooks/useAuth"
import ProjectGrid from "../../../components/projectGrid/projectGrid"
import Skeleton from "../../../components/projectGrid/projectSkeleton"

function DashboardHome() {
    const [projects, setProjects] = useState<any>([])
    const { user } = useContext(AuthContext);
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
            setProjects(arr)
            setLoading(false)
        });
    }, [])

    return (
        <div className="py-[40px] w-full">
            <h1 className="uppercase font-semibold">Welcome: {user?.displayName || user?.email}</h1>

            <h2 className="mt-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.1] text-[14px] text-green">MY PROJECTS</h2>
            <div className="w-full grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 py-2 my-4 scrollbar">
                {
                    !loading ?
                    projects?.filter((item: any) => item.data.user.email === user?.email).map((project: any) => {
                        return (
                            <ProjectGrid key={project.id} id={project.id} project={project.data} />
                        )
                    })
                    :
                    <Skeleton numbers={[0]} />
                }
                <div className="flex flex-col items-center justify-center w-full min-h-[300px] rounded-[10px] border border-gray-700/[0.1] bg-gray-300/[0.07]">
                    {
                        projects.filter((item: any) => item.data.user.email === user?.email).length === 0 ? <p>You haven't created any project</p> : ""
                    }
                    <div className="pt-4">
                        <Button text={"Create"} link={"/dashboard/create"} />
                    </div>
                </div>
            </div>
            <h2 className="mt-8 border border-transparent border-b-gray-200 dark:border-b-gray-100/[0.1] text-[14px] text-green">FEATURED</h2>

            <div className="w-full min-h-[250px] grid xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2 gap-4 py-2 my-4 overflow-x-auto scrollbar">
                {
                    !loading ?
                    projects.map((project: any) => {
                        return (
                            <ProjectGrid key={project.id} id={project.id} project={project.data} />
                        )
                    })
                    :
                    <Skeleton numbers={[0, 1, 2, 3]} />
                }
            </div>

        </div>
    )
}

export default DashboardHome;