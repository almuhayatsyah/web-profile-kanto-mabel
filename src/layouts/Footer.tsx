import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import logo from "../asset/img/mabelkanto.png";

const Footer = () => {
  return (
    <footer className="bg-brand-blue text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <a href="/" className="flex items-center gap-2">
              <img src={logo} alt="Logo Mebel KANTO" className="h-16 w-auto" />
            </a>
            <p className="text-blue-100 text-sm">
              Mitra terpercaya Anda dalam pengadaan dan pembuatan mebel kustom
              berkualitas tinggi untuk rumah, kantor, dan bisnis.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-blue-200 hover:text-white transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Menu Utama</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#products"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Produk
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Keunggulan
                </a>
              </li>
              <li>
                <a
                  href="/kontak"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Hubungi Kami
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kategori</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Ruang Tamu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Ruang Makan
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Kamar Tidur
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-100 hover:text-white transition-colors"
                >
                  Kantor
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Kontak</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                <span className="text-blue-100 text-sm">
                  Jl. Teuku Umar No. 123, <br />
                  Banda Aceh, Aceh 23123
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-white" />
                <span className="text-blue-100 text-sm">+62 812-3456-7890</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-white" />
                <span className="text-blue-100 text-sm">
                  kontak@mebelkanto.com
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-sm text-blue-200">
            © {new Date().getFullYear()} Mebel KANTO. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
