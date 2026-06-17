import {defineField, defineType} from 'sanity'

export const schemaTypes = [

  // 1. SKEMA MEDIA
  defineType({
    name: 'media',
    title: 'Media',
    type: 'document',
    fields: [
      defineField({
        name: 'nama',
        title: 'Nama Media',
        type: 'string',
      }),
      defineField({
        name: 'logo',
        title: 'Logo',
        type: 'image',
      }),
      defineField({
        name: 'url',
        title: 'URL',
        type: 'url',
      }),
      defineField({
        name: 'urutan',
        title: 'Urutan',
        type: 'number',
      }),
      defineField({
        name: 'aktif',
        title: 'Aktif',
        type: 'boolean',
        initialValue: true,
      }),
    ],
  }),

  // 2. SKEMA OPINI & STATEMENT
  defineType({
    name: 'opini',
    title: 'Daftar Opini & Statement Warga',
    type: 'document',
    fields: [
      defineField({
        name: 'tipe',
        title: 'Tipe Tulisan',
        type: 'string',
        options: {
          list: [
            {title: 'Statement', value: 'Statement'},
            {title: 'Opini', value: 'Opini'}
          ],
          layout: 'radio' // Bikin bentuknya jadi tombol pilihan bulat di dashboard
        },
        initialValue: 'Statement' // Nilai default kalau gak dipilih
      }),
      defineField({
        name: 'judul',
        title: 'Judul Opini',
        type: 'string',
      }),
      defineField({
        name: 'slug',
        title: 'Slug (ID Unik)',
        type: 'slug',
        options: {
          source: 'judul',
          maxLength: 96,
        },
      }),
      defineField({
        name: 'penulis',
        title: 'Nama Penulis',
        type: 'string',
      }),
      defineField({
        name: 'asalKota',
        title: 'Asal Kota/Daerah',
        type: 'string',
      }),
      defineField({
        name: 'tanggal',
        title: 'Tanggal Rilis',
        type: 'date',
        options: {
          dateFormat: 'YYYY-MM-DD',
        }
      }),
      defineField({
        name: 'ringkasan',
        title: 'Ringkasan Pendek (Untuk di Kartu)',
        type: 'text',
        rows: 3,
      }),
      defineField({
        name: 'isiLengkap',
        title: 'Isi Tulisan Lengkap',
        type: 'text',
        rows: 10,
      }),
      defineField({
        name: 'aktif',
        title: 'Tampilkan di Web?',
        type: 'boolean',
        initialValue: true,
      }),
    ],
  }),

]
