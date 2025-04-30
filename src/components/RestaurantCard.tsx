
import { Link } from "react-router-dom";
import { Clock, MapPin, Star } from "lucide-react";

interface RestaurantCardProps {
  id: string;
  name: string;
  image: string;
  cuisine: string;
  rating: number;
  deliveryTime: string;
  distance: string;
}

const RestaurantCard = ({
  id,
  name,
  image,
  cuisine,
  rating,
  deliveryTime,
  distance,
}: RestaurantCardProps) => {
  return (
    <Link to={`/restaurant/${id}`} className="group">
      <div className="restaurant-card group-hover:shadow-md transition-all bg-white border border-gray-100 rounded-lg overflow-hidden">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="h-24 w-full object-cover"
          />
          <div className="absolute top-1 right-1 bg-white rounded-full px-1.5 py-0.5 flex items-center gap-0.5 shadow-sm">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
            <span className="text-xs font-medium">{rating}</span>
          </div>
        </div>
        <div className="p-2">
          <h3 className="font-medium text-xs line-clamp-1">{name}</h3>
          <p className="text-gray-600 text-[10px] mb-1 line-clamp-1">{cuisine}</p>
          <div className="flex items-center justify-between text-[10px] text-gray-500">
            <div className="flex items-center">
              <Clock className="h-2.5 w-2.5 mr-0.5" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-2.5 w-2.5 mr-0.5" />
              <span>{distance}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
