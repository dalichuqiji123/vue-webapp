import Vue from "vue"
import Vuex from 'vuex'

import teststore from './moudle/test'
import todostore from './moudle/todo'
import goodstore from './moudle/good' 
Vue.use(Vuex)
const store=new Vuex.Store({
   //挂载子store
   modules:{
        test:teststore,
        todo:todostore,
        good:goodstore
   }
})
export default store
