<template>
  <div class="find">
    <!-- 搜索 -->
    <van-sticky>
      <van-search shape="round" background="red" :placeholder="placeholder.name" />
    </van-sticky>
    <!-- 左边栏 -->
    <div class="find-left">
      <van-sidebar v-model="activeKey">
        <van-sidebar-item
          title="标签名1"
          v-for="(item,index) in list"
          :key="item._id"
          v-text="item.cate_zh"
          @click="touch(index,item)"
        />
      </van-sidebar>
    </div>
    <!-- 右边栏 -->
    <div class="find-right">
      <van-grid :column-num="3" icon-size="1rem">
        <van-grid-item v-for="item in goodArr" :key="item._id">
          <van-image :src="item.goodsImg" width="2rem" height="3rem" @click='detils(item._id)' />
          <div v-text="item.goodsName" class="name"></div>
        </van-grid-item>
      </van-grid>
    </div>
    <Tabbar />
  </div>
</template>
<script>
import { Tabbar } from "@/components/";
import { mapMutations, mapState } from "vuex";
import {
  Search,
  Grid,
  GridItem,
  Sidebar,
  SidebarItem,
  Sticky,
  Image
} from "vant";
export default {
  data() {
    return {
      activeKey: 0,
      list: [],
      goodArr: [],
      list1:[
            {id:1,name:"手机"},
            {id:2,name:"电脑"},
            {id:3,name:"耳机"},
            {id:4,name:"平板"}
          ]
    };
  },
  computed: {
    ...mapState("good", ["find"]),
    placeholder(){
      return this.list1[Math.floor(Math.random()*this.list1.length)]
    }
  },
  components: {
    Tabbar,
    [Search.name]: Search,
    [Grid.name]: Grid,
    [GridItem.name]: GridItem,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [Sticky.name]: Sticky,
    [Image.name]: Image
  },
  methods: {
    ...mapMutations("good", ["getcate",'deletecate']),
    touch(idx, item) {
      //如果获取到了缓存数据的话
      if (this.find[idx] && this.find[idx].length) {
        this.goodArr = this.find[idx];
      } else {
        let params = { cate: item.cate };
        this.$http.fetchGoodsOfCate(params).then(res => {
          this.goodArr = res;
          this.getcate({ idx: idx, res });
        });
      }
    },
    detils(id){
        this.$router.push('./detail/'+id)
    },
    async init() {
      let arr = await this.$http.fetchGetCard({});
      this.list = arr;
      let params = { cate: arr[0].cate };
      this.$http.fetchGoodsOfCate(params).then(res => {
        this.goodArr = res;
        this.getcate({ idx: 0, res });
      });
    }
  },
  beforeDestroy(){
      this.deletecate()
  },
  mounted() {
    this.init();
  }
};
</script>
<style lang="scss" scoped>
.find {
  width: 100%;
  height: 100%;
  position: relative;
  .find-left {
    position: absolute;
    width: 2.266667rem;
    left: 0;
    top: 1.5rem;
    background: #f7f7f7;
    overflow: auto;
    bottom: 1.2667rem;
    & > div {
      font-size: 0.6rem;
      text-align: center;
      line-height: 1.2rem;
      &.on {
        background: orange;
      }
    }
  }
  .find-right {
    position: absolute;
    left: 2.266667rem;
    width: 7.66667rem;
    display: flex;
    top: 1.5rem;
    bottom: 1.667rem;
    overflow: auto;
    .van-grid {
      flex: 3;
      .van-grid-item {
        font-size: 0.4rem;
        height: 4.866667rem;
        .van-image {
          height: 0.866667rem;
        }
        .name {
          height: 0.5333rem;
          overflow: hidden;
        }
      }
    }
  }
}
</style>