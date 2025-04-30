
import { QrCode } from "lucide-react";

interface QrCodeDisplayProps {
  tableNumber: string;
  qrValue: string;
}

const QrCodeDisplay = ({ tableNumber, qrValue }: QrCodeDisplayProps) => {
  // Generate a simple QR code URL using an external service
  // Note: In a production app, you might want to use a QR code library that generates codes client-side
  const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(qrValue)}`;
  
  return (
    <div className="bg-navy-800 rounded-lg overflow-hidden">
      <div className="flex items-center p-3">
        <div className="bg-white/10 rounded-lg p-2 mr-3">
          <img src={qrCodeUrl} alt="QR Code" className="h-14 w-14" />
        </div>
        <div className="flex-1">
          <h3 className="text-base font-semibold text-white mb-1">Scan to order at table #{tableNumber}</h3>
          <p className="text-xs text-gray-300">
            Scan the QR code on your table for quick ordering
          </p>
        </div>
      </div>
    </div>
  );
};

export default QrCodeDisplay;
