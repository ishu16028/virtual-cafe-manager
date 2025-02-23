
import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const menuItems = [
  {
    id: 1,
    name: "Cappuccino",
    description: "Espresso with steamed milk foam",
    price: 4.50,
    category: "Coffee",
    preparationTime: 5,
  },
  {
    id: 2,
    name: "Croissant",
    description: "Buttery, flaky pastry",
    price: 3.50,
    category: "Pastries",
    preparationTime: 2,
  },
  // Add more items as needed
];

const CustomerView = () => {
  const [cart, setCart] = useState<any[]>([]);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  return (
    <div className="max-w-7xl mx-auto pt-16">
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-cafe-800 mb-2">Our Menu</h1>
        <p className="text-gray-600">Fresh and delicious, made just for you</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-cafe-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                </div>
                <span className="text-cafe-600 font-semibold">${item.price.toFixed(2)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  Prep time: {item.preparationTime} mins
                </span>
                <Button
                  onClick={() => addToCart(item)}
                  className="bg-cafe-600 hover:bg-cafe-700 text-white"
                >
                  Add to Order
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CustomerView;
