import React from 'react'

 export  default async function EventEdit({ params }) {
   
    async function getDataEvent () {
        const res = await fetch(`https://eventmakers-api.fly.dev/events/${params.id}`, {
          cache: "no-cache",
        });
      
        const dataEvent = await res.json();
        return dataEvent;
      }
      const { data } = await getDataEvent();
      console.log (params.id);

  return (
    <div>EventEdit</div>
  )
}
