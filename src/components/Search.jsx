"use client"

export const Search = () => {
  return (
    <div className="m-5">
    <div className=" rounded-2xl bg-primary p-2 gap-4 flex item-center">
      <input className="rounded-2xl w-[400px] text-center" placeholder="Cari Event Name"/> 
      <button className="btn btn-info">Search</button>
    </div>
    </div>
  ) 
}
