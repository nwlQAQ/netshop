<template>
  <div>
    <div class="box">
      <van-search v-model="value" placeholder="请输入搜索关键词" input-align="center" />
    </div>
    <main>
      <div class="left">
        <router-link to="/index/menu/baby" active-class="selected">
          <p>母婴专区</p>
        </router-link>
        <router-link to="/index/menu/makeup" active-class="selected">
          <p>美妆护肤</p>
        </router-link>
        <router-link to="/index/menu/life" active-class="selected">
          <p>家居生活</p>
        </router-link>
        <router-link to="/index/menu/food" active-class="selected">
          <p>食品营养</p>
        </router-link>
        <router-link to="/index/menu/global" active-class="selected">
          <p>全球直邮</p>
        </router-link>
      </div>
      <div class="right">
        <router-view></router-view>
      </div>
    </main>
  </div>
</template>

<script>

import Vue from "vue";
import { Search } from "vant";
Vue.use(Search);
export default {
  props: [],
  components: {},
  data() {
    return {
      value: "",
      arr: []
    };
  },
  methods: {},
  mounted() {
    
  },
  beforeDestroy() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.box {
  background: $primary;
  height: $distance;
  width: 100%;
  color: $c1;
  font-size: $fs1;
  text-align: center;
  margin: 0 auto;
  position: relative;
}

.box .van-search {
  width: 70%;
  position: absolute;
  bottom: 0.2rem;
  padding: 0;
  left: 15%;
  border-radius: 20px;
  opacity: 0.7;
}

main {
  display: flex;
}

main .left {
  width: 2.3rem;
  height: 80vh;
  // padding-bottom 1rem
  background: #fafafa;
}

main .left a {
  width: 2.3rem;
  display: block;
  border-left: 0.1rem solid #fafafa;
}

main .left a p {
  font-size: 0.3rem;
  letter-spacing: 0.05rem;
  text-align: center;
  line-height: 1rem;
  color: #626262;
}

.selected {
  border-left: 0.1rem solid $default !important;
  background: white;
}

.selected p {
  color: $primary !important;
}

main .right {
  flex: 1;
}
</style>