<template>
    <div>
        <!-- 头部 -->
        <div class="header">
            <van-row>
            <van-col span='6'>
                <van-image
                    round
                    width="2rem"
                    height="2rem"
                    src="https://img.yzcdn.cn/vant/cat.jpeg"
                />
            </van-col>
            <van-col span='18'>
                <div>用户名</div>
                <div>昵称</div>
                <div>
                    <span>京东值：5000</span>
                    <span>小白信用度：100</span>
                    <span>></span>
                </div>
            </van-col>
        </van-row>
        </div>
        <div class="user-order">
            <van-grid :column-num="4">
                <van-grid-item icon="home-o" text="待付款" dot />
                <van-grid-item icon="shopping-cart-o" text="待收货" badge="99+" />
                <van-grid-item icon="gold-coin-o" text="退换/售后" badge="99+" />
                <van-grid-item icon="phone-circle-o" text="全部订单" badge="99+" />
            </van-grid>
        </div>
        <div>
            <van-cell-group title="地址">
                <van-cell value="收货与收获地址管理" is-link>
                    <template #title>
                        <span class="custom-title">地址管理</span>
                    </template>
                </van-cell>
            </van-cell-group>
             <van-cell-group title="安全">
                <van-cell value="验证码与验证码管理" is-link>
                    <template #title>
                        <span class="custom-title">验证码管理</span>
                    </template>
                </van-cell>
                <van-cell value="账号安全与密码安全" is-link>
                    <template #title>
                        <span class="custom-title">账号管理</span>
                    </template>
                </van-cell>
            </van-cell-group>
            <van-cell-group title="联系">
                <van-cell value="和客服小姐姐聊天" is-link>
                    <template #title>
                        <span class="custom-title">联系客服</span>
                    </template>
                </van-cell>
                <van-cell value="你真的要切换站点吗" is-link>
                    <template #title>
                        <span class="custom-title">切换站点</span>
                    </template>
                </van-cell>
            </van-cell-group>
        </div>
        <!-- 功能按钮 -->
        <van-grid direction="horizontal" :column-num="3">
            <van-grid-item icon="service-o" text="意见反馈" />
            <van-grid-item icon="balance-o" text="京东客户端" />
            <van-grid-item icon="user-circle-o" text="退出登录" />
        </van-grid>
        <Tabbar/>
    </div>
</template>
<script>
import {Tabbar} from '@/components/'
import {Image ,
        Col,
        Row,
        Grid,
        GridItem,
        Cell, 
        CellGroup
    } from 'vant'
export default {
    name:'user',
    components:{
        Tabbar,
        [Image.name]:Image,
        [Col.name]:Col,
        [Row.name]:Row,
        [Grid.name]:Grid,
        [GridItem.name]:GridItem,
        [Cell.name]:Cell, 
        [CellGroup.name]:CellGroup
    }
}
</script>
<style lang="scss">
.header{
    background:yellowgreen;
    padding-top:0.2667rem;
    .van-col{
        div{
            font-size:0.3667rem;
            color:white;
            margin:0.1333rem 0;
            span{
                color:white;
                margin:0.1333rem 0;
            }
        }
    }
}
</style>