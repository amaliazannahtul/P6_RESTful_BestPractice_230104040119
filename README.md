P6 RESTful API Best Practice
Identitas

Nama : Amalia Zannahtul Putria
NIM : 230104040119
Mata Kuliah : Web Service Engineering
Praktikum : P6 RESTful API Best Practice

Deskripsi Project

Project ini merupakan implementasi RESTful API menggunakan Node.js dan Express.js
yang dibuat untuk memenuhi tugas Praktikum Web Service Engineering (WSE).
API ini menerapkan prinsip RESTful Best Practice dengan metode HTTP
GET, POST, PUT, dan DELETE.

Teknologi yang Digunakan

Node.js

Express.js

Postman

GitHub

Struktur Folder Project

P6_RESTful_BestPractice_230104040119
├── src
├── screenshot
│ ├── get.png
│ ├── post.png
│ ├── put.png
│ └── delete.png
├── app.js
├── package.json
├── package-lock.json
├── README.md

Cara Menjalankan Project

Clone repository ini
git clone https://github.com/amaliazannahtul/P6_RESTful_BestPractice_230104040119.git

Masuk ke folder project
cd P6_RESTful_BestPractice_230104040119

Install dependencies
npm install

Jalankan server
npm start

Server berjalan pada
http://localhost:3000

Pengujian API Menggunakan Postman

GET Data
![GET](screenshot/get.png)
Digunakan untuk menampilkan seluruh data.

PATCH Data
![PATCH](screenshot/patch.png)
Mengupdate sebagian data produk berdasarkan ID.


POST Data
![POST](screenshot/post.png)
Digunakan untuk menambahkan data baru.


GET Data
![GET](screenshot/get1.png)
Mengambil satu data produk berdasarkan ID.


DELETE Data
![DELETE](screenshot/delete.png)
Digunakan untuk menghapus data berdasarkan ID.

Kesimpulan

RESTful API berhasil dibuat dan diuji menggunakan Postman
sesuai dengan prinsip RESTful Best Practice.
Project ini membantu memahami konsep API dan metode HTTP
dalam pengembangan web service.