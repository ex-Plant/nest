import React from 'react'
const goingLink = 'https://goingapp.pl/wydarzenie/gniazdo-festiwalu/krzykawka-lipiec-2025'
const buyTicket = 'Kup bilet'
export default function BtnTickets() {
  return (
    <a
      href={goingLink}
      className={`mt-auto md:mt-0  pb-[min(10rem,18vh)] md:pb-0`}
      target={`_blank`}
      rel={`noreferrer`}
    >
      <button className={'bg-lightGreen px-8 py-4 text-[1.25rem] uppercase'}>{buyTicket}</button>
    </a>
  )
}
