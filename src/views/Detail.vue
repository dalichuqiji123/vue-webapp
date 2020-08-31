<template>
    <div class='box'>
        <div v-text='data.goodsName'></div>
        <img :src="data.goodsImg" alt="">
        <div v-text="'￥'+data.goodsPrice"></div>
        <p v-text='data.goodsDetail'></p>
        <van-goods-action>
            <van-goods-action-icon icon="chat-o" text="客服"  />
            <van-goods-action-icon icon="cart-o" text="购物车" />
            <van-goods-action-icon icon="shop-o" text="店铺" />
            <van-goods-action-button
                type="danger"
                text="立即购买"
                @click="onClickButton"
            />
        </van-goods-action>
    </div>
</template>
<script>
import {GoodsAction, GoodsActionIcon, GoodsActionButton,Toast } from 'vant'
export default {
    name:'detail',
    data(){
        return {
            data:{}
        }
    },
    components:{
        [GoodsAction.name]:GoodsAction, 
        [GoodsActionIcon.name]:GoodsActionIcon, 
        [GoodsActionButton.name]:GoodsActionButton,
    },
    methods:{
        onClickButton(){
            let that=this
            let token=localStorage.getItem('token')
            if(!token){
                that.$router.push('/login')
            }else {
                let data1={
                    good_id:this.data._id
                }
                this.$http.fetchToCart(data1).then(()=>{
                    Toast.success('添加购物车成功')
                    setTimeout(function(){
                       that.$router.go(-1)
                    },500)
                })
            }
        }
    },
    mounted(){
       let id = this.$route.params.id
       let params={
           good_id:id
       }
       this.$http.fetchGetdetail(params).then(res=>{
           this.data=res
       })
   }
}
</script>
<style lang="scss" scoped>
.box{
    padding-bottom:20px;
    img{
        width:200px;
        height:200px;
        margin:20px 0;
    }
}
</style>