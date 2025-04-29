
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
    <div className="food-card h-full flex flex-col">
      <img
        src={image}
        alt={name}
        className="food-card-image"
      />
      <div className="p-2 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-1">
          <h3 className="font-medium text-sm line-clamp-1">{name}</h3>
          <span className="font-medium text-brand-500 text-sm">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-xs mb-2 line-clamp-2 flex-grow">{description}</p>
        <Button 
          onClick={(e) => {
            e.preventDefault();
            onAddToCart();
          }} 
          className="w-full bg-brand-500 hover:bg-brand-600 text-xs h-8 gap-1"
        >
          <Plus className="h-3 w-3" /> Add
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
