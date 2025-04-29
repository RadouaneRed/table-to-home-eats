
import { useState } from "react";
import { Delivery, Store } from "lucide-react";
import { cn } from "@/lib/utils";

interface OrderTypeSelectorProps {
  onChange: (type: "delivery" | "table") => void;
}

const OrderTypeSelector = ({ onChange }: OrderTypeSelectorProps) => {
  const [selected, setSelected] = useState<"delivery" | "table">("delivery");

  const handleSelect = (type: "delivery" | "table") => {
    setSelected(type);
    onChange(type);
  };

  return (
    <div className="flex bg-gray-100 rounded-lg p-1">
      <button
        className={cn(
          "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all",
          selected === "delivery"
            ? "bg-white shadow-sm text-brand-500"
            : "text-gray-600 hover:text-gray-900"
        )}
        onClick={() => handleSelect("delivery")}
      >
        <Delivery className="h-5 w-5" />
        <span className="font-medium">Delivery</span>
      </button>
      <button
        className={cn(
          "flex-1 flex items-center justify-center gap-2 py-3 px-4 rounded-md transition-all",
          selected === "table"
            ? "bg-white shadow-sm text-brand-500"
            : "text-gray-600 hover:text-gray-900"
        )}
        onClick={() => handleSelect("table")}
      >
        <Store className="h-5 w-5" />
        <span className="font-medium">Table Order</span>
      </button>
    </div>
  );
};

export default OrderTypeSelector;
