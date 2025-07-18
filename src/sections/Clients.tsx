import logoInstansi from "../asset/img/clients/logoInstansi.png";

const Clients = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            Dipercaya oleh Instansi Ternama
          </h2>
          <p className="mt-4 text-base text-gray-500">
            Terlibat langsung dalam pengadaan furnitur untuk lembaga strategis
            di Indonesia.
          </p>
        </div>

        <div className="mx-auto mt-16 flex justify-center items-center">
          <img
            src={logoInstansi}
            alt="Logo Instansi"
            className="object-contain max-w-4xl w-full h-auto rounded-lg shadow-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default Clients;
