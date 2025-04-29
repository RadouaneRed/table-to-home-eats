
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RestaurantCard from "@/components/RestaurantCard";
import FoodCard from "@/components/FoodCard";
import QrCodeDisplay from "@/components/QrCodeDisplay";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";

// Mock data for restaurants
const restaurants = [
  {
    id: "1",
    name: "Italiano Delight",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
    cuisine: "Italian",
    rating: 4.7,
    deliveryTime: "25-35m",
    distance: "1.2mi"
  },
  {
    id: "2",
    name: "Burger Heaven",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "15-25m",
    distance: "0.8mi"
  },
  {
    id: "3",
    name: "Sushi Paradise",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "30-40m",
    distance: "1.5mi"
  },
  {
    id: "4",
    name: "Taco Town",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
    cuisine: "Mexican",
    rating: 4.4,
    deliveryTime: "20-30m",
    distance: "1.0mi"
  },
  {
    id: "5",
    name: "Greek Taverna",
    image: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092",
    cuisine: "Greek",
    rating: 4.6,
    deliveryTime: "25-35m",
    distance: "1.4mi"
  },
  {
    id: "6",
    name: "Spice of India",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356cf4",
    cuisine: "Indian",
    rating: 4.3,
    deliveryTime: "25-40m",
    distance: "2.1mi"
  },
  {
    id: "7",
    name: "Pho House",
    image: "https://images.unsplash.com/photo-1576577445504-6af96477db52",
    cuisine: "Vietnamese",
    rating: 4.5,
    deliveryTime: "20-30m",
    distance: "0.9mi"
  },
  {
    id: "8",
    name: "Steakhouse Grill",
    image: "https://images.unsplash.com/photo-1579366948929-44eb6ace46ba",
    cuisine: "American",
    rating: 4.9,
    deliveryTime: "30-45m",
    distance: "1.7mi"
  },
  {
    id: "9",
    name: "Thai Spice",
    image: "https://images.unsplash.com/photo-1562565652-a0d8f0c59eb4",
    cuisine: "Thai",
    rating: 4.4,
    deliveryTime: "25-35m",
    distance: "1.3mi"
  },
  {
    id: "10",
    name: "Seafood Bay",
    image: "https://images.unsplash.com/photo-1579631542761-3212635bbd36",
    cuisine: "Seafood",
    rating: 4.7,
    deliveryTime: "25-40m",
    distance: "1.8mi"
  }
];

// Mock data for featured dishes
const featuredDishes = [
  {
    id: "1",
    name: "Margherita Pizza",
    description: "Classic pizza with tomato sauce, mozzarella, and basil",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
  },
  {
    id: "2",
    name: "Beef Burger",
    description: "Juicy beef patty with cheese, lettuce, and special sauce",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd"
  },
  {
    id: "3",
    name: "Salmon Sushi Roll",
    description: "Fresh salmon with avocado and cucumber in sushi rice",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351"
  },
  {
    id: "4",
    name: "Chicken Alfredo",
    description: "Fettuccine pasta with creamy alfredo sauce and grilled chicken",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1645112411341-6c4fd023882a"
  },
  {
    id: "5",
    name: "BBQ Ribs",
    description: "Slow-cooked ribs with tangy BBQ sauce and coleslaw",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947"
  },
  {
    id: "6",
    name: "Veggie Bowl",
    description: "Fresh mixed vegetables, quinoa, and tahini dressing",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd"
  },
  {
    id: "7",
    name: "Spicy Ramen",
    description: "Rich broth with noodles, soft-boiled egg, and sliced pork",
    price: 13.49,
    image: "https://images.unsplash.com/photo-1623341214825-9f4f963727da"
  },
  {
    id: "8",
    name: "Greek Salad",
    description: "Cucumber, tomato, olives, and feta cheese with olive oil",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1551248429-40975aa4de74"
  },
  {
    id: "9",
    name: "Chocolate Lava Cake",
    description: "Warm chocolate cake with molten center and vanilla ice cream",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c"
  },
  {
    id: "10",
    name: "Fish Tacos",
    description: "Battered fish with cabbage slaw and lime crema",
    price: 12.49,
    image: "https://images.unsplash.com/photo-1599974579688-8dbdd335c77f"
  },
  {
    id: "11",
    name: "Caprese Sandwich",
    description: "Fresh mozzarella, tomato, and basil on ciabatta bread",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1627308595229-7830a5c91f9f"
  },
  {
    id: "12",
    name: "Pad Thai",
    description: "Rice noodles with tofu, bean sprouts, and crushed peanuts",
    price: 11.49,
    image: "https://images.unsplash.com/photo-1637806930600-371ca4c12411"
  }
];

const Index = () => {
  const handleAddToCart = (itemName: string) => {
    toast.success(`Added ${itemName} to cart`);
  };

  return (
    <div className="bg-gray-50">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-3 py-8">
        <div className="mb-6">
          <QrCodeDisplay tableNumber="23" qrValue="table-23" />
        </div>
        
        <h2 className="text-2xl font-display font-bold mb-4">Popular Nearby</h2>
        
        <Tabs defaultValue="restaurants" className="mb-8">
          <TabsList className="mb-4 bg-gray-200">
            <TabsTrigger 
              value="restaurants"
              className="data-[state=active]:bg-brand-500 data-[state=active]:text-white"
            >
              Restaurants
            </TabsTrigger>
            <TabsTrigger 
              value="featured"
              className="data-[state=active]:bg-brand-500 data-[state=active]:text-white"
            >
              Featured Dishes
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurants" className="animate-enter">
            <div className="compact-grid">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="animate-enter">
            <div className="compact-grid">
              {featuredDishes.map((dish) => (
                <FoodCard 
                  key={dish.id}
                  {...dish}
                  onAddToCart={() => handleAddToCart(dish.name)}
                />
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <div className="bg-navy-800 rounded-md p-4 mb-8 text-white">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="md:w-1/2">
              <h2 className="text-2xl font-display font-bold mb-3">Order to Your Table</h2>
              <p className="text-gray-300 mb-4 text-sm">
                Skip the wait and order directly to your table. Simply scan the QR code at your table
                and enjoy a seamless dining experience.
              </p>
              <button className="bg-brand-500 hover:bg-brand-600 text-white font-medium py-2 px-4 rounded-md transition-colors text-sm">Learn More</button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Table service" 
                className="rounded-md shadow-md w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mb-6">
          <h2 className="text-2xl font-display font-bold mb-3">How It Works</h2>
          <p className="text-gray-700 max-w-2xl mx-auto text-sm">
            Table2Home makes it easy to order food for delivery or directly to your table
            at participating restaurants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="text-center p-4 bg-white rounded-md shadow-sm">
            <div className="w-12 h-12 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">1</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">Choose Restaurant</h3>
            <p className="text-gray-600 text-sm">Browse restaurants and menus to find what you're craving</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-md shadow-sm">
            <div className="w-12 h-12 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">2</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">Select Delivery Type</h3>
            <p className="text-gray-600 text-sm">Choose between home delivery or ordering to your table</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-md shadow-sm">
            <div className="w-12 h-12 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-3">
              <span className="text-lg font-bold">3</span>
            </div>
            <h3 className="font-semibold text-lg mb-1">Enjoy Your Meal</h3>
            <p className="text-gray-600 text-sm">Sit back and relax as your food arrives quickly</p>
          </div>
        </div>
      </div>
      
      <footer className="bg-navy-800 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-lg font-display font-bold mb-3">Table2Home</h3>
              <p className="text-gray-300 text-sm">
                Connecting restaurants with customers for the perfect dining experience.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-sm">Quick Links</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Restaurants</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-sm">Legal</h4>
              <ul className="space-y-1 text-xs">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-2 text-sm">Contact</h4>
              <ul className="space-y-1 text-xs">
                <li className="text-gray-300">support@table2home.com</li>
                <li className="text-gray-300">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-6 pt-4 text-center text-gray-400 text-xs">
            <p>&copy; {new Date().getFullYear()} Table2Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
