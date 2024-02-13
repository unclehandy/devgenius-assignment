"use client";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const SearchResult = ({ dataLookup }) => {
  return (
    <div className="rounded-xl w-[400px] absolute top-14 z-10 bg-slate-50 text-sm text-blue mt-2 flex-col space-y-2 max-h-60 overflow-y-scroll">
      <div className="py-4 px-6  hover:bg-blue-100 flex justify-between items-center">
        <div className="w-20 h-16 bg-blue-300 rounded-lg"></div>
        <div className="flex-col space-y-2 -ml-10">
          <p className="text-black text-sm">Kampanye Tandingan</p>
          <p className="text-black text-xs">9 Februari 2024</p>
        </div>
        <ArrowRight className="text-black" />
      </div>
    </div>
  );
};
