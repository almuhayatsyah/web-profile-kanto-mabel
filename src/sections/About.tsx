import { CheckCircle2 } from "lucide-react";
import { Autoplay, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Impor CSS untuk Swiper
import "swiper/css";
import "swiper/css/navigation";

// Data untuk gambar slider
const aboutImages = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&w=2070&q=80",
  "https://images.pexels.com/photos/416320/pexels-photo-416320.jpeg",
  "https://images.unsplash.com/photo-1604328702728-d26d2062c20b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
];

// Data untuk daftar fitur
const features = [
  "Bahan premium dan tahan lama",
  "Dibuat oleh pengrajin lokal berpengalaman",
  "Desain fleksibel sesuai kebutuhan",
  "Layanan konsultasi hingga pemasangan",
];

const About = () => {
  return (
    <section id="about" className="bg-white py-14 sm:py-19">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Kolom Gambar Slider */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            navigation
            loop
            slidesPerView={1}
            className="w-full rounded-3xl shadow-2xl"
          >
            {aboutImages.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Interior Mebel KANTO ${index + 1}`}
                  className="w-full object-cover aspect-[4/3]"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Kolom Konten Deskripsi */}
        <div>
          <h2 className="text-brand-blue text-sm font-semibold uppercase tracking-widest mb-2">
            Tentang Kami
          </h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
            Menghadirkan Furnitur Berkualitas
          </h3>
          <p className="mt-6 text-gray-600 text-base sm:text-lg leading-relaxed">
            KANTO MEBEL adalah perusahaan yang fokus pada penyediaan furniture
            kantor berkualitas tinggi dengan desain fungsional dan harga
            bersaing. Kami berkomitmen untuk memahami kebutuhan konsumen,
            membangun kemitraan yang kuat, dan terus bertumbuh sebagai penyedia
            solusi terbaik di industri ini.
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
