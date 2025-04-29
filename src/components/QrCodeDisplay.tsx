
import { QrCode } from "lucide-react";

interface QrCodeDisplayProps {
  tableNumber: string;
  qrValue: string;
}

const QrCodeDisplay = ({ tableNumber, qrValue }: QrCodeDisplayProps) => {
  return (
    <div className="qr-section">
      <div className="flex flex-col items-center justify-center">
        <QrCode className="h-16 w-16 mb-2" />
        <div className="text-center">
          <p className="text-sm font-medium">Scan to order at table</p>
          <p className="text-xs text-gray-300">Table #{tableNumber}</p>
        </div>
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-semibold mb-1">Skip the wait!</h3>
        <p className="text-sm text-gray-300">
          Scan this QR code to order directly to your table. No need to wait for a server.
        </p>
      </div>
    </div>
  );
};

export default QrCodeDisplay;
