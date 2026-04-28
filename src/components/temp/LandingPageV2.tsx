import React from 'react'
import Image from 'next/image'
import LandingGradientWrapper from '@/components/temp/LandingGradientWrapper'
import BirdLogo from '@/components/temp/BirdLogo'
import kupBiletImg from '../../../public/kup bilet.png'

const goingLink = 'https://goingapp.pl/wydarzenie/gniazdo-festiwalu/krzykawka-lipiec-2025'

const date = `31.07-02.08`
const place = 'Krzykawka Małopolskie'

export default function LandingPageV2() {
  return (
    <LandingGradientWrapper>
      <Image
        src="/tlo-mobile.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover -z-10 pointer-events-none md:hidden`}
      />
      <Image
        src="/tlo.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className={`object-cover -z-10 pointer-events-none hidden md:block`}
      />
      <section
        className={`flex flex-col items-center w-full grow justify-between max-w-[1440px] mx-auto py-12 md:py-16 font-alientzSerif text-white`}
      >
        <TopGroup />
        <MiddleLogo />
        <BottomGroup />
      </section>
    </LandingGradientWrapper>
  )
}

function TopGroup() {
  return (
    <>
      <div className={`flex flex-col items-center md:hidden`}>
        <BirdLogo />
        <p className={`text-3xl pt-4`}>{date}</p>
      </div>
      <div className={`hidden md:flex items-center justify-center gap-x-10 text-3xl`}>
        <p>Krzykawka</p>
        <BirdLogo />
        <p>{date}</p>
      </div>
    </>
  )
}

function MiddleLogo() {
  return (
    <div className={`flex px-[max(2rem,12vw)] w-full`}>
      <Image
        src="/gniazdo festiwal logo.png"
        alt="Gniazdo Festiwal"
        width={1920}
        height={1080}
        priority
        sizes="(min-width: 1440px) 1216px, 76vw"
        className={`w-full h-auto`}
      />
    </div>
  )
}

function BottomGroup() {
  return (
    <div className={`flex flex-col items-center gap-y-6`}>
      <p className={`text-[1.25rem] md:hidden`}>{place}</p>
      <a href={goingLink} target={`_blank`} rel={`noreferrer`}>
        <Image
          src={kupBiletImg}
          alt="Kup bilet"
          placeholder="blur"
          sizes="22rem"
          className={`w-[11rem] md:w-[16rem] `}
        />
      </a>
    </div>
  )
}
