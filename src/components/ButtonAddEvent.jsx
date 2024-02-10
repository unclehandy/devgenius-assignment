"use client"
import { ModalAddEvent } from "./ModalAddEvent"

export const ButtonAddEvent = () => {

  return (
    <>
    <button className="btn btn-info mx-4" 
        onClick={() => document.getElementById("modalAddEvent").showModal()}>Add Event</button>
    <ModalAddEvent />
    </>
  )
}
