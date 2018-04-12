const fs = require('fs');

class TodoModel{
    constructor(){
        this.file = this.dataJson();
        this.idTerbaru = this.file[this.file.length-1].id;
    }

    dataJson(){
        var data = JSON.parse(fs.readFileSync('./data.json'));
        return data;
    }

    daftarPerintah(){
        var perintah = ['', 'help', 'list', 'add <task_content>', 'findById <task_id>', 'delete <task_id>', 'complete <task_id>', 'uncomplete <task_id>', 'search <task_search>'];
        return perintah;
    }

    readFile(callback){
        var dataArr = this.dataJson();
        var tasks = [];

        for(var i = 0; i < dataArr.length; i++){
            if(dataArr[i].status){
                tasks.push(`${dataArr[i].id}. ${dataArr[i].task} [O]`); // status true
            }else{
                tasks.push(`${dataArr[i].id}. ${dataArr[i].task} [X]`); // status false
            }
        }

        callback(tasks)
    }

    tambahTask(task, cbWrite, cbView){
        var taskBaru = {
            id : this.idTerbaru + 1,
            task: task,
            status : false
        };
        var dataArr = this.dataJson();
        dataArr.push(taskBaru);

        cbWrite(JSON.stringify(dataArr));
        cbView(task);
    }

    writeFile(taskBaru, callback){
        fs.writeFile('./data.json', taskBaru, (err) => {
            if (err) throw err;
        });
    }

    findTask(id, callback){
        var dataArr = this.dataJson();
        var task = '';

        for(var i = 0; i < dataArr.length; i++){
            if(dataArr[i].id == id) task = dataArr[i].task;
        }

        callback(id, task);
    }

    hapusTask(id, cbWrite, cbView){
        var dataArr = this.dataJson();
        var taskHapus = '';

        for(var i = 0; i < dataArr.length; i++){
            taskHapus = dataArr[i].task;

            if (id == dataArr[i].id) {
                dataArr.splice(i, 1)
            }
        }

        cbWrite(JSON.stringify(dataArr))
        cbView(taskHapus)
    }

    selesaiTask(id, cbWrite, cbView){
        var dataArr = this.dataJson();
        var taskSelesai = '';

        for(var i = 0; i < dataArr.length; i++){
            if (id == dataArr[i].id) {
                taskSelesai = dataArr[i].task;
                dataArr[i].status = true
            };
        }

        cbWrite(JSON.stringify(dataArr));
        cbView(taskSelesai);
    }

    belumSelesaiTask(id, cbWrite, cbView){
        var dataArr = this.dataJson();
        var taskBelumSelesai = '';

        for(var i = 0; i < dataArr.length; i++){
            if (id == dataArr[i].id) {
                taskBelumSelesai = dataArr[i].task;
                dataArr[i].status = false;
            }
        }

        cbWrite(JSON.stringify(dataArr));
        cbView(taskBelumSelesai);
    }

    cariTask(task, callback){
        var dataArr = this.dataJson();
        var hasilCariTask = [];

        for(var i = 0; i < dataArr.length; i++){
            var str = dataArr[i].task;
            var hasil = str.match(new RegExp(task, "gi"));

            if (hasil != null) {
                hasilCariTask.push(dataArr[i]);
            }
        }

        callback(hasilCariTask);
    }

}

module.exports = TodoModel;