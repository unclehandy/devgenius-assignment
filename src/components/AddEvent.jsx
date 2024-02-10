"use client"

import React, { useState } from 'react'

export const AddEvent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [user, setUser] = useState(null);

    const userFromLs = localStorage.getItem("user");
    const parseUserData = JSON.parse(userFromLs);
    setUser(parseUserData);
    const author = user.id;

    async function handleAddEvent () {

    }

  return (
    <>
    <main className="max-w-[500px] bg-secondary rounded-xl m-auto my-10 py-2 px-2 space-y-3 ">
        <h2>Add Event</h2>
        <input placeholder="Title Event" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <textarea placeholder="Description Event" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
        <input type="file" accept="image/*"  onChange={(e) => setThumbnail(e.target.files[0])} />
        <input type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
        <button  className="btn btn-info" onClick={handleAddEvent}>Tambah Cerpen</button>
    </main>


    </>

  )
}
