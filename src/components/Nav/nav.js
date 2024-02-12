"use client"
import Avatar from "boring-avatars";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react"

export default function Nav() {

    const router = useRouter();
    function handleLogout() {
        localStorage.removeItem("user")
        Cookies.remove("token")
        router.push("/")
    }

    const [user, setUser] = useState(null);

    useEffect(() => {
        const userFormLs = localStorage.getItem("user")
        const parseuser = JSON.parse(userFormLs)
        setUser(parseuser)
    }, [])

    return (
        <>
            <div className="navbar bg-amber-400 rounded-md">
                <div className="flex-1">
                    <div className="text-xl font-bold text-slate-800">
                        Event Maker
                    </div>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end items-center">
                    
                        <h1 className="text-slate-900 font-medium">{user?.name}</h1>
                    
           
                    </div>
                    <div className="dropdown dropdown-end">
                        <div tabIndex="0" role="button" className="btn btn-ghost btn-circle avatar">
                            <div >
                                <Avatar size={26} variant="beam" name={user?.name} />
                            </div>
                        </div>
                        <ul tabIndex="0" className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-secondary text-slate-900  rounded-box w-52">
                            <li> <button onClick={handleLogout}>Logout</button></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}