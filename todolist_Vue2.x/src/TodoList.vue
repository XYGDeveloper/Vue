<template>
<div>
  <div class="item">
    <input v-model="inputValue"/>
    <button @click="submit">提交</button>
  </div>
  <ul>
    <todo-item v-for = "(item,index) of list" 
    :key="index" 
    :content="item" 
    :index="index"
    @delete="handleDelete"></todo-item>
  </ul>
</div>
</template>

<script>
import TodoItem from './components/TodoItem'
export default{
  components:{
    'todo-item':TodoItem,
  },
  data:function(){
    return{
      inputValue:"",
      list: []
    }
  },
  methods:{
    submit:function(){
      this.list.push(this.inputValue)
      this.inputValue = ""
    },
    handleDelete:function(index){
      this.list.splice(index,1)
    }
  }
}
</script>

<style>
.item{
  background-color: antiquewhite;
  border-width: 2px;
  border-color: beige;
  border-style: dotted;
}

</style>
