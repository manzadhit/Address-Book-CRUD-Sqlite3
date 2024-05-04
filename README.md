# Address Book (CRUD) SQLITE3

## Gambaran Umum Proyek

Address Book SQLite3 adalah sebuah aplikasi buku alamat sederhana yang menggunakan SQLite3 sebagai basis datanya. Aplikasi ini memungkinkan pengguna untuk mengelola kontak dan mengelompokkannya ke dalam grup yang berbeda.

## Persyaratan Sistem

- Node.js (versi terbaru yang stabil)
- SQLite3 (terinstal secara otomatis bersama dengan aplikasi ini)

## Instalasi dan Penggunaan

Untuk menginstal dan menjalankan proyek ini, ikuti langkah-langkah berikut:
  1.  Unduh atau clone repositori proyek ini ke direktori lokal Anda.
  ```bash
  https://github.com/manzadhit/Address-Book-CRUD-Sqlite3.git
  ```
  2.  Instal dependensi dengan menjalankan `npm install`.
  3.  Jalankan perintah node index.js untuk melihat daftar perintah yang tersedia.
  ```bash
  node src/index.js
  ```

## Penggunaan

Untuk menggunakan aplikasi ini, jalankan perintah `node src/index.js` di terminal atau command prompt untuk melihat daftar perintah yang tersedia. Beberapa perintah utama yang tersedia adalah:

- `node src/index.js createContact <name> <phoneNumber> <company> <email>`: Membuat kontak baru.
- `node src/index.js updateContact <id> <name> <phoneNumber> <company> <email>`: Memperbarui kontak yang ada.
- `node src/index.js deleteContact <id>`: Menghapus kontak.
- `node src/index.js showContact`: Menampilkan daftar kontak.
- `node src/index.js createGroups <groupName>`: Membuat grup baru.
- `node src/index.js updateGroups <id> <groupName>`: Memperbarui nama grup.
- `node src/index.js deleteGroups <id>`: Menghapus grup.
- `node src/index.js showGroups`: Menampilkan daftar grup.
- `node src/index.js createContactGroups <contactId> <groupId>`: Menambahkan kontak ke dalam grup.
- `node src/index.js updateContactGroups <id> <contactId> <groupId>`: Memperbarui anggota grup.
- `node src/index.js deleteContactGroups <id>`: Menghapus anggota dari grup.

Untuk contoh penggunaan atau skenario lebih lanjut, jalankan perintah `node src/index.js` dan ikuti petunjuk yang diberikan.

## Struktur Proyek

```
address-book-CRUD-sqlite3/
├── src/
│ ├── connection/
│ │ └── connection.js
│ ├── controllers/
│ │ ├── contactController.js
│ │ ├── contactGroupController.js
│ │ └── groupController.js
│ ├── models/
│ │ ├── Contact.js
│ │ ├── Group.js
│ │ └── ContactGroup.js
│ ├── views/
│ │ ├── contactViews.js
│ │ ├── contactGroupViews.js
│ │ └── groupViews.js
│ ├── schema/
│ │ └── schema.js
│ └── index.js
├── address_book.db
└── README.md
```

Proyek ini menggunakan konsep MVC (Model-View-Controller) dan memiliki struktur direktori sebagai berikut:

- `connection/` : Direktori ini berisi file connection.js yang mengatur koneksi ke basis data SQLite3.
- `models/`: Berisi file-file yang mendefinisikan skema data untuk pasien dan karyawan.
- `views/`: Berisi file-file tampilan (jika ada) untuk menampilkan data atau antarmuka pengguna.
- `controllers/`: Berisi file-file yang menangani logika bisnis dan operasi pada data pasien dan karyawan.
- `schema/`: Direktori ini berisi file schema.js yang mendefinisikan skema untuk membuat tabel-tabel dalam basis data SQLite3.
- `index.js`: File utama yang menjalankan aplikasi dan menangani perintah-perintah dari pengguna.
- `address_book.db` : File basis data SQLite3 yang digunakan oleh aplikasi untuk menyimpan data kontak, grup, dan hubungan antara keduanya.
