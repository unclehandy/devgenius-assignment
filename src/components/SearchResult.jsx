"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { useState } from "react";
import { useAtom } from "jotai";
import { eventDataAtom } from "./Atom/EventDataAtom";

export const SearchResult = () => {
  const [hoverStates, setHoverStates] = useState(Array(2).fill(false));
  const [allEventData] = useAtom(eventDataAtom);

  const handleMouseEnter = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = true;
    setHoverStates(newHoverStates);
  };

  const handleMouseLeave = (index) => {
    const newHoverStates = [...hoverStates];
    newHoverStates[index] = false;
    setHoverStates(newHoverStates);
  };

  const arrowColor = {
    default: "#A1A1AA",
    hover: "#d97706",
  };

  return (
    <div className="rounded-xl w-[400px] absolute top-14 z-10 bg-slate-50 text-sm text-blue mt-2 flex-col space-y-2 max-h-60 overflow-y-scroll">
      {allEventData !== null &&
        allEventData.map((event, index) => {
          return (
            <Link href={`/events/${event.events.id}`} key={index}>
              <div
                className="py-4 px-6 flex justify-between items-center hover:bg-gray-100"
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
              >
                <img
                  src={event.events.image}
                  className="w-20 h-16 bg-blue-300 rounded-lg object-cover"
                ></img>
                <div className="flex-col space-y-2 basis-1/2">
                  <p className="text-black text-sm line-clamp-1">
                    {event.events.title}
                  </p>
                  <p className="text-black text-xs">{event.events.dateTime}</p>
                </div>
                <ArrowRight
                  color={
                    hoverStates[index] ? arrowColor.hover : arrowColor.default
                  }
                />
              </div>
            </Link>
          );
        })}
    </div>
  );
};
