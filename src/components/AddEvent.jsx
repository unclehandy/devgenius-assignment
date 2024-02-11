"use client"

import React, { useState, useEffect } from 'react'

export const AddEvent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [thumbnail, setThumbnail] = useState("");

    //ambil value user id dari localstorage 
    const [user, setUser] = useState(null);
    useEffect(() => {
        const userFormLs = localStorage.getItem("user")
        const parseuser = JSON.parse(userFormLs)
        setUser(parseuser)
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
      if (!cloudinaryRes ||)

    }

  return (
    <>
    <main className="max-w-[500px] bg-secondary rounded-xl m-auto my-10 p-2 space-y-4 ">
        <h2 className="card-title">Add Event {user?.id}</h2>
        <input className="block w-[480px] rounded-lg p-2 " placeholder="Title Event" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <textarea className="block w-[480px] rounded-lg p-2 " placeholder="Description Event" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
        <input className="block w-[480px] rounded-lg p-2 " type="file" accept="image/*"  onChange={(e) => setThumbnail(e.target.files[0])} />
        <input className="block w-[480px] rounded-lg p-2 " type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
        <button  className="btn btn-info" onClick={handleAddEvent}>Add Event</button>
    </main>


    </>

  )
}
