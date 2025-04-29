
import { useState } from "react";
import Navbar from "@/components/Navbar";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import OrderTypeSelector from "@/components/OrderTypeSelector";

// Mock cart items
const initialCartItems = [
  {
    id: "1",
    name: "Margherita Pizza",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
    quantity: 1,
    restaurant: "Italiano Delight"
  },
  {
    id: "3",
    name: "Spaghetti Carbonara",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1612874742237-6526221588e3",
    quantity: 2,
    restaurant: "Italiano Delight"
  }
];

const Cart = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [orderType, setOrderType] = useState<"delivery" | "table">("delivery");
  
  const updateQuantity = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };
  
  const removeItem = (id: string) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };
  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  
  const deliveryFee = 2.99;
  const serviceFee = subtotal * 0.05;
  const total = subtotal + deliveryFee + serviceFee;
  
  return (
    <div>
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
        
        {cartItems.length === 0 ? (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">Your cart is empty</h2>
            <p className="text-gray-600 mb-6">Add some delicious items to your cart</p>
            <Button asChild>
              <a href="/">Browse Restaurants</a>
            </Button>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-sm border p-4 mb-6">
                <h3 className="font-semibold mb-4">How would you like to order?</h3>
                <OrderTypeSelector onChange={setOrderType} />
              </div>
              
              <div className="bg-white rounded-xl shadow-sm border overflow-hidden">
                <div className="p-4 border-b">
                  <h2 className="font-semibold">Items from {cartItems[0]?.restaurant}</h2>
                </div>
                
                {cartItems.map((item) => (
                  <div key={item.id} className="flex border-b last:border-0 p-4">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-20 h-20 object-cover rounded-md"
                    />
                    <div className="ml-4 flex-grow">
                      <h3 className="font-medium">{item.name}</h3>
                      <div className="flex justify-between items-center mt-2">
                        <div className="flex items-center border rounded-md">
                          <button
                            className="px-2 py-1"
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          >
                            <Minus className="h-4 w-4" />
                          </button>
                          <span className="px-2">{item.quantity}</span>
                          <button
                            className="px-2 py-1"
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </button>
                        </div>
                        <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                    <button
                      className="ml-2 text-gray-400 hover:text-red-500"
                      onClick={() => removeItem(item.id)}
                    >
                      <Trash2 className="h-5 w-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="lg:w-1/3">
              <div className="bg-white rounded-xl shadow-sm border p-6 sticky top-24">
                <h2 className="text-lg font-semibold mb-4">Order Summary</h2>
                <div className="space-y-3 mb-4">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Delivery Fee</span>
                    <span>${deliveryFee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service Fee</span>
                    <span>${serviceFee.toFixed(2)}</span>
                  </div>
                  <div className="border-t pt-3 font-semibold flex justify-between">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
                
                <Button className="w-full bg-brand-500 hover:bg-brand-600">
                  Proceed to Checkout
                </Button>
                
                <div className="mt-4 text-center text-sm text-gray-500">
                  By placing your order, you agree to our Terms of Service and Privacy Policy
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
