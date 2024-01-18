import { FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { GoogleAuthProvider, getAuth, sendSignInLinkToEmail, signInWithPopup } from "firebase/auth";
import { useEffect, useState } from "react";
import { app } from "../../firebase/firebase";
import Button from "../../components/button/button";
import { useNavigate } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState("")
    const [success, setSuccess] = useState("")
    const [error, setError] = useState({ code: "", msg: "" })
    const navigate = useNavigate();

    const signup = () => {
        const actionCodeSettings = {
            url: `${import.meta.env.MODE === "development" ? "http://localhost:5173" : "https://ennovate.netlify.app"}/finishSignup`,
            handleCodeInApp: true
        };

        const auth = getAuth(app);

        if(email === "") {
            setError({ code: "410", msg: "Please input your email address" })
        }
        else {
            sendSignInLinkToEmail(auth, email, actionCodeSettings)
            .then(() => {
                localStorage.setItem('emailForSignIn', email);
                setSuccess("Account activation link has been sent to the email address you provided.")
            })
            .catch((error) => {
                const code = error.code;
                const msg = error.message;
                setError({ code, msg })
            });
        }
        
    }

    const socialSignIn = (type: string) => {
        if(type === "Google") {
            const auth = getAuth(app);
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
                .then(result => {
                    const credential = GoogleAuthProvider.credentialFromResult(result);
                    const token = credential?.accessToken;
                    const user = result.user
                    console.log(user, token)
                    navigate("/dashboard")
                })
                .catch(error => {
                    setError({ code: error.code, msg: error.message })
                })
        }
    }
    
    useEffect(() => {
        console.log(import.meta.env.MODE)
    }, [])

    return (
            <div className="w-full flex flex-wrap gap-[5%] jutify-between bg-white dark:bg-black items-center md:px-[10%] px-[3%] py-[5%]">
                <div className="sm:max-w-[400px] md:mx-0 mx-auto w-full md:py-0 py-[10%]">
                    <p className="py-[3%] text-[20px] uppercase font-semibold md:leading-[45px] bg-clip-text text-transparent bg-gradient-to-r from-purple to-green">Welcome!</p>
                    <p className="pb-6">Login to share your ideas, get insights and join in the projects of making the world a better place.</p>

                    <div className="grid grid-cols-1 gap-4 my-8">
                        {
                            ['Google'].map((social,i )=> {
                                return (
                                    <button key={i} onClick={() => socialSignIn(social)} className="flex items-center justify-center gap-2 p-[12px] bg-gray-200 dark:bg-gray-100/[0.09] w-full rounded hover:border-green hover:dark:border-green hover:text-green">
                                        { social === "Google" ? <FcGoogle className="text-xl"/> : social === "Facebook" ? <FaFacebook /> : social === "Twitter" ? <FaTwitter /> : social === "Linkedin" ? <FaLinkedin /> : "" }
                                        Login with {social}
                                    </button>
                                )
                            })
                        }
                    </div>

                    {
                        error.msg ? 
                        <div className="absolute bg-white/[0.8] dark:bg-black/[0.9] backdrop-blur-sm top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="bg-white dark:bg-black p-[40px] m-[5%] shadow-lg rounded">
                                <h2 className="mb-3 text-2xl">An error occured</h2>
                                <p className="py-2 mb-4">{error.msg}</p>
                                <div onClick={() => setError({code: '', msg: ""})}>
                                    <Button text={"Try again"} link={"#"} />
                                </div>
                            </div>
                        </div> : "" 
                    }
                    {
                        success ? 
                        <div className="absolute bg-white/[0.8] dark:bg-black/[0.9] backdrop-blur-sm top-0 left-0 w-full h-full flex items-center justify-center">
                            <div className="bg-white dark:bg-black p-[40px] m-[5%] shadow-lg rounded">
                                <h2 className="mb-3 text-2xl">Verify your account</h2>
                                <p>{success}</p>
                            </div>
                        </div> : "" 
                    }

                    <label htmlFor="email" className="block p-2 pt-4">Signin with Email:</label>
                    <input className="p-[12px] bg-transparent w-full outline-none border border-gray-400/[0.3] focus:border-green/[0.5] rounded" id="email" name="email" type="email" placeholder="Enter your email" onChange={(e) => setEmail(e.target.value)} />
                    
                    <button className="w-full p-[6px] rounded bg-purple hover:bg-fuchsia-800 text-white mt-8" onClick={() => signup()}>Login</button>

                </div>
            
                
            </div>
    )
}

export default Login;
