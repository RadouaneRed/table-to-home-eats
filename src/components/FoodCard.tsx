
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
      <div className="p-4 flex flex-col flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-lg">{name}</h3>
          <span className="font-semibold text-brand-500">${price.toFixed(2)}</span>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-grow">{description}</p>
        <Button 
          onClick={(e) => {
            e.preventDefault();
            onAddToCart();
          }} 
          className="w-full bg-brand-500 hover:bg-brand-600 gap-2"
        >
          <Plus className="h-4 w-4" /> Add to cart
        </Button>
      </div>
    </div>
  );
};

export default FoodCard;
