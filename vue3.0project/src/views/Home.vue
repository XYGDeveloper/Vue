<template>
  <div>
    <nav-header></nav-header>
    <nav-main></nav-main>
    <nav-footer></nav-footer>
  </div>

  <!-- <div>
    {{number}}-----{{name1}}-----{{arr}}-----{{arr[3]}}---{{obj}}---{{obj.name}}
  </div> -->
   
  <!-- <div @click="printnum">{{number}}</div>
  <div @click="printnum1">{{numer2}}</div>
  <div>{{number}} +{{numer2}} = {{addnum}}</div>
  <button @click="add">计算</button> -->
  <div>{{list}}</div>
  <div>{{na}}------{{numb}}-------{{obj}}------{{arr1}}</div>
</template>

<script>
import NavHeader from '@/components/navHeader/NavHeader'
import NavMain from '@/components/navMain/NavMain'
import NavFooter from '@/components/navFooter/NavFooter'

import { defineComponent,ref,reactive,toRefs,computed, useCssVars,onMounted,onUnmounted} from 'vue'
//从vuex获取store
import {useStore} from 'vuex'
//获取传过来的参数
import {useRoute, useRouter} from 'vue-router'

export default defineComponent({
  name:"home",
  components: {
     NavHeader, 
     NavMain, 
     NavFooter 
  },
  
  setup(props,cxt) {

     let na = ref('')
     let numb = ref(0)
     let arr1 = ref([])
     let obj = ref({})
     //组建的挂在过程，在set定义数据，在onMounted接受路由参数
    onMounted(()=>{
    let rout = useRoute()
    na.value = rout.params.name;
    numb.value = rout.params.number * 1;
    arr1.value = rout.params.arr
    obj.value = rout.params.obj
    })
     //
     let rout = useRoute()
     //传递过来都是字符串，需要做一下转换
    //  console.log(parseInt(rout.query.number) )
    //  console.log(rout.query.name)
    //  console.log(rout.query.arr)
    //  console.log(rout.query.arr[0])
    //  console.log(rout.query.obj)
    //  console.log(JSON.parse(rout.query.obj).name)
     
     console.log(rout.params)
     console.log(parseInt(rout.params.number) )
     console.log(rout.params.name)
     console.log(rout.params.arr)
     console.log(rout.params.arr[0])
     console.log(rout.params.obj)
    //  console.log(JSON.parse(rout.query.obj).name)
     
    //
    let store = useStore();
    let list = computed(()=>{
      return store.state.list
    })
    //使用ref定义单个数据
    // let number = ref(100)
    // let numer2 = ref(200)
    // let addnum = computed(()=>{
    //   return number.value + numer2.value
    // })
    // let add = ()=>{
    //   console.log("11111")
    //   number.value++
    //   numer2.value++
    // }
    // let name1 = ref("jack")
    // let arr = ref([1,2,3,4,5,6,7,8,9,0])
    // let obj = ref({
    //   name:"zhangsan",
    //   age:35
    // })
    
    //使用reactive定义对象
    // let data = reactive({
    //   // number:35,
    //   name1:"zhangdan",
    //   arr:[1,2,3,4,5,6,78],
    //   obj:{name:"zhangsan",age:67}
    // })

    // let printnum = ()=>{
    //   console.log(number.value)
    // }

    // let printnum1 = ()=>{
    //   console.log(data.arr[2])
    // }
    return{
      // number,
      // // name1,
      // // arr,
      // // obj,
      // printnum,
      // printnum1,
      // numer2,
      // addnum,
      // add,
      // // data
      //  ...toRefs(data)
      list,
      na,
      numb,
      obj,
      arr1,
    }
    
  },
})
</script>

<style lang="scss" scoped>

</style>
