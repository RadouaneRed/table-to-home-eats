
import { useState } from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import OrderTypeSelector from "./OrderTypeSelector";

const Hero = () => {
  const [orderType, setOrderType] = useState<"delivery" | "table">("delivery");
  
  return (
    <div className="relative bg-gradient-to-r from-navy-800 to-navy-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2070')] bg-cover bg-center mix-blend-overlay opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Restaurant Food, <span className="text-brand-400">Delivered</span> to Your Table or Home
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-200">
            Order from your favorite restaurants and have it delivered to your table or doorstep
          </p>
          
          <div className="bg-white p-4 rounded-xl shadow-lg">
            <OrderTypeSelector onChange={setOrderType} />
            
            <div className="mt-4 flex gap-2">
              <div className="flex-grow relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
                <Input 
                  placeholder={orderType === "delivery" ? "Enter your delivery address" : "Enter table number"} 
                  className="pl-10 bg-gray-50 border-gray-200"
                />
              </div>
              <Button className="bg-brand-500 hover:bg-brand-600">
                {orderType === "delivery" ? "Find Food" : "View Menu"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
