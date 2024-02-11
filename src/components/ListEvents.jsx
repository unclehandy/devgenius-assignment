import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

export const ListEvents = ({ dataEvents }) => {
  const dataEventsFilter = dataEvents.filter(function (itemFilter) {
    return itemFilter.events.author == "ds_v3jTVjbKWukzTUd"
  })


  const shortenTitle = (title, maxLength) => {
    if (title.length <= maxLength) return title;
    const lastSpaceIndex = title.lastIndexOf(' ', maxLength);
    return title.slice(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) + '...';
  };

  return (
    <>
      <main className="card lg:grid lg:grid-cols-5 gap-6 p-5">
        {dataEventsFilter.map((item) => {
          return (
            <div className="card  bg-slate-800 shadow border border-slate-900 hover:scale-105 transition duration-500 overflow-hidden ">
              <div className='w-full h-40 overflow-hidden '>
                <img
                  src={item.events.image}
                  className='w-auto h-full  object-cover'
                />
              </div>
              <div className="space-y-2 p-3">
                <h2 className="card-title text-amber-400">{shortenTitle(item.events.title, 20)}</h2>
                <p> {item.events.dateTime}</p>
                <div className="card-actions justify-end">
                  <Link className="btn-utama " href={`/events/${item.events.id}`}>Detail Event</Link>
                </div>
              </div>
            </div>
          )
        })}
      </main>
    </>
  )
}
