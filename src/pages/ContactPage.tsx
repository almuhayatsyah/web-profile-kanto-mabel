import { Building, Mail, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <section id="kontak" className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-gray-900">Hubungi Kami</h2>
          <p className="mt-3 text-lg text-gray-600">
            Ada pertanyaan? Tim kami siap bantu kapan pun.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Kiri: Informasi Kontak + Google Maps */}
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
              desc="kantomebel@gmail.com"
            />

            {/* Google Maps Embed */}
            <div className="rounded-lg overflow-hidden shadow-sm">
              <iframe
                title="Lokasi Mebel KANTO"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.832121961944!2d95.3192994741743!3d5.548290994452401!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x304037a5042f9177%3A0x71176c7ad2a87f26!2sTeuku%20Umar%2C%20Banda%20Aceh!5e0!3m2!1sid!2sid!4v1721295488000!5m2!1sid!2sid"
                width="100%"
                height="250"
                className="w-full h-[250px] border-0"
                loading="lazy"
                allowFullScreen={false}
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* Kanan: Formulir Kontak */}
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
                  className="mt-2 w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-900 focus:border-brand-blue focus:ring-brand-blue"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 w-full rounded-md bg-brand-blue px-4 py-2.5 text-white hover:bg-opacity-90 transition"
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

// Komponen Kartu Kontak
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

// Komponen Input Form
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
