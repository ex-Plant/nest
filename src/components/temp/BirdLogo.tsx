import Image from 'next/image'

export default function BirdLogo({ className = 'w-[3.2rem] h-auto' }: { className?: string }) {
  return (
    <Image
      src="/ptak-orange.png"
      alt=""
      width={1298}
      height={780}
      priority
      className={className}
    />
  )
}
