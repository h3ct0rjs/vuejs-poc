<template>
    <div>
        <nav class="navbar navbar-light bg-light">
            <a href="/" class="navbar-brand">ToDo's</a>
        </nav>

        <div class="container">
            <div class="row pt-5">
                <div class="col-md-5">
                    <div class="card">
                        <div class="card-body">
                            <form @submit.prevent="sendTask">
                                <div class="form-group">
                                    <input v-model="task.title" class="form-control" type="text" placeholder="Titulo Tarea" >
                                </div>
                                <div class="form-group">
                                    <textarea  v-model="task.description" cols="30" rows="10" class="form-control" placeholder="Inserte Tarea" ></textarea>
                                </div>
                                <template v-if="edit ==false">
                                    <button class="btn btn-primary btn-block">Enviar </button>
                                </template>
                                <template v-else>
                                    <button class="btn btn-primary btn-block">Editar </button>
                                </template>
                                
                            </form>
                        </div>
                    </div>
                </div>
                <div class="col-md-7">
                    <table class="table table-bordered">
                        <thead>
                            <th>Task</th>
                            <th>Description</th>
                        </thead>
                        <tbody>
                            <tr v-for="task of tasks">
                                <td>{{task.title}}</td>
                                <td>{{task.description}}</td>
                                <td>
                                    <button @click="deleteTask(task._id)" class="btn btn-danger">x</button>
                                </td>
                                <td>
                                    <button @click="editTask(task._id)" class="btn btn-secondary">e</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>

</template>
<script>
    class Task {
        constructor(title, desc){
            this.title = title;
            this.description = desc;
        }
    }

    export default{
        data(){
            return {
                task: new Task(), 
                tasks:[], 
                edit:false,
                taskToEdit:''
            }
        },
        created(){
            this.getTasks();
        },
        methods:{
            getTasks(){
                fetch('/api/task')
                    .then(res=>res.json())
                    .then(data => {
                        this.tasks = data;
                        console.log(this.tasks);
                        });
            },
            sendTask(){
                if(this.edit === false){
                    fetch('/api/task',{
                        method: 'POST', 
                        body: JSON.stringify(this.task),
                        headers:{
                            'Accept':'application/json', 
                            'Content-type':'application/json', 
                        }
                    })
                .then(res =>res.json())
                .then(data=>{
                     console.log(data)
                     this.getTasks();
                     });
                this.task = new Task();
                }
                else{
                    fetch('/api/task/'+this.taskToEdit,{
                        method: 'PUT', 
                        body: JSON.stringify(this.task),
                        headers:{
                            'Accept':'application/json', 
                            'Content-type':'application/json', 
                        }
                    })
                    .then(res => res.json())
                    .then(data =>{
                        console.log(data);
                        this.getTasks();
                        this.edit=false
                        })
                    this.task = new Task();
                }
            },
            deleteTask(id){
                console.log('Deleting');
                console.log(id);
                fetch('/api/task/'+id,{
                    method:'DELETE', 
                    headers:{
                        'Accept':'application/json', 
                        'Content-type':'application/json', 
                    }
                })
                .then(res =>res.json())
                .then(data=>{
                     console.log(data)
                     this.getTasks();
                     });       
            }, 
            editTask(id){
                fetch('/api/task/'+id)
                .then(res=>res.json())
                .then(data=>{
                    this.task = new Task(data.title,data.description);
                    this.taskToEdit = data._id;
                })
                this.edit = true;
            }
        }
    }
</script>
