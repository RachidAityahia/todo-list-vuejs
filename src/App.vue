<template>
  <el-container class="h-full">
    <el-main class="container items-center w-1/2 h-full">
      <form class="my-3.75 mx-auto overflow-hidden w-82%">
        <el-input
          class="font-serif bg-f7 mb-4 h-12 w-67% mr-1 text-base float-left focus:outline-none"
          type="text"
          placeholder="Type Your tasks"
          v-model="taskstxt"
          clearable
        />

        <el-button
          class="add w-15% h-12 mb-4 p-2.5 text-base text-ef border-transparent cursor-pointer float-left ml-O bg-bleuC disabled:opacity-40 disabled:cursor-no-drop"
          @click.prevent="addTasks"
          :disabled="!taskstxtRe"
          >Add Task</el-button
        >

        <el-button
          class="delete_all w-15% h-12 p-2.5 ml-0 mb-4 text-base text-ef border-transparent cursor-pointer float-left bg-redDel disabled:opacity-40 disabled:cursor-no-drop"
          @click="deleteAll"
          :disabled="tasks.length < 2"
          >Delete All</el-button
        >
      </form>
      <el-dialog v-model="visibility" title="Describe this Task">
        <el-form>
          <el-form-item label="Discription :">
            <el-input
              v-model="discription"
              autosize
              type="textarea"
              placeholder="description....."
            />
          </el-form-item>
          <el-form-item>
            <el-button class="bg-bleuC text-white" @click="add()"
              ><el-icon><Plus /></el-icon> Add Task</el-button
            >
          </el-form-item>
        </el-form>
      </el-dialog>
      <el-scrollbar height="600px">
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
    </el-main>
    <el-container class="w-1/2">
      <el-tabs type="border-card" class="w-full h-full">
        <el-tab-pane>
          <template #label>
            <router-link
              to="/"
              class="text-center no-underline hover:underline hover:cursor-pointer"
              >Home</router-link
            >
          </template>
          <router-view></router-view>
        </el-tab-pane>
        <el-tab-pane>
          <template #label>
            <router-link
              to="/About"
              class="text-center no-underline hover:underline hover:cursor-pointer"
              >About</router-link
            >
          </template>
          <router-view></router-view>
        </el-tab-pane>
      </el-tabs>
    </el-container>
  </el-container>
</template>
<script setup>
import { ElMessage } from "element-plus";
import { ref, watch, onMounted, computed } from "vue";
import itemC from "./components/item.vue";

const tasks = ref([]);
const visibility = ref(false);
const taskstxt = ref("");
const discription = ref("");
const strRegex = ref(/^[a-zA-Z]/g);

const currentDate = computed(() => new Date().toLocaleDateString());

const taskstxtRe = computed(() => {
  if (strRegex.value.test(taskstxt.value)) {
    return true;
  }
});

watch(
  tasks,
  () => {
    localStorage.setItem("tasks", JSON.stringify(tasks.value));
  },
  { deep: true }
);

onMounted(() => {
  if (localStorage.getItem("tasks")) {
    tasks.value = JSON.parse(localStorage.getItem("tasks"));
  }
});

function addTasks() {
  if (taskstxtRe) {
    visibility.value = true;
  } else {
    ElMessage.error(
      "Remplir la zone de texte ou la valeur saisi est invalide !!!"
    );
  }
}

function add() {
  tasks.value.unshift({
    id: tasks.value.length + 1,
    words: taskstxt.value,
    date: currentDate.value,
    description: discription.value,
    done: false,
  });
  discription.value = "";
  taskstxt.value = "";
  ElMessage({
    message: "l'ajout est fait avec succés!! .",
    type: "success",
  });
  visibility.value = false;
}
function deleteAll() {
  if (confirm("Do you want to delete All?")) {
    tasks.value = [];
  }
}
function changeWord(val, index) {
  tasks.value[index].words = val;
}
function done(val, index) {
  tasks.value[index].done = val;
}
</script>

<!-- :key="index" -->
<!-- add task index 0 min 2 methods -->
