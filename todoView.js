class TodoView{

    static help(perintah){
        var daftarPerintah = []
        for (var i=0; i<perintah.length; i++){
            daftarPerintah.push(`node todo.js ${perintah[i]}`)
        }
        console.log(daftarPerintah.join('\n'));
    }

    static daftar(file){
        console.log(file.join('\n'));
    }

    static tambahTask(task){
        console.log(`Berhasil Menambahkan ${task} di todoApp.`);
    }

    static findTask(id, task){
        console.log(`${id}. ${task}`);
    }

    static hapusTask(task){
        console.log(`${task} Berhasil Dihapus`);
    }

    static selesaiTask(task){
        console.log(`${task} Berhasil Diselesaikan`);
    }

    static belumSelesaiTask(task){
        console.log(`${task} Belum Diselesaikan`);
    }

    static cariTask(data){
        var hasilPencarian = [];

        if (data.length > 0) {
            for(var i = 0; i < data.length; i++){
                if (data[i].status == true) {
                    var hasil = data[i].id+'. '+data[i].task + " [O]";
                }else{
                    var hasil = data[i].id+'. '+data[i].task + " [X]";
                }

                hasilPencarian.push(hasil);
            }
        }else{
            hasilPencarian.push("Tidak Ada Data Yang Cocok...")
        }

        console.log(hasilPencarian.join('\n'));
    }

}

module.exports = TodoView;