
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import OrderTypeSelector from "@/components/OrderTypeSelector";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Clock, MapPin, Star, Utensils } from "lucide-react";
import { toast } from "sonner";

// Mock restaurant data
const restaurant = {
  id: "1",
  name: "Italiano Delight",
  image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5",
  cuisine: "Italian",
  rating: 4.7,
  deliveryTime: "25-35 min",
  distance: "1.2 mi",
  address: "123 Main St, Anytown, USA",
  description: "Authentic Italian cuisine made with fresh ingredients and traditional recipes."
};

// Mock menu data
const menuCategories = [
  {
    id: "appetizers",
    name: "Appetizers",
    items: [
      {
        id: "1",
        name: "Bruschetta",
        description: "Toasted bread topped with tomatoes, fresh basil, and garlic",
        price: 8.99,
        image: "https://images.unsplash.com/photo-1506280754576-f6fa8a873550"
      },
      {
        id: "2",
        name: "Caprese Salad",
        description: "Fresh mozzarella, tomatoes, and basil drizzled with olive oil",
        price: 9.99,
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804"
      }
    ]
  },
  {
    id: "pasta",
    name: "Pasta",
    items: [
      {
        id: "3",
        name: "Spaghetti Carbonara",
        description: "Spaghetti with pancetta, eggs, Pecorino Romano cheese, and black pepper",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1612874742237-6526221588e3"
      },
      {
        id: "4",
        name: "Fettuccine Alfredo",
        description: "Fettuccine pasta in a rich, creamy Parmesan cheese sauce",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1645112411341-6c4fd023882a"
      }
    ]
  },
  {
    id: "pizza",
    name: "Pizza",
    items: [
      {
        id: "5",
        name: "Margherita Pizza",
        description: "Classic pizza with tomato sauce, mozzarella, and basil",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002"
      },
      {
        id: "6",
        name: "Pepperoni Pizza",
        description: "Pizza topped with tomato sauce, mozzarella, and pepperoni",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1628840042765-356cda07504e"
      }
    ]
  },
  {
    id: "desserts",
    name: "Desserts",
    items: [
      {
        id: "7",
        name: "Tiramisu",
        description: "Coffee-flavored Italian dessert made with ladyfingers and mascarpone cheese",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9"
      },
      {
        id: "8",
        name: "Cannoli",
        description: "Italian pastry desserts filled with a sweet, creamy filling",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
      }
    ]
  }
];

const RestaurantDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [orderType, setOrderType] = useState<"delivery" | "table">("delivery");
  const [activeCategory, setActiveCategory] = useState(menuCategories[0].id);

  const handleAddToCart = (itemName: string) => {
    toast.success(`Added ${itemName} to cart`);
  };
  
  return (
    <div>
      <Navbar />
      
      <div className="relative h-64 md:h-80">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="container mx-auto">
            <div className="flex items-center gap-2">
              <span className="px-2 py-1 bg-brand-500 text-white text-xs font-semibold rounded">
                {restaurant.cuisine}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white mt-2">{restaurant.name}</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-6">
        <div className="flex flex-wrap items-center gap-4 text-sm text-gray-700 mb-6">
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{restaurant.rating}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-1" />
            <span>{restaurant.distance}</span>
          </div>
          <div className="flex items-center">
            <Utensils className="h-4 w-4 mr-1" />
            <span>{restaurant.cuisine}</span>
          </div>
        </div>
        
        <p className="text-gray-700 mb-8">{restaurant.description}</p>
        
        <div className="bg-white rounded-xl shadow-sm border p-4 mb-8">
          <h3 className="font-semibold mb-4">How would you like to order?</h3>
          <OrderTypeSelector onChange={setOrderType} />
        </div>
        
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6">Menu</h2>
          
          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="mb-6 overflow-x-auto flex-nowrap w-full justify-start">
              {menuCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="animate-enter">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((item) => (
                    <FoodCard 
                      key={item.id} 
                      {...item} 
                      onAddToCart={() => handleAddToCart(item.name)}
                    />
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetail;
