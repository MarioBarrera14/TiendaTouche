import { poppins } from '@/config/fonts';
import Image from 'next/image'

export default function Chef() {
  return (
    <section id="chef">
    <div
      className={`relative min-h-screen bg-fixed bg-cover bg-center ${poppins.className}`}
      style={{
        backgroundImage: "url('img/team-bg.jpg?height=1080&width=1920')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
          MEET OUR CHEFS
        </h2>
        <div className="w-16 h-1 bg-green-500 mx-auto mb-4"></div>
        <p className="text-lg md:text-xl text-center mb-16 max-w-2xl mx-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
          dapibus leonec.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Mike Doe",
              image: "/img/team/01.jpg?height=256&width=256",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
            },
            {
              name: "Chris Doe",
              image: "/img/team/02.jpg?height=256&width=256",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
            },
            {
              name: "Ethan Doe",
              image: "/img/team/03.jpg?height=256&width=256",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam.",
            },
          ].map((chef, index) => (
            <div key={index} className="bg-transparent p-4 md:p-6 rounded-lg">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-opacity-20 rounded-lg transform bg-[#37f708] w-full h-full -rotate-6"></div>
                <div className="relative">
                  <Image
                    src={chef.image}
                    alt={`Chef ${chef.name}`}
                    width={300}
                    height={400}
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <h3 className="text-xl md:text-2xl font-semibold mb-2 text-white text-center">
                {chef.name}
              </h3>
              <p className="text-sm md:text-base text-gray-300 text-center">{chef.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}