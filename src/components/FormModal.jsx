"use client";

export const FormModal = ({ idEvent }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const phone = e.target.phoneNumber.value;

    async function registerEvent(idEvent, name, email, phone) {
      try {
        const res = await fetch(
          `https://eventmakers-api.fly.dev/documentation#tag/events/post/events/${idEvent}/join`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
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
    console.log(data);
  };

  return (
    <dialog id="form-pop-up" className="modal bg-slate-800 bg-opacity-70">
      <div className="w-full p-4">
        <div className="text-center font-semibold text-xl">
          Lengkapi data dirimu dulu ya..
        </div>
        <div className="modal-action justify-center">
          <form className="w-[60%]" onSubmit={handleSubmit}>
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
