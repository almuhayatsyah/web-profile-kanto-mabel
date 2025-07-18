import { CheckCircle2 } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const aboutImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2070&q=80",
  "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg",
  "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

const features = [
  "Bahan premium dan tahan lama",
  "Dibuat oleh pengrajin lokal berpengalaman",
  "Desain fleksibel sesuai kebutuhan",
  "Layanan konsultasi hingga pemasangan",
];

const About = () => {
  return (
    <section id="about" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Gambar Slider */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            navigation
            loop
            spaceBetween={20}
            breakpoints={{
              320: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
            }}
            className="w-full"
          >
            {aboutImages.map((img, index) => (
              <SwiperSlide key={index}>
                <div className="w-full">
                  <img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    className="rounded-3xl shadow-xl w-full object-cover aspect-[4/3] max-h-[400px] sm:max-h-[500px] lg:max-h-[600px]"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Konten Deskripsi */}
        <div>
          <h2 className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">
            Tentang Kami
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Furnitur yang Dirancang <br className="hidden sm:block" /> dengan
            Hati dan Tujuan
          </h3>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            Di KANTO MEBEL, kami percaya bahwa furnitur bukan sekadar benda. Ia
            adalah bagian dari cerita hidup, tempat kenangan tercipta dan
            hari-hari dijalani. Karena itu, kami hadirkan produk yang menyatu
            antara fungsi, kualitas, dan jiwa.
          </p>

          <ul className="mt-8 space-y-4">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 mt-1 text-brand-blue shrink-0" />
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
