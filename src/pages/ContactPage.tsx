import { Building, Mail, Phone } from "lucide-react";
const ContactPage = () => {
  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Hubungi Kami</h2>
          <p className="mt-3 text-lg text-gray-600">
            Ada pertanyaan? Tim kami siap bantu kapan pun.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          {/* Kartu Informasi Kontak */}
          <div className="grid gap-6">
            <ContactCard
              icon={<Building className="h-6 w-6 text-brand-blue" />}
              title="Alamat Workshop"
              desc="Jl. Teuku Umar No. 123, Banda Aceh"
            />
            <ContactCard
              icon={<Phone className="h-6 w-6 text-brand-blue" />}
              title="Telepon / WhatsApp"
              desc="+62 852-7771-1778"
            />
            <ContactCard
              icon={<Mail className="h-6 w-6 text-brand-blue" />}
              title="Email"
              desc="kontak@mebelkanto.com"
            />
          </div>

          {/* Formulir Kontak */}
          <div className="rounded-xl bg-white p-8 shadow-md">
            <h3 className="mb-6 text-2xl font-semibold text-gray-800">
              Kirim Pesan
            </h3>
            <form className="space-y-5">
              <Input label="Nama Lengkap" name="name" type="text" />
              <Input label="Email" name="email" type="email" />
              <Input label="Nomor Telepon" name="phone" type="tel" />
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Pesan
                </label>
                <textarea
                  name="message"
                  id="message"
                  rows={4}
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm focus:border-brand-blue focus:ring-brand-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-brand-blue px-4 py-2.5 text-white hover:bg-opacity-90"
              >
                Kirim Pesan
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactCard = ({
  icon,
  title,
  desc,
}: {
  icon: React.ReactNode;
  title: string;
  desc: string;
}) => (
  <div className="flex items-start gap-4 rounded-lg bg-white p-5 shadow-sm hover:shadow-md transition">
    <div className="rounded-full bg-slate-100 p-3">{icon}</div>
    <div>
      <h4 className="text-base font-semibold text-gray-900">{title}</h4>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  </div>
);

// Komponen input form
const Input = ({
  label,
  name,
  type,
}: {
  label: string;
  name: string;
  type: string;
}) => (
  <div>
    <label htmlFor={name} className="block text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      autoComplete={name}
      className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-brand-blue focus:ring-brand-blue"
    />
  </div>
);

export default ContactPage;
