"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { X } from "lucide-react";
import { poppins } from "@/config/fonts";

const dishes = [
  {
    id: 1,
    name: "Dish Name",
    category: "breakfast",
    image: "/img/portfolio/01-small.jpg?height=300&width=400",
  },
  {
    id: 2,
    name: "Dish Name",
    category: "dinner",
    image: "/img/portfolio/02-small.jpg?height=300&width=400",
  },
  {
    id: 3,
    name: "Dish Name",
    category: "breakfast",
    image: "/img/portfolio/03-small.jpg?height=300&width=400",
  },
  {
    id: 4,
    name: "Dish Name",
    category: "breakfast",
    image: "/img/portfolio/04-small.jpg?height=300&width=400",
  },
  {
    id: 5,
    name: "Dish Name",
    category: "dinner",
    image: "/img/portfolio/05-small.jpg?height=300&width=400",
  },
  {
    id: 6,
    name: "Dish Name",
    category: "lunch",
    image: "/img/portfolio/06-small.jpg?height=300&width=400",
  },
  {
    id: 7,
    name: "Dish Name",
    category: "lunch",
    image: "/img/portfolio/07-small.jpg?height=300&width=400",
  },
  {
    id: 8,
    name: "Dish Name",
    category: "breakfast",
    image: "/img/portfolio/08-small.jpg?height=300&width=400",
  },
  {
    id: 9,
    name: "Dish Name",
    category: "dinner",
    image: "/img/portfolio/09-small.jpg?height=300&width=400",
  },
  {
    id: 10,
    name: "Dish Name",
    category: "lunch",
    image: "/img/portfolio/10-small.jpg?height=300&width=400",
  },
  {
    id: 11,
    name: "Dish Name",
    category: "lunch",
    image: "/img/portfolio/11-small.jpg?height=300&width=400",
  },
  {
    id: 12,
    name: "Dish Name",
    category: "breakfast",
    image: "/img/portfolio/12-small.jpg?height=300&width=400",
  },
];

export default function Component() {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const headerRef = useRef<HTMLDivElement>(null);

  const filteredDishes =
    filter === "all"
      ? dishes
      : dishes.filter((dish) => dish.category === filter);

  useEffect(() => {
    const handleScroll = () => {
      if (headerRef.current) {
        const scrollPosition = window.pageYOffset;
        headerRef.current.style.backgroundPositionY = `${
          scrollPosition * 0.5
        }px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const openModal = (image: string) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio" className={`bg-gray-100 ${poppins.className}`}>
    {/* Sección de la galería */}
    <div
      className="relative h-[30vh] sm:h-[40vh] bg-cover bg-center bg-fixed flex items-center justify-center"
      style={{
        backgroundImage: "url('img/gallery-bg.jpg?height=1080&width=1920')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 text-center px-4">
        <h2 className="text-3xl sm:text-6xl font-bold mb-4 text-white">GALLERY</h2>
        <div className="w-12 sm:w-16 h-1 bg-green-500 mx-auto mb-4"></div>
        <p className="text-white text-sm sm:text-xl max-w-md sm:max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.
        </p>
      </div>
    </div>

    {/* Filtros */}
    <div className="container mx-auto px-4 py-8 sm:py-16">
      <div className="mb-8">
        <ul className="flex justify-center space-x-2 sm:space-x-4">
          {["all", "breakfast", "lunch", "dinner"].map((category) => (
            <li key={category}>
              <Button
                onClick={() => setFilter(category)}
                className={`capitalize transition-colors duration-300 ${
                  filter === category
                    ? "bg-[#6dae28] text-white"
                    : "bg-transparent text-black"
                } hover:bg-[#6dae28] hover:text-white`}
              >
                {category}
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* Galería de imágenes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredDishes.map((dish) => (
          <div
            key={dish.id}
            className="group relative overflow-hidden rounded-lg shadow-md cursor-pointer"
            onClick={() => openModal(dish.image)}
          >
            <Image
              src={dish.image}
              alt={dish.name}
              width={400}
              height={300}
              className="w-full h-auto transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-[#6dae28] bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h4 className="text-white text-lg sm:text-xl font-semibold">
                {dish.name}
              </h4>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Modal de imagen */}
    <Dialog open={!!selectedImage} onOpenChange={closeModal}>
      <DialogContent className="max-w-full sm:max-w-3xl">
        <DialogHeader>
          <DialogTitle>Image Preview</DialogTitle>
          <DialogDescription>
            Click outside or use the close button to exit.
          </DialogDescription>
        </DialogHeader>
        {selectedImage && (
          <div className="relative w-full h-[200px] sm:h-[400px]">
            <Image
              src={selectedImage}
              alt="Selected dish"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        )}
       <Button
  onClick={closeModal}
  className="absolute top-2 right-2 bg-transparent hover:bg-white hover:text-black text-white transition-colors duration-300"
  variant="ghost"
  size="icon"
>
  <X className="h-4 w-4" />
  <span className="sr-only">Close</span>
</Button>

      </DialogContent>
    </Dialog>
  </section>
  );
}
