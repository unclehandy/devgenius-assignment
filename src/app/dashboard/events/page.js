import { ButtonAddEvent } from "@/components/ButtonAddEvent";
import { ListEvents } from "@/components/ListEvents";
import { DataEventAdmin } from "@/components/dataEventAdmin/page";

async function getDataEvents() {
    const res = await fetch('https://eventmakers-api.fly.dev/events/', {
        cache: "no-cache",
    });

    const dataEvents = await res.json();
    return dataEvents;
}

export default async function Events() {
    const { data } = await getDataEvents();


    return (

        <div>
            <ButtonAddEvent />
            <DataEventAdmin dataEvents={data} />
        </div>
    )
}