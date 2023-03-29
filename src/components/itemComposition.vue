<template>
</template>
<script >
/*export default {
    name:"itemC",
    props:{
        taskWords:String,
        index:Number,
        tasks:Array,
        checkedDone:Boolean,  
    },
    data(){
        return{    
            inputValue : this.taskWords,
            check:true,
            updateTxt:"Update",
            deleteTxt:"Delete",
            checked:this.checkedDone,
            strRegex:/[a-zA-Z]/g,   
        }
    },
    methods:{
        update:function(){
            if(this.check){this.check=!this.check }
        },
        save:function(){
            if(this.strRegex.test(this.inputValue))
                {
                    this.$emit("changeWord", this.inputValue,this.index)
                    this.check=!this.check
                    window.location.reload();
                }else{
                    alert('error!!!!!')
                    window.location.reload();
                }
        },
        deleteTask: function(index){
            if(this.check){
                if(confirm("Do you want to delete this task?"))
                {   this.tasks.splice(index,1);
                    window.location.reload();
                    /* console.log(this.tasks[index]) 
                }
            }
        },
        cnacel:function(){
            this.check=!this.check
            
        },
        checkedCB:function(){
            if(this.checkedDone){
                this.checked=!this.checked
                window.location.reload();
            }
            else {
                this.checked=!this.checked
                window.location.reload();
            }
            this.$emit("done",this.checked,this.index)
        }
    } 
}
 */
</script>
<style>
</style>