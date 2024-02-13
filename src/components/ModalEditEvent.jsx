import React from 'react'
import { EditEvent } from './EditEvent'


export const ModalEditEvent = () => {
  return (
    <>
        <dialog id="modalEditEvent" className=" modal">
        <div className="modal-box lg:max-w-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <form method="dialog">
             <EditEvent />
            </form>
          </div>
        </div>
        </dialog>
    </>
  )
}
