
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import RestaurantCard from "@/components/RestaurantCard";
import FoodCard from "@/components/FoodCard";
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
    deliveryTime: "25-35 min",
    distance: "1.2 mi"
  },
  {
    id: "2",
    name: "Burger Heaven",
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9",
    cuisine: "American",
    rating: 4.5,
    deliveryTime: "15-25 min",
    distance: "0.8 mi"
  },
  {
    id: "3",
    name: "Sushi Paradise",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c",
    cuisine: "Japanese",
    rating: 4.8,
    deliveryTime: "30-40 min",
    distance: "1.5 mi"
  },
  {
    id: "4",
    name: "Taco Town",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
    cuisine: "Mexican",
    rating: 4.4,
    deliveryTime: "20-30 min",
    distance: "1.0 mi"
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
  }
];

const Index = () => {
  const handleAddToCart = (itemName: string) => {
    toast.success(`Added ${itemName} to cart`);
  };

  return (
    <div>
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <h2 className="text-3xl font-display font-bold mb-8">Popular Nearby</h2>
        
        <Tabs defaultValue="restaurants" className="mb-12">
          <TabsList className="mb-6">
            <TabsTrigger value="restaurants">Restaurants</TabsTrigger>
            <TabsTrigger value="featured">Featured Dishes</TabsTrigger>
          </TabsList>
          
          <TabsContent value="restaurants" className="animate-enter">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {restaurants.map((restaurant) => (
                <RestaurantCard key={restaurant.id} {...restaurant} />
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="featured" className="animate-enter">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
        
        <div className="bg-gray-50 rounded-2xl p-8 mb-12">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-display font-bold mb-4">Order to Your Table</h2>
              <p className="text-gray-700 mb-6">
                Skip the wait and order directly to your table. Simply scan the QR code at your table
                and enjoy a seamless dining experience.
              </p>
              <button className="button-primary">Learn More</button>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
                alt="Table service" 
                className="rounded-xl shadow-lg w-full h-64 object-cover"
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mb-8">
          <h2 className="text-3xl font-display font-bold mb-4">How It Works</h2>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Table2Home makes it easy to order food for delivery or directly to your table
            at participating restaurants.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">1</span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Choose Your Restaurant</h3>
            <p className="text-gray-600">Browse local restaurants and menus to find what you're craving</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">2</span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Select Delivery or Table</h3>
            <p className="text-gray-600">Choose between home delivery or ordering to your table at the restaurant</p>
          </div>
          
          <div className="text-center p-6">
            <div className="w-16 h-16 bg-brand-100 text-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-xl font-bold">3</span>
            </div>
            <h3 className="font-semibold text-xl mb-2">Enjoy Your Meal</h3>
            <p className="text-gray-600">Sit back and relax as your food arrives at your doorstep or table</p>
          </div>
        </div>
      </div>
      
      <footer className="bg-navy-800 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-display font-bold mb-4">Table2Home</h3>
              <p className="text-gray-300">
                Connecting restaurants with customers for the perfect dining experience,
                whether at home or in the restaurant.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Restaurants</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-300">support@table2home.com</li>
                <li className="text-gray-300">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Table2Home. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
