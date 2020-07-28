<template>
  <div>
    <div class="box">
      <go-back class="goback"></go-back>
      <p>购物车</p>
    </div>
   
      <div class="empty" @click="$router.push('/index')" v-if="shopping.length===0">
        <van-empty
        class="custom-image"
        image="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1590828015988&di=0f136e909d37fcd82442c8f17b7c1d63&imgtype=0&src=http%3A%2F%2Fdpic.tiankong.com%2Ff0%2Fbg%2FQJ8606702084.jpg"
        description="购物车空空~,快去逛逛吧"
        
      />
      </div>
     <div v-else class="shop">
       <div v-for="a in shopping" :key="a.id"  class="item"  @click="getDetail(a.pid)">
         <div class="d1"><input type="checkbox" name="" id=""></div>
         <div class="d2"><img :src="a.img" alt=""></div>
         <div class="d3">
           <p>{{a.name}}</p>
         <div class="buys">  <span v-for="x in a.buySelect" :key="x">{{x}}&nbsp;</span></div>
         <i>618大促</i>
         <div class="proprice">
        
         <div class="num">{{a.num}}</div>
                <p>  ￥{{a.price}} </p>
         </div>
         </div>
     
        </div>         
       </div>
        <!-- <div class="com-footer">
        <div><input type="checkbox" name="" id="">全选</div>
        <div>合计：{{a.price*a.num}}</div>
     </div> -->
    
  </div>
</template>
<script>
import Vue from "vue";
import { Empty } from "vant";
import { mapGetters } from "vuex";
Vue.use(Empty);
export default {
  props: [],
  components: {},
  data() {
    return {
     
    };
  },
  computed:{
  ...mapGetters(["shopping"])
  },
  methods: {
       getDetail(id){
     this.$router.push("/detail/"+id)
    }
  },
  mounted() {
 console.log(this.shopping)
  },
  beforeDestroy() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
.shop{
  height 85vh
  background #f0f0f0
  // padding-bottom 5rem
  // box-sizing border-box
}
.item{
  display flex!important
  background white
  width 97%
  margin 0 1.5%
  padding 0 0.1rem
  // margin 0.1rem
  box-sizing border-box
  border-radius 0.2rem
  margin-bottom 0.2rem
}
.item .d1{
  width 0.3rem
  padding 0.1rem
}
.item .d2{
  width 2rem;
  height 2rem
  // background red
  margin 0.1rem
}
.item .d2 img{
   width 2rem;
  height 2rem;
  display block
  border-radius 0.1rem
}
.item .d3{
  line-height 2em
  flex 1
  // background pink
  padding 0.1rem 0.3rem
  font-size 0.3rem
}
.item .d3 .buys span{
    background lightgray

}
.item .d3 i{
  color #FF570a
}
.item .d3 .proprice{
   color #FF570a
   font-weight 600
}
 .item .d3 .proprice .num{
   float right
 }
.item input{
  display inline-block
  height 0.3rem
  width 0.3rem
}
.van-empty{
  // margin 0 auto
  padding 0
  width 100%
  margin-top 3rem
}
.box {
  background: $primary;
  height: $distance;
  width: 100%;
  color: $c1;
  font-size: $fs1;
  line-height: $distance;
}

.box p {
  margin: 0 auto;
  width: 2rem;
  text-align: center;
}

.box .goback {
  float: left;
  padding-left: $padding;
}
</style>