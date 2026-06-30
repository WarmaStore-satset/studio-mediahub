import { defineField, defineType } from 'sanity'
import opini from './opini'
import pasar from './pasar' // <-- 1. IMPORT FILE PASAR.TS DI SINI, COK!

// 1. SKEMA MEDIA (Biar rapi tetep gua taruh di sini dulu)
const mediaSchema = defineType({
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
})

// 2. GABUNGKAN SEMUA SKEMA (media, opini, dan pasar) DI SINI!
export const schemaTypes = [mediaSchema, opini, pasar]
