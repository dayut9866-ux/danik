import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-8">
              Kebijakan Privasi
            </h1>
            
            <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
              <div className="bg-emerald-50 border-l-4 border-emerald-600 p-6 mb-8">
                <p className="text-emerald-800 font-medium">
                  Kebijakan Privasi ini berlaku mulai tanggal 1 Januari 2024 dan berlaku untuk seluruh pengguna website dan layanan dari <strong>Danik Setyaningrum Tempe</strong>.
                </p>
              </div>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Informasi yang Kami Kumpulkan</h2>
                <p className="mb-4">
                  Kami dapat mengumpulkan informasi pribadi dari Anda saat Anda menghubungi kami melalui website, telepon, WhatsApp, atau email. Informasi yang kami kumpulkan meliputi:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Nama lengkap</li>
                  <li>Nomor telepon/WhatsApp</li>
                  <li>Alamat email</li>
                  <li>Alamat pengiriman</li>
                  <li>Informasi pesanan dan preferensi produk</li>
                  <li>Data transaksi pembelian</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Penggunaan Informasi</h2>
                <p className="mb-4">
                  Informasi yang kami kumpulkan digunakan untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Memproses dan mengelola pesanan Anda</li>
                  <li>Menyediakan layanan pelanggan yang lebih baik</li>
                  <li>Mengirimkan informasi tentang produk dan promosi</li>
                  <li>Menghubungi Anda untuk konfirmasi pesanan</li>
                  <li>Meningkatkan kualitas produk dan layanan kami</li>
                  <li>Memenuhi kebutuhan hukum dan peraturan yang berlaku</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Perlindungan Data</h2>
                <p className="mb-4">
                  <strong>Danik Setyaningrum Tempe</strong> berkomitmen untuk melindungi data pribadi Anda. Kami menerapkan langkah-langkah keamanan yang wajar untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mencegah akses tidak sah ke data pribadi</li>
                  <li>Menjaga keakuratan informasi</li>
                  <li>Memastikan penggunaan informasi yang sesuai</li>
                  <li>Menghancurkan informasi yang tidak lagi diperlukan</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Berbagi Informasi</h2>
                <p className="mb-4">
                  Kami tidak akan menjual, menyewakan, atau membagikan informasi pribadi Anda kepada pihak ketiga tanpa persetujuan Anda, kecuali dalam keadaan berikut:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Untuk memproses pembayaran dengan mitra pembayaran</li>
                  <li>Untuk pengiriman produk dengan jasa ekspedisi</li>
                  <li>Untuk memenuhi persyaratan hukum atau perintah pengadilan</li>
                  <li>Untuk melindungi hak, properti, atau keselamatan kami atau pelanggan lainnya</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Cookies dan Teknologi Pelacakan</h2>
                <p className="mb-4">
                  Website kami mungkin menggunakan cookies untuk meningkatkan pengalaman pengguna. Cookies adalah file teks kecil yang disimpan di browser Anda. Kami menggunakan cookies untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengingat preferensi Anda</li>
                  <li>Menganalisis traffic website</li>
                  <li>Menyediakan konten yang dipersonalisasi</li>
                  <li>Meningkatkan kinerja website</li>
                </ul>
                <p className="mt-4">
                  Anda dapat menonaktifkan cookies melalui pengaturan browser Anda, namun hal ini dapat mempengaruhi fungsionalitas website.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Hak Anda sebagai Pengguna</h2>
                <p className="mb-4">
                  Sebagai pengguna, Anda memiliki hak untuk:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Mengakses informasi pribadi yang kami simpan tentang Anda</li>
                  <li>Memperbaiki informasi yang tidak akurat</li>
                  <li>Meminta penghapusan informasi pribadi Anda</li>
                  <li>Menolak pemasaran langsung dari kami</li>
                  <li>Menarik persetujuan penggunaan data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Penyimpanan Data</h2>
                <p className="mb-4">
                  Informasi pribadi Anda akan disimpan selama diperlukan untuk tujuan pengumpulan data atau sesuai dengan periode retensi yang ditetapkan oleh peraturan yang berlaku. Data akan dihapus secara aman ketika tidak lagi diperlukan.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Link ke Pihak Ketiga</h2>
                <p className="mb-4">
                  Website kami mungkin mengandung link ke website pihak ketiga seperti WhatsApp, Facebook, atau Instagram. Kami tidak bertanggung jawab atas praktik privasi dari website pihak ketiga tersebut. Kami menyarankan Anda untuk membaca kebijakan privasi dari setiap website yang Anda kunjungi.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Perubahan Kebijakan Privasi</h2>
                <p className="mb-4">
                  Kami dapat memperbarui Kebijakan Privasi ini dari waktu ke waktu. Perubahan akan diberitahukan melalui website atau kontak langsung. Penggunaan terus menerus layanan kami setelah perubahan berarti Anda menerima kebijakan yang diperbarui.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">10. Kontak Kami</h2>
                <p className="mb-4">
                  Jika Anda memiliki pertanyaan atau keluhan tentang Kebijakan Privasi ini atau penggunaan informasi pribadi Anda, silakan hubungi kami:
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