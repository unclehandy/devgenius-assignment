

import { ButtonAddEvent } from '@/components/ButtonAddEvent';
import { ListEvents } from '@/components/ListEvents'
import { Search } from '@/components/Search';

async function getDataEvents () {
    const res = await fetch('https://eventmakers-api.fly.dev/events/', {
      cache: "no-cache",
    });
  
    const dataEvents = await res.json();
    return dataEvents;
  }

export default async function page() {
    const { data } = await getDataEvents();

  return (
    <div>

          <Search />
          <ButtonAddEvent />
          <ListEvents dataEvents={data} />

    </div>
  )
}
