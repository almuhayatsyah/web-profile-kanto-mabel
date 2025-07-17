import {
  Building2,
  Shield,
  Award,
  Users,
  CheckCircle,
  Star,
} from "lucide-react";

const Partnership = () => {
  const governmentPartners = [
    {
      name: "Dinas Pendidikan DKI Jakarta",
      category: "Pendidikan",
      description: "Pengadaan furniture sekolah dan kantor",
      icon: Building2,
      color: "bg-blue-600",
      textColor: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      name: "Dinas Kesehatan Jawa Barat",
      category: "Kesehatan",
      description: "Furniture rumah sakit dan puskesmas",
      icon: Shield,
      color: "bg-green-600",
      textColor: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      name: "Kementerian PUPR",
      category: "Infrastruktur",
      description: "Furniture kantor dan fasilitas publik",
      icon: Building2,
      color: "bg-red-600",
      textColor: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      name: "Dinas Sosial Jawa Tengah",
      category: "Sosial",
      description: "Furniture panti dan balai sosial",
      icon: Users,
      color: "bg-purple-600",
      textColor: "text-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      name: "Polda Metro Jaya",
      category: "Keamanan",
      description: "Furniture kantor polisi dan asrama",
      icon: Shield,
      color: "bg-yellow-600",
      textColor: "text-yellow-600",
      bgColor: "bg-yellow-50",
    },
    {
      name: "Pemkot Surabaya",
      category: "Pemerintahan",
      description: "Furniture kantor walikota dan SKPD",
      icon: Building2,
      color: "bg-indigo-600",
      textColor: "text-indigo-600",
      bgColor: "bg-indigo-50",
    },
  ];

  const certifications = [
    {
      title: "Sertifikat ISO 9001:2015",
      description: "Sistem Manajemen Mutu Internasional",
    },
    {
      title: "SIUP & TDP Terdaftar",
      description: "Legalitas usaha yang lengkap",
    },
    {
      title: "PKP (Pengusaha Kena Pajak)",
      description: "Terdaftar resmi sebagai PKP",
    },
    {
      title: "Vendor Terdaftar SiPlah",
      description: "Rekanan resmi pengadaan pemerintah",
    },
  ];

  const achievements = [
    {
      icon: Award,
      title: "Vendor Terpercaya",
      value: "5 Tahun Berturut-turut",
      color: "text-yellow-500",
    },
    {
      icon: Building2,
      title: "Instansi Partner",
      value: "50+ Dinas",
      color: "text-blue-600",
    },
    {
      icon: CheckCircle,
      title: "Proyek Selesai",
      value: "200+ Proyek",
      color: "text-green-600",
    },
    {
      icon: Star,
      title: "Rating Kepuasan",
      value: "98% Excellent",
      color: "text-red-600",
    },
  ];

  return (
    <section
      id="partnership"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Partnership Pemerintah
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Kanto Mebel dipercaya oleh berbagai dinas pemerintahan untuk
            menyediakan furniture berkualitas tinggi dengan standar pengadaan
            yang ketat
          </p>
        </div>

        {/* Government Partners Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {governmentPartners.map((partner, index) => (
            <div
              key={index}
              className={`${partner.bgColor} p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 group cursor-pointer border-2 border-transparent hover:border-gray-200`}
            >
              <div className="flex items-start space-x-4">
                <div
                  className={`w-12 h-12 ${partner.color} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <partner.icon className="w-6 h-6 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-xs font-medium ${partner.textColor} bg-white px-2 py-1 rounded-full`}
                    >
                      {partner.category}
                    </span>
                  </div>

                  <h3
                    className={`font-bold text-lg ${partner.textColor} mb-2 group-hover:scale-105 transition-transform`}
                  >
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-600">{partner.description}</p>

                  <div className="mt-3 flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    <span className="text-xs text-gray-500">Kontrak Aktif</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 mb-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Pencapaian Partnership
          </h3>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="text-center group">
                <div
                  className={`w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <achievement.icon
                    className={`w-8 h-8 ${achievement.color}`}
                  />
                </div>
                <div className={`text-2xl font-bold ${achievement.color} mb-2`}>
                  {achievement.value}
                </div>
                <div className="text-gray-600 text-sm">{achievement.title}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-gradient-to-r from-red-600 to-blue-600 rounded-2xl p-8 md:p-12 text-white mb-12">
          <h3 className="text-3xl font-bold text-center mb-8">
            Sertifikasi & Legalitas
          </h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="bg-white bg-opacity-20 rounded-lg p-6 text-center hover:bg-opacity-30 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-white bg-opacity-30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-semibold mb-2">{cert.title}</h4>
                <p className="text-sm opacity-90">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Why Choose Us for Government */}
        <div className="text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Mengapa Pemerintah Memilih Kanto Mebel?
          </h3>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="group">
              <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-10 h-10 text-red-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Proses Transparan
              </h4>
              <p className="text-gray-600">
                Mengikuti prosedur pengadaan pemerintah dengan transparan dan
                akuntabel
              </p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Award className="w-10 h-10 text-yellow-500" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Standar Tinggi
              </h4>
              <p className="text-gray-600">
                Memenuhi standar kualitas dan spesifikasi teknis yang ditetapkan
                pemerintah
              </p>
            </div>

            <div className="group">
              <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <CheckCircle className="w-10 h-10 text-blue-600" />
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">
                Tepat Waktu
              </h4>
              <p className="text-gray-600">
                Komitmen penyelesaian proyek sesuai timeline yang telah
                disepakati
              </p>
            </div>
          </div>

          {/* Call to Action */}
        </div>
      </div>
    </section>
  );
};

export default Partnership;
