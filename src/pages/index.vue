<template>
<div>
    <router-view style="padding-bottom:1rem"></router-view>

       <footer>
        <router-link to="/index/home" active-class="selected">
    <img :src="$route.path=='/index/home'?imgs.tab_home_hig:imgs.tab_home_nor" alt=""><p>首页</p></router-link>

     <router-link to="/index/menu" active-class="selected">
    <img :src="$route.path=='/index/menu'?imgs.tab_menu_hig:imgs.tab_menu_nor" alt=""><p>分类</p></router-link>

    <!-- <router-link to="/index/menu" active-class="selected">
    <img :src="$route.path=='/index/menu'?imgs.tab_menu_hig:imgs.tab_menu_nor" alt=""><p>分类</p></router-link> -->

    <router-link to="/index/shopping" active-class="selected">
    <img :src="$route.path=='/index/shopping'?imgs.tab_shopping_hig:imgs.tab_shopping_nor" alt=""><p>购物车</p></router-link>
    <router-link to="/index/me" active-class="selected">
    <img :src="$route.path=='/index/me'?imgs.tab_me_hig:imgs.tab_me_nor" alt=""><p>我的</p></router-link>
   </footer>


</div>
</template>
<script>
import tab_home_hig from "../assets/img/tab_home_hig.png"
import tab_home_nor from "../assets/img/tab_home_nor.png"
import tab_me_hig from "../assets/img/tab_me_hig.png"
import tab_me_nor from "../assets/img/tab_me_nor.png"
import tab_menu_hig from "../assets/img/tab_menu_hig.png"
import tab_menu_nor from "../assets/img/tab_menu_nor.png"
import tab_shopping_hig from "../assets/img/tab_shopping_hig.png"
import tab_shopping_nor from "../assets/img/tab_shopping_nor.png"
export default {
props: [],
components: {},
 data(){
 return{
     imgs:{
         tab_home_hig,
         tab_home_nor,
         tab_me_hig,
         tab_me_nor, 
         tab_menu_hig,
         tab_menu_nor,
         tab_shopping_hig,
         tab_shopping_nor
     }
 }
},
 methods: {},
  mounted(){},
beforeDestroy(){}
}
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
footer{
    position fixed
    width 100%
    height 1rem
    bottom 0
    left 0
    display flex
    background white
    

}
footer a{
    display block
    flex 1
    font-size .30rem
    text-align center
}
footer a img{
    width .4rem
    height .4rem
}
.selected p{
    color $primary
}
</style>