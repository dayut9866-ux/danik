import { Phone, Mail, MapPin, Clock, Facebook, Instagram, MessageCircle } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-br from-emerald-900 via-emerald-800 to-green-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="relative w-12 h-12">
                <Image
                  src="/logo.png"
                  alt="Danik Setyaningrum Tempe"
                  width={48}
                  height={48}
                  className="rounded-lg object-cover"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">
                  Danik Setyaningrum
                </h3>
                <p className="text-emerald-200 text-sm">
                  Tempe Kedelai Premium
                </p>
              </div>
            </div>
            <p className="text-emerald-100 text-sm leading-relaxed">
              Produsen tempe kedelai berkualitas tinggi dengan bahan baku pilihan dan proses fermentasi tradisional yang higienis.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-emerald-700 hover:bg-emerald-600 rounded-full flex items-center justify-center transition-colors duration-200"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Menu Cepat
            </h4>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#about" className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#products" className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm">
                  Produk Kami
                </a>
              </li>
              <li>
                <a href="#features" className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm">
                  Keunggulan
                </a>
              </li>
              <li>
                <a href="#contact" className="text-emerald-100 hover:text-white transition-colors duration-200 text-sm">
                  Kontak
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Hubungi Kami
            </h4>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100 text-sm">Telepon/WhatsApp</p>
                  <a href="tel:082310598347" className="text-white hover:text-emerald-200 transition-colors font-medium">
                    0823-1059-8347
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100 text-sm">Email</p>
                  <a href="mailto:info@daniktempe.com" className="text-white hover:text-emerald-200 transition-colors font-medium">
                    info@daniktempe.com
                  </a>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-emerald-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100 text-sm">Alamat</p>
                  <p className="text-white text-sm leading-relaxed">
                    Jl. Sumantri Raya No.3, Dukuh, Sidomukti, Salatiga, Jawa Tengah
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Business Hours */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-4">
              Jam Operasional
            </h4>
            <div className="space-y-2">
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100 text-sm">Senin - Sabtu</p>
                  <p className="text-white font-medium">06:00 - 17:00</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-emerald-300 flex-shrink-0" />
                <div>
                  <p className="text-emerald-100 text-sm">Minggu</p>
                  <p className="text-white font-medium">06:00 - 12:00</p>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-emerald-800/50 rounded-lg">
              <p className="text-emerald-100 text-sm mb-2">
                📞 Pesanan dapat dilakukan melalui WhatsApp
              </p>
              <a
                href="https://wa.me/6282310598347"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors duration-200"
              >
                WhatsApp Order
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-emerald-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-emerald-200 text-sm">
                © {currentYear} Danik Setyaningrum Tempe. Hak Cipta Dilindungi.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-emerald-200 hover:text-white transition-colors text-sm">
                Kebijakan Privasi
              </a>
              <a href="/terms" className="text-emerald-200 hover:text-white transition-colors text-sm">
                Syarat & Ketentuan
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}