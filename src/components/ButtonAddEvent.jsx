"use client"

import { ModalAddEvent } from "./ModalAddEvent"

export const ButtonAddEvent = () => {

  return (
    <>
    <button className="btn-utama mx-6 " 
        onClick={() => document.getElementById("modalAddEvent").showModal()}> Add Event</button>
    <ModalAddEvent />
    </>
  )
}
