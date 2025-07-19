import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { Link } from "react-router-dom";
import logo from "../asset/img/mabelkanto.png";

const Footer = () => {
  return (
    <footer className="bg-slate-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Info Perusahaan */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo Mebel KANTO" className="h-16 w-auto" />
            </Link>
            <p className="text-gray-600 text-sm">
              Solusi pengadaan dan pembuatan mebel kustom berkualitas tinggi
              untuk rumah, kantor, dan proyek bisnis Anda.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-brand-blue transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Menu Navigasi */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Navigasi
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/#products"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Produk Unggulan
                </Link>
              </li>
              <li>
                <Link
                  to="/tentang"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link
                  to="/#features"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Keunggulan
                </Link>
              </li>
              <li>
                <Link
                  to="/kontak"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Hubungi Kami
                </Link>
              </li>
            </ul>
          </div>

          {/* Kategori Populer */}
          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Kategori Populer
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Kursi Kantor
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Meja Rapat
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Lemari Arsip
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-600 hover:text-brand-blue transition-colors"
                >
                  Sofa Ruang Tunggu
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-brand-blue mt-1 flex-shrink-0" />
                <span className="text-gray-600 text-sm">
                  Jl. Teuku Umar No. 123, <br />
                  Banda Aceh, Aceh 23123
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-brand-blue" />
                <a
                  href="tel:+6281234567890"
                  className="text-gray-600 text-sm hover:text-brand-blue transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-brand-blue" />
                <a
                  href="mailto:kontak@mebelkanto.com"
                  className="text-gray-600 text-sm hover:text-brand-blue transition-colors"
                >
                  kontak@mebelkanto.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 mt-12 pt-8 text-center">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Mebel KANTO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
