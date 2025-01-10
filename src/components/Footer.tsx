import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-forest-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About Us</h3>
            <p className="text-forest-100 text-sm">
              Discover authentic Liberian experiences through our curated selection of tours and activities.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-forest-100 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/experiences" className="text-forest-100 hover:text-white transition-colors">
                  Experiences
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-forest-100 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-forest-100 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2 text-sm">
              <li className="text-forest-100">123 Main Street</li>
              <li className="text-forest-100">Monrovia, Liberia</li>
              <li className="text-forest-100">Phone: +231 123 456 789</li>
              <li className="text-forest-100">Email: info@booktopia.com</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-forest-100 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-100 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-forest-100 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-forest-700 mt-8 pt-8 text-center text-sm text-forest-100">
          <p>&copy; {new Date().getFullYear()} Booktopia Liberia. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};