import Image from 'next/image'

export default async function Task1() {
  return(
    <div>
      <div className="cursor-pointer group relative m-auto h-96 w-96 overflow-hidden bg-black">
        <Image
          alt='card image'
          placeholder='blur'
          width={600}
          height={300}
          className="h-full w-full transform object-cover backdrop-opacity-100 duration-700"
          src="/bg.webp"
          blurDataURL="/blur.png"
          priority
        />
        <div className="absolute top-0 right-0 left-0 bottom-0 bg-black z-10 opacity-60"></div>
        <div className="absolute inset-y-full h-full w-full transform opacity-20 shadow-2xl duration-500 group-hover:-inset-y-0"></div>
        <div className="absolute inset-y-3/4 opacity-60 h-full w-full transform  z-20 duration-500 group-hover:inset-y-[200px]">
          <div className="absolute flex w-full place-content-center">
            <p className="mt-[50px] text-center text-2xl font-bold capitalize text-white shadow-2xl">
              Little Known Facts
            </p>
          </div>
          <div className="absolute mt-20 flex w-full place-content-center">
            <p className="mt-5 w-4/5 text-center text-sm font-normal text-white">
              All the lorem ipsum generator on the internet tend to repeat predefined chunks as neccesary
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}