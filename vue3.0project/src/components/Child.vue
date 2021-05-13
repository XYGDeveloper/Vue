<template>
        <div>自组建----{{content}}----{{arr}}-----{{obj}}</div>
        <button @click="transTofather">到父组建</button>
</template>

<script lang="ts">
import { defineComponent ,ref,onMounted} from 'vue'

export default defineComponent({
    props:{
        content:{
            type:String,
            requred:true,
            default:"-name-"
        },
        arr:{
            type:Array
        },
        obj:{
            type:Object
        }
    },
    setup(props,ctx) {
        console.log(props.content);
        console.log(props.arr);
        console.log(props.obj);

        //父组建给自组建传递数据
        let str = ref("这是子组建的数据")
        let num = ref(100)
        let arr0 = ref([1,2,3,4,56])
        let objc = ref({
            address:"nanshanqu"
        })

        let transTofather = ()=>{
            ctx.emit("send",str);
        }
        //传递多个参数，可以以数组形式传递
        onMounted(()=>{
            ctx.emit("send",[str.value,num.value]);
        })
        return{
            str,
            num,
            arr0,
            objc,
            transTofather,
        }
    },
})
</script>
