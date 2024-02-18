

import { ListEvents } from "@/components/ListEvents";
import { Search } from "@/components/Search";
import Footer from "@/components/footer";
import Header from "@/components/header/page";
import Hero from "@/components/hero";
import { filterDataEventsByAuthors } from "@/lib/utils";
import { getDataEvent } from "@/lib/utils"

export default async function Home() {

  const { data } = await getDataEvent();

  const dataEventsFilter = filterDataEventsByAuthors(data);
  return (


    <>
      <Search />
      <Header />

      <div className="px-4">
        <h1 className="text-slate-200 text-2xl mt-8 px-4 font-light ">
          Latest Cool Event
        </h1>
        <ListEvents dataEvents={dataEventsFilter} />
      </div>



      <div>
        
      </div>



    <Hero />


    <Footer />
    </>

  );
}
