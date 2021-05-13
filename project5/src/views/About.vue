<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>
<script>
   import Msg from '../components/msg.js'
   export default{
     data(){
       var _this = this
       Msg.$emit('ddd',"1");

     }
   }
</script>

