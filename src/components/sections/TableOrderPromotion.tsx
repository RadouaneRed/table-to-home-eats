
const TableOrderPromotion = () => {
  return (
    <div className="bg-navy-800 mx-3 rounded-lg p-4 mb-8 text-white">
      <div className="flex flex-col md:flex-row items-center gap-6">
        <div className="md:w-1/2">
          <h2 className="text-xl font-bold mb-3">Order to Your Table</h2>
          <p className="text-gray-300 mb-4 text-xs">
            Skip the wait and order directly to your table. Simply scan the QR code at your table
            and enjoy a seamless dining experience.
          </p>
          <button className="bg-brand-500 hover:bg-brand-600 text-white font-medium py-1.5 px-3 rounded-md transition-colors text-xs">Learn More</button>
        </div>
        <div className="md:w-1/2">
          <img 
            src="https://images.unsplash.com/photo-1721322800607-8c38375eef04" 
            alt="Table service" 
            className="rounded-md shadow-md w-full h-32 object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default TableOrderPromotion;
