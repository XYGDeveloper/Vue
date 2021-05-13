<template>
  <div>
    <div class="container">已完成{{iscomplate}}/全部{{all}}
        <button class="button" @click="clear">清除已完成</button>
    </div>
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent({
  name:"NavFooter",
  setup(){
      let iscomplate = ref(2)
      let all = ref(3)

      let clear = ()=>{
          console.log("clear")
      }
      return{
          iscomplate,
          all,
          clear
      }
  }
})
</script>

<style lang="scss" scoped>
.container{
    margin-top: 20px;
    align-items: center; 
    position: relative;
    button{
        position: absolute;
        margin-right: 0px;
    }
}

</style>