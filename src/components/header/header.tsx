import { Button } from "@/components/ui/button"
import { dancingScript, poppins } from "@/config/fonts"
export default function Header() {
  return (
    <header id="header" className="relative">
      <div className="intro">
        <div className="overlay absolute inset-0 bg-black bg-opacity-60">
          <div className="container mx-auto px-4">
            <div className="flex justify-center items-center h-screen">
              <div className="intro-text text-center text-white">
                <h1 className={`text-[9rem] font-bold ${dancingScript.className}`}>Touché</h1>
                <p className={`text-[2rem] mb-8 ${poppins.className}`}>Restaurant / Coffee / Pub</p>
                <Button 
  variant="outline" 
  size="lg" 
  className="text-white border-[#6dae28] bg-[#418325] hover:bg-[#599914] hover:text-white transition-colors duration-300 rounded-none"
>
  Discover Story
</Button>



              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}