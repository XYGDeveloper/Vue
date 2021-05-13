<template>
<div class="item"><li  @click="deleteone">{{content}}</li></div>
  
</template>

<script>
export default{
  props: ['content','index'],
  methods:{
    deleteone:function(){
      this.$emit('delete',this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.item{
  background-color: brown;
  border-width: 10px;
  border-color: beige;
  border-style: dotted;
}

</style>
