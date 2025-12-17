"use client"

import { useState, useEffect } from 'react'
import { 
  CheckCircle, 
  Leaf, 
  Award, 
  Clock, 
  Truck, 
  Users,
  Star,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  const testimonials = [
    {
      name: "Bapak Ahmad",
      role: "Pemilik Warung Makan",
      content: "Tempe dari Danik Setyaningrum selalu segar dan berkualitas. Pelanggan saya sangat suka!",
      rating: 5
    },
    {
      name: "Ibu Siti",
      role: "Pedagang Sayur",
      content: "Harga terjangkau, kualitas premium. Sudah 2 tahun menjadi langganan setia.",
      rating: 5
    },
    {
      name: "Pak Budi",
      role: "Pemilik Restoran",
      content: "Pelayanan memuaskan, pengiriman tepat waktu. Tempe nya selalu dalam kondisi sempurna.",
      rating: 5
    }
  ]

  const products = [
    {
      name: "Tempe Segar",
      description: "Tempe segar langsung dari produksi, tekstur padat dan rasa autentik",
      icon: "🌱",
      price: "Rp 8.000/pack"
    },
    {
      name: "Tempe Frozen",
      description: "Tempe beku dengan kualitas terjaga, tahan hingga 3 bulan",
      icon: "❄️",
      price: "Rp 10.000/pack"
    },
    {
      name: "Tempe Organik",
      description: "Tempe dari kedelai organik pilihan, tanpa pestisida dan pengawet",
      icon: "🍃",
      price: "Rp 15.000/pack"
    },
    {
      name: "Tempe Kemasan",
      description: "Tempe kemasan higienis, siap distribusi ke retail dan supermarket",
      icon: "📦",
      price: "Rp 12.000/pack"
    }
  ]

  const features = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Bahan Berkualitas",
      description: "Menggunakan kedelai pilihan segar dan non-GMO"
    },
    {
      icon: <Award className="w-8 h-8 text-emerald-600" />,
      title: "Produk Premium",
      description: "Kualitas terbaik dengan proses fermentasi sempurna"
    },
    {
      icon: <Clock className="w-8 h-8 text-emerald-600" />,
      title: "Produksi Harian",
      description: "Produksi segar setiap hari untuk menjamin kualitas"
    },
    {
      icon: <Truck className="w-8 h-8 text-emerald-600" />,
      title: "Pengiriman Cepat",
      description: "Pengantaran tepat waktu ke seluruh area Salatiga"
    },
    {
      icon: <Users className="w-8 h-8 text-emerald-600" />,
      title: "Pelayanan Terbaik",
      description: "Layanan pelanggan yang ramah dan responsif"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-emerald-600" />,
      title: "Bergaransi",
      description: "Jaminan kepuasan atau penggantian produk"
    }
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      <Header />
      
      {/* Hero Section */}
      <section id="home" className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Tempe Kedelai
                  <span className="text-emerald-600 block">Premium Berkualitas</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Produsen tempe kedelai terpercaya di Salatiga. 
                  <span className="font-semibold text-emerald-700"> Danik Setyaningrum</span> 
                  menyediakan tempe segar dengan kualitas terbaik untuk kebutuhan usaha Anda.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://wa.me/6282310598347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  Pesan Sekarang
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-emerald-600 border-2 border-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200"
                >
                  Hubungi Kami
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">500+</div>
                  <div className="text-sm text-gray-600">Pelanggan Setia</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">5+</div>
                  <div className="text-sm text-gray-600">Tahun Pengalaman</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-emerald-600">100%</div>
                  <div className="text-sm text-gray-600">Kualitas Terjamin</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10">
                <div className="bg-white rounded-2xl shadow-2xl p-8">
                  <div className="aspect-square bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-xl overflow-hidden">
                    <Image
                      src="/tempe-fresh.jpg"
                      alt="Tempe Segar Berkualitas"
                      width={400}
                      height={400}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg z-20">
                FRESH
              </div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center text-gray-900 font-bold text-lg shadow-lg z-20">
                PREMIUM
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Tentang <span className="text-emerald-600">Danik Setyaningrum</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Produsen tempe kedelai profesional dengan komitmen kualitas dan kepuasan pelanggan
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">
                  Produsen Tempe Terpercaya di Salatiga
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  <span className="font-semibold text-emerald-700">Danik Setyaningrum</span> adalah produsen tempe kedelai yang telah berpengalaman lebih dari 5 tahun. 
                  Kami menggunakan kedelai pilihan berkualitas tinggi dan proses fermentasi tradisional yang higienis.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Setiap produk tempe kami diproduksi dengan standar kualitas tinggi, mulai dari pemilihan bahan baku hingga pengemasan yang higienis. 
                  Kami memastikan setiap tempe yang keluar dari produksi kami memiliki tekstur padat, rasa autentik, dan kandungan gizi yang optimal.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">100%</div>
                  <div className="text-sm text-gray-700">Kedelai Pilihan</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">Harian</div>
                  <div className="text-sm text-gray-700">Produksi Segar</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">Sertifikat</div>
                  <div className="text-sm text-gray-700">P-IRT Halal</div>
                </div>
                <div className="bg-emerald-50 p-4 rounded-lg">
                  <div className="text-2xl font-bold text-emerald-600 mb-1">24 Jam</div>
                  <div className="text-sm text-gray-700">Pelayanan</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-emerald-50 rounded-2xl p-8">
                <div className="aspect-video bg-white rounded-xl overflow-hidden shadow-inner">
                  <Image
                    src="/production.jpg"
                    alt="Fasilitas Produksi Modern"
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Produk Unggulan Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Berbagai jenis tempe berkualitas tinggi untuk memenuhi kebutuhan bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                <div className="h-48 bg-gradient-to-br from-emerald-100 to-emerald-50 flex items-center justify-center">
                  <div className="text-6xl">{product.icon}</div>
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <span className="text-lg font-bold text-emerald-600">{product.price}</span>
                    <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      Pesan
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Galeri Produk Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat kualitas dan berbagai olahan tempe dari <span className="text-emerald-700 font-semibold">Danik Setyaningrum</span>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square">
                <Image
                  src="/tempe-fresh.jpg"
                  alt="Tempe Segar"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Tempe Segar</h3>
                  <p className="text-sm">Kualitas premium langsung dari produksi</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square">
                <Image
                  src="/tempe-dishes.jpg"
                  alt="Olahan Tempe"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Olahan Tempe</h3>
                  <p className="text-sm">Berbagai menu lezat dari tempe</p>
                </div>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-square">
                <Image
                  src="/production.jpg"
                  alt="Fasilitas Produksi"
                  width={400}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-xl font-bold">Fasilitas Produksi</h3>
                  <p className="text-sm">Bersih, higienis, dan modern</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Mengapa Memilih Kami?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Keunggulan yang membuat <span className="text-emerald-700 font-semibold">Danik Setyaningrum</span> menjadi pilihan terbaik
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center space-y-4 p-6">
                <div className="flex justify-center">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Apa Kata Pelanggan Kami
            </h2>
            <p className="text-xl text-emerald-100 max-w-3xl mx-auto">
              Kepuasan pelanggan adalah prioritas utama kami
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <div className="flex items-center mb-6">
                {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-xl text-white mb-8 leading-relaxed">
                "{testimonials[activeTestimonial].content}"
              </p>
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-white text-lg">
                    {testimonials[activeTestimonial].name}
                  </div>
                  <div className="text-emerald-200">
                    {testimonials[activeTestimonial].role}
                  </div>
                </div>
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                        index === activeTestimonial ? 'bg-white' : 'bg-white/50'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Hubungi Kami
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Siap melayani kebutuhan tempe berkualitas untuk bisnis Anda
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informasi Kontak
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Phone className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Telepon/WhatsApp</h4>
                      <a href="tel:082310598347" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        0823-1059-8347
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <Mail className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                      <a href="mailto:info@daniktempe.com" className="text-emerald-600 hover:text-emerald-700 font-medium">
                        info@daniktempe.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-emerald-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Alamat</h4>
                      <p className="text-gray-600">
                        Jl. Sumantri Raya No.3, Dukuh, Sidomukti<br />
                        Kota Salatiga, Provinsi Jawa Tengah
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-emerald-600 rounded-xl shadow-lg p-8 text-white">
                <h3 className="text-2xl font-bold mb-4">
                  Pesan Sekarang Juga!
                </h3>
                <p className="text-emerald-100 mb-6">
                  Dapatkan penawaran khusus untuk pelanggan baru dan pengiriman gratis untuk area Salatiga.
                </p>
                <a
                  href="https://wa.me/6282310598347"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center bg-white text-emerald-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  <Phone className="w-5 h-5 mr-2" />
                  WhatsApp Order
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Jam Operasional
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Senin - Sabtu</span>
                  <span className="text-emerald-600 font-semibold">06:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-gray-100">
                  <span className="font-medium text-gray-700">Minggu</span>
                  <span className="text-emerald-600 font-semibold">06:00 - 12:00</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium text-gray-700">Status</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold">
                    Buka Sekarang
                  </span>
                </div>
              </div>

              <div className="mt-8 p-6 bg-emerald-50 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-3">Layanan Pengiriman</h4>
                <ul className="space-y-2 text-sm text-gray-600">
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-emerald-600 mr-2" />
                    Pengiriman ke seluruh area Salatiga
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-emerald-600 mr-2" />
                    Minimum order Rp 50.000 (gratis ongkir)
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-emerald-600 mr-2" />
                    Pengiriman same day untuk order sebelum jam 10
                  </li>
                  <li className="flex items-center">
                    <ChevronRight className="w-4 h-4 text-emerald-600 mr-2" />
                    Melayani partai besar dan kecil
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-emerald-600 to-green-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Siap Menjadi Pelanggan Setia Kami?
          </h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Dapatkan tempe berkualitas premium dengan harga terjangkau langsung dari produsen terpercaya.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/6282310598347"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-white text-emerald-600 px-8 py-4 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              <Phone className="w-5 h-5 mr-2" />
              Pesan Sekarang
            </a>
            <a
              href="tel:082310598347"
              className="inline-flex items-center justify-center bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-200"
            >
              <Phone className="w-5 h-5 mr-2" />
              Telepon Langsung
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}