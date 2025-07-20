import logoInstansi from "../asset/img/clients/logoInstansi.png";

const Clients = () => {
  return (
    <div className="bg-white py-16 sm:py-19">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-16">
          <div className="w-full lg:w-7/12">
            <img
              src={logoInstansi}
              alt="Logo Instansi"
              className="object-contain w-full max-h-[400px] rounded-xl shadow-lg border border-gray-200"
            />
          </div>
          <div className="w-full lg:w-5/12 text-center lg:text-left">
            <h2 className="text-base font-semibold leading-7 text-brand-blue">
              Di Percaya Instansi Pemerintahan
            </h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Membangun Kepercayaan Melalui Kualitas
            </p>
            <p className="mt-4 text-lg text-gray-600 leading-relaxed">
              Kami dipercaya dalam pengadaan furnitur untuk berbagai lembaga
              pemerintah dan perusahaan nasional. Komitmen kami adalah
              menghadirkan kualitas dan pelayanan terbaik.
            </p>

            {/* Garis dekoratif */}
            <div className="mt-6 w-28 h-1 bg-brand-blue rounded-full mx-auto lg:mx-0"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
