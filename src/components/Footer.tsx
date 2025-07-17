import React from 'react';
import { Package, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center mr-3">
                <Package className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Kanto Mebel</h3>
                <p className="text-sm text-gray-400">Furniture Berkualitas</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4">
              Menghadirkan furniture berkualitas tinggi dengan desain modern dan 
              harga terjangkau untuk rumah impian Anda.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">Tentang Kami</a></li>
              <li><a href="#brands" className="text-gray-400 hover:text-white transition-colors">Merek Unggulan</a></li>
              <li><a href="#partnership" className="text-gray-400 hover:text-white transition-colors">Partnership</a></li>
              <li><a href="#supported" className="text-gray-400 hover:text-white transition-colors">Didukung Oleh</a></li>
              <li><a href="#products" className="text-gray-400 hover:text-white transition-colors">Produk</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Kontak</a></li>
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori Produk</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ruang Tamu</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Kamar Tidur</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ruang Makan</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Ruang Kerja</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-yellow-500" />
                <span className="text-gray-400">+62 21 1234 5678</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-600" />
                <span className="text-gray-400">info@kantomebel.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-red-600 mt-1" />
                <span className="text-gray-400">
                  Jl. Furniture Raya No. 123<br />
                  Jakarta Selatan, DKI Jakarta
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Kanto Mebel. Semua hak cipta dilindungi undang-undang.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;