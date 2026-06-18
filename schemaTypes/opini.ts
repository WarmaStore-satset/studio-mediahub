import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'opini',
  title: 'Opini & Statement',
  type: 'document',
  fields: [
    defineField({
      name: 'judul',
      title: 'Judul Artikel',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL Otomatis)',
      type: 'slug',
      options: {
        source: 'judul',
        maxLength: 96,
      },
    }),
    defineField({
      name: 'tipe',
      title: 'Tipe Tulisan',
      type: 'string',
      options: {
        list: [
          { title: 'Opini', value: 'Opini' },
          { title: 'Statement', value: 'Statement' },
        ],
      },
    }),
    defineField({
      name: 'penulis',
      title: 'Nama Penulis',
      type: 'string',
    }),
    defineField({
      name: 'asalKota',
      title: 'Asal Kota',
      type: 'string',
    }),
    defineField({
      name: 'tanggal',
      title: 'Tanggal Rilis',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    }),
    defineField({
      name: 'ringkasan',
      title: 'Ringkasan Pendek (Muncul di Depan)',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'isiLengkap',
      title: 'Isi Lengkap Tulisan',
      type: 'array',
      of: [{ type: 'block' }] // Ini dia yang bikin tebal/miring aktif!
    }),
    defineField({
      name: 'aktif',
      title: 'Terbitkan (Centang jika disetujui)',
      type: 'boolean',
      initialValue: false,
    }),
  ],
})
