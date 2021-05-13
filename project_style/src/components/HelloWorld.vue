<template>
 <div>hello world</div>
 <div><router-link to="/a"  class="toa">转向A页面</router-link></div> 
 <div><router-link to="/b"  class="toa">转向B页面</router-link></div>
 <router-view></router-view>
</template>

<script>

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>


/* 样式的第一种修改 */
/* a{
  color: black;
  font-size: 30px;
} */

/* .toa{
  font-size: 40px;
  color: blueviolet;
} */

/* 样式的第二种修改 */

/* @import "../../public/ys1.css"; */

/* 样式的第三种修改 */
/* 在index.html 导入，共全局使用，级别较高 */


</style>
