const Brands = () => {
  // Placeholder brands - bisa diganti dengan merek furniture asli
  const brands = [
    {
      name: "IKEA",
      logo: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      description: "Furniture Skandinavia Modern",
    },
    {
      name: "Ashley",
      logo: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      description: "Furniture Amerika Premium",
    },
    {
      name: "West Elm",
      logo: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      description: "Desain Kontemporer",
    },
    {
      name: "Crate & Barrel",
      logo: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      description: "Furniture Berkualitas Tinggi",
    },
    {
      name: "Pottery Barn",
      logo: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      description: "Gaya Klasik Modern",
    },
    {
      name: "CB2",
      logo: "https://images.pexels.com/photos/6585759/pexels-photo-6585759.jpeg?auto=compress&cs=tinysrgb&w=200&h=100",
      description: "Furniture Muda & Trendy",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-red-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Merek Unggulan
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kanto Mebel bekerja sama dengan brand-brand furniture terkemuka
            dunia untuk memberikan pilihan terbaik bagi pelanggan kami
          </p>
        </div>

        {/* Brands Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-blue-200"
            >
              <div className="text-center">
                {/* Placeholder untuk logo - bisa diganti dengan logo asli */}
                <div className="w-20 h-12 bg-gray-200 rounded-lg mx-auto mb-3 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                  <span className="text-xs font-bold text-gray-600">
                    {brand.name}
                  </span>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                  {brand.name}
                </h3>
                <p className="text-xs text-gray-500">{brand.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Partnership Benefits */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="group">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-red-200 transition-colors">
                <div className="w-8 h-8 bg-red-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Kualitas Terjamin
              </h3>
              <p className="text-gray-600">
                Semua produk dari merek partner telah melalui quality control
                ketat
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-200 transition-colors">
                <div className="w-8 h-8 bg-yellow-500 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Harga Kompetitif
              </h3>
              <p className="text-gray-600">
                Dapatkan harga terbaik untuk produk furniture berkualitas
                internasional
              </p>
            </div>

            <div className="group">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Garansi Resmi
              </h3>
              <p className="text-gray-600">
                Semua produk dilengkapi dengan garansi resmi dari manufacturer
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Tertarik dengan produk dari merek-merek unggulan ini?
          </p>
          <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200 inline-flex items-center space-x-2">
            <span>Konsultasi Gratis</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Brands;
