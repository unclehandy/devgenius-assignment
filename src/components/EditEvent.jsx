"use client"
import Image from "next/image"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";

export const EditEvent = ({detailEvent}) => {

    const [title, setTitle] = useState(detailEvent.events.title);
    const [description, setDescription] = useState(detailEvent.events.description);
    const [dateTime, setDateTime] = useState(detailEvent.events.dateTime);
    const [image, setImage] = useState (detailEvent.events.image);
    const router = useRouter();    

    //ambil value user id dari localstorage 
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        const userFormLs = localStorage.getItem("user")
        const parsedUser = JSON.parse(userFormLs)
        setAuthor(parsedUser)
    }, [])    

    async function handleUpdateEvent () {
      const url =`https://eventmakers-api.fly.dev/events/${detailEvent.events.id}`;
      const resEventEdit = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRzX01xQmJ0cnlwTEZRNlgzUCIsIm5hbWUiOiJyb25hbCB5dWx5YW50byIsImVtYWlsIjoic3VyZWwucm9uYWxAZ21haWwuY29tIiwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MDc2NDAzNjAsImV4cCI6MTcxODAwODM2MH0.eEyXTA8CFQK1durOGksUsGxeuxaay0tTqvqyA3yP8IY"
      },
      body: JSON.stringify({
        title,
        description,
        dateTime,
        author:`${author?.id}`
      })
    })
    const dataEventEdit = await resEventEdit.json();

    Swal.fire({
      title: "Success",
      text: "Update Data Event Success?",
      icon: "success"
    });

    router.push ("/dashboard/events")
    }

    return (
    <main className="max-w-[500px]  rounded-xl m-auto my-10 p-2 space-y-4 ">
        <h2 className="card-title text-amber-400">Edit Event</h2>
        <Image src={image} width={500} height={300} alt="image-event" />
        <input className="block w-[480px] rounded-lg p-2 " placeholder="Title Event" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <textarea className="block w-[480px] rounded-lg p-2 " placeholder="Description Event" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
        {/* <input className="block w-[480px] rounded-lg p-2 " type="file" accept="image/*"  onChange={(e) => setImage(e.target.files[0])} /> */}
        <input className="block w-[480px] rounded-lg p-2 " type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
        <button  className=" btn-utama" onClick={handleUpdateEvent} >Update Event</button>
    </main>
  )
}
