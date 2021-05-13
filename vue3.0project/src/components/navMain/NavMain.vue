<template>
  <div class="item"  v-for="(item,index) in list" :key="index">
    <div>
        <input type="checkbox" /> 
        {{item.name}} 
        <button class="btn" @click="del(item,index)">删除</button>
    </div>
  </div>
</template>

<script>
import {defineComponent,ref}  from 'vue'
export default defineComponent({
  name:"NavMain",
  setup(){
      let del = (item,val)=>{
          console.log(val)
          console.log(item.name)
      }
      let list = ref([
          {
            name:"吃饭",
            incomplete:"true"
          },
          {
            name:"睡觉",
            incomplete:"true"
          },
          {
            name:"写代码",
            incomplete:"true"
          }
      ])

      return{
          list,
          del,
      }
  }
})
</script>

<style lang="scss" scoped>
.item{
    width: 200px;
    height: 35px;
    line-height: 35px;
    margin: 5px;
    position: relative;
    button{
        position: absolute;
    }
 &:hover{
     background-color: #ddd;
     display: block;
 }   
}
.btn{
    right: 0px;
    margin-top: 6px;
}
</style>