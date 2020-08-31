export default{
    namespaced:true,
    state:{
        msg:'lalalalalala',
    },
    getters:{
        length(state){
            return state.msg.length
        }
    },
    mutations:{
        changenew(state,payload){
            state.msg=payload

        }
    }
}