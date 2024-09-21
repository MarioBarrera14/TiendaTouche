import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { poppins } from "@/config/fonts";

export default function Menu() {
  return (
    <section id="restaurant-menu" className={`py-16 bg-gray-100 ${poppins.className}`}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-600">Menu</h2>
          <hr className="w-16 h-1 mx-auto bg-primary mb-4" />
          <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <MenuSection
            title="Breakfast & Starters"
            items={[
              { name: "Delicious Dish", price: 35, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
            ]}
          />
          <MenuSection
            title="Main Course"
            items={[
              { name: "Delicious Dish", price: 45, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
            ]}
          />
          <MenuSection
            title="Dinner"
            items={[
              { name: "Delicious Dish", price: 45, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 350, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
            ]}
          />
          <MenuSection
            title="Coffee & Drinks"
            items={[
              { name: "Delicious Dish", price: 35, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
              { name: "Delicious Dish", price: 30, description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, duis sed dapibus leo nec ornare diam." },
            ]}
          />
        </div>
      </div>
    </section>
  )
}

function MenuSection({ title, items }: { title: string; items: { name: string; price: number; description: string }[] }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <hr className="mb-6" />
        {items.map((item, index) => (
          <div key={index} className="mb-6 last:mb-0">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <span className="text-lg font-bold">${item.price}</span>
            </div>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </CardContent>
    </Card>
  )
}