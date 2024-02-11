"use client"

import React, { useState } from 'react'

export const AddEvent = () => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [dateTime, setDateTime] = useState("");
    const [thumbnail, setThumbnail] = useState("");
    const [user, setUser] = useState(null);

    
    async function handleAddEvent () {

    }

  return (
    <>
    <main className="max-w-[500px] bg-secondary rounded-xl m-auto my-10 p-2 space-y-4 ">
        <h2 className="card-title">Add Event</h2>
        <input className="block w-[480px] rounded-lg p-2 " placeholder="Title Event" value={title} onChange={(e)=> setTitle(e.target.value)}/>
        <textarea className="block w-[480px] rounded-lg p-2 " placeholder="Description Event" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>
        <input className="block w-[480px] rounded-lg p-2 " type="file" accept="image/*"  onChange={(e) => setThumbnail(e.target.files[0])} />
        <input className="block w-[480px] rounded-lg p-2 " type="date" value={dateTime} onChange={(e) => setDateTime(e.target.value)}></input>
        <button  className="btn btn-info" onClick={handleAddEvent}>Add Event</button>
    </main>


    </>

  )
}
