import BirdLogo from '@/components/temp/BirdLogo'
import NestLogo from '@/components/temp/NestLogo'
import React from 'react'

type PropsT = {
  date: string
  place: string
  goingLink: string
  buyTicket: string
}

export default function LandingPageDesktop({ date, place, goingLink, buyTicket }: PropsT) {
  return (
    <>
      <div className={` flex-col items-center  h-full hidden md:flex w-full  `}>
        <div className={`flex pt-36 gap-x-10`}>
          <p className={`text-[1.25rem] `}>{`Krzykawka`}</p>
          <div className={`pb-7 pt-[min(7.5rem,15vh] shrink-0`}>
            <BirdLogo />
          </div>
          <p className={`text-3xl pb-14`}>{date}</p>
        </div>
        <div className={` px-[max(2rem,12vw)] pb-14 w-full  min-h-[200px] relative `}>
          <NestLogo />
        </div>

        <a
          href={goingLink}
          className={`mt-auto  pb-[min(10rem,18vh)]`}
          target={`_blank`}
          rel={`noreferrer`}
        >
          <button className={'bg-lightGreen px-8 py-4 text-[1.25rem]'}>{buyTicket}</button>
        </a>
      </div>
    </>
  )
}
