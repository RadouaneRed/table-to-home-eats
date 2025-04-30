
import { useState } from "react";
import CategoryFilter from "@/components/CategoryFilter";

interface FilterSectionProps {
  selectedCategory: string | null;
  onSelectCategory: (category: string | null) => void;
}

const FilterSection = ({ selectedCategory, onSelectCategory }: FilterSectionProps) => {
  return (
    <div className="sticky top-0 z-10 bg-gray-50 pb-2 pt-2">
      <CategoryFilter 
        selectedCategory={selectedCategory}
        onSelectCategory={onSelectCategory}
      />
    </div>
  );
};

export default FilterSection;
