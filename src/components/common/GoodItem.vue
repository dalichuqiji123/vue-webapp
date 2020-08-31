<template>
    <div class='gooditem'>
        <img :src="good.goodsImg" alt="" @click='toDetail'>
        <div v-text='good.goodsName'></div>
        <div v-text='good.goodsPrice'></div>
    </div>
</template>
<script>
// import {img} from '@/utils/img'
export default {
    props:{
        good:{type:Object,required:true}
    },
    methods:{
        toDetail(){
            this.$router.push('./detail/'+this.good._id)
        }
    },
    // data(){
    //     return {
    //         img
    //     }
    // }
}
</script>
<style lang="scss">
.gooditem{
    width:5rem;
    flex:1;
    box-sizing:border-box;
    border: 1px solid #ccc;
    font-size: 0.4rem;
    &>img {
        display: block;
        width:5rem;
        height:5rem;
    }
}
</style>