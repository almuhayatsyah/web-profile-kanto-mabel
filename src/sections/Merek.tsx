import logomerek from "../asset/img/merek/merek.png";

const Merek = () => {
  return (
    <div className="bg-gray-50 py-16 sm:py-19">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue">
            Dipercaya oleh Merek Ternama
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Merek-Merek Strategis Kami
          </p>
        </div>

        {/* Bagian Konten: Gambar kiri, caption kanan */}
        <div className="mt-16 flex flex-col lg:flex-row items-center gap-8 lg:gap-16">
          {/* Gambar Logo */}
          <div className="w-full lg:w-1/2">
            <img
              src={logomerek}
              alt="Logo Merek"
              className="object-contain w-full h-auto rounded-xl shadow-md border border-gray-200"
            />
          </div>

          {/* Caption */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">
            <p className="text-gray-500 text-lg italic">
              “Mitra-mitra terbaik kami yang telah mempercayakan pengadaan
              furnitur kepada KANTO MEBEL.”
            </p>
            <p className="mt-4 text-base text-gray-600">
              Merek di samping adalah beberapa brand strategis yang bekerja sama
              dengan kami untuk pengadaan furnitur kantor, rumah, maupun proyek
              institusi besar lainnya.
            </p>
            <div className="mt-6 w-28 h-1 bg-brand-blue rounded-full mx-auto lg:mx-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Merek;
