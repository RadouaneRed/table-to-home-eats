
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
      <div className="restaurant-card group-hover:translate-y-[-4px] transition-all">
        <div className="relative">
          <img
            src={image}
            alt={name}
            className="restaurant-card-image"
          />
          <div className="absolute top-3 right-3 bg-white rounded-full px-2 py-1 flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm font-medium">{rating}</span>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-semibold text-lg">{name}</h3>
          <p className="text-gray-600 text-sm mb-2">{cuisine}</p>
          <div className="flex items-center justify-between text-sm text-gray-500">
            <div className="flex items-center">
              <Clock className="h-4 w-4 mr-1" />
              <span>{deliveryTime}</span>
            </div>
            <div className="flex items-center">
              <MapPin className="h-4 w-4 mr-1" />
              <span>{distance}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
