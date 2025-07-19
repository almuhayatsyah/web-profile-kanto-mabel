import { MessageSquareHeart, Palette, Ruler, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "Material Berkualitas",
    description: "Kayu solid, kuat, dan tahan lama.",
    icon: ShieldCheck,
    bgColor: "bg-brand-blue",
  },
  {
    name: "Pesan Desain Sendiri",
    description: "Custom ukuran & gaya sesuai kebutuhan.",
    icon: Ruler,
    bgColor: "bg-brand-red",
  },
  {
    name: "Finishing Rapi",
    description: "Warna tahan gores & tahan lama.",
    icon: Palette,
    bgColor: "bg-brand-yellow",
  },
  {
    name: "Respon Cepat",
    description: "Bisa konsultasi langsung & fast respon.",
    icon: MessageSquareHeart,
    bgColor: "bg-slate-800",
  },
];

const Features = () => {
  return (
    <section id="fitur" className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue">
            Alasan Memilih Kami
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Kanto Mebel Bukan Sekadar Furnitur
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami bantu wujudkan ruang yang fungsional, estetis, dan sesuai
            selera Anda.
          </p>
        </div>
        <div className="mt-16 max-w-2xl mx-auto sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => (
              <div
                key={feature.name}
                className="flex flex-col bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-xl text-white ${feature.bgColor}`}
                >
                  <feature.icon className="h-7 w-7" aria-hidden="true" />
                </div>
                <dt className="mt-6 text-lg font-semibold leading-7 text-gray-900">
                  {feature.name}
                </dt>
                <dd className="mt-2 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
};

export default Features;
