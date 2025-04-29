
import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, Menu, X, Home, Store } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Navbar = () => {
  const [cartItems, setCartItems] = useState(0);
  
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-2xl font-display text-brand-500 font-bold">Table2Home</span>
          </Link>
        </div>
        
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-navy-800 hover:text-brand-500 transition-colors font-medium">
            Home
          </Link>
          <Link to="/restaurants" className="text-navy-800 hover:text-brand-500 transition-colors font-medium">
            Restaurants
          </Link>
          <Link to="/about" className="text-navy-800 hover:text-brand-500 transition-colors font-medium">
            About
          </Link>
        </nav>
        
        <div className="flex items-center gap-4">
          <Link to="/cart" className="relative">
            <ShoppingCart className="h-6 w-6 text-navy-800 hover:text-brand-500 transition-colors" />
            {cartItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {cartItems}
              </span>
            )}
          </Link>
          
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-6 mt-8">
                <Link to="/" className="text-lg font-medium flex items-center gap-2">
                  <Home className="h-5 w-5" />
                  Home
                </Link>
                <Link to="/restaurants" className="text-lg font-medium flex items-center gap-2">
                  <Store className="h-5 w-5" />
                  Restaurants
                </Link>
                <Link to="/about" className="text-lg font-medium flex items-center gap-2">
                  <Store className="h-5 w-5" />
                  About
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
