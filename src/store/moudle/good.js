
export default{
    namespaced:true,
    state:{
        find:{
        }
    },
    getters:{

    },
    mutations:{
        getcate(state,payload){
            // payload={idx:index,res:res}
            state.find[payload.idx]=payload.res
        },
        deletecate(state){
            state.find={}
        }
    },
    active:{

    }
}

