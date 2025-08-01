const products = [
  {
    name: "Ruang Kerja Moderen dengan Furnitur Kanto Mebel",
    category: "Ruang Kantor",
    image: "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg",
    href: "#products",
  },
  {
    name: "Set Ruang Keluarga Moderen dengan Kanto Mebel",
    category: "Family Rooms",
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&w=1974&auto=format&fit=crop",
    href: "#products",
  },
  {
    name: "Lemari & Kursi Kayu",
    category: "Kamar Tidur",
    image: "https://images.pexels.com/photos/245208/pexels-photo-245208.jpeg",
    href: "#products",
  },
];

const Products = () => {
  return (
    <section id="products" className="bg-white py-16 sm:py-19">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue">
            Inspirasi Ruangan
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Koleksi Pilihan untuk Setiap Ruangan
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Produk kami cocok untuk kebutuhan rumah, kantor, hingga usaha
            seperti kafe dan coworking space. Temukan inspirasi ruangan impian
            Anda.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 gap-x-8">
          {products.map((product) => (
            <a key={product.name} href={product.href} className="group block">
              <div className="relative overflow-hidden rounded-xl shadow-lg aspect-[4/3]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/40 to-transparent p-6 flex flex-col justify-end">
                  <p className="text-sm font-medium text-gray-200">
                    {product.category}
                  </p>
                  <h3 className="mt-1 text-xl font-semibold text-white">
                    {product.name}
                  </h3>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
