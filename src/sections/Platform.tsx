import logoBelapengadaan from "../asset/img/belapengadaan.png";
import logoBlibli from "../asset/img/blibli.png";
import logoEcatalog from "../asset/img/ecatalog.png";
import logoLpse from "../asset/img/lpse.png";
import logoPadiumkm from "../asset/img/padiumkm.png";
import logoShopee from "../asset/img/shopee.png";
import logoTokopedia from "../asset/img/tokopedia.png";

const platforms = [
  { name: "Blibli", logo: logoBlibli },
  { name: "Tokopedia", logo: logoTokopedia },
  { name: "Shopee", logo: logoShopee },
  { name: "E-catalogue", logo: logoEcatalog },
  { name: "Padiumkm", logo: logoPadiumkm },
  { name: "Belapengadaan", logo: logoBelapengadaan },
  { name: "LPSE", logo: logoLpse },
];

const Platform = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-base font-semibold leading-7 text-brand-blue">
          Layanan Pengadaan
        </h2>
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Tersedia di Berbagai Platform Terpercaya
        </p>
        <div className="mx-auto mt-16 max-w-5xl grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:grid-cols-4">
          {platforms.map((platform) => (
            <div
              key={platform.name}
              className="flex justify-center items-center transition-transform hover:scale-110"
            >
              <img
                className="max-h-16 sm:max-h-20 w-auto object-contain"
                src={platform.logo}
                alt={platform.name}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Platform;
