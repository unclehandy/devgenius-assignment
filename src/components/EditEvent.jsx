"use client"
import Image from "next/image"
import { useState } from "react";



export const EditEvent = (detailEvent) => {

    // const [title, setTitle] = useState(detailEvent.title);
    // const [desc, setDesc] = useState(detailEvent.description);
    // const [dateTime, setDateTime] = useState(detailEvent.dateTime);
    // const [image, setImage] = useState ("");
    // console.log(detailEvent)
    
      console.log(detailEvent)

    async function handleUpdateEvent () {
  
    }

    return (
    <main className="max-w-[500px]  rounded-xl m-auto my-10 p-2 space-y-4 ">
        <h2 className="card-title text-amber-400">Edit Event {detailEvent.events.title}</h2>
        <input className="block w-[480px] rounded-lg p-2 " placeholder="Title Event" value={""} onChange={(e)=> setTitle(e.target.value)}/>
        <textarea className="block w-[480px] rounded-lg p-2 " placeholder="Description Event" value={""} onChange={(e)=> setDesc(e.target.value)}></textarea>
        <input className="block w-[480px] rounded-lg p-2 " type="file" accept="image/*"  onChange={(e) => setImage(e.target.files[0])} />
        <input className="block w-[480px] rounded-lg p-2 " type="date" value={""} onChange={(e) => setDateTime(e.target.value)}></input>
        <button  className=" btn-utama" onClick={handleUpdateEvent} >Update Event</button>
    </main>
  )
}
