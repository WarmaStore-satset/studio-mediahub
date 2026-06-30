import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'pasar',
  title: 'Pasar MediaHub',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      title: 'Nama Produk / Jasa',
      type: 'string',
    }),
    defineField({
      name: 'jenisPasar',
      title: 'Jenis Pasar / Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Pasar Warga (Lapak Umum & Kreatif)', value: 'warga' },
          { title: 'Pasar Mediahub (Rekomendasi Admin/Affiliate)', value: 'mediahub' }
        ],
        layout: 'radio'
      },
    }),
    defineField({
      name: 'harga',
      title: 'Harga Produk',
      type: 'string',
      description: 'Contoh: Rp15.000, Rp50.000/jam, atau Gratis',
    }),
    defineField({
      name: 'gambar',
      title: 'Foto Produk',
      type: 'image',
      options: {
        hotspot: true
      },
    }),
    defineField({
      name: 'tautanLink',
      title: 'Link Tujuan (WhatsApp / Affiliate)',
      type: 'url',
      description: 'Untuk Pasar Warga masukkan link wa.me/nomorhp. Untuk Pasar Mediahub masukkan link produk.',
    }),
    defineField({
      name: 'aktif',
      title: 'Tampilkan di Website?',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
