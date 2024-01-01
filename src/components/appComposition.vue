<!-- <template>
  <section
    class="main__Section main flex flex-wrap flex-row justify-center items-center m-0"
  >
    <div class="container items-center w-1/2 max-h-150">
      <form class="my-3.75 mx-auto overflow-hidden w-82%">
        <div class="lien w-100 mx-auto my-2.5 flex justify-between">
          <el-button class="p-0"
            ><router-link
              to="/"
              class="w-37.5 text-center no-underline hover:underline hover:cursor-pointer"
              ><el-icon><House /></el-icon> Home</router-link
            ></el-button
          >
          <router-link to="/" class="w-37.5 text-center no-underline hover:underline hover:cursor-pointer  bg-indigo-300"><el-icon><House /></el-icon>  Home</router-link>
          <el-button class="p-0 ml-0"
            ><router-link
              to="/About"
              class="w-37.5 text-center no-underline hover:underline hover:cursor-pointer"
              >About</router-link
            >
          </el-button>
        </div>
        <el-input
          class="font-serif bg-f7 mb-4 h-12 w-67% text-base float-left focus:outline-none"
          type="text"
          placeholder="Type Your tasks"
          v-model="taskstxt"
          clearable
        />

        <el-button
          class="add w-15% h-12 mb-4 p-2.5 text-base text-ef border-transparent cursor-pointer float-left ml-O bg-bleuC disabled:opacity-40 disabled:cursor-no-drop"
          @click.prevent="addTasks"
          :disabled="!taskstxt"
          >Add Task</el-button
        >

        <el-button
          class="delete_all w-15% h-12 p-2.5 ml-O mb-4 text-base text-ef border-transparent cursor-pointer float-left bg-redDel disabled:opacity-40 disabled:cursor-no-drop"
          @click="deleteAll"
          :disabled="tasks.length < 2"
          >Delete All</el-button
        >
      </form>
      <div class="error flex justify-center w-81%" :v-if="errors.length>0">
                <ul class="text-sm text-redDel  list-disc list-inside">
                    <li v-for="(error,index) in errors" :key="index">{{error}}</li>
                </ul>
            </div>
      <el-scrollbar height="400px">
        <div class="Tasks_list" v-for="(task, index) in tasks" :key="index">
          <itemC
            @done="done"
            @changeWord="changeWord"
            :taskWords="task.words"
            :tasks="tasks"
            :index="index"
            :checkedDone="task.done"
          />
        </div>
      </el-scrollbar>
    </div>
    <div class="w-1/2 my-3">
      <router-view></router-view>
    </div>
  </section>
</template>

<script setup>
/*       import itemC from './components/item.vue'
        import Home from './components/home.vue'
        import About from './components/about.vue'
        export default {
            components:{
                itemC,
                Home,
                About,
            },
            data(){ 
                return {
                    tasks:[],
                    taskstxt:"",
                    strRegex:/[a-zA-Z]/g,
                    errors:[],

                }
            },
            watch:{
                tasks:{
                    handler(){
                        localStorage.setItem('tasks',JSON.stringify(this.tasks));
                    },
                    deep:true
                },
                
            },
            mounted(){
                if(localStorage.getItem("tasks")){
                    this.tasks=JSON.parse(localStorage.getItem("tasks"));
                }
                console.log(this.tasks)
            },
            methods:{
                addtasks: function(){
                    if(this.strRegex.exec(this.taskstxt)){ 
                        this.tasks.push({id:this.tasks.length+1, words:this.taskstxt,done:false});
                        this.taskstxt="";
                        this.errors=[]
                        console.log(this.tasks)
                    }
                    else{
                        this.errors.push('Remplir la zone de texte ou la valeur saisi est invalide !!!');  
                        console.log(this.errors)
                    }    
                },
                deleteAll: function(){
                    if(confirm("Do you want to delete All?"))
                    {this.tasks=[];}
                },
                changeWord(val,index){
                    this.tasks[index].words=val
                },
                done(val,index){
                    this.tasks[index].done=val
                }
            }
        } */
</script>

<style></style> -->
