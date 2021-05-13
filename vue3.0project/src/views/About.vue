<template>
  <div class="about">
    <h1>This is an about page</h1>
    <button @click="jump">跳转到详情页</button>
  </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
//倒入userouter，userrouter是一个全局的路由跳转对象
import {useRouter} from 'vue-router'

export default defineComponent({
  name:"About",

  setup() {
    let router = useRouter()
    //push:
    //back
    //go(-1或1)表示前进或后退
    //forward
    //
    let jump = ()=>{
          //push:
          //如果需要穿参数就写成
          /**
           * push（{
           *    path:"/about"
           *   }）
           */
           //如果不需要穿参数就写成
           /**
            * push（‘/about’）
            */
        router.push({
          path:"/detail"
        })
    }
    return{
      jump,
    }
  },
})
</script>

<style scoped>

</style>

