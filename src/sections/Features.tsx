import { MessageSquareHeart, Palette, Ruler, ShieldCheck } from "lucide-react";

const features = [
  {
    name: "Kualitas Terjamin",
    description:
      "Dibuat dari material kayu solid pilihan yang diproses secara teliti untuk menjamin kekuatan dan ketahanan produk.",
    icon: ShieldCheck,
    bgColor: "bg-brand-blue",
  },
  {
    name: "Desain Kustom",
    description:
      "Wujudkan furnitur impian Anda. Kami siap melayani pesanan kustom sesuai dengan ukuran, model, dan gaya yang Anda inginkan.",
    icon: Ruler,
    bgColor: "bg-brand-red",
  },
  {
    name: "Finishing Premium",
    description:
      "Menggunakan teknik dan bahan finishing berkualitas tinggi yang tidak hanya indah, tapi juga melindungi mebel dari cuaca dan goresan.",
    icon: Palette,
    bgColor: "bg-brand-yellow",
  },
  {
    name: "Layanan Responsif",
    description:
      "Tim kami siap membantu Anda dari tahap konsultasi desain hingga proses pengiriman dengan ramah dan solutif.",
    icon: MessageSquareHeart,
    bgColor: "bg-slate-800",
  },
];

const Features = () => {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-2xl mx-auto lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-brand-blue">
            Keunggulan Kami
          </h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Mengapa Memilih Mebel KANTO?
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Kami tidak hanya membuat mebel, kami menciptakan karya seni
            fungsional yang dibangun untuk bertahan lama dan memperindah ruangan
            Anda.
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
