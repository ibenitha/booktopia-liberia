import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

export const MainNav = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold text-forest-800">Booktopia</span>
          <span className="text-forest-600">Liberia</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-sm font-medium hover:text-forest-600 transition-colors">
            Home
          </Link>
          <Link to="/experiences" className="text-sm font-medium hover:text-forest-600 transition-colors">
            Experiences
          </Link>
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4 text-forest-600" />
            <span className="text-sm">Monrovia, Liberia</span>
          </div>
          <div className="flex items-center space-x-1">
            <Phone className="h-4 w-4 text-forest-600" />
            <span className="text-sm">+231 123 456 789</span>
          </div>
          <Button>Book Now</Button>
        </nav>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <div className="flex flex-col space-y-4 mt-4">
              <Link to="/" className="text-sm font-medium hover:text-forest-600 transition-colors">
                Home
              </Link>
              <Link to="/experiences" className="text-sm font-medium hover:text-forest-600 transition-colors">
                Experiences
              </Link>
              <div className="flex items-center space-x-1">
                <MapPin className="h-4 w-4 text-forest-600" />
                <span className="text-sm">Monrovia, Liberia</span>
              </div>
              <div className="flex items-center space-x-1">
                <Phone className="h-4 w-4 text-forest-600" />
                <span className="text-sm">+231 123 456 789</span>
              </div>
              <Button className="w-full">Book Now</Button>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};