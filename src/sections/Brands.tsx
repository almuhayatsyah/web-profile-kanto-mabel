import React, { useState } from "react";

// Data Produk berdasarkan Merek
type Product = {
  name: string;
  image: string;
};

type Brand = {
  name: string;
  products: Product[];
};

const brandsData: Brand[] = [
  {
    name: "Indachi",
    products: [
      {
        name: "Kursi Kantor Ergonomis",
        image:
          "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?q=80&auto=format&fit=crop&h=300&w=400",
      },
      {
        name: "Meja Kerja Modern",
        image:
          "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&auto=format&fit=crop&h=300&w=400",
      },
      {
        name: "Lemari Arsip ",
        image:
          "https://images.unsplash.com/photo-1585030044487-7c7b8b5c9b31?q=80&auto=format&fit=crop&h=300&w=400",
      },
    ],
  },
  {
    name: "Chitose",
    products: [
      {
        name: "Kursi Kantor",
        image:
          "https://images.unsplash.com/photo-1519947486511-46149fa0a254?q=80&auto=format&fit=crop&h=300&w=400",
      },
      {
        name: "Meja Belajar Lipat",
        image:
          "https://images.pexels.com/photos/190537/pexels-photo-190537.jpeg?auto=compress&cs=tinysrgb&h=300&w=400",
      },
      {
        name: "Kursi Gamin",
        image:
          "https://images.unsplash.com/photo-1505826759037-406b40feb4cd?q=80&auto=format&fit=crop&h=300&w=400",
      },
    ],
  },
  {
    name: "Savello",
    products: [
      {
        name: "Sofa Ruang Tamu",
        image:
          "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?q=80&auto=format&fit=crop&h=300&w=400",
      },
      {
        name: "Kursi Cafe Industrial",
        image:
          "https://images.unsplash.com/photo-1551029015-55104c464a48?q=80&auto=format&fit=crop&h=300&w=400",
      },
      {
        name: "Meja Rapat Besar",
        image:
          "https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&auto=format&fit=crop&h=300&w=400",
      },
    ],
  },
];

const Brands: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(brandsData[0].name);

  return (
    <section id="brands" className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue">
            Merek Pilihan Kami
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kualitas Terjamin dari Merek Terpercaya
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami bekerja sama dengan berbagai merek ternama untuk menyediakan
            solusi furnitur terbaik yang sesuai dengan kebutuhan dan anggaran
            Anda.
          </p>
        </div>

        <div className="mt-12 border-b border-gray-200">
          <nav
            className="-mb-px flex justify-center space-x-6 sm:space-x-8"
            aria-label="Tabs"
          >
            {brandsData.map((brand) => (
              <button
                key={brand.name}
                onClick={() => setActiveTab(brand.name)}
                className={`$${
                  activeTab === brand.name
                    ? "border-brand-blue text-brand-blue"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700"
                } whitespace-nowrap border-b-2 py-4 px-1 text-base sm:text-lg font-medium transition-colors`}
              >
                {brand.name}
              </button>
            ))}
          </nav>
        </div>

        <div className="mt-16">
          {brandsData.map((brand) => (
            <div
              key={brand.name}
              className={activeTab === brand.name ? "block" : "hidden"}
            >
              <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
                {brand.products.map((product) => (
                  <div key={product.name} className="group">
                    <div className="aspect-video overflow-hidden rounded-xl shadow-lg">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-4 text-center text-lg font-semibold text-gray-900">
                      {product.name}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
