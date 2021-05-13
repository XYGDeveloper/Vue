<template>
  <div class="about">
    <h1>This is an detail page</h1>
    <button @click="back">返回</button>
    <div>这是父组建</div>
    <child @send="getdata" :content = "content" :arr = "arr" :obj="obj"></child>
  </div>
</template>
<script lang="ts">

import { defineComponent ,ref} from 'vue'
import Child from '../components/Child.vue'


import {useRouter} from 'vue-router'

export default defineComponent({
    name:"Detail",
    components:{
        Child,
    },
    setup() {
        let content = ref("这是父组建的数据")
        let arr = ref([1,2,3,4,5,6,7])
        let obj = ref({
            title:"mmmmm"
        })

        let getdata = (val)=>{
            console.log(val)
        }

        let router = useRouter()
        let back = ()=>{
            router.back()
            // router.go(-1)
        }
        return{
            back,
            content,
            arr,
            obj,
            getdata,
        }
    },
})
</script>

