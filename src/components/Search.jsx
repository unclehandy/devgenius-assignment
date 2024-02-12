"use client";
import Link from "next/link";
import { SearchResult } from "@/components/SearchResult";

export const Search = () => {
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
            />
            <button className="btn btn-md ">Search</button>
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
