<template>
  <h1 class="flex justify-center text-4xl font-bold">About Page</h1>
  <div class="container flex">
    <div class="row flex flex-wrap w-full">
      <div class="col w-1/3 h-44" v-for="task in tasks" :key="task.id">
        <el-card :body-style="{ padding: '10px' }" class="">
          <p class="">{{ task.id }}</p>
          <h2>{{ task.words }}</h2>
          <h4>{{ task.date }}</h4>
          <p>{{ task.description }}</p>
          <p>{{ task.done }}</p>
        </el-card>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { Search, Share, Open } from "@element-plus/icons-vue";
import { computed, onMounted } from "@vue/runtime-core";
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const currentDate = computed(() => {
      return new Date().toLocaleDateString();
    });
    const tasks = ref(store.state.tasks);
    function increment() {
      store.commit("incrementer");
    }
    return {
      increment,
      currentDate,
      tasks,
    };
  },
};
</script>

<style></style>
