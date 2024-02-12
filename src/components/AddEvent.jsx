"use client"

import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { ChevronsLeftIcon } from 'lucide-react';
import Swal from 'sweetalert2';

export const AddEvent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const router = useRouter();
    
    //ambil value user id dari localstorage 
    const [author, setAuthor] = useState(null);
    useEffect(() => {
        const userFormLs = localStorage.getItem("user")
        const parsedUser = JSON.parse(userFormLs)
        setAuthor(parsedUser)
    }, [])    

    async function handleUploadGambar (imageFile) {
      const formData = new FormData();
      formData.append ("file",imageFile);
      formData.append ("upload_preset","gtqtwhs6");

      const cloudinaryRes =  await fetch ("https://api.cloudinary.com/v1_1/dgt0nrylf/image/upload", 
        {
          method: "POST",
          body: formData,
        }
      );

      if (cloudinaryRes.ok) {
        return await cloudinaryRes.json();
      } else {
        throw new Error ("Gagal Upload Gambar Ke Cloudinary")
      }
    
    }

    
    async function handleAddEvent () {
      const cloudinaryRes = await handleUploadGambar(thumbnail);
      if (!cloudinaryRes || !cloudinaryRes.secure_url) {
        console.error ("Gagal Unggah Gambar ke Cloudinary");
        return;
      }

      const imageUrl = cloudinaryRes.secure_url;

      try {
        const resEventsMaker = await fetch('https://eventmakers-api.fly.dev/events/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRzX01xQmJ0cnlwTEZRNlgzUCIsIm5hbWUiOiJyb25hbCB5dWx5YW50byIsImVtYWlsIjoic3VyZWwucm9uYWxAZ21haWwuY29tIiwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MDc2NDAzNjAsImV4cCI6MTcxODAwODM2MH0.eEyXTA8CFQK1durOGksUsGxeuxaay0tTqvqyA3yP8IY"
        },
        body: JSON.stringify({
          title,
          description,
          image: imageUrl,
          dateTime,
          author:`${author?.id}`
        })
      })

      const dataEventAdd = await resEventsMaker.json();

  
      } catch (error) {
        console.log(error);
      }
      
      Swal.fire({
        title: "Success",
        text: "Add Data Event Success?",
        icon: "success"
      });

      // console.log(dataEventAdd);
      setTitle("");
      setDescription("");
      setDateTime("");
      setAuthor("");
      setThumbnail("");
      router.refresh();
    }

    

  return (
    <>
    <main className="max-w-[500px]  rounded-xl m-auto my-10 p-2 space-y-4 ">
        <h2 className="card-title text-amber-400">Add Event</h2>
        <input className="block w-[480px] rounded-lg p-2 " placeholder="Title Event" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <textarea className="block w-[480px] rounded-lg p-2 " placeholder="Description Event" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
        <input className="block w-[480px] rounded-lg p-2 " type="file" accept="image/*"  onChange={(e) => setThumbnail(e.target.files[0])} />
        <input className="block w-[480px] rounded-lg p-2 " type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
        <button  className=" btn-utama" onClick={handleAddEvent}>Add Event</button>
    </main>


    </>

  )
}
