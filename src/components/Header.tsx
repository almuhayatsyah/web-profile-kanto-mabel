import React, { useState } from "react";
import {
  Menu,
  X,
  Home,
  Users,
  Package,
  Phone,
  Award,
  Building2,
} from "lucide-react";
import logo from "../asset/img/logo.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "#home", icon: Home },
    { name: "Tentang Kami", href: "#about", icon: Users },
    { name: "Merek Unggulan", href: "#brands", icon: Award },
    { name: "Partnership", href: "#partnership", icon: Building2 },
    { name: "Didukung Oleh", href: "#supported", icon: Package },
    { name: "Produk", href: "#products", icon: Package },
    { name: "Kontak", href: "#contact", icon: Phone },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center mr-4">
              <img
                src={logo}
                alt="Logo"
                className="w-14 h-14 md:w-20 md:h-20 object-contain"
              />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold text-red-600">
                Kanto Mebel
              </h1>
              <p className="text-sm text-gray-600">Furniture Berkualitas</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="flex items-center space-x-2 text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </a>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
