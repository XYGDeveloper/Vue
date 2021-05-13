<template>
  <div>
    <input placeholder="请输入任务名称" v-model="value" @keydown.enter="enter"/>
  </div>
</template>

<script>
import {defineComponent,ref} from 'vue'
export default defineComponent ({
  name:"NavHeader",
  setup(){
      let value = ref('')
      let enter = ()=>{
          console.log(value.value)
      }
      return{
          value,
          enter,
      }
  }
})
</script>

<style lang="scss" scoped>
input{
    margin-bottom: 20px;
    width: 200px;
    height: 35px;
    line-height: 35px;
    font-size: 20px;
}
</style>