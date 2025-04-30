
import QrCodeDisplay from "@/components/QrCodeDisplay";

const QRCodeSection = () => {
  return (
    <div className="mb-4 px-3">
      <QrCodeDisplay tableNumber="23" qrValue="table-23" />
    </div>
  );
};

export default QRCodeSection;
