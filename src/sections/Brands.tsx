import React, { useState } from "react";

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
    name: "Kanto Mebel",
    products: [
      {
        name: "Kursi Kantor",
        image: "https://indachi.co.id/wp-content/uploads/2014/11/DSC00356.jpg",
      },
      {
        name: "Meja Kantor",
        image:
          "https://inverio.co.id/wp-content/uploads/2021/12/Modera-COD-106.jpeg",
      },
      {
        name: "Lemari Arsip",
        image:
          "https://down-id.img.susercontent.com/file/sg-11134201-23030-rqu52k1r9qov11",
      },
    ],
  },
  {
    name: "Indachi",
    products: [
      {
        name: "Kursi Kantor",
        image:
          "https://megahfurniture.com/wp-content/uploads/2024/03/INDACHI-ELTIUM-II-TC.jpg",
      },
      {
        name: "Meja Kerja Modern",
        image:
          "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&auto=format&fit=crop&h=300&w=400",
      },
      {
        name: "Lemari Arsip ",
        image:
          "https://images.tokopedia.net/img/cache/700/product-1/2018/9/16/767682/767682_70b8bb16-a9fe-477b-a018-9619dadd0bfb_709_709.jpg",
      },
    ],
  },
  {
    name: "Subaru",
    products: [
      {
        name: "Sofa Minimalis",
        image:
          "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full//105/MTA-3099938/subaru_subaru-sofa-arisa-3-seater_full03.jpg",
      },
      {
        name: "Kursi Kantor",
        image:
          "https://inverio.co.id/wp-content/uploads/2022/02/KURSI-KANTOR-DIREKTUR-SUBARU-ES-40-600x600.jpg",
      },
      {
        name: "Rak Buku Modern",
        image:
          "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&auto=format&fit=crop&h=300&w=400",
      },
    ],
  },
  {
    name: "Futura",
    products: [
      {
        name: "Kursi empuk",
        image:
          "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/Simpati-Furniture_futura-405-merah-kursi-susun-12-pcs_full01.jpg",
      },
      {
        name: "Meja Kopi Kayu Jati",
        image:
          "https://media.monotaro.id/mid01/big/Kebutuhan%20Kantor/Furnitur/Meja%20Kantor%2FKomersial/Meja%20untuk%20Kantor/Futura%20Meja%20Sekolah%20Seri%20MJ%20FTR%20607/8fP105055303-1.jpg",
      },
      {
        name: "Rak Buku Modern",
        image:
          "https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?q=80&auto=format&fit=crop&h=300&w=400",
      },
    ],
  },
  {
    name: "Chitose",
    products: [
      {
        name: "Kursi dan meja Sekolah",
        image:
          "https://media.monotaro.id/mid01/big/Kebutuhan%20Kantor/Furnitur/Meja%20Kantor%2FKomersial/Meja%20untuk%20Kantor/Chitose%20School%20Furniture%20Table%20Ayumi%20Series%20(Table%20Only)/23P101509075-5.jpg",
      },
      {
        name: "Meja cafeshoop",
        image:
          "https://xavierhomedecor.com/cdn/shop/products/chitose2_800x.jpg?v=1629784969",
      },
      {
        name: "Kursi Couple",
        image: "https://chitose.id/wp-content/uploads/2023/12/kogu-kt-02.jpg",
      },
    ],
  },
  {
    name: "Savello",
    products: [
      {
        name: "Sofa Ruang Tamu",
        image:
          "https://pbs.twimg.com/media/C6yOC2xWkAEwUD1?format=jpg&name=4096x4096",
      },
      {
        name: "Kursi Kantor Industrial",
        image:
          "https://oscarliving.co.id/cdn/shop/files/kursi-direktur-kursi-kantor-savello-soliter-h-savello-shopname-820538.jpg?v=1712425317",
      },
      {
        name: "Kursi Gaming",
        image:
          "https://www.static-src.com/wcsstore/Indraprastha/images/catalog/full/catalog-image/101/MTA-157205494/brd-44261_kursi-gaming-kursi-ergonomis-kursi_full01-e67b7048.jpg",
      },
    ],
  },
];

const Brands: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>(brandsData[0].name);

  return (
    <section id="brands" className="bg-slate-50 py-16 sm:py-19">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold text-brand-blue">
            Merek Pilihan Kami
          </h2>
          <p className="mt-2 text-3xl font-bold text-gray-900 sm:text-4xl">
            Kualitas Terjamin dari Merek Terpercaya
          </p>
          <p className="mt-4 text-lg text-gray-600">
            Kami bekerja sama dengan berbagai merek ternama untuk menyediakan
            solusi furnitur terbaik yang sesuai dengan kebutuhan dan anggaran
            Anda.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-10 border-b border-gray-200">
          <nav
            className="flex flex-wrap justify-center gap-4"
            aria-label="Tabs"
          >
            {brandsData.map((brand) => (
              <button
                key={brand.name}
                onClick={() => setActiveTab(brand.name)}
                className={`${
                  activeTab === brand.name
                    ? "border-b-2 border-brand-blue text-brand-blue"
                    : "text-gray-500 hover:text-gray-700"
                } px-4 py-2 text-sm sm:text-base font-medium transition-colors`}
              >
                {brand.name}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        <div className="mt-12">
          {brandsData.map((brand) => (
            <div
              key={brand.name}
              className={activeTab === brand.name ? "block" : "hidden"}
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {brand.products.map((product) => (
                  <div
                    key={product.name}
                    className="group rounded-xl shadow-md bg-white hover:shadow-lg transition duration-300"
                  >
                    <div className="aspect-video overflow-hidden rounded-t-xl">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4 text-center">
                      <h3 className="text-lg font-semibold text-gray-800">
                        {product.name}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Temukan Merek Terbaik untuk Ruang Anda
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Konsultasi sekarang dan mulai wujudkan desain ruang impian Anda
            bersama Kanto Mebel.
          </p>
          <a
            href="/kontak"
            className="inline-block bg-brand-blue hover:bg-opacity-90 text-white font-medium py-3 px-6 rounded-md shadow"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </section>
  );
};

export default Brands;
