<template>
  <div class="picker" @click.self="close" v-if="detail.reduct_price">
    <div class="con">
      <span class="iconfont icon-guanbi" @click="close"></span>
      <div class="protop">
        <div class="proimg">
          <img :src="detail.swiperImgArr[1]" alt />
        </div>
        <div class="proprice">
          <p class="p1">￥{{detail.reduct_price}}</p>
          <p class="p2">库存{{detail.total}}</p>
          <b class="p3">请选择</b>
        </div>
      </div>
      <div class="classify" v-for="(item,index) in detail.buySelect" :key="item.name">
        <h4>{{item.name}}</h4>
        <div class="classline">
          <span
            v-for="(i,idx) in item.list"
            :key="i"
            :class="[idx===item.num?'select':'']"
            @click="skuCheck(index,idx)"
          >{{i}}</span>
        </div>
      </div>
      <div class="choosenum">
        <h4>购买数量</h4>
        <div class="nummsub" @click="add">+</div>
        <div class="num">{{num}}</div>
        <div class="numadd" @click="sub">-</div>
      </div>
         <div class="classify classify1">
        <h4>花呗分期</h4>
        <div class="classline">
          <span v-for="i in fenArr" :key="i" >{{i}}期 ￥{{(Number(detail.reduct_price*num/i).toFixed(2))}}/期</span>
          <!-- <span>6期 ￥{{(Number(detail.reduct_price*num/6).toFixed(2))}}/期</span>
          <span>3期 ￥{{(Number(detail.reduct_price*num/3).toFixed(2))}}/期</span> -->
        </div>
      </div>
      <button @click="addShop">确定</button>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Dialog } from "vant";
Vue.use(Dialog);
import { mapActions } from "vuex";
export default {
  props: ["detail"],
  components: {},
  data() {
    return {
      num: 1,
      fenArr:[12,6,3,18]
    };
  },
  methods: {
    close() {
      this.$emit("close");
    },
    add() {
      this.num++;
         if (this.num > 5) {
        Dialog.alert({
          message: "单用户限购5件~"
        }).then(() => {
         this.num = 5;
        });
      }
    },
    sub() {
      this.num--;
    //   this.num = Math.max(1, this.num);
      if (this.num < 1) {
        Dialog.alert({
          message: "数量低于范围~"
        }).then(() => {
         this.num = 1;
        });
      }
    },
    skuCheck(index, idx) {
      var json = this.detail.buySelect[index];
      json.num = idx;
      Vue.set(this.detail.buySelect, index, json);
      console.log(this.detail.buySelect);
    },
    ...mapActions(["addShopAction"]),
    addShop() {
      var arr = this.detail.buySelect.map(item => {
        return item.list[item.num];
      });
      this.addShopAction({
        img: this.detail.swiperImgArr[0],
        name: this.detail.name,
        price: this.detail.reduct_price,
        num: this.num,
        buySelect: arr,
        checked: false,
        pid: this.detail.pid
      });
      Dialog.alert({
        message: "添加成功，在购物车等亲~"
      }).then(() => {
        // on close
      });
      this.$emit("close");
    }
  }
};
</script>
<style scoped>
.iconfont {
  position: absolute;
  top: -0.25rem;
  right: 0;
  font-size: 0.3rem;
}
.picker {
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background: rgba(0, 0, 0, 0.5);
}
.con {
  width: 100vw;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
  background: #fff;
}
.protop {
  padding: 0.2rem;
  box-sizing: border-box;
  display: flex;
  border-bottom: 1px solid #b6b6b6;
}
.proimg {
  width: 2rem;
  height: 2rem;
}
.proimg img {
  display: block;
  width: 2rem;
  height: 2rem;
  border-radius: 0.5rem;
}
.proprice {
  flex: 1;
  color: #ff570a;
  text-align: left;
  padding: 0.2rem;
  line-height: 1.4em;
}
.proprice .p1 {
  color: #ff570a;
  font-size: 0.4rem;
}
.proprice .p2 {
  color: gray;
  font-size: 0.25rem;
  font-style: normal;
}
.proprice .p3 {
  font-size: 0.25rem;

  font-weight: normal;
  color: black;
}
.classify {
  padding: 0.2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #b6b6b6;
}
.classify h4 {
  text-align: left;
  line-height: 1.5em;
}
.classify .classline {
  overflow: hidden;
}
.classify .classline span {
 /* display:inline-block; */
  padding: 0 0.3rem;
  height: 0.6rem;
  line-height: 0.6rem;
  color: black;
  border-radius: 0.1rem;
  background: lightgray;
  margin-right: 0.25rem;
  margin-bottom: 0.1rem;
  border: 1.5px solid lightgray;
  float: left;
}
.classline .select {
  border: 1.5px solid #ff570a !important;
  color: #ff570a !important;
  box-sizing: border-box;
}
/* .classify1{
    width: 100%;
   overflow-x: scroll; 
      white-space: nowrap!important;

} */
.choosenum {
  overflow: hidden;
  padding: 0 0.2rem;
  box-sizing: border-box;
  border-bottom: 1px solid #b6b6b6;
}
.choosenum h4 {
  float: left;
}
.choosenum div {
  margin: 0.2rem 1px;
  float: right;
  height: 0.6rem;
  width: 0.6rem;
  line-height: 0.6rem;
  background: lightgray;
}
button {
  background: #ff570a;
  color: white;
  width: 95%;
  margin: 0 auto;
  border: none;
  height: 0.8rem;
  line-height: 0.8rem;
  border-radius: 0.4rem;
}
</style>