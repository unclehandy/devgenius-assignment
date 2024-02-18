"use client";
import React from "react";
import Image from "next/image";
import Swal from "sweetalert2";
import { useRouter } from "next/navigation";
import Link from "next/link";

export const DataEventAdmin = ({ dataEvents }) => {
  const router = useRouter();

  const dataEventsFilter = dataEvents.filter(function (itemFilter) {
    return (
      itemFilter.events.author == "ds_v3jTVjbKWukzTUd" ||
      itemFilter.events.author == "ds_MqBbtrypLFQ6X3P" ||
      itemFilter.events.author == "ds_FPFzoy8P0wqCDBl"
    );
  });

  const shortenTitle = (title, maxLength) => {
    if (title.length <= maxLength) return title;
    const lastSpaceIndex = title.lastIndexOf(" ", maxLength);
    return (
      title.slice(0, lastSpaceIndex > 0 ? lastSpaceIndex : maxLength) + "..."
    );
  };

  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
        }).then(async () => {
          try {
            const resEventsMaker = await fetch(
              `https://eventmakers-api.fly.dev/events/${id}`,
              {
                method: "DELETE",
                headers: {
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRzX01xQmJ0cnlwTEZRNlgzUCIsIm5hbWUiOiJyb25hbCB5dWx5YW50byIsImVtYWlsIjoic3VyZWwucm9uYWxAZ21haWwuY29tIiwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MDc2NDAzNjAsImV4cCI6MTcxODAwODM2MH0.eEyXTA8CFQK1durOGksUsGxeuxaay0tTqvqyA3yP8IY",
                },
              }
            );

            await resEventsMaker.json();
            console.log("Event deleted successfully:");
            router.refresh();
          } catch (error) {
            console.error(error);
          }
        });
      }
    });
  };

  return (
    <>
      <main className="card lg:grid lg:grid-cols-4 gap-6 p-5">
        {dataEventsFilter.map((item, index) => {
          return (
            <div
              key={item.events.id}
              className="card  bg-slate-800 shadow border border-slate-900 hover:scale-105 transition duration-500 overflow-hidden "
            >
              <div className="w-full h-40 overflow-hidden ">
                <Image
                  src={item.events.image}
                  width={500}
                  height={400}
                  alt={item.events.title}
                  className="w-auto h-full  object-cover"
                />
              </div>
              <div className="space-y-2 p-3">
                <h2 className="card-title text-amber-400">
                  {shortenTitle(item.events.title, 20)}
                </h2>

                <div className="card-actions justify-end">
                  <Link href={`/dashboard/events/edit/${item.events.id}`}>
                    <button className="btn btn-info btn-sm">Edit</button>
                  </Link>
                  <button
                    className="btn btn-sm btn-accent "
                    onClick={() => {
                      handleDelete(item.events.id);
                    }}
                  >
                    Hapus
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </main>
    </>
  );
};
