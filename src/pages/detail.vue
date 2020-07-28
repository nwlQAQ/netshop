<template>
  <div>
    <div v-if="arr.length==0" class="loading">
      <!-- 空白处理 -->
      <van-empty
        class="custom-image"
        image="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3028672281,4280382655&fm=26&gp=0.jpg"
        description="加载中~"
      />
    </div>
    <div v-else>
      <!-- 头部小btn -->
      <div class="banner">
        <header>
          <span class="goback" @click="$router.go(-1)">
            <img :src="imgs.fanhui" alt />
          </span>
          <span class="shopping">
            <img :src="imgs.gouwuche" alt  @click="isAdd=true"/>
          </span>
          <span class="andsoon" @click="showShare=true">
            <img :src="imgs.shenglvehao" alt />
          </span>
        </header>
        <!-- 分享按钮 -->
        <van-swipe :autoplay="2500">
          <van-swipe-item v-for="(image, index) in arr.swiperImgArr" :key="index">
            <img v-lazy="image" />
          </van-swipe-item>
        </van-swipe>
        <van-share-sheet v-model="showShare" title="立即分享给好友" :options="options" />
      </div>
      <div class="name">
        <p>{{arr.name}}</p>
        <span>
          <van-icon name="star-o" color="red" />
          <p>收藏</p>
        </span>
      </div>
      <div class="proinfo">
        <!-- 价格 -->
        <div class="price">
          <p id="nowp">￥{{arr.reduct_price|filterPrice}}</p>
          <p id="orinp">￥{{arr.original_price|filterPrice}}</p>
        </div>
        <!-- 标签 -->
        <div class="icon">
          <div class="top">
            <van-tag color="#f90">{{arr.allowance|filterCount}}</van-tag>
            <van-tag color="#f90">{{arr.isFreeShip?"包邮":"不包邮"}}</van-tag>
          </div>
          <div class="bottom">
            <van-tag color="#f90" plain v-for="item in arr.describe" :key="item">{{item}}</van-tag>
          </div>
        </div>
      </div>
      <div class="jianxi"></div>
      <!-- 商品图片和商品评价 -->
      <div class="nav">
        <div class="nav-item" @click="isDetail=true" :class="[isDetail?'nav-item-select':'']">商品详情</div>
        <div class="nav-item" @click="isDetail=false" :class="[!isDetail?'nav-item-select':'']">买家口碑</div>
      </div>
      <div class="proimg" v-if="isDetail">
        <div class="showimg" v-for="x in arr.shopDes" :key="x">
          <img :src="x" alt />
        </div>
      </div>
      <div v-else style="padding-bottom:1rem">
        <div class="guestCom">
          <div
            class="comment-nav"
            v-for="(a,i) in commemtarr"
            :key="a"
            :class="[i===num?'commentselected':'']"
            @click="num=i"
          >{{a}}</div>
        </div>
        <div v-for="a in comments" :key="a.postDescribe" class="comment-datail">
          <h1>
            <span>{{a.buyerName}}</span>
            <p>{{a.createTime|filterTime}}</p>
          </h1>
          <div class="nice">
            <div class="guestimg" v-for="b in a.postImg" :key="b">
              <img :src="b" alt />
            </div>
          </div>
          <div class="hah">{{a.postDescribe}}</div>
          <div class="reponse">店主说:{{a.adminReviews}}</div>
        </div>
      </div>

      <footer>
        <p>
          总价：
          <span>￥0.00</span>
        </p>
        <div class="btn">
          <span class="addshop" @click="isAdd=true">加入购物车</span>
          <span class="purchase">立即购买</span>
        </div>

        <transition enter-active-class="animate__animated animate__bounceInUp">
          <v-picker v-if="isAdd" @close="isAdd=false" :detail="arr"></v-picker>
        </transition>
      </footer>
    </div>
  </div>
</template>
<script>
import vPicker from "../component/picker";
import { Tag } from "vant";
Vue.use(Tag);
import { Icon } from "vant";
Vue.use(Icon);
import { Sku } from "vant";
Vue.use(Sku);
import fanhui from "../assets/img/fanhui.png";
import gouwuche from "../assets/img/gouwuche.png";
import shenglvehao from "../assets/img/shenglvehao.png";
import { requestProductDetail } from "../utils/request";
import Vue from "vue";
import { Swipe, SwipeItem, Empty } from "vant";
Vue.use(Empty);
Vue.use(Swipe);
Vue.use(SwipeItem);
import { Lazyload } from "vant";
Vue.use(Lazyload);
import { ShareSheet } from "vant";
Vue.use(ShareSheet);
export default {
  props: [],
  components: {},
  data() {
    return {
      commemtarr: ["全部评价", "好评", "差评", "晒单"],
      isDetail: true,
      id: "",
      imgs: {
        shenglvehao,
        gouwuche,
        fanhui
      },
      arr: [],
      showShare: false,
      options: [
        [
          { name: "微信", icon: "wechat" },
          { name: "微博", icon: "weibo" },
          { name: "QQ", icon: "qq" }
        ],
        [
          { name: "复制链接", icon: "link" },
          { name: "分享海报", icon: "poster" },
          { name: "二维码", icon: "qrcode" }
        ]
      ],
      isXiang: false,
      arr: ["全部", "好评", "差评", "晒单"], //评论导航数据
      num: 0, //导航第几个被选中
      detail: {}, //详情
      isAdd: false, //picker的状态
      num: 0
    };
  },
  components: {
    vPicker
  },
  methods: {},
  mounted() {
    this.id = this.$route.params.id;
    console.log(this.id);
    requestProductDetail(this.id).then(res => {
      this.arr = res.data.data;
    });
  },
  beforeDestroy() {},
  computed: {
    comments() {
      var buySelect = ["all", "good", "bad", "postForm"];

      if (this.arr.buyerReviews) {
        return this.arr.buyerReviews[buySelect[this.num]];
      } else {
        return [];
      }
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.comment-datail .hah {
  font-size: 0.3rem;
  color: #b5b5b5;
  line-height: 0.4rem;
  padding: 0.2rem;
}

.comment-datail .reponse {
  background: #b5b5b5;
  font-size: 0.3rem;
  color: #656565;
  border-radius: 0.2rem;
  padding: 0.2rem;
}

.comment-datail {
  // border-top 1px solid #dddddd
  border-bottom: 1px solid #dddddd;
  padding: 0.1rem 0.4rem;
}

.comment-datail h1 {
  height: 0.6rem;
  font-size: 0.3rem;
  line-height: 0.6rem;
  overflow: hidden;
}

.comment-datail h1 span {
  color: $primary;
  float: left;
}

.comment-datail h1 p {
  float: right;
  color: #9a9a9a;
  font-size: 0.25rem;
}

.comment-datail .nice {
  overflow: hidden;
}

.comment-datail .guestimg {
  float: left;
}

.comment-datail .guestimg img {
  // display: block;
  width: 2.5rem;
  height: 2.5rem;
}

.commentselected {
  background: $primary !important;
}

.guestCom {
  display: flex;
  width: 90%;
  margin: 0 auto;
  height: 0.6rem;
  padding: 0.2rem 0;
  border-bottom: 1px solid #dddddd;
}

.guestCom .comment-nav {
  flex: 1;
  text-align: center;
  margin: 0 auto;
  font-size: 0.25rem;
  // justify-content: space-around;
  margin: 0 0.1rem;
  padding: 0 0.2rem;
  line-height: 0.6rem;
  background: #999;
  border-radius: 0.3rem;
  color: white;
}

.proimg .showimg img {
  width: 90%;
  display: block;
  margin: 0 auto;
}

.proimg {
  padding: 0.3rem 0 1rem 0;
}

.nav {
  height: 0.8rem;
  width: 100%;
  display: flex;
}

.nav .nav-item {
  padding-top: 0.2rem;
  flex: 1;
  font-size: 0.3rem;
  text-align: center;
  line-height: 0.6rem;
  color: gray;
  margin: 0 1rem;
  box-sizing: border-box;
}

.nav-item-select {
  color: $primary !important;
  border-bottom: 2px solid $primary;
}

.jianxi {
  height: 0.5rem;
  background: #efeeee;
  font-size: 0.3rem;
  line-height: 0.5rem;
}

.proinfo {
  display: flex;
  height: 1.2rem;
}

.proinfo .price {
  width: 25%;
  display: flex;
  flex-direction: column;
  padding: 0 0.3rem;
}

.proinfo .icon .bottom .van-tag {
  margin-right: 0.15rem;
}

.proinfo .price #nowp {
  font-size: 0.5rem;
  color: red;
}

.proinfo .icon {
  flex: 1;
  display: flex;
  flex-direction: column;
  margin-top: -0.5rem;
}

.proinfo .icon .top {
  height: 0.5rem;
}

.proinfo .icon .bottom {
  height: 0.5rem;
}

.proinfo .price #orinp {
  font-size: 0.3rem;
  color: gray;
  text-decoration: line-through;
}

.name {
  height: 1rem;
  font-size: 0.4rem;
  display: flex;
  padding-top: 0.1rem;
}

.name p {
  width: 80%;
  display: flex;
  padding: 0 0.2rem 0 0.3rem;
  box-sizing: border-box;
}

.name .van-icon {
  width: 0.5rem;
  height: 0.5rem;
  padding-left: 0.35rem;
}

.name span p {
  // vertical-align: middle;
  font-size: 0.3rem;
  width: 100%;
  color: red;
  // padding: none !important;
}

.name span {
  flex: 1;
  padding-left: 0.1rem;
  border-left: 1px solid lightgray;
}

footer {
  position: fixed;
  width: 100%;
  height: 1rem;
  bottom: 0;
  left: 0;
  display: flex;
  background: white;
  font-size: 0.3rem;
  text-align: center;
  line-height: 1rem;
}

footer p {
  width: 45%;
}

footer p span {
  color: red;
}

footer .btn {
  flex: 1;
  display: flex;
}

footer .btn span {
  flex: 1;
  color: white;
}

footer .btn .addshop {
  background: $primary;
}

footer .btn .purchase {
  background: red;
}

.banner img {
  width: 80%;
  padding: 0 10%;
}

.loading {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}

.banner {
  border-bottom: 1px solid lightgray;
  position: relative;
}

// .banner header{
// overflow hidden}
.banner header span {
  background: rgba(0, 0, 0, 0.5);
  width: 0.8rem;
  height: 0.8rem;
  display: block;
  border-radius: 50%;
  z-index: 100;
}

.banner header span img {
  display: block;
  width: 60%;
  height: 60%;
  padding: 20%;
}

.banner header .goback {
  position: absolute;
  top: 0.3rem;
  left: 0.3rem;
}

.banner header .andsoon {
  position: absolute;
  top: 0.3rem;
  right: 0.3rem;
}

.banner header .shopping {
  position: absolute;
  top: 0.3rem;
  right: 1.5rem;
}
</style>