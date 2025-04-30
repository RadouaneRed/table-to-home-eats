
import React from "react";

interface BrandProps {
  logo: string;
  name: string;
}

const BrandCard = ({ logo, name }: BrandProps) => {
  return (
    <div className="min-w-[150px] flex flex-col">
      <div className="bg-white rounded-lg shadow-sm overflow-hidden mb-2 aspect-square flex items-center justify-center p-4">
        <img src={logo} alt={name} className="w-full h-auto object-contain" />
      </div>
      <div className="bg-[#FFD166] text-[#333333] font-bold text-sm rounded px-2 py-1 inline-flex items-center w-fit">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
          <path d="M18 8C18 12.4183 14.4183 16 10 16C5.58172 16 2 12.4183 2 8C2 3.58172 5.58172 0 10 0C14.4183 0 18 3.58172 18 8Z" fill="currentColor"/>
          <path d="M10.5858 7.41421C10.9613 7.03969 10.9613 6.44031 10.5858 6.06579C10.2103 5.69126 9.61094 5.69126 9.23541 6.06579L6.23541 9.06579C6.07016 9.23104 5.97704 9.45964 5.97704 9.69799C5.97704 9.93634 6.07016 10.1649 6.23541 10.3302L9.23541 13.3302C9.61094 13.7057 10.2103 13.7057 10.5858 13.3302C10.9613 12.9547 10.9613 12.3553 10.5858 11.9798L8.36396 9.75799L10.5858 7.53614C10.5858 7.53614 10.5858 7.41421 10.5858 7.41421Z" fill="white"/>
        </svg>
        Gratuit
      </div>
    </div>
  );
};

const PopularBrands = () => {
  const brands = [
    {
      name: "McDonald's",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/McDonalds-Logo.png"
    },
    {
      name: "KFC",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/KFC-Logo.png"
    },
    {
      name: "Burger King",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Burger-King-Logo.png"
    },
    {
      name: "Taco Bell",
      logo: "https://logos-world.net/wp-content/uploads/2020/04/Taco-Bell-Logo.png"
    }
  ];
  
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-4 px-3">Marques populaires</h2>
      <div className="overflow-x-auto no-scrollbar">
        <div className="flex gap-4 px-3 pb-2 min-w-max">
          {brands.map((brand, index) => (
            <BrandCard key={index} logo={brand.logo} name={brand.name} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBrands;
