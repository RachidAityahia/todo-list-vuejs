<template>  
    <el-container class="h-full">
        <el-main class="container items-center w-1/2 h-full ">
            <form class="my-3.75 mx-auto overflow-hidden w-82% ">
                <el-input class="font-serif bg-f7 mb-4 h-12 w-67% mr-1 text-base float-left focus:outline-none " type="text" placeholder="Type Your tasks" v-model="taskstxt" clearable />

                <el-button class="add w-15% h-12 mb-4  p-2.5 text-base text-ef border-transparent cursor-pointer float-left ml-O  bg-bleuC disabled:opacity-40 disabled:cursor-no-drop" @click.prevent="addTasks" :disabled="!taskstxt">Add Task</el-button>

                <el-button class="delete_all w-15% h-12 p-2.5 ml-0 mb-4 text-base text-ef border-transparent cursor-pointer float-left bg-redDel disabled:opacity-40 disabled:cursor-no-drop " @click="deleteAll" :disabled="tasks.length<2">Delete All</el-button>
            </form>
            <el-dialog v-model="visibilty" title="Describe this Task" >
                <el-form >
                    <el-form-item label="Discription :">
                        <el-input v-model="discription" autosize type="textarea" placeholder="description....."/>
                    </el-form-item>
                    <el-form-item>
                        <el-button class="bg-bleuC text-white" @click="add()" ><el-icon><Plus/></el-icon> Add Task</el-button>
                    </el-form-item>
                </el-form>
            </el-dialog>
            <!--<div class="error flex justify-center w-81%" :v-if="errors.length>0">
                <ul class="text-sm text-redDel  list-disc list-inside">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div> -->
            <el-scrollbar height="600px">
                <div class="Tasks_list" v-for=" (task,index) in tasks" :key="index" >
                    <itemC @done="done" 
                    @changeWord="changeWord" 
                    :taskWords="task.words"  
                    :tasks="tasks" 
                    :index="index" 
                    :checkedDone="task.done"/>
                </div>
            </el-scrollbar>
        </el-main>
        <el-container class="w-1/2 ">
            <el-tabs type="border-card" class="w-full">
                <el-tab-pane>
                <template #label>
                    <router-link to="/" class="w-37.5 text-center no-underline hover:underline hover:cursor-pointer "><el-icon><House /></el-icon>  Home</router-link>
                </template>
                <router-view></router-view>
                </el-tab-pane>
                <el-tab-pane>
                    <template #label>
                        <router-link to="/About" class="w-37.5 text-center no-underline hover:underline hover:cursor-pointer ">About</router-link>
                    </template>
                    <router-view ></router-view>
                </el-tab-pane>
            </el-tabs>
        </el-container>  
    </el-container>
</template>
<script setup>

import { ElMessage } from 'element-plus'
import{ref,watch, onMounted,computed} from 'vue'
import itemC from './components/item.vue'


const tasks=ref([]);
const visibilty=ref(false);
const taskstxt=ref("");
const discription=ref("");
const strRegex=ref(/[a-zA-Z]/g);
const currentDate = computed(() => {return new Date().toLocaleDateString() });

watch(
    tasks,() => {localStorage.setItem('tasks',JSON.stringify(tasks.value));},
  { deep: true }
)
onMounted(()=>{
    if(localStorage.getItem("tasks")){
        tasks.value=JSON.parse(localStorage.getItem("tasks"));
    }
    console.log(tasks.value)
})
function addTasks(){
    if(strRegex.value.test(taskstxt.value)){ 
        visibilty.value=true;
    }
    else{
        ElMessage.error('Remplir la zone de texte ou la valeur saisi est invalide !!!')
    }
}
function add(){
    console.log(tasks.value);
        tasks.value.unshift ({
            id:tasks.value.length+1, 
            words:taskstxt.value,
            date:currentDate.value,
            description:discription.value,
            done:false});
        discription.value=""
        taskstxt.value="";
        ElMessage({
            message: "l'ajout est fait avec succés!! .",
            type: 'success',
        })
        console.log(tasks.value);

}
function deleteAll(){
    if(confirm("Do you want to delete All?"))
    {tasks.value=[];
    window.location.reload()}
}
function changeWord(val,index){
    tasks.value[index].words=val
}
function done(val,index){tasks.value[index].done=val}
</script>



<!-- click entrer  -->
<!-- :key="index" -->
<!-- add task index 0 min 2 methods -->