import { ArrowRight, Star } from "lucide-react";
const heroImage =
  "https://images.pexels.com/photos/7511749/pexels-photo-7511749.jpeg";

const Hero = () => {
  return (
    <section id="home" className="bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
              KANTO MEBEL
              <span className="text-brand-blue block mt-2">
                Solusi Furnitur untuk Semua Kebutuhan
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pilihan lengkap dari brand ternama & produk lokal. Bikin ruang
              makin nyaman dan fungsional.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#brands"
                className="w-full sm:w-auto bg-brand-blue text-white px-8 py-3 rounded-lg font-semibold hover:bg-opacity-90 transition-colors duration-200 flex items-center justify-center gap-2 group"
              >
                <span>Lihat Koleksi Unggulan</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="/kontak"
                className="w-full sm:w-auto border-2 border-gray-400 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-200"
              >
                Hubungi Kami
              </a>
            </div>
            <div className="mt-8 flex items-center justify-center lg:justify-start space-x-2">
              <div className="flex -space-x-2">
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  alt="Pelanggan 1"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/men/32.jpg"
                  alt="Pelanggan 2"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
                  src="https://randomuser.me/api/portraits/women/65.jpg"
                  alt="Pelanggan 3"
                />
              </div>
              <span className="text-gray-600 text-sm font-medium">
                Dipercaya oleh 100+ kantor, instansi, dan pemilik rumah di
                seluruh Indonesia
              </span>
            </div>
          </div>
          <div className="relative hidden lg:block">
            <img
              src={heroImage}
              alt="Ruang tamu modern dengan furnitur Kanto Mebel"
              className="w-full rounded-2xl shadow-2xl aspect-[4/3] object-cover"
            />
            <div className="absolute -bottom-8 -right-8 bg-white p-4 rounded-xl shadow-lg border">
              <h3 className="font-semibold text-gray-900">
                Set Ruang Kerja Modern
              </h3>
              <div className="flex items-center mt-1">
                <div className="flex text-brand-yellow">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <span className="text-xs text-gray-500 ml-2">
                  (4.9/5 rating)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
