import { ArrowRight, Star } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-yellow-50 to-red-50 py-20"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-600 font-medium">
                Dipercaya 1000+ Pelanggan
              </span>
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Furniture
              <span className="text-red-600 block">Berkualitas Tinggi</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Kanto Mebel menghadirkan koleksi furniture premium dengan desain
              modern dan kualitas terbaik untuk rumah impian Anda. Dibuat dengan
              keahlian tinggi dan material pilihan.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 flex items-center justify-center space-x-2 group">
                <span>Lihat Produk</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
                Hubungi Kami
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.pexels.com/photos/1957477/pexels-photo-1957477.jpeg"
                alt="Modern Living Room"
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="mt-4">
                <h3 className="text-xl font-semibold text-gray-900">
                  Set Ruang Kerja Moderen
                </h3>
                <p className="text-gray-600">
                  Desain minimalis dengan kualitas premium
                </p>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-yellow-500 text-white p-4 rounded-lg shadow-lg">
              <p className="text-sm font-medium">Terpercaya</p>
              <p className="text-xs opacity-90">Kualitas Terjamin</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
