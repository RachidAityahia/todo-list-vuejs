import {createStore} from 'vuex';
export const store=createStore({
    state(){
        return{
            count:1,
            tasks:JSON.parse(localStorage.getItem("tasks"))
        }
    },
    mutations:{
        incrementer(state){
            state.count +=1
            /* console.log(state.tasks) */
        }
    }
})


// check store