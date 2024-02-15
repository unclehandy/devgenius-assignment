"use client"
import { useState, useEffect} from "react"
import { useRouter } from "next/navigation";


export const ModalEditEvent = (item) => {
    // console.log (item.events.id)
  const [modal, setModal] = useState(false);
  const [title, setTitle] = useState(item.events.title);
  const [description, setDescription] = useState(item.events.description);
  const [dateTime, setDateTime] = useState(item.events.dateTime);
  const [isMutating, setIsMutating] = useState(false);

  const router = useRouter();

  const [author, setAuthor] = useState(null);
  useEffect(() => {
      const userFormLs = localStorage.getItem("user")
      const parsedUser = JSON.parse(userFormLs)
      setAuthor(parsedUser)
  }, [])    



  async function handleUpdateEvent() {

    setIsMutating(true);

      const url =`https://eventmakers-api.fly.dev/events/${item.events.id}`;
      const resEventEdit = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImRzX01xQmJ0cnlwTEZRNlgzUCIsIm5hbWUiOiJyb25hbCB5dWx5YW50byIsImVtYWlsIjoic3VyZWwucm9uYWxAZ21haWwuY29tIiwiYXZhdGFyIjpudWxsLCJpYXQiOjE3MDc2NDAzNjAsImV4cCI6MTcxODAwODM2MH0.eEyXTA8CFQK1durOGksUsGxeuxaay0tTqvqyA3yP8IY"
      },
      body: JSON.stringify({
        title,
        description,
        dateTime,
        author:`${author?.id}`
      })
    })
    const dataEventEdit = await resEventEdit.json();
    setIsMutating(false);

    router.refresh();
    setModal(false);
  }


  function handleChange() {
    setModal(!modal);
  }

  const handleShowModal = async () => {
    
    document.getElementById("modalEditEvent")?.showModal();   
  }

  return (
    <>
    <div> 
      {/* <button className="btn btn-info btn-sm" onClick={handleChange}>
        Edit
      </button> */}

     <button className="btn btn-info btn-sm"  onClick={handleShowModal}>
        Edit
      </button>


      <input
        type="checkbox"
        checked={modal}
        onChange={handleChange}
        className=" modal-toggle"
      />

        <dialog id="modalEditEvent" className=" modal">
                <div className="modal-box">
                  <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                      ✕
                    </button>
                  </form>
                  <div>
                    <form method="dialog">
                      <main className="max-w-[500px]  rounded-xl m-auto my-10 p-2 space-y-4 ">
                        <h2 className="card-title text-amber-400">Edit Event </h2>
                        <input 
                          type="text"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="block w-[480px] rounded-lg p-2 "
                          placeholder="Title Event"
                        />
                          <textarea
                          value={description}
                          onChange={(e) => setDescription(e.target.value)}
                          className="block w-[480px] rounded-lg p-2"
                          placeholder="Description Event"
                        />
                          <input
                          type="date"
                          value={dateTime}
                          onChange={(e) => setDateTime(e.target.value)}
                          className="block w-[480px] rounded-lg p-2"
                        />
                      <div className="modal-action">
                        <button type="button" className="btn-utama" onClick={handleChange}>
                          Close
                        </button>
                        {!isMutating ? (
                          <button onClick={handleUpdateEvent} className="btn-utama">
                            Update
                          </button>
                        ) : (
                          <button type="button" className="btn-utama loading">
                            Updating...
                          </button>
                        )}
                      </div>
                      </main>
                      </form>      
                    </div>
                  </div>
          </dialog>
           
        </div>
    </>
  )
}
