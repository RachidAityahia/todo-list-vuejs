<template>
    <div class="Tasks_list w-82% my-0 mx-auto"  >
        <el-divider class="my-2.5">
            <el-icon><star-filled /></el-icon>
        </el-divider>
        <input  type="checkbox" name="chekedCB" :checked="checkedDone" class="cursor-pointer" @click="checkedCB">

        <el-input type="text" class="tasks-box  mb-2.5 mr-1 w-67% h-12.5 text-left border-none bg-grisC"   v-model="inputValue"  :disabled="check" :style="{'text-decoration': checked ? 'line-through' : 'none'}" />

        <el-button  class="update w-14% h-12.5  px-auto text-base border-transparent text-white cursor-pointer bg-bleuC " @click="update" v-if="check && !checked">
            <el-icon><Edit /></el-icon> Update
        </el-button>

        <el-button class="delete text-base w-14% h-12.5  px-auto ml-1.5 border-transparent text-white cursor-pointer bg-redDel" @click="deleteTask(index)" v-if="check">
            <el-icon><Delete /></el-icon> Delete
        </el-button>

        <el-button class="save text-base w-14% h-12.5  px-auto border-transparent text-white cursor-pointer bg-greenC" @click="save" v-if="!check && !checked">
            Save
        </el-button>

        <el-button class="cancel text-base w-14% h-12.5  px-auto  ml-1.5 border-transparent text-white cursor-pointer bg-grisC1" @click="cnacel" v-if="!check && !checked">
            <el-icon><CloseBold /></el-icon> Cancel
        </el-button>
        
    </div>
</template>
<script>
import {ref} from 'vue'
import { ElMessage } from 'element-plus'

export default {
  props: {
    taskWords:String,
    index:Number,
    tasks:Array,
    checkedDone:Boolean,    
  },
  setup(props, context){
    const inputValue=ref(props.taskWords)
    const check=ref(true)
    const updateTxt=ref("Update")
    const deleteTxt=ref("Delete")
    const checked=ref(props.checkedDone)
    const strRegex=ref(/[a-zA-Z]/g) 
    function update(){
        check.value=!check.value 
    }
    function save(){       
        if(strRegex.value.test(inputValue.value))
        {
            context.emit("changeWord", inputValue.value,props.index)
            check.value=!check.value
            window.location.reload();
        }
        else{
            ElMessage.error('Remplir la zone de texte ou la valeur saisi est invalide !!!')
            }
    }

    function deleteTask(index){
        if(check.value){
            if(confirm("Do you want to delete this task?"))
            {props.tasks.splice(index,1)}
            /* window.location.reload()  */}
        }
    function cnacel(){
            check.value=!check.value
            /* window.location.reload() */
    }    
    function checkedCB(){
        
        checked.value=!checked.value 

        context.emit("done", checked.value,props.index)
        /* window.location.reload() */
    }
    return{
        inputValue,check,updateTxt,deleteTxt,checked,strRegex,update,save,cnacel,deleteTask,checkedCB
    }
  }
}
</script>

<style>
</style>


<!-- style binding -->
<!-- short hand props -->