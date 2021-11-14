import { CMS_NAME } from '../lib/constants'
import Image from 'next/image'

export default function Intro() {
  return (
    <div>
      <section className="flex flex-col md:flex-row items-center mt-0 mb-6 bg-primary text-white">
        <div className='flex-1'>
          <Image
            src='/assets/imgs/intro01.png'
            alt={`Cover Image`}
            width='500'
            height='500'
          />
        </div>

        <div className='flex-1'>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-medium text-center md:text-left tracking-tighter leading-tight px-4 md:pl-0">
            A Fledged Front-End Developer
          </h1>
          <h4 className="text-base text-gray-300 text-center md:text-left font-thin mt-4 px-8 md:pl-0">
            Focusing on the performance of web Apps. Over 10 years of programming, design and creation experiences.
          </h4>
          <div className="flex justify-center md:justify-start">
            <button className="flex-initial my-6 bg-accent hover:bg-white text-white hover:text-accent py-2 px-6 border-transparent hover:border-transparent">
              Contact me
            </button>
          </div>
        </div>
      </section>
      <div className="grid grid-rows-2 grid-cols-1 md:grid-cols-2 md:grid-rows-1 m-8 mx-8 md:mx-16 py-20">
        <div className="text-4xl text-primary font-semibold">
          Performance is Vital
        </div>
        <div className="flex flex-col">
          <div className="text-base text-gray-500 font-light">
            If people have a negaive experience on computer or mobile, they're 62% less likely to purchase from you in the future.
          </div>
            <button className="flex-grow mt-6 br-transparent hover:bg-accent text-accent hover:text-white py-2 px-6 border-transparent">
              EXPLORE ALL
            </button>
        </div>
      </div>
    </div>
  )
}
