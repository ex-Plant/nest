import React from 'react'
import Image from 'next/image'
import LandingGradientWrapper from '@/components/temp/LandingGradientWrapper'
import BirdLogo from '@/components/temp/BirdLogo'
import NestLogo from '@/components/temp/NestLogo'
import BtnTickets from '@/components/temp/BtnTickets'

const date = `31.07-02.08`
const place = 'Krzykawka Małopolskie'

export default function LandingPage() {
  return (
    <LandingGradientWrapper>
      <Image
        src="/tlo.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover -z-10 pointer-events-none`}
      />
      <section
        className={`flex flex-col items-center w-full grow justify-center max-w-[1440px] mx-auto font-alientzSerif `}
      >
        <TopDesktop />
        <div className={`pb-7 pt-[min(7.5rem,15vh)] md:hidden`}>
          <BirdLogo />
        </div>
        <p className={`text-3xl pb-14 md:hidden`}>{date}</p>
        <div className={`flex px-[max(2rem,12vw)] pb-14 md:pb-24 w-full `}>
          <NestLogo />
        </div>
        <p className={`text-[1.25rem] pb-36 md:pb-24 md:hidden `}>{place}</p>
        <BtnTickets />
      </section>
    </LandingGradientWrapper>
  )
}

function TopDesktop() {
  return (
    <div className={` hidden md:flex items-center justify-center  pb-24 gap-x-10 text-3xl  `}>
      <p>Krzykawka</p>
      <div className={``}>
        <BirdLogo />
      </div>
      <p>{date}</p>
    </div>
  )
}
