<template>
  <div class="Tasks_list w-full my-0 mx-auto">
    <el-divider class="my-2.5">
      <el-icon><star-filled /></el-icon>
    </el-divider>
    <input
      type="checkbox"
      :checked="checkedDone"
      class="cursor-pointer"
      @click="checkedCB"
    />
    <el-input
      class="mb-2.5 ml-2 !w-96 h-12.5 text-left border-none bg-grisC"
      v-model="inputValue"
      :disabled="check"
      :style="{ 'text-decoration': checked ? 'line-through' : 'none' }"
    />
    <el-button
      class="ml-2 cursor-pointer"
      type="primary"
      plain
      @click="update"
      v-if="check && !checked"
    >
      <el-icon class="mr-2"><Edit /></el-icon> Update
    </el-button>

    <el-button
      class="text-base cursor-pointer"
      type="danger"
      plain
      @click="deleteTask(index)"
      v-if="check"
    >
      <el-icon class="mr-2"><Delete /></el-icon> Delete
    </el-button>

    <el-button
      class="save ml-2 cursor-pointer"
      @click="save"
      v-if="!check && !checked"
    >
      Save
    </el-button>

    <el-button v-if="!check && !checked" class="cursor-pointer" @click="cancel">
      <el-icon><CloseBold /></el-icon> Cancel
    </el-button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { ElMessage } from "element-plus";

const props = defineProps({
  taskWords: String,
  index: Number,
  tasks: Array,
  checkedDone: Boolean,
});

const inputValue = ref(props.taskWords);
const check = ref(true);
const updateTxt = ref("Update");
const deleteTxt = ref("Delete");
const checked = ref(props.checkedDone);
const strRegex = ref(/[a-zA-Z]/g);

const update = () => {
  check.value = !check.value;
};

function save() {
  if (strRegex.value.test(inputValue.value)) {
    context.emit("changeWord", inputValue.value, props.index);

    update();

    window.location.reload();
  } else {
    ElMessage.error(
      "Remplir la zone de texte ou la valeur saisi est invalide !!!"
    );
  }
}

function deleteTask(index) {
  if (confirm("Do you want to delete this task?")) {
    props.tasks.splice(index, 1);
  }
}

function cancel() {
  update();
}

function checkedCB() {
  checked.value = !checked.value;
  context.emit("done", checked.value, props.index);
}
</script>
