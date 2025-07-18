import { CheckCircle2 } from "lucide-react";

const aboutImage =
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2070&q=80";

const features = [
  "Bahan premium dan tahan lama",
  "Dibuat oleh pengrajin lokal berpengalaman",
  "Desain fleksibel sesuai kebutuhan",
  "Layanan konsultasi hingga pemasangan",
];

const About = () => {
  return (
    <section id="about" className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
        {/* Gambar kiri */}
        <div>
          <img
            src={aboutImage}
            alt="Pengrajin mebel"
            className="rounded-3xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </div>

        {/* Konten kanan */}
        <div>
          <h2 className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">
            Tentang Kami
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Furnitur yang Dirancang <br /> dengan Hati dan Tujuan
          </h3>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            Di Mebel KANTO, kami percaya bahwa furnitur bukan sekadar benda. Ia
            adalah bagian dari cerita hidup, tempat kenangan tercipta dan
            hari-hari dijalani. Karena itu, kami hadirkan produk yang menyatu
            antara fungsi, kualitas, dan jiwa.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1 text-brand-blue" />
                <span className="text-gray-700 font-medium">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
