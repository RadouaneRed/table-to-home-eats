
import { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import FoodCard from "@/components/FoodCard";
import OrderTypeSelector from "@/components/OrderTypeSelector";
import QrCodeDisplay from "@/components/QrCodeDisplay";
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
      },
      {
        id: "9",
        name: "Fried Calamari",
        description: "Lightly battered and fried calamari rings with marinara sauce",
        price: 10.99,
        image: "https://images.unsplash.com/photo-1603073163308-9654c3fb70b5"
      },
      {
        id: "10",
        name: "Garlic Bread",
        description: "Toasted Italian bread with garlic butter and herbs",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1589187151906-9c7f11fc3c01"
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
      },
      {
        id: "11",
        name: "Lasagna",
        description: "Layered pasta with ricotta, mozzarella, ground beef, and tomato sauce",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1574894709920-11b28e7367e3"
      },
      {
        id: "12",
        name: "Penne Arrabbiata",
        description: "Penne pasta with spicy tomato sauce and garlic",
        price: 12.99,
        image: "https://images.unsplash.com/photo-1608897013039-887f21d8c804"
      },
      {
        id: "13",
        name: "Linguine with Clams",
        description: "Linguine pasta with fresh clams in white wine garlic sauce",
        price: 16.99,
        image: "https://images.unsplash.com/photo-1563379926898-05f4575a45d8"
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
      },
      {
        id: "14",
        name: "Quattro Formaggi",
        description: "Four cheese pizza with mozzarella, gorgonzola, fontina, and parmesan",
        price: 14.99,
        image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65"
      },
      {
        id: "15",
        name: "Veggie Pizza",
        description: "Pizza with bell peppers, mushrooms, olives, and onions",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38"
      },
      {
        id: "16",
        name: "Hawaiian Pizza",
        description: "Pizza with ham and pineapple",
        price: 13.99,
        image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47"
      },
      {
        id: "17",
        name: "Meat Lovers Pizza",
        description: "Pizza loaded with pepperoni, sausage, bacon, and ground beef",
        price: 15.99,
        image: "https://images.unsplash.com/photo-1588315029754-2dd089d39a1a"
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
        description: "Coffee-flavored Italian dessert with ladyfingers and mascarpone",
        price: 7.99,
        image: "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9"
      },
      {
        id: "8",
        name: "Cannoli",
        description: "Italian pastry desserts filled with a sweet, creamy filling",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307"
      },
      {
        id: "18",
        name: "Panna Cotta",
        description: "Italian custard dessert with berry compote",
        price: 6.99,
        image: "https://images.unsplash.com/photo-1488477181946-6428a0291777"
      },
      {
        id: "19",
        name: "Gelato",
        description: "Italian ice cream in various flavors",
        price: 5.99,
        image: "https://images.unsplash.com/photo-1501443762994-82bd5dace89a"
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
    <div className="bg-gray-50 min-h-screen">
      <Navbar />
      
      <div className="relative h-40 md:h-60">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <div className="container mx-auto">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 bg-brand-500 text-white text-xs font-semibold rounded">
                {restaurant.cuisine}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-white mt-1">{restaurant.name}</h1>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-3 py-4">
        <div className="flex flex-wrap items-center gap-3 text-xs text-gray-700 mb-4">
          <div className="flex items-center">
            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="font-medium">{restaurant.rating}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-3 w-3 mr-1" />
            <span>{restaurant.deliveryTime}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-3 w-3 mr-1" />
            <span>{restaurant.distance}</span>
          </div>
          <div className="flex items-center">
            <Utensils className="h-3 w-3 mr-1" />
            <span>{restaurant.cuisine}</span>
          </div>
        </div>
        
        <p className="text-gray-700 text-sm mb-4">{restaurant.description}</p>
        
        <div className="bg-white rounded-md shadow-sm border border-gray-100 p-3 mb-4">
          <h3 className="font-semibold text-sm mb-2">How would you like to order?</h3>
          <OrderTypeSelector onChange={setOrderType} />
        </div>

        {orderType === "table" && (
          <div className="mb-4">
            <QrCodeDisplay tableNumber="23" qrValue="table-23" />
          </div>
        )}
        
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4">Menu</h2>
          
          <Tabs defaultValue={activeCategory} onValueChange={setActiveCategory}>
            <TabsList className="mb-4 overflow-x-auto flex-nowrap w-full justify-start bg-gray-200">
              {menuCategories.map((category) => (
                <TabsTrigger 
                  key={category.id} 
                  value={category.id}
                  className="text-sm data-[state=active]:bg-brand-500 data-[state=active]:text-white"
                >
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {menuCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="animate-enter">
                <div className="compact-grid">
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
