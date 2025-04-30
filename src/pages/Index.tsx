
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import QRCodeSection from "@/components/QRCodeSection";
import FilterSection from "@/components/FilterSection";
import RestaurantsList from "@/components/RestaurantsList";
import FeaturedSection from "@/components/sections/FeaturedSection";
import TableOrderPromotion from "@/components/sections/TableOrderPromotion";
import Footer from "@/components/Footer";
import { restaurants, featuredDishes } from "@/data/mockData";

const Index = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  return (
    <div className="bg-gray-50 pb-20">
      <Navbar />
      <Hero />
      
      <div className="container mx-auto px-0 py-4">
        <QRCodeSection />
        <FilterSection 
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
        />
        <RestaurantsList />
        <FeaturedSection 
          restaurants={restaurants}
          featuredDishes={featuredDishes}
          selectedCategory={selectedCategory}
        />
        <TableOrderPromotion />
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;
