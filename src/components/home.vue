<template >
    <div class="m-2 mr-0 my-5 w-full ">
        <h1 class="flex justify-center text-4xl font-bold"> Welcome To Home Page </h1>
        <h3 class="flex justify-center text-2xl font-semibold">This is table of Tasks</h3>
        <table class="w-full  border-separate border border-black ">
            <tr>
                <th class="border border-black">ID</th>
                <th class="border border-black">Words</th>
                <th class="border border-black">Done</th>
            </tr>
            <tr v-for="(task,index) in tasks" :key="index">
                <td class="border border-black">{{task.id}}</td>
                <td class="border border-black">{{task.words}}</td>
                <td class="border border-black">{{task.done}}</td>
            </tr>
        </table> 
    </div>
</template>

<script >
import { onMounted, ref } from "vue";
import { useStore } from 'vuex';
export default {
    props:{
   },
    setup(props,context){
        const store=useStore();
        const tasks=ref(store.state.tasks)
       /*  onMounted(()=>{
            tasks.value=JSON.parse(localStorage.getItem("tasks"))
            console.log(tasks.value);
        }) */
        return {tasks}
    }
    
    

    
}
</script>

<style>

/*H1,H3{
    display: flex;
    justify-content: center
}
table{
    width: 100%;
    
}
table, th, td {
    border: 1px solid;
  }*/
</style>