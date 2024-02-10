"use client"

export const JoinEvent = ({idEvent}) => {
const handleJoin = () => alert(`${idEvent}`);


   return (
    <>
        <button className="btn btn-sm  btn-primary" onClick={handleJoin}>Join This Event</button>
    </>
  )
}
