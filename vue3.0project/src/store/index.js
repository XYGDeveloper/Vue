import { createStore } from 'vuex'

export default createStore({
  //特点是全剧共享
  //定义状态的
  state: {
    // name:"jack"
    //本项目，数组可以进行状态管理
    list:[
      {
        name:"吃饭",
        incomplete:true
      },
      {
        name:"睡觉",
        incomplete:true
      },
      {
        name:"写代码",
        incomplete:false
      }
  ]
  },
  //用来修改state，同步state，这里不能做定时器，网络请求
  //state 状态，不需要修改
  //payload 传递过来的值
  mutations: {
    // setName(state,payload){
    //   this.state = payload
    // }

    //添加数组并同步
    addTodo(state,payload){
      state.list.push(payload)
    },
    //删除数组某项并同步,传过来的payload是下标
    delTodo(state,payload){
      state.list.splice(payload,1)
    },
    //清除已完成数组并交给状态管理，payload是将数组的已完成过滤掉之后传过来给payload
    clearTodo(state,payload){
      state.list = payload
    }
  },
  //用来提交mutations，在这里可以做一些异步操作，定时器，网络请求
  actions: {
    asyncSetName(store,params){
      setTimeout(() => {
        store.commit('SetName',params);
      }, 2000);
    }
  },


  //模块化，高级部分
  modules: {
  }
})
