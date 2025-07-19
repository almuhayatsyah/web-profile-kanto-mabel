import { ChevronDown, Menu, X } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../asset/img/mabelkanto.png";
import { useOnClickOutside } from "../hooks/useOnClickOutside";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Tentang", href: "/tentang" },
];

const dropdownLinks = [
  { name: "e-Catalogue", href: "" },
  { name: "Blibli", href: "#" },
  { name: "Tokopedia", href: "#" },
  { name: "Shopee", href: "#" },
  { name: "PadiumKM", href: "#" },
  { name: "Belapengadaan", href: "#" },
  { name: "LPSE", href: "#" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const dropdownRef = useRef<HTMLDivElement>(null);
  useOnClickOutside(dropdownRef, () => setActiveDropdown(null));

  const closeAllMenus = () => {
    setIsMenuOpen(false);
    setActiveDropdown(null);
  };

  return (
    <header className="bg-slate-50 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link
              to="/"
              onClick={closeAllMenus}
              className="flex items-center gap-2"
            >
              <img src={logo} alt="Logo Mebel KANTO" className="h-16 w-auto" />
            </Link>
          </div>

          <nav className="hidden md:flex flex-grow justify-center items-center gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.href}
                className="text-gray-600 hover:text-brand-blue font-medium px-4 py-2 relative group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </Link>
            ))}

            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() =>
                  setActiveDropdown(activeDropdown === "toko" ? null : "toko")
                }
                className="flex items-center text-gray-600 hover:text-brand-blue font-medium px-4 py-2 relative group"
              >
                Toko Online
                <ChevronDown
                  className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                    activeDropdown === "toko" ? "rotate-180" : ""
                  }`}
                />
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brand-blue scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out" />
              </button>
              {activeDropdown === "toko" && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-4 w-48 bg-white rounded-md shadow-lg py-1 ring-1 ring-black ring-opacity-5">
                  {dropdownLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-brand-yellow"
                      onClick={() => setActiveDropdown(null)}
                    >
                      {link.name}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              to="/kontak"
              className="hidden md:block bg-brand-blue text-white hover:bg-blue-800 px-5 py-2.5 rounded-lg text-sm font-semibold transition-colors"
            >
              Kontak Kami
            </Link>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <nav className="md:hidden bg-slate-50 border-t divide-y divide-gray-200">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.href}
              onClick={closeAllMenus}
              className="block px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              {link.name}
            </Link>
          ))}

          {/* Dropdown Toko Online untuk Mobile */}
          <div>
            <button
              onClick={() =>
                setActiveDropdown(
                  activeDropdown === "mobile-toko" ? null : "mobile-toko"
                )
              }
              className="w-full flex justify-between items-center px-4 py-3 text-gray-700 hover:bg-gray-100"
            >
              <span>Toko Online</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  activeDropdown === "mobile-toko" ? "rotate-180" : ""
                }`}
              />
            </button>
            {activeDropdown === "mobile-toko" && (
              <div className="bg-gray-100 pl-8 pr-4 py-2">
                {dropdownLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block py-2 text-sm text-gray-600 hover:text-brand-blue"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>

          <div className="p-4">
            <Link
              to="/kontak"
              onClick={closeAllMenus}
              className="block w-full text-center bg-brand-blue text-white hover:bg-blue-800 px-4 py-2.5 rounded-lg font-semibold"
            >
              Kontak Kami
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
