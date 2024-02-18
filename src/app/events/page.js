import { AddEvent, ButtonAddEvent } from "@/components/ButtonAddEvent";
import { ListEvents } from "@/components/ListEvents";
import { Search } from "@/components/Search";
import Header from "@/components/header/page";
import { filterDataEventsByAuthors } from "@/lib/utils";
import { getDataEvent } from "@/lib/utils";

export default async function page() {
  const { data } = await getDataEvent();

  const dataEventsFilter = filterDataEventsByAuthors(data);

  return (
    <div>
      <Search dataEvents={dataEventsFilter} />
      <Header />

     
      <div className="px-4">
        <h1 className="text-slate-200 text-2xl mt-8 px-4 font-light ">
          Latest Cool Event
        </h1>
        <ListEvents dataEvents={dataEventsFilter} />
      </div>
    </div>
  );
}
