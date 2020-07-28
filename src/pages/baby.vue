<template>
  <div>
    <div class="empty" v-if="arr.length===0">
      <van-empty
        class="custom-image"
        image="https://dss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3028672281,4280382655&fm=26&gp=0.jpg"
        description="精彩内容马上就到~"
      />
    </div>
    <div class="container" v-else>
      <div class="card" v-for="a in arr" :key="a.id">
        <img :src="a.thumbnail" alt />
        <div class="mask">{{a.name}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
// import iCard from "../common/card"
import { requestClassInfo } from "../utils/request";
import { Empty } from "vant";
Vue.use(Empty);
export default {
  props: [],
  components: {},
  data() {
    return {
      arr: []
    };
  },
  methods: {},
  mounted() {
    requestClassInfo().then(res => {
      this.arr = res.data.data[0].list;
      console.log(this.arr);
    });
  },
  beforeDestroy() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.card {
  width: 2.2rem;
  height: 2.2rem;
  border: 2px solid $default;
  border-radius: 5px;
  margin: 0.06rem;
  float: left;
  position: relative;
}

.card img {
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  margin: 0 auto;
  margin-top: 0.1rem;
}

.mask {
  position: absolute;
  bottom: 0;
  left: 0;
  height: 0.5rem;
  width: 100%;
  background: $default;
  text-align: center;
  color: white;
  font-size: 0.3rem;
  line-height: 0.5rem;
}
</style>