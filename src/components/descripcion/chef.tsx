import Image from 'next/image'

export default function Component() {
  return (
    <div className="relative min-h-screen bg-fixed bg-cover bg-center" style={{backgroundImage: "url('img/team-bg.jpg?height=1080&width=1920')"}}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4 text-white">MEET OUR CHEFS</h2>
        <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
        <p className="text-xl text-center mb-16 max-w-2xl mx-auto text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed dapibus leonec.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
               {
                name: "Mike Doe",
                image: "/img/team/01.jpg?height=256&width=256",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
              },
              {
                name: "Chris Doe",
                image: "/img/team/02.jpg?height=256&width=256",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
              },
              {
                name: "Ethan Doe",
                image: "/img/team/03.jpg?height=256&width=256",
                description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sed dapibus leo nec ornare diam."
              }
          ].map((chef, index) => (
            <div key={index} className="bg-transparent p-6 rounded-lg">
              <div className="relative mb-6">
                <div className="absolute inset-0 bg-primary bg-opacity-20 rounded-lg transform bg-[#33ff00] -rotate-6"></div>
                <div className="relative">
                  <Image
                    src={chef.image}
                    alt={`Chef ${chef.name}`}
                    width={300}
                    height={400}
                    className="w-full h-80 object-cover rounded-lg shadow-lg"
                  />
                </div>
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-white text-center">{chef.name}</h3>
              <p className="text-gray-300 text-center">{chef.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}