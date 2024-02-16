import { AddEvent, ButtonAddEvent } from "@/components/ButtonAddEvent";
import { ListEvents } from "@/components/ListEvents";
import { Search } from "@/components/Search";
import Header from "@/components/header/page";
import { filterDataEventsByAuthors } from "@/lib/utils";

async function getDataEvents() {
  const res = await fetch("https://eventmakers-api.fly.dev/events/", {
    cache: "no-cache",
  });

  const dataEvents = await res.json();
  return dataEvents;
}

export default async function page() {
  const { data } = await getDataEvents();

  const dataEventsFilter = filterDataEventsByAuthors(data);

  return (
    <div>
      <Search dataEvents={dataEventsFilter} />
      <Header />

      {/* <ButtonAddEvent /> */}
      <div className="px-4">
        <h1 className="text-slate-200 text-2xl mt-8 px-4 font-light ">
          Latest Cool Event
        </h1>
        <ListEvents dataEvents={dataEventsFilter} />
      </div>
    </div>
  );
}
