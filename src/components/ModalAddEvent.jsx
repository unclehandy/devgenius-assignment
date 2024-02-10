import React from 'react'
import { AddEvent } from './AddEvent'

export const ModalAddEvent = () => {
  return (
    <>
        <dialog id="modalAddEvent" className=" modal">
        <div className="modal-box lg:max-w-xl">
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            <form method="dialog">
              <AddEvent />
            </form>
          </div>
        </div>
        </dialog>
    </>
  )
}
