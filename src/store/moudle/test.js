import {getList} from '@/utils/api'
export default {
    namespaced:true,
    state:{
        count:0,
        list1:[
            {id:1,label:'吃饭'},
            {id:2,label:'睡觉'},
            {id:3,label:'被豆豆打'},
        ],
        getcode:[]
    },
    mutations:{
        addCount(state){
            state.count++  
        },
        suvCount(state){
            state.count--
        },
        add(state,payload){
            state.list1.push({id:state.list1.length+1,label:payload})
        },
        remove(state,index1){
            state.list1.splice(index1,1)
        },
        clear(state){
            state.list1=[]
        },
        getcodechange(state,payload){
            state.getcode=payload
        }
    },
    getters:{
        leng(state){
            return state.list1.length
        }
    },
    actions:{
        ajaxcode(store,params){
            getList(params).then(res=>{
                store.commit('getcodechange',res)
                // console.log(res)
            })
        }
    }
}