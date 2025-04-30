
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

interface FoodCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  onAddToCart: () => void;
}

const FoodCard = ({
  id,
  name,
  description,
  price,
  image,
  onAddToCart,
}: FoodCardProps) => {
  return (
    <div className="food-card h-full flex flex-col rounded-lg overflow-hidden shadow-sm border border-gray-100 bg-white">
      <div className="relative">
        <img
          src={image}
          alt={name}
          className="h-24 w-full object-cover"
        />
        <div className="absolute top-1 right-1 bg-white rounded-full p-0.5 shadow-sm">
          <Button 
            onClick={(e) => {
              e.preventDefault();
              onAddToCart();
            }} 
            className="h-6 w-6 p-0 bg-brand-500 hover:bg-brand-600 rounded-full"
            aria-label="Add to cart"
          >
            <Plus className="h-3 w-3" />
          </Button>
        </div>
      </div>
      <div className="p-2 flex flex-col flex-grow">
        <h3 className="font-medium text-xs line-clamp-1">{name}</h3>
        <p className="text-gray-600 text-[10px] line-clamp-1">{description}</p>
        <span className="font-medium text-brand-500 text-xs mt-1">${price.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default FoodCard;
