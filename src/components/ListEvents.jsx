"use client"
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ListEvents = ({ dataEvents }) => {
  const dataEventsFilter = dataEvents.filter(function (itemFilter) {
    return itemFilter.events.author == "ds_v3jTVjbKWukzTUd"
  })


  return (
    <>
      <main className="card lg:grid lg:grid-cols-4 gap-4 p-5">
        {dataEventsFilter.map((item) => {
          return (


          <div  key={item.events.id} className=" rounded-3xl m-4 w-[100] glass  shadow-sm  shadow-slate-950 border border-slate-800">
            <figure><Image className='hover:scale-105 transition duration-500  object-cover'
              src={item.events.image} 
              width={450}  
              height={100}
              alt="image events"
            /></figure>
            <div className='card-body space-y-2'>
              <h2 className='card-title'> {item.events.title}</h2>
              <p> {item.events.dateTime}</p>
              <div className="btn btn-primary"><Link href={`/events/${item.events.id}`}>Detail Event</Link></div>
              <div className="border-t-2 mt-10 flex gap-4 py-2 items-center">              
                <Image src="/icon.png" width={30} height={25} alt="logo-author"/>
                <p> {item.events.author}</p> 
              </div>
            </div>
          </div>
          )
        })}
      </main>
    </>
  )
}
