"use client";
import Link from "next/link";
import { SearchResult } from "@/components/SearchResult";
import { useState, useEffect } from "react"; // Added useEffect
import { useAtom } from "jotai";
import { eventDataAtom } from "./Atom/EventDataAtom";
import { filterDataEventsByAuthors } from "@/lib/utils";
import { getDataEvent } from "@/lib/utils";

export const Search = () => {
  const [allEventData, setDataEvents] = useAtom(eventDataAtom);
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      if (searchInput === "") {
        setDataEvents(null);
      } else {
        try {
          const dataEvents = await getDataEvent(searchInput);
          const dataEventsFilteredByAuthor = filterDataEventsByAuthors(
            dataEvents.data
          );
          const filteredDataEvents = dataEventsFilteredByAuthor.filter(
            (itemFilter) => {
              return itemFilter.events.title
                .toLowerCase()
                .includes(searchInput);
            }
          );
          setDataEvents(filteredDataEvents);
        } catch (error) {
          // Handle error
          console.error("Error fetching data:", error);
        }
      }
    };

    fetchData();
  }, [searchInput, setDataEvents]);

  const handleSearchInput = (value) => {
    setSearchInput(value.toLowerCase());
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
              className="rounded-xl w-[400px] h-[40px] text-center"
              placeholder="Cari Event Name"
              onChange={(e) => handleSearchInput(e.target.value)}
            />
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
