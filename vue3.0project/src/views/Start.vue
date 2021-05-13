<template>
    <button @click="startTask">开始任务</button>
</template>
<script lang="ts">

import { defineComponent,ref,onMounted,onUnmounted} from 'vue'
import {useRouter,useRoute} from 'vue-router'
export default defineComponent({
    name:"Start",
   
    //1.组建的创建过程，setup，不需要导入的
    setup() {
        let router = useRouter()
        //路由跳转传惨有两种
        /**
         *  /**第一种：query传参数
         *  path/name都可以
         */

        /**
         *  /**第二种：params传参数
         *  只有name可以
         */
       

        let name = ref("jack")
        let number = ref(100)
        let arr = ref([1,2,3,4,5,6])
        let obj = ref({
            name1:"haha",
            age:35
        })
         //组建的生命周期函数
    //2.组建的挂载过程,在这个函数里一般进行初始化操作，
    /**
     * 接受路由传递过来的参数
     * 进行网络请求
     * 
     */
    onMounted(()=>{
      
    })
    //组建的卸载过程
    /**
     * 清除定时器
     * 清除必报函数
     */
    onUnmounted(()=>{
     
    })

    let startTask = ()=>{
            router.push({
                // path:'/home',
                // query:{
                //     name:name.value,
                //     number:number.value,
                //     arr:arr.value,
                //     obj:JSON.stringify(obj)
                // },
                //params传惨
                 name:'Home',
                 params:{
                    name:name.value,
                    number:number.value,
                    arr:arr.value,
                    obj:JSON.stringify(obj.value)
                }
            })
        }
        return{
            startTask,
            name,
            number,
            arr,
            obj,
        }
    },
})
</script>

