import { poppins } from '@/config/fonts'
import Image from 'next/image'

export default function Component() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="relative w-full h-64 md:h-96">
              <Image
                src="/img/about.jpg?height=384&width=512"
                alt="About our restaurant"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
          <div className={`w-full md:w-1/2 md:pl-12 ${poppins.className}`}>
            <h2 className="text-3xl text-black font-bold mb-4">Our Restaurant</h2>
            <hr className="w-16 border-t-2 border-primary mb-6" />
            <p className="text-gray-600 mb-6">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare diam commodo nibh.
            </p>
            <h3 className="text-2xl font-semibold mb-4">Awarded Chefs</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam. Sed commodo nibh ante facilisis bibendum dolor feugiat at. Duis sed dapibus leo nec ornare.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}