"use client"
import { useEffect, useState } from "react";
import { EditEvent } from "@/components/EditEvent";

export default function Page({params}) {
  const [detailEvent, setDetailEvent] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const url = `https://eventmakers-api.fly.dev/events/${params.id}`;
      const res = await fetch(url, { cache: "no-cache" });
      const data = await res.json();
      setDetailEvent(data);
    }

    fetchData();
  }, [params.id]);

  return (
    <>
      {detailEvent && <EditEvent detailEvent={detailEvent} />}
      {/* <EditEvent detailEvent={detailEvent} /> */}
    </>
  );
}