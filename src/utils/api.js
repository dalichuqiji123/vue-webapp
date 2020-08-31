import axios from "./fetch"
// export function getList(params){
//     return axios({
//         url:'/topics',
//         method:'GET',
//         params
//     })
// }
//获取商品
export function fetchGetlist(params){
    return axios({
        url:'/jd/getHotGoodList',
        method:'GET',
        params
    })
}
// 获取商品详情
export function fetchGetdetail(params){
    return axios({
        url:'/jd/getGoodDetail',
        method:'GET',
        params
    })
}
//注册
export function fetchReg(data){
    return axios({
        url:'/users/cms/regist',
        method:'POST',
        data
    })
}
//登录
export function fetchLogin(data){
    return axios({
        url:'/users/cms/login',
        method:'POST',
        data
    })
}
// 添加购物车
export function fetchToCart(data){
    return axios({
        url:'/jd/addToCart',
        method:'POST',
        data
    })
}
//获取购物车数据
export function fetchGetCart(params){
    return axios({
        url:'/jd/getCartList',
        method:'GET',
        params
    })
}
//购物车添加数据
export function fetchCartUpdata(data){
    return axios({
        url:'/jd/updateCartNum',
        method:'POST',
        data
    })
}
//购物车删除商品
export function fetchRemove(params){
    return axios({
        url:'/jd/deleteToCart',
        method:'GET',
        params
    })
}
//购物车提交
export function fetchsubmit(data){
    return axios({
        url:'/jd/submitToCart',
        method:"POST",
        data
    })
}
//获取商品种类
export function fetchGetCard(params){
    return axios({
        url:'/jd/getAllCates',
        method:"GET",
        params
    })
}
// 根据商品类别获取商品种类
export function fetchGoodsOfCate(params) {
    return axios({
        url: '/jd/getCateGoodList',
        method: 'GET',
        params
    })
}
//获取轮播图
export function fetchgetchar(params){
    return axios({
        url:'/jd/ads/all',
        method:"GET",
        params
    })
}
export default 
   { 
    fetchGetlist,
    fetchGetdetail,
    fetchReg,
    fetchLogin,
    fetchToCart,
    fetchGetCart,
    fetchCartUpdata,
    fetchRemove,
    fetchsubmit,
    fetchGetCard,
    fetchGoodsOfCate,
    fetchgetchar
}
