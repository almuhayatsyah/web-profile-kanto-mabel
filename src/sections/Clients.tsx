import logoBapeten from "../asset/img/clients/bapeten.png";
import logoKemlu from "../asset/img/clients/kemlu.png";
import logoKpu from "../asset/img/clients/kpu.png";

const clients = [
  { name: "Komisi Pemilihan Umum", logo: logoKpu },
  { name: "BAPETEN", logo: logoBapeten },
  { name: "Badan Narkotika Nasional", logo: logoKemlu },
];

const Clients = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none text-center">
          <h2 className="text-2xl font-bold text-gray-900 sm:text-4xl">
            Dipercaya oleh Instansi Ternama
          </h2>
          <p className="mt-4 text-base text-gray-600">
            Terlibat langsung dalam pengadaan furnitur untuk lembaga strategis
            di Indonesia.
          </p>
        </div>

        <div className="mx-auto mt-16 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 items-center">
          {clients.map((client) => (
            <div
              key={client.name}
              className="flex justify-center items-center p-4 bg-white rounded-lg shadow-sm"
            >
              <img
                src={client.logo}
                alt={client.name}
                className="object-contain max-w-[100px] h-auto aspect-[1/1] transition-transform hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
