import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Products = () => {
  const categories = [
    {
      name: 'Ruang Tamu',
      image: 'https://images.pexels.com/photos/1350789/pexels-photo-1350789.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Sofa, meja, dan furniture ruang tamu modern'
    },
    {
      name: 'Kamar Tidur',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Tempat tidur, lemari, dan furniture kamar'
    },
    {
      name: 'Ruang Makan',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Meja makan, kursi, dan furniture dining'
    },
    {
      name: 'Ruang Kerja',
      image: 'https://images.pexels.com/photos/667838/pexels-photo-667838.jpeg?auto=compress&cs=tinysrgb&w=600',
      description: 'Meja kerja, kursi kantor, dan rak buku'
    }
  ];

  const featuredProducts = [
    {
      name: 'Sofa Minimalis Premium',
      price: 'Rp 8.500.000',
      image: 'https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      reviews: 24
    },
    {
      name: 'Meja Makan Kayu Jati',
      price: 'Rp 12.000.000',
      image: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      reviews: 18
    },
    {
      name: 'Set Kamar Tidur Modern',
      price: 'Rp 15.500.000',
      image: 'https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600',
      rating: 5,
      reviews: 31
    }
  ];

  return (
    <section id="products" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Produk Kami</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Koleksi lengkap furniture berkualitas untuk setiap ruangan di rumah Anda
          </p>
        </div>

        {/* Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group cursor-pointer">
              <div className="relative overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute inset-0 bg-black bg-opacity-20 group-hover:bg-opacity-30 transition-all duration-200"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-gray-600 mb-4">{category.description}</p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700">
                  <span>Lihat Produk</span>
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Produk Unggulan</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-200 group">
                <div className="relative overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-200"
                  />
                  <div className="absolute top-4 right-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                    Terlaris
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h4>
                  <div className="flex items-center mb-3">
                    <div className="flex space-x-1 mr-2">
                      {[...Array(product.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    <span className="text-gray-600 text-sm">({product.reviews} ulasan)</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-red-600">{product.price}</span>
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200">
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-yellow-500 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-600 transition-colors duration-200 inline-flex items-center space-x-2">
            <span>Lihat Semua Produk</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;