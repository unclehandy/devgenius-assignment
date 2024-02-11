
import { JoinEvent } from "@/components/JoinEvent";
import Image from "next/image"
import Link from "next/link"

async function getDataDetailEvent (idEvent) {
    const url =`https://eventmakers-api.fly.dev/events/${idEvent}`;
    const res = await fetch(url, {
      cache: "no-cache",
    });
    
    const dataEvent = await res.json();
    // console.log(dataEvent);
    return dataEvent;
  }

export default async function Page({params}) {
// console.log(params.detail_event);
  const {detail_event} = params;   
  const idEvent = detail_event;
  const detailEvent =  await getDataDetailEvent(idEvent); 
    // console.log(detailEvent)
 
    return (
  
    <main >

      <div key={detailEvent.data.events.id} className="flex flex-row justify-items-center p-4 w-3/4 gap-8 m-auto self-center justify-center">
        <div className="flex flex-col gap-8">
        <div className="w-[500px]">
            <Image src={detailEvent.data.events.image} 
              width={600} height={300} alt="Image Event" 
              className="rounded-2xl"/>
          </div>

          <div className=" card shadow shadow-slate-950 border-slate-950 w-[500px] p-3">
            <h2 className="card-title">Deskripsi Event</h2>
            <p className=" text-justify">{detailEvent.data.events.description}</p>
          </div>


        </div>


        <div>
        <div className="card shadow shadow-slate-950 border-slate-950">
            <div className="card-body">
              <h2 className="card-title">{detailEvent.data.events.title}</h2>
              <p>{detailEvent.data.events.dateTime}</p>
              <JoinEvent idEvent={idEvent}/>
              <div className="btn btn-sm btn-primary"><Link href={"/dashboard/events/"}>Kembali</Link></div>
              <div className="border-t-2 flex gap-4 py-2 items-center ">              
                <Image src="/icon.png" width={30} height={25} alt="logo-author" />
                <div>
                  <p className="text-gray-400">Diselenggarakan Oleh</p>
                  <p> {detailEvent.data.events.author}</p> 
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </main>
  )
}

