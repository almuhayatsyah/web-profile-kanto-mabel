import { Award, Handshake, Target } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <section className="relative isolate bg-gradient-to-b from-brand-blue/5 via-white to-white py-24 sm:py-32">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl sm:text-6xl font-bold mb-6">
            Mebel Bukan Sekadar Furnitur
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Di balik setiap meja, kursi, dan lemari, ada nilai dan cerita. Kami
            hadir untuk mengisi ruang hidup dan kerja Anda dengan kualitas,
            kenyamanan, dan keindahan.
          </p>
        </div>
      </section>

      {/* Gambar Showcase */}
      <section className="container mx-auto -mt-20 px-6">
        <div className="overflow-hidden rounded-3xl shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=2158&auto=format&fit=crop"
            alt="Showcase Mebel KANTO"
            className="w-full object-cover aspect-[16/9]"
          />
        </div>
      </section>

      {/* Filosofi Kami */}
      <section className="container mx-auto px-6 py-24">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold">
            Nilai yang Kami Pegang
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Kami bukan hanya membuat produk, tapi menghadirkan solusi yang
            berakar dari filosofi kuat.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="flex flex-col items-center text-center">
            <Award className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold">Kualitas Tanpa Kompromi</h3>
            <p className="text-sm text-gray-600 mt-2">
              Setiap potongan kayu, setiap sambungan, kami pastikan solid dan
              berkelas. Kami percaya kualitas berbicara lebih dari apapun.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Handshake className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold">Kemitraan & Kepercayaan</h3>
            <p className="text-sm text-gray-600 mt-2">
              Kami membangun relasi jangka panjang. Transparansi dan komitmen
              menjadi dasar setiap proyek.
            </p>
          </div>
          <div className="flex flex-col items-center text-center">
            <Target className="h-10 w-10 text-brand-blue mb-4" />
            <h3 className="text-lg font-semibold">Desain yang Relevan</h3>
            <p className="text-sm text-gray-600 mt-2">
              Kami tak hanya menciptakan bentuk, tapi fungsi yang menyatu dengan
              kebutuhan dan gaya hidup modern.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-slate-50 py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Mari Wujudkan Ruang Impian Anda
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-8">
            Kami siap mendengar, merancang, dan mewujudkan ide Anda jadi
            kenyataan.
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
