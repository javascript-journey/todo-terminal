# todo-terminal (Deadline : malam jumat)

## Learning Competencies

- mampu membuat class yang terdefinisi dengan baik dan memiliki satu tujuan saja
- mampu menerapkan hubungan antar class dan object
- menggunakan design pattern mvc 
## Tugas

Untuk tugas ini kita akan membuat todo app yang berjalan via command line. App todo ini memiliki fiture sebagai berikut:

```
$ node todo.js # menjalankan help
$ node todo.js # menampilkan command apa saja yang tersedia
$ node todo.js list # melihat daftar TODO
$ node todo.js add <definisi_task> # menambahkan todo ke dalam list ( simpan ke json )
$ node todo.js findById <task_id> # melihat detail todo sesuai id nya 
$ node todo.js delete <task_id> # menghapus todo sesuai id nya
$ node todo.js complete <task_id> # merubah status todo jadi selesai sesuai id nya
$ node todo.js uncomplete <task_id> # merubah status todo jadi belum selesai sesuai id nya

```

Untuk mengambil informasi inputan melalui command line gunakan `process.argv`

Contoh isi file `todo.json` nya

```
[ 
  { "task": "Bikin aplikasi"},
  { "task": "Main nodejs"}
]
 ```

Jika fitur utama nya sudah selesai, buat juga fitur search todo nya :

```
$ node todo.js search "aplikasi" # akan menampilkan todo yang mengandung string "aplikasi"

```

## Requirement

- Harus menggunakan class
- Harus menggunkan pattern mvc
- setiap file class harus di pisah
- harus manipulasi data nya ke file .json

 
 
