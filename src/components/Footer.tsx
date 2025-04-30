
const Footer = () => {
  return (
    <footer className="bg-navy-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <h3 className="text-base font-bold mb-2">Table2Home</h3>
            <p className="text-gray-300 text-xs">
              Connecting restaurants with customers for the perfect dining experience.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-xs">Quick Links</h4>
            <ul className="space-y-1 text-[10px]">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Restaurants</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-xs">Legal</h4>
            <ul className="space-y-1 text-[10px]">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-2 text-xs">Contact</h4>
            <ul className="space-y-1 text-[10px]">
              <li className="text-gray-300">support@table2home.com</li>
              <li className="text-gray-300">+1 (555) 123-4567</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-4 pt-4 text-center text-gray-400 text-[10px]">
          <p>&copy; {new Date().getFullYear()} Table2Home. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
