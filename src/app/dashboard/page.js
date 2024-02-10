"use client"

import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
import Link from "next/link";

export default function Home() {
const router = useRouter();
const [user, setUser] = useState(null);

function handleLogout() {
  //clear storage
  localStorage.removeItem("user");
  //clear cookies token
 Cookies.remove("token");
  //redirect ke halaman login
  router.push ("/");


}

// console.log(user);
useEffect(()=>{
  const userFromLs = localStorage.getItem("user");
  const parseUserData = JSON.parse(userFromLs);
  setUser(parseUserData);
  
},[])

  return (
    <>
    <div className="flex justify-between p-4" >
        <div>Dashboard</div>
        <div className="flex items-center gap-4" >
          <div>{user?.name}</div>
          <button onClick={handleLogout} className="btn btn-primary" >Log Out</button>
        </div>
    </div>
    <div>
      <Link href={"/events"}>Browse Events</Link>
    </div>
    </>
  );
}
