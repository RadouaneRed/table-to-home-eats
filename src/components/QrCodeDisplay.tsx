
import { QrCode } from "lucide-react";

interface QrCodeDisplayProps {
  tableNumber: string;
  qrValue: string;
}

const QrCodeDisplay = ({ tableNumber, qrValue }: QrCodeDisplayProps) => {
  return (
    <div className="bg-navy-800 rounded-lg overflow-hidden">
      <div className="flex items-center p-3">
        <div className="bg-white/10 rounded-lg p-3 mr-3">
          <QrCode className="h-10 w-10 text-white" />
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
