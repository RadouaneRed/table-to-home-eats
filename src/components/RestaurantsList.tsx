
import RestaurantCard from "@/components/RestaurantCard";
import { restaurants } from "@/data/mockData";

const RestaurantsList = () => {
  return (
    <div className="py-4">
      <h2 className="text-2xl font-bold mb-4 px-3">Restaurants</h2>
      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-2 px-3">
        {restaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} {...restaurant} />
        ))}
      </div>
    </div>
  );
};

export default RestaurantsList;
