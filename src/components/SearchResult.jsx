"use client";
import Link from "next/link";

export const SearchResult = () => {
  return (
    <div className="rounded-xl w-[400px] absolute top-14 z-10 bg-slate-50 text-sm text-blue mt-2 flex-col space-y-2 max-h-60 overflow-y-scroll">
      <div className="py-4 px-6  hover:bg-slate-50">
        <p className="text-black">Kampanye Tandingan</p>
        <p className="text-black text-xs">9 Februari 2024</p>
      </div>
      <div className="py-4 px-6 hover:bg-blue-20">
        <p className="text-black">Indonesia Mom</p>
        <p className="text-black text-xs">9 Februari 2024</p>
      </div>
    </div>
  );
};
