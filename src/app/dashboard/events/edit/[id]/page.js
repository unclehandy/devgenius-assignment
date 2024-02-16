
import { EditEvent } from "@/components/EditEvent";

export default async function Page({params}) {

  async function getDataEvent () {

  const url = `https://eventmakers-api.fly.dev/events/${params.id}`;
  const res= await fetch (url, {
    cache:"no-cache",
  })
  const dataEvent = await res.json();
  return dataEvent;
  }

  //nama const {data} menyesuaikan dengan api nya
  const {data} = await getDataEvent();

  return (
    <>
      <EditEvent detailEvent={data} />
    </>
  );
}