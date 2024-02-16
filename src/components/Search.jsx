"use client";
import Link from "next/link";
import { SearchResult } from "@/components/SearchResult";
import { useAtom } from "jotai";
import { eventDataAtom } from "./Atom/EventDataAtom";

export const Search = ({ dataEvents }) => {
  const [allEventData, setDataEvents] = useAtom(eventDataAtom);

  const handleSearchInput = (value) => {
    console.log(value.toLowerCase());
    let searchInput = value.toLowerCase();

    let filteredDataEvents = dataEvents.filter((itemFilter) => {
      return itemFilter.events.title.toLowerCase().includes(searchInput);
    });

    setDataEvents(filteredDataEvents);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="flex-1">
        <a className=" brand">DevGenius</a>
      </div>
      <div className="flex-none gap-2">
        <div className="form-control">
          <div className=" rounded-xl  p-2 gap-4 flex item-center relative">
            <input
              className="rounded-xl w-[400px] text-center"
              placeholder="Cari Event Name"
              onChange={(e) => handleSearchInput(e.target.value)}
            />
            <button className="btn btn-md">Search</button>
            <SearchResult />
          </div>
        </div>
      </div>
      <div className="flex-2 mx-4">
        <ul className="flex flex-row gap-4">
          <li className="text-amber-400 hover:text-white">
            <Link href={"/auth/login"}>Login</Link>
          </li>
          <li className="text-amber-400 hover:text-white">
            <Link href={"/auth/register"}>Register</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};
