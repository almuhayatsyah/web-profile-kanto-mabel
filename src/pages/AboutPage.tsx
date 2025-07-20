import { Award, Handshake, Target } from "lucide-react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
// import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import MabelKanonto from "../asset/img/mabelkanto.png";
import OxsanFoto from "../asset/img/team/oxsan.jpg";
import TomiFoto from "../asset/img/team/tomidasra.png";

const team = [
  { name: "Oxsan", role: "Branch Manager", photo: OxsanFoto },
  { name: "Tomy Dasra", role: "Manager Officer", photo: TomiFoto },
];

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero */}
      <section className="bg-gradient-to-b from-brand-blue/5 via-white to-white pt-4 pb-14 sm:pt-6 md:pt-8">
        <div className="container mx-auto px-4 text-center">
          <img
            src={MabelKanonto}
            alt="Logo Mebel KANTO"
            className="mx-auto mb-4 w-60 h-60 sm:w-72 sm:h-72 md:w-80 md:h-80 object-contain"
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-3">
            Kanto Mebel Lebih dari Sekadar Furniture
          </h1>
          <p className="text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
            Setiap meja, kursi, dan lemari kami bukan cuma barang tapi bagian
            dari cerita ruangan Anda.
          </p>
        </div>
      </section>

      {/* Showcase */}
      <section className="container mx-auto px-4 pt-4 pb-12">
        <div className="rounded-2xl overflow-hidden shadow-lg">
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
            ].map((src, i) => (
              <SwiperSlide key={i}>
                <img
                  src={src}
                  alt={`Slide ${i + 1}`}
                  className="w-full h-[400px] object-cover"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Filosofi */}
      <section className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold">Filosofi Produk Kami</h2>
          <p className="mt-2 text-gray-600 max-w-lg mx-auto">
            Kami tidak hanya membuat furnitur, tapi menciptakan pengalaman yang
            memperkaya gaya hidup Anda.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {[
            {
              icon: <Award className="h-8 w-8 text-brand-blue" />,
              title: "Kualitas Tanpa Kompromi",
              desc: "Detail dibuat presisi. Kami percaya kualitas adalah investasi.",
            },
            {
              icon: <Handshake className="h-8 w-8 text-brand-blue" />,
              title: "Hubungan Berkelanjutan",
              desc: "Kami ingin jadi partner, bukan sekadar penjual.",
            },
            {
              icon: <Target className="h-8 w-8 text-brand-blue" />,
              title: "Fungsional & Relevan",
              desc: "Desain menyatu dengan hidup sehari-hari.",
            },
          ].map((item, idx) => (
            <div key={idx} className="text-center flex flex-col items-center">
              <div className="mb-3">{item.icon}</div>
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mt-1">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Struktur Organisasi */}
      <section className="bg-gray-50 py-12">
        <div className="flex flex-wrap justify-center gap-6 container mx-auto px-4">
          {team.map((member, idx) => (
            <div
              key={idx}
              className="bg-white rounded-xl shadow-md p-5 flex flex-col items-center"
            >
              <img
                src={member.photo}
                alt={member.name}
                className="w-32 h-32 sm:w-36 sm:h-36 rounded-full object-cover p-1 bg-white mt-4 mb-4"
              />

              <h4 className="text-base font-semibold">{member.name}</h4>
              <p className="text-sm text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-50 py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-3 text-gray-900">
            Bikin Ruang yang Nyaman & Estetik
          </h2>
          <p className="text-sm text-gray-600 max-w-md mx-auto mb-6">
            Konsultasi sekarang dan mulai wujudkan desain ruang impian Anda
            bersama Kanto Mebel.
          </p>
          <a
            href="/kontak"
            className="inline-block bg-brand-blue hover:bg-opacity-90 text-white font-medium py-2.5 px-5 rounded-md shadow"
          >
            Hubungi Kami
          </a>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
