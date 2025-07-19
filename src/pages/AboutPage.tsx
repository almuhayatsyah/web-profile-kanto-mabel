import { Award, Handshake, Target } from "lucide-react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import MabelKanonto from "../asset/img/mabelkanto.png";
import OxsanFoto from "../asset/img/team/oxsan.jpg";
import TomiFoto from "../asset/img/team/tomidasra.webp";

const team = [
  {
    name: "Oxsan",
    role: "Branch Manager",
    photo: OxsanFoto,
  },
  {
    name: "Tomy Dasra",
    role: "Manager Officer",
    photo: TomiFoto,
  },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="relative isolate bg-gradient-to-b from-brand-blue/5 via-white to-white py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <img
            src={MabelKanonto}
            alt="Logo Mebel KANTO"
            className="mx-auto mb-8 w-52 h-52 sm:w-64 sm:h-64 lg:w-72 lg:h-72 object-contain"
          />
          <h1 className="text-4xl sm:text-2xl lg:text-3xl font-bold mb-6">
            Kanto Mebel Lebih dari Sekadar Furniture
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Setiap meja, kursi, dan lemari kami bukan cuma barang tapi bagian
            dari cerita ruangan Anda.
          </p>
        </div>
      </section>

      {/* Showcase */}
      <section className="container mx-auto -mt-20 px-6">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            loop
            spaceBetween={0}
            slidesPerView={1}
          >
            {[
              "https://images.pexels.com/photos/159213/hall-congress-architecture-building-159213.jpeg",
              "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg",
              "https://images.unsplash.com/photo-1600585154340-be6161a56a0c",
            ].map((src, index) => (
              <SwiperSlide key={index}>
                <img
                  src={src}
                  alt={`Showcase slide ${index + 1}`}
                  className="w-full h-[450px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Filosofi */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Filosofi yang Menyatu dalam Setiap Produk
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kami tidak hanya membuat furnitur, tapi menciptakan pengalaman yang
            memperkaya gaya hidup Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <Award className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold">Kualitas Tanpa Kompromi</h3>
            <p className="text-sm text-gray-600 mt-2">
              Detail dibuat presisi. Kami percaya kualitas adalah investasi.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Handshake className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold">
              Hubungan yang Berkelanjutan
            </h3>
            <p className="text-sm text-gray-600 mt-2">
              Kami ingin jadi partner, bukan sekadar penjual.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Target className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold">Fungsional & Relevan</h3>
            <p className="text-sm text-gray-600 mt-2">
              Desain menyatu dengan hidup sehari-hari.
            </p>
          </div>
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="bg-gray-50 py-24">
        <div className="flex flex-wrap justify-center gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 flex flex-col items-center hover:shadow-xl transition duration-300"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4"
              />
              <h4 className="text-lg font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Bikin Ruang yang Nyaman & Estetik
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
    </div>
  );
};

export default AboutPage;
