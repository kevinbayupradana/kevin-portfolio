# Mengganti gambar dan CV

Gambar yang dipakai halaman berada di `images/`:

- `hero-rail-background.webp` - latar semi-transparan untuk hero.
- `kevin-workshop-cutout.webp` - foto baju workshop di kiri; latar kotak sudah dihapus.
- `kevin-welding-blue.webp` - foto baju kerja biru pada komposisi hero.
- `kevin-formal-skin-matched.webp` - foto jas hitam pada komposisi hero.
- `thesis-laser-welding.webp` - gambar proyek tugas akhir.
- `high-speed-train-cfd.webp` - gambar proyek desain kereta cepat dan CFD.
- `poster-unavilable.webp` - gambar sementara untuk dua proyek PKM-AI.

Cara termudah mengganti salah satu gambar: simpan gambar baru di `images/` dengan nama file yang sama. Website akan memakai gambar baru setelah halaman di-refresh. Gambar hero dan dua foto diatur di template hero pada `../script.js`; gambar proyek diatur pada daftar `projects` di bagian atas file itu.

## CV

Simpan file CV PDF Anda di folder ini dengan nama persis:

`CV-Kevin-Bayu-Pradana.pdf`

Tombol **Unduh CV** di website akan otomatis mengunduh file tersebut.

Jika ingin memakai nama atau lokasi lain, ubah nilai `cvUrl` pada objek `profile` di `../script.js`.
