import React from 'react';
import { ExternalLink, ShoppingCart, Star, Truck } from 'lucide-react';

const SupportedBy = () => {
  const platforms = [
    {
      name: 'Tokopedia',
      description: 'Marketplace terpercaya Indonesia',
      color: 'bg-green-600',
      textColor: 'text-green-600',
      bgColor: 'bg-green-50',
      url: '#'
    },
    {
      name: 'Shopee',
      description: 'Platform belanja online terdepan',
      color: 'bg-orange-500',
      textColor: 'text-orange-500',
      bgColor: 'bg-orange-50',
      url: '#'
    },
    {
      name: 'Blibli',
      description: 'E-commerce premium Indonesia',
      color: 'bg-blue-600',
      textColor: 'text-blue-600',
      bgColor: 'bg-blue-50',
      url: '#'
    },
    {
      name: 'SiPlah',
      description: 'Platform pengadaan pemerintah',
      color: 'bg-purple-600',
      textColor: 'text-purple-600',
      bgColor: 'bg-purple-50',
      url: '#'
    },
    {
      name: 'E-Catalogue',
      description: 'Katalog elektronik resmi',
      color: 'bg-indigo-600',
      textColor: 'text-indigo-600',
      bgColor: 'bg-indigo-50',
      url: '#'
    },
    {
      name: 'Bukalapak',
      description: 'Marketplace lokal terpercaya',
      color: 'bg-red-500',
      textColor: 'text-red-500',
      bgColor: 'bg-red-50',
      url: '#'
    }
  ];

  const benefits = [
    {
      icon: ShoppingCart,
      title: 'Kemudahan Berbelanja',
      description: 'Belanja furniture Kanto Mebel di platform favorit Anda',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Star,
      title: 'Rating Terpercaya',
      description: 'Dapatkan review dan rating dari ribuan pelanggan puas',
      color: 'text-yellow-500',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: Truck,
      title: 'Pengiriman Aman',
      description: 'Jaminan pengiriman aman ke seluruh Indonesia',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Didukung Oleh</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kanto Mebel hadir di berbagai platform e-commerce terpercaya untuk memudahkan 
            Anda berbelanja furniture berkualitas tinggi
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-16">
          {platforms.map((platform, index) => (
            <div 
              key={index} 
              className={`${platform.bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-gray-200`}
            >
              <div className="text-center">
                {/* Platform Icon/Logo Placeholder */}
                <div className={`w-16 h-16 ${platform.color} rounded-lg mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <ShoppingCart className="w-8 h-8 text-white" />
                </div>
                
                <h3 className={`font-bold text-lg ${platform.textColor} mb-2 group-hover:scale-105 transition-transform`}>
                  {platform.name}
                </h3>
                <p className="text-sm text-gray-600 mb-3">{platform.description}</p>
                
                <div className="flex items-center justify-center space-x-1 text-xs text-gray-500 group-hover:text-gray-700">
                  <span>Kunjungi Toko</span>
                  <ExternalLink className="w-3 h-3" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-red-50 to-yellow-50 rounded-2xl p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Keuntungan Berbelanja di Platform Partner
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center group">
                <div className={`w-20 h-20 ${benefit.bgColor} rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                </div>
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="group">
            <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">50K+</div>
            <div className="text-gray-600">Produk Terjual</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-yellow-500 mb-2 group-hover:scale-110 transition-transform">4.8★</div>
            <div className="text-gray-600">Rating Rata-rata</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-blue-600 mb-2 group-hover:scale-110 transition-transform">25K+</div>
            <div className="text-gray-600">Review Positif</div>
          </div>
          <div className="group">
            <div className="text-4xl font-bold text-red-600 mb-2 group-hover:scale-110 transition-transform">99%</div>
            <div className="text-gray-600">Kepuasan Pelanggan</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600 mb-6">
            Pilih platform favorit Anda dan mulai berbelanja furniture impian
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors duration-200">
              Lihat Semua Toko
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors duration-200">
              Bandingkan Harga
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SupportedBy;