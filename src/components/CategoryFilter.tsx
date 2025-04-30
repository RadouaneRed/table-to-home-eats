
import React from "react";
import { Badge } from "@/components/ui/badge";
import { Percent, Sandwich, Drumstick, Pizza, Star } from "lucide-react";

interface CategoryItemProps {
  icon: React.ReactNode;
  label: string;
  isActive?: boolean;
  onClick: () => void;
}

const CategoryItem = ({ icon, label, isActive = false, onClick }: CategoryItemProps) => {
  return (
    <div 
      className={`flex flex-col items-center gap-1 cursor-pointer transition-all ${
        isActive ? "scale-110" : "hover:scale-105"
      }`}
      onClick={onClick}
    >
      <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
        isActive ? "bg-brand-500" : "bg-gray-100"
      }`}>
        <div className={`${isActive ? "text-white" : "text-gray-700"}`}>
          {icon}
        </div>
      </div>
      <span className="text-xs font-medium">{label}</span>
    </div>
  );
};

interface CategoryFilterProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const CategoryFilter = ({ selectedCategory, onSelectCategory }: CategoryFilterProps) => {
  const categories = [
    { id: "promotions", label: "Promotions", icon: <Percent size={24} /> },
    { id: "burgers", label: "Burgers", icon: <Sandwich size={24} /> },
    { id: "sandwiches", label: "Sandwiches", icon: <Sandwich size={24} /> },
    { id: "chicken", label: "Poulet", icon: <Drumstick size={24} /> },
    { id: "pizza", label: "Pizza", icon: <Pizza size={24} /> },
    { id: "topRated", label: "Les mieux notés", icon: <Star size={24} /> }
  ];
  
  return (
    <div className="w-full overflow-x-auto pb-3 no-scrollbar">
      <div className="flex gap-6 px-3 min-w-max">
        {categories.map((category) => (
          <CategoryItem
            key={category.id}
            icon={category.icon}
            label={category.label}
            isActive={selectedCategory === category.id}
            onClick={() => {
              if (selectedCategory === category.id) {
                onSelectCategory(null);
              } else {
                onSelectCategory(category.id);
              }
            }}
          />
        ))}
      </div>
      
      <div className="flex gap-2 mt-4 px-3 overflow-x-auto no-scrollbar">
        <Badge 
          variant="outline" 
          className="cursor-pointer flex items-center gap-1 px-3 py-2 rounded-full border-gray-300"
        >
          Type de plat
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
            <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
          </svg>
        </Badge>
        
        <Badge 
          variant="outline" 
          className="cursor-pointer flex items-center gap-1 px-3 py-2 rounded-full border-gray-300"
        >
          Trier par
          <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
            <path d="M4 6H11L7.5 10.5L4 6Z" fill="currentColor"></path>
          </svg>
        </Badge>
        
        <Badge 
          variant="outline" 
          className="cursor-pointer flex items-center gap-1 px-3 py-2 rounded-full border-gray-300"
        >
          <Star size={14} className="mr-1" />
          Les mieux notés
        </Badge>
      </div>
    </div>
  );
};

export default CategoryFilter;
