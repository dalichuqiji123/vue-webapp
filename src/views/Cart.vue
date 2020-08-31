<template>
  <div>
    <!-- 导航栏 -->
    <van-nav-bar title="购物车" left-text="返回" left-arrow @click-left="back">
      <template #right>
        <van-icon name="search" size="18" />
      </template>
    </van-nav-bar>
    <!-- 商品 -->
    <div class="row">
      <van-swipe-cell v-for="(item,idx) in cates" :key="item.id">
        <van-row>
          <van-col span="4" class="ipt-parent">
            <input type="checkbox" class="ipt" v-model='item.checked' @change='rowchange' />
          </van-col>
          <van-col span="20">
            <van-card
              :num="item.num"
              :price="item.good.goodsName"
              :desc="item.good.goodsDetils"
              :title="item.good.goodsName"
              :thumb="item.good.goodsImg"
            >
              <template #footer>
                <van-button @click='suv(item,"add",idx)' class="btn">+</van-button>
                <van-button @click='suv(item,"sub",idx)' class="btn">-</van-button>
              </template>
            </van-card>
          </van-col>
        </van-row>
        <template #right>
          <van-button square text="删除" type="danger" class="delete-button" @click='remove(item,idx)' />
        </template>
      </van-swipe-cell>
    </div>
    <!-- 提交 -->
    <van-submit-bar :price="money" button-text="提交订单" @submit="onSubmit">
      <van-checkbox v-model="checked" @click='fullchange'>全选</van-checkbox>
      <template #tip>
        你的收货地址不支持同城送,
        <span @click="onClickEditAddress">修改地址</span>
      </template>
    </van-submit-bar>
  </div>
</template>
<script>
// import { Tabbar } from "@/components/";
import {
  NavBar,
  Card,
  Button,
  SubmitBar,
  Checkbox,
  Icon,
  SwipeCell,
  Col,
  Row,
  Toast
} from "vant";
export default {
  name: "cart",
  data() {
    return {
      checked: false,
      cates: []
    };
  },
  components: {
    [NavBar.name]: NavBar,
    [Card.name]: Card,
    [Button.name]: Button,
    [SubmitBar.name]: SubmitBar,
    [Checkbox.name]: Checkbox,
    [Icon.name]: Icon,
    [SwipeCell.name]: SwipeCell,
    [Col.name]: Col,
    [Row.name]: Row
  },
  computed:{
      money(){
        let t=0
        this.cates.forEach(i=>{
          if(i.checked==true){
            t+=i.good.goodsPrice*i.num
          }
        });
        return t*100
      },
    },
  methods: {
    stopget(idx,ele,value){
      this.cates[idx][ele]=value
    },
    back() {
      this.$router.back();
    },
    rowchange(){
        let arr=this.cates.filter(ele=>ele.checked===true)
        console.log(arr.length)
        this.checked=(arr.length===this.cates.length)
    },
    fullchange(){
        this.cates.map((ele,idx)=>{
          this.cates[idx].checked=this.checked
        })
    },
    getlist(){
      this.$http.fetchGetCart({}).then(res => {
          res.map((ele,idx)=>{
          res[idx].checked=false
      })
      this.cates = res;
    });
    },
    onSubmit() {
      let arr=''
      this.cates.map(ele=>{
        if(ele.checked){
          arr+=(';'+ele._id)
        }
      })
      this.$http.fetchsubmit({goods:arr}).then(()=>{
        Toast.success('提交成功')
        this.getlist()
      })
    },
    onClickEditAddress() {
      // this.$router.push('/addr')
    },
    suv(item,type,idx){
        let data={
          num:item.num,
          id:item._id
        }
        if(type=='add'){
          data.num++
        }else{
          if(data.num==1) return
          data.num--
        }
        this.$http.fetchCartUpdata(data).then(()=>{
          this.stopget(idx,'num',data.num)
        })
    },
    remove(item,idx){
      let params={
        id:item._id
      }
      this.$http.fetchRemove(params).then(()=>{
        this.cates.splice(idx,1)
      })
    },
  },
  mounted() {
    this.getlist()
  }
};
</script>
<style lang="scss">
.van-swipe-cell {
  .delete-button {
    height: 100%;
  }
  .btn {
    width: 1.2667rem;
    height: 0.8rem;
  }
}
.row {
  padding-bottom: 2.5rem;
}
.ipt-parent {
  font-size: 0.2667rem;
  .ipt {
    width: 0.5rem;
    height: 0.5rem;
    margin-top: 1rem;
    margin-left: 50%;
  }
}
</style>