<template>
  <div>
    <!-- 顶部banner -->
    <div class="banner">
      <img :src="imgs.shouyebanner" alt />
      <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    </div>
    <!-- 主要商品选择部分 -->
    <div v-if="arr.length==0">
      <van-empty
  class="custom-image"
  image="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3028672281,4280382655&fm=26&gp=0.jpg"
  description="精彩内容马上就到~"
/></div>
    <div v-else class="proItem" v-for="(a,i) in arr" :key="a.name">
      <h1>
        <img :src="icons[i]" alt />
        <p>{{a.name}}</p>
      </h1>
      <div class="container">
        <div class="card" v-for="b in a.list" :key="b.id"  @click="getDetail(b.id)">
          <img :src="b.thumbnail" title="b.name" />
          <p>
            <span class="reduct_price">￥{{b.reduct_price}}</span>
            <span class="original_price">￥{{b.original_price}}</span>
          </p>
          <div class="des">{{b.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Search } from "vant";
// import { Toast } from 'vant';
import { requestIndexInfo } from "../utils/request";
Vue.use(Search);
import shouyebanner from "../assets/img/shouyebanner.jpg";
import airplane from "../assets/img/airplane.png";
import baby from "../assets/img/baby.png";
import food from "../assets/img/food.png";
import furniture from "../assets/img/furniture.png";
import hot from "../assets/img/hot.png";
import meizhuang from "../assets/img/meizhuang.png";

import { Empty } from 'vant';

Vue.use(Empty);

export default {
  props: [],
  components: {},
  data() {
    return {
      imgs: {
        shouyebanner
      },
      icons: [hot, baby, meizhuang, furniture, food, airplane],
      value: "",
      arr: []
    };
  },
  methods: {
    getDetail(id){
     this.$router.push("/detail/"+id)
    }
  },
  mounted() {
    requestIndexInfo().then(res => {
      this.arr = res.data.data;
      // console.log(res.data.data);
    });
  },
  beforeDestroy() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.proItem .container {
  overflow: hidden;
}

.banner img {
  width: 100%;
}

.banner {
  position: relative;
}

.banner .van-search {
  width: 70%;
  position: absolute;
  top: 0.7rem;
  padding: 0;
  left: 15%;
  border-radius: 20px;
  opacity: 0.7;
}

.proItem {
  padding-left: 0.2rem;
  height: 5rem;
  margin-bottom: 0.8rem;
  z-index: 2;
}

.proItem h1 {
  height: 0.5rem;
  width: 3rem;
  display: flex;
  padding: 0.2rem;
}

.proItem h1 img {
  height: 0.3rem;
  width: 0.3rem;
}

.proItem h1 p {
  flex: 1;
  font-size: 0.3rem;
  padding-left: 0.2rem;
}

.proItem .card {
  width: 3.2rem;
  height: 4.8rem;
  border: 1px solid #eee;
  float: left;
  margin-right: 0.2rem;
  overflow: hidden;
}

.proItem .card img {
  width: 3rem;
  height: 3rem;
  margin: 0 auto;
}

.proItem .card p {
  height: 0.4rem;
  line-height: 0.4rem;
  font-size: 0.4rem;
  padding: 0 0.4rem;
  overflow: hidden;
}

.proItem .card p .original_price {
  float: right;
  color: #747474;
  text-decoration-line: line-through;
}

.proItem .card p .reduct_price {
  float: left;
  color: #e50112;
}

.proItem .card .des {
  line-height: 0.45rem;
  font-style: normal;
  font-size: 0.3rem;
  padding: 0.2rem;
}
</style>