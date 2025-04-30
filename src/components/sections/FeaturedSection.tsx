
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import RestaurantCard from "@/components/RestaurantCard";
import FoodCard from "@/components/FoodCard";
import { toast } from "sonner";

interface FeaturedSectionProps {
  restaurants: Array<{
    id: string;
    name: string;
    image: string;
    cuisine: string;
    rating: number;
    deliveryTime: string;
    distance: string;
  }>;
  featuredDishes: Array<{
    id: string;
    name: string;
    description: string;
    price: number;
    image: string;
  }>;
  selectedCategory: string | null;
}

const FeaturedSection = ({ restaurants, featuredDishes, selectedCategory }: FeaturedSectionProps) => {
  const handleAddToCart = (itemName: string) => {
    toast.success(`Added ${itemName} to cart`);
  };

  // Filter items based on selected category
  const filteredDishes = selectedCategory ? 
    featuredDishes.filter(dish => {
      switch(selectedCategory) {
        case 'pizza': return dish.name.toLowerCase().includes('pizza');
        case 'burgers': return dish.name.toLowerCase().includes('burger');
        case 'sandwiches': return dish.name.toLowerCase().includes('sandwich');
        case 'chicken': return dish.name.toLowerCase().includes('chicken');
        case 'topRated': return true; // In a real app, we would filter by rating
        default: return true;
      }
    }) : 
    featuredDishes;

  return (
    <div className="px-3">
      <h2 className="text-2xl font-bold mb-4">Popular Nearby</h2>
      
      <Tabs defaultValue="restaurants" className="mb-8">
        <TabsList className="mb-4 bg-gray-200 w-full">
          <TabsTrigger 
            value="restaurants"
            className="flex-1 data-[state=active]:bg-brand-500 data-[state=active]:text-white"
          >
            Restaurants
          </TabsTrigger>
          <TabsTrigger 
            value="featured"
            className="flex-1 data-[state=active]:bg-brand-500 data-[state=active]:text-white"
          >
            Featured Dishes
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="restaurants" className="animate-enter">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {restaurants.map((restaurant) => (
              <RestaurantCard key={restaurant.id} {...restaurant} />
            ))}
          </div>
        </TabsContent>
        
        <TabsContent value="featured" className="animate-enter">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2">
            {filteredDishes.map((dish) => (
              <FoodCard 
                key={dish.id}
                {...dish}
                onAddToCart={() => handleAddToCart(dish.name)}
              />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FeaturedSection;
