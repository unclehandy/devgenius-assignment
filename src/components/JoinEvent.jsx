"use client";

export const JoinEvent = ({ idEvent }) => {
  const handleJoin = () => {
    document.getElementById("form-pop-up").showModal();
  };

  return (
    <>
      <button className="btn btn-sm  btn-primary" onClick={handleJoin}>
        Join This Event
      </button>
    </>
  );
};
