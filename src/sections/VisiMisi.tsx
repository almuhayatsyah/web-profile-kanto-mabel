import { Building2, HeartHandshake, TrendingUp, Users } from "lucide-react";

// Data untuk Misi
const missions = [
  {
    icon: Building2,
    title: "Membangun Perusahaan",
    description:
      "Membangun perusahaan yang unggul di bidang furniture kantor serta menjadi mitra terpercaya dan solusi kebutuhan konsumen bisnis dan perorangan.",
  },
  {
    icon: HeartHandshake,
    title: "Memahami Konsumen",
    description:
      "Memahami beragam kebutuhan konsumen dan memberikan layanan pengadaan yang tepat demi tercapainya kepuasan optimal bagi konsumen.",
  },
  {
    icon: Users,
    title: "Mengembangkan Kemitraan",
    description:
      "Mengembangkan kemitraan untuk melengkapi kemampuan dan memperluas penawaran perusahaan.",
  },
  {
    icon: TrendingUp,
    title: "Tumbuh dan Berkelanjutan",
    description:
      "Menjadi perusahaan di bidang industri furniture kantor terbaik di Indonesia yang tumbuh dan berkelanjutan.",
  },
];

const VisiMisi = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">
          {/* Kolom Visi */}
          <div className="lg:col-span-1 text-center lg:text-left">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-blue-500 mb-4">
              Visi Kami
            </h2>
            <p className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              WE PROVIDE THE BEST PRODUCTS
            </p>
            <p className="mt-6 text-gray-600">
              Menawarkan berbagai macam produk furniture kantor pilihan dengan
              desain terbaik dan harga yang kompetitif.
            </p>
          </div>

          {/* Kolom Misi */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-widest text-red-500 mb-8 text-center lg:text-left">
              Misi Kami
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              {missions.map((mission, index) => (
                <div key={index} className="flex items-start gap-5">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-white shadow-md">
                      <mission.icon className="h-6 w-6 text-brand-blue" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {mission.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-600">
                      {mission.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisiMisi;
