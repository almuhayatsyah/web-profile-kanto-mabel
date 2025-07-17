import { Award, Users, Clock, Shield } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Award,
      title: "Kualitas Premium",
      description:
        "Menggunakan material kayu pilihan dan finishing berkualitas tinggi",
    },
    {
      icon: Users,
      title: "Pengalaman 15+ Tahun",
      description:
        "Tim ahli dengan pengalaman puluhan tahun di industri furniture",
    },
    {
      icon: Clock,
      title: "Pengerjaan Cepat",
      description: "Proses produksi efisien dengan hasil yang memuaskan",
    },
    {
      icon: Shield,
      title: "Garansi Terpercaya",
      description: "Garansi resmi untuk semua produk furniture kami",
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Tentang Kanto Mebel
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sejak didirikan, Kanto Mebel telah menjadi pilihan utama untuk
            furniture berkualitas tinggi dengan desain yang memukau dan daya
            tahan yang luar biasa.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Komitmen Kami untuk Kualitas
            </h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              PT Kanto Mebel adalah perusahaan yang bergerak di bidang furniture
              dan solusi interior, hadir untuk menjawab kebutuhan akan produk
              mebel yang fungsional, estetis, dan berkualitas tinggi. Meskipun
              kami merupakan perusahaan yang baru berdiri, PT Kanto Mebel
              memiliki visi besar untuk tumbuh menjadi salah satu penyedia
              furniture terpercaya di Indonesia.
              <p className="text-gray-600 mb-6 leading-relaxed">
                Dengan semangat inovasi dan pelayanan yang berorientasi pada
                kepuasan pelanggan, kami berkomitmen untuk terus berkembang dan
                berkontribusi dalam menciptakan ruang kerja maupun hunian yang
                nyaman, modern, dan produktif. Kami menyediakan berbagai pilihan
                furniture untuk kebutuhan perkantoran, rumah tangga, bisnis
                komersial, hingga instansi pemerintahan, dengan desain yang
                mengikuti tren dan kebutuhan pengguna. Kami juga membuka peluang
                kolaborasi dan kemitraan strategis untuk pengadaan barang
                berskala besar, demi mendukung efisiensi dan efektivitas dalam
                berbagai sektor. PT Kanto Mebel siap tumbuh bersama Anda,
                menjadi mitra dalam menciptakan ruang yang lebih baik, lebih
                tertata, dan penuh nilai.
              </p>
            </p>
            <div className="flex items-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">1000+</div>
                <div className="text-gray-600">Pelanggan Puas</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">15+</div>
                <div className="text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-yellow-500">500+</div>
                <div className="text-gray-600">Produk Tersedia</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg"
              alt="Workshop Kanto Mebel"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className="absolute inset-0 bg-red-600 bg-opacity-20 rounded-lg"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200"
            >
              <div
                className={`w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 ${
                  index === 0
                    ? "bg-red-100"
                    : index === 1
                    ? "bg-blue-100"
                    : index === 2
                    ? "bg-yellow-100"
                    : "bg-red-100"
                }`}
              >
                <feature.icon
                  className={`w-8 h-8 ${
                    index === 0
                      ? "text-red-600"
                      : index === 1
                      ? "text-blue-600"
                      : index === 2
                      ? "text-yellow-500"
                      : "text-red-600"
                  }`}
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
