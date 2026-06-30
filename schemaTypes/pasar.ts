export default {
  name: 'pasar',
  title: 'Pasar MediaHub',
  type: 'document',
  fields: [
    {
      name: 'judul',
      title: 'Nama Produk / Jasa',
      type: 'string',
      validation: Rule => Rule.required().min(5).error('Nama produk minimal 5 karakter, Bree!')
    },
    {
      name: 'jenisPasar',
      title: 'Jenis Pasar / Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Pasar Warga (Lapak Umum & Kreatif)', value: 'warga' },
          { title: 'Pasar Mediahub (Rekomendasi Admin/Affiliate)', value: 'mediahub' }
        ],
        layout: 'radio' // Bikin tampilan radio button biar tinggal klik di admin panel
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'harga',
      title: 'Harga Produk',
      type: 'string',
      description: 'Contoh: Rp15.000, Rp50.000/jam, atau Gratis',
      validation: Rule => Rule.required()
    },
    {
      name: 'gambar',
      title: 'Foto Produk',
      type: 'image',
      options: {
        hotspot: true // Biar bisa di-crop otomatis pas di-upload
      },
      validation: Rule => Rule.required()
    },
    {
      name: 'tautanLink',
      title: 'Link Tujuan (WhatsApp / Affiliate)',
      type: 'url',
      description: 'Untuk Pasar Warga masukkan link wa.me/nomorhp. Untuk Pasar Mediahub masukkan link produk.',
      validation: Rule => Rule.required()
    },
    {
      name: 'aktif',
      title: 'Tampilkan di Website?',
      type: 'boolean',
      initialValue: true
    }
  ]
}
