<template>
  <div>
    <div class="box">
        <go-back class="goback"></go-back>
        登录<router-link to="/reg">注册</router-link>
       
    </div>
    <van-row  style="margin-top:60px" class="inp">
  <van-col offset="1" span="22"><van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号'}]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        :rules="[{ required: true, message: '请填写密码' }]"
      />
      <a href="#">忘记密码？</a>
      <div style="margin: 26px 16px;">
        <van-button round block type="info" native-type="submit" class="btn" @click="login">登录</van-button>
      </div>
    </van-form></van-col>
</van-row>
    
    <!-- <van-button type="default">默认按钮</van-button>
    <van-button type="danger">危险按钮</van-button> -->
  </div>
</template>
<script>
import Vue from 'vue';
import { Form,Button,Field, Col, Row } from 'vant';
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);
import {requestLoginUser} from "../utils/request"
import { Dialog } from 'vant';
Vue.use(Dialog);
export default {
  props: [],
  components: {},
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    login(){
      requestLoginUser(this.username,this.password).then(res=>{
        Dialog.alert({
          message: "登陆成功"
        }).then(() => {
          // on close
        });
        this.$router.push("/index")
      })
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
.box {
  background $primary
  height $distance
  width 100%
  color $c1
  font-size $fs1
  line-height $distance
  text-align center
  height $distance
  margin 0 auto
}
.box .goback{
    float left
    padding-left $padding
    line-height $distance
    // height $distance
    // width 1rem
    // color black
    }
.btn{
    background $primary
    margin-top 0.5rem
}
.box a{
    display block
    width 1rem
    font-size $fs1
    height $distance
    line-height $distance
    float right
    color $c1
}
.inp a{
  color #d3d3d3
  float right
  font-size $fs1
}

</style>