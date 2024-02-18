"use client";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { X } from "lucide-react";

export const FormModal = ({ idEvent }) => {
  const router = useRouter();

  const handleCloseModal = () => {
    const modal = document.getElementById("form-pop-up");
    modal.close();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phoneNumber.value;

    async function registerEvent(idEvent, name, email, phone) {
      try {
        const res = await fetch(
          `https://eventmakers-api.fly.dev/events/${idEvent}/join`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRzX01xQmJ0cnlwTEZRNlgzUCIsIm5hbWUiOiJyb25hbCB5dWx5YW50byIsImVtYWlsIjoic3VyZWwucm9uYWxAZ21haWwuY29tIiwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MDc2NDAzNjAsImV4cCI6MTcxODAwODM2MH0.eEyXTA8CFQK1durOGksUsGxeuxaay0tTqvqyA3yP8IY",
            },
            body: JSON.stringify({
              name: name,
              email: email,
              phoneNumber: phone,
            }),
          }
        );
        const data = await res.json();
        return data;
      } catch (error) {
        console.error("Error:", error);
      }
    }
    let data = registerEvent(idEvent, name, email, phone);
    handleCloseModal();

    Swal.fire({
      title: "Success",
      text: "Berhasil join event",
      icon: "success",
    });
    router.refresh();
  };

  return (
    <dialog id="form-pop-up" className="modal">
      <div className="p-4 w-[60%]">
        <div className="modal-action justify-center">
          <form
            className="w-full bg-slate-800 p-20 relative"
            onSubmit={handleSubmit}
          >
            <X
              className="absolute right-10 top-10 cursor-pointer hover:text-red-300"
              onClick={handleCloseModal}
            />
            <div className="text-center font-semibold text-xl">
              Lengkapi data dirimu dulu ya..
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="Email Address"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <label className="label">
                <span className="text-base label-text">Phone Number</span>
              </label>
              <input
                type="text"
                placeholder="Enter your phone number"
                name="phoneNumber"
                className="w-full input input-bordered input-primary"
              />
            </div>
            <div>
              <button className="btn btn-block btn-aprimary my-4">
                Join Event
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};
