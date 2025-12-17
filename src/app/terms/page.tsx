import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function TermsAndConditions() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Syarat dan Ketentuan
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 mb-8">
                <p className="text-emerald-800 font-medium">
                  Syarat dan Ketentuan ini berlaku mulai tanggal 1 Januari 2024 dan mengatur penggunaan website dan layanan dari <strong>Danik Setyaningrum Tempe</strong>.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Penerimaan Syarat dan Ketentuan</h2>
                <p className="mb-4">
                  Dengan mengakses atau menggunakan website dan layanan dari <strong>Danik Setyaningrum Tempe</strong>, Anda setuju untuk terikat oleh Syarat dan Ketentuan ini. Jika Anda tidak setuju dengan bagian mana pun dari syarat ini, Anda tidak boleh menggunakan layanan kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Deskripsi Layanan</h2>
                <p className="mb-4">
                  <strong>Danik Setyaningrum Tempe</strong> menyediakan layanan penjualan produk tempe kedelai berkualitas tinggi melalui:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Website resmi perusahaan</li>
                  <li>Pemesanan melalui telepon</li>
                  <li>Pemesanan melalui WhatsApp</li>
                  <li>Pemesanan langsung di lokasi produksi</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Produk dan Harga</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3.1 Kualitas Produk</h3>
                    <p className="mb-4">
                      Kami berkomitmen untuk menyediakan produk tempe kedelai dengan kualitas terbaik. Semua produk diproduksi dengan menggunakan kedelai pilihan dan proses fermentasi yang higienis.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3.2 Harga</h3>
                    <p className="mb-4">
                      Harga produk dapat berubah sewaktu-waktu tanpa pemberitahuan terlebih dahulu. Harga yang berlaku adalah harga pada saat pemesanan. Kami berhak menyesuaikan harga sesuai dengan kondisi pasar dan biaya produksi.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">3.3 Ketersediaan Produk</h3>
                    <p className="mb-4">
                      Ketersediaan produk tergantung pada stok yang ada. Kami berusaha untuk memenuhi semua pesanan, namun dalam kasus tertentu kami mungkin tidak dapat memenuhi pesanan karena keterbatasan produksi.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Proses Pemesanan</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4.1 Cara Pemesanan</h3>
                    <p className="mb-4">
                      Pemesanan dapat dilakukan melalui:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>WhatsApp: 0823-1059-8347</li>
                      <li>Telepon: 0823-1059-8347</li>
                      <li>Email: info@daniktempe.com</li>
                      <li>Langsung di lokasi produksi</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4.2 Konfirmasi Pesanan</h3>
                    <p className="mb-4">
                      Setiap pemesanan akan dikonfirmasi oleh tim kami. Konfirmasi meliputi detail pesanan, harga total, dan estimasi waktu pengiriman.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">4.3 Pembatalan Pesanan</h3>
                    <p className="mb-4">
                      Pembatalan pesanan dapat dilakukan maksimal 2 jam sebelum waktu pengiriman. Pembatalan setelah produk diproduksi akan dikenakan biaya produksi.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Pembayaran</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">5.1 Metode Pembayaran</h3>
                    <p className="mb-4">
                      Kami menerima metode pembayaran:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Tunai (Cash on Delivery)</li>
                      <li>Transfer Bank</li>
                      <li>E-Wallet (sesuai kesepakatan)</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">5.2 Waktu Pembayaran</h3>
                    <p className="mb-4">
                      Pembayaran harus dilakukan sebelum atau saat produk diterima. Untuk pembayaran transfer, bukti transfer harus dikirimkan sebelum pengiriman dilakukan.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Pengiriman</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">6.1 Area Pengiriman</h3>
                    <p className="mb-4">
                      Kami melayani pengiriman di seluruh area Kota Salatiga dan sekitarnya. Untuk pengiriman ke luar kota, dapat dilakukan dengan kesepakatan khusus.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">6.2 Biaya Pengiriman</h3>
                    <p className="mb-4">
                      Biaya pengiriman gratis untuk minimum order Rp 50.000 dalam area Salatiga. Untuk order di bawah minimum, akan dikenakan biaya pengiriman sesuai jarak.
                    </p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">6.3 Waktu Pengiriman</h3>
                    <p className="mb-4">
                      Pengiriman dilakukan pada hari yang sama untuk order sebelum pukul 10:00 WIB. Order setelah jam tersebut akan dikirim pada hari berikutnya.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Kebijakan Pengembalian</h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">7.1 Syarat Pengembalian</h3>
                    <p className="mb-4">
                      Produk dapat dikembalikan jika:
                    </p>
                    <ul className="list-disc pl-6 space-y-2">
                      <li>Produk rusak saat diterima</li>
                      <li>Produk tidak sesuai dengan spesifikasi yang dipesan</li>
                      <li>Ada masalah kualitas yang signifikan</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">7.2 Prosedur Pengembalian</h3>
                    <p className="mb-4">
                      Pengembalian harus dilaporkan maksimal 2 jam setelah produk diterima. Kami akan melakukan verifikasi dan penggantian produk jika syarat terpenuhi.
                    </p>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Hak Kekayaan Intelektual</h2>
                <p className="mb-4">
                  Semua konten di website ini termasuk teks, gambar, logo, dan desain adalah milik <strong>Danik Setyaningrum Tempe</strong> dan dilindungi oleh hukum hak kekayaan intelektual. Tidak ada bagian dari website ini yang boleh direproduksi tanpa izin tertulis.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Batasan Tanggung Jawab</h2>
                <p className="mb-4">
                  <strong>Danik Setyaningrum Tempe</strong> tidak bertanggung jawab atas:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Keterlambatan pengiriman yang disebabkan oleh faktor eksternal</li>
                  <li>Kerusakan produk setelah diterima pelanggan</li>
                  <li>Kerugian tidak langsung yang timbul dari penggunaan produk</li>
                  <li>Ketersediaan website yang terganggu karena maintenance</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Privasi Data</h2>
                <p className="mb-4">
                  Perlindungan data pribadi Anda diatur dalam Kebijakan Privasi kami yang terpisah. Dengan menggunakan layanan kami, Anda menyetujui pengumpulan dan penggunaan data sesuai dengan kebijakan privasi kami.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">11. Perubahan Syarat dan Ketentuan</h2>
                <p className="mb-4">
                  Kami berhak untuk mengubah Syarat dan Ketentuan ini kapan saja. Perubahan akan diberitahukan melalui website atau kontak langsung. Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menerima syarat yang diperbarui.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">12. Hukum yang Berlaku</h2>
                <p className="mb-4">
                  Syarat dan Ketentuan ini diatur oleh dan ditafsirkan sesuai dengan hukum Republik Indonesia. Setiap sengketa akan diselesaikan melalui musyawarah terlebih dahulu.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">13. Kontak Kami</h2>
                <p className="mb-4">
                  Jika Anda memiliki pertanyaan tentang Syarat dan Ketentuan ini, silakan hubungi kami:
                </p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-2">
                  <p><strong>Nama:</strong> Danik Setyaningrum</p>
                  <p><strong>Telepon/WhatsApp:</strong> 0823-1059-8347</p>
                  <p><strong>Email:</strong> info@daniktempe.com</p>
                  <p><strong>Alamat:</strong> Jl. Sumantri Raya No.3, Dukuh, Sidomukti, Salatiga, Jawa Tengah</p>
                </div>
              </section>

              <div className="mt-12 p-6 bg-emerald-50 rounded-lg">
                <p className="text-sm text-emerald-800">
                  <strong>Terakhir diperbarui:</strong> 1 Januari 2024<br />
                  <strong>Berlaku efektif:</strong> 1 Januari 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}