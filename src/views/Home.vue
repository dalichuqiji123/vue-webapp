<template>
    <div calss='qf-home'>
        <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <!-- 通知栏 -->
        <van-notice-bar
            left-icon="volume-o"
            text="欢迎来到京东官网，随便挑随便选"
            mode='closeable'
            background:red
        />
        <!-- 搜索框 -->
        <van-search
            show-action
            :placeholder="placeholder"
            background='red'
            >
            <template #action>
                <div @click="onLogin">登录</div>
            </template>
        </van-search>
        <!-- 轮播图 -->
        <van-swipe :autoplay="3000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
            <img v-lazy="image.img" />
        </van-swipe-item>
        </van-swipe>
        <!-- 分割线 -->
        <van-divider
            :style="{ color: '#1989fa', borderColor: '#1989fa', padding: '0 16px' }"
            >
            猜你喜欢
        </van-divider>
        <!-- 商品列表 -->
        
           <div class="listbox">
                <van-list
                v-model="loading"
                :finished="finished"
                finished-text="到底了哦"
                @load="onLoad"
                offser='100'
            >
            <div class='box'
                v-for='i in length'
                :key='i'>
                <GoodItem :good='goods[i*2-2]' />
                <GoodItem :good='goods[i*2-1]' />
            </div>
            </van-list>
           </div>
        </van-pull-refresh>
        <Tabbar/>
        
    </div>
</template>
<script>
import {Tabbar,GoodItem} from '@/components/'
import {NoticeBar,
        Search,
        Swipe, 
        SwipeItem ,
        Lazyload,
        Divider ,
        List,
        PullRefresh ,
        Toast
    } 
from 'vant'
import Vue from 'vue';
Vue.use(Lazyload);
export default {
    name:'home',
    data(){
        return {
            //后端返回数据
            images: [
                
            ],
            goods:[],
            loading:false,
            finished:false,
            refreshing: false,
            page:1,
            list:[
                {id:1,name:"手机"},
                {id:2,name:"电脑"},
                {id:3,name:"耳机"},
                {id:4,name:"平板"}
                ]
        }
    },
    computed:{
        length(){
            return Math.floor(this.goods.length/2)
        },
        placeholder(){
            return this.list[Math.floor(Math.random()*this.list.length)].name
        }
    },
    components:{
        Tabbar,
        GoodItem,
        [NoticeBar.name]:NoticeBar,
        [Search.name]:Search,
        [Swipe.name]:Swipe,
        [SwipeItem.name]:SwipeItem,
        [Divider.name]:Divider ,
        [List.name]:List,
        [PullRefresh.name]:PullRefresh 
    },
    methods:{
        getlist(){
            //传参
            let params={
                page:this.page,
                size:6
            }
            this.$http.fetchGetlist(params).then(res=>{
            if (res.list.length===0) Toast.success('没有数据了')
            if(res.list.length>0){
                //下拉刷新
                if(this.refreshing){
                    this.goods=res
                }else{
                    // 加载
                    this.goods=[...this.goods,...res.list]
                }
                // 重置刷新令它可以持续刷新不然就只能刷新一次
                this.refreshing=false
                // 重置加载令它可以持续加载不然只能加载一次
                this.loading=false
            }
            })
        },
        onLogin(){
            this.$router.push('/login')
        },
        onLoad(){
            this.page++
            this.getlist()
        },
        onRefresh(){
           this.page=1
           this.getlist()
        }
    },
    mounted(){
        this.getlist()
        this.$http.fetchgetchar({}).then(arr=>{
            this.images=arr.list
        })
    }
}
</script>
<style lang="scss" >
.van-swipe-item{
    img{
        display:block;
        width:10rem;
        height:4rem;
    }
}
.listbox{
    width:100%;
    height:100%;
}
    .box{
    display: flex;
    width:100%;
    height:100%;
}
</style>