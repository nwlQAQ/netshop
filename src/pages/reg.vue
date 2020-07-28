<template>
  <div>
    <div class="box">
      <go-back class="goback"></go-back>注册
      <router-link to="/login">登录</router-link>
    </div>
    <van-row style="margin-top:60px" class="inp">
      <van-col offset="1" span="22">
        <van-form @submit="onSubmit">
          <van-field
            v-model="phone"
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
          <div class="getmsg">
            <van-field
              v-model="msgPassword"
              name="短信验证码"
              label="短信验证码"
              placeholder="短信验证码"
              :rules="[{ required: false, message: '请填写短信验证码' }]"
            />
            <van-button color="#7232dd">点击获取</van-button>
          </div>
          <!-- <a href="#">忘记密码？</a> -->
          <div style="margin: 26px 16px;">
            <van-button round block type="info" native-type="submit" class="btn" @click="reg">下一步</van-button>
          </div>
        </van-form>
        <van-checkbox v-model="checked">
          我已阅读并同意使用
          <a href>
            <b>条款及隐私政策</b>
          </a>
        </van-checkbox>
      </van-col>
    </van-row>
  </div>
</template>
<script>
import Vue from "vue";
import { Form, Button, Field, Col, Row, Checkbox, CheckboxGroup } from "vant";
Vue.use(Button);
Vue.use(Form);
Vue.use(Field);
Vue.use(Col);
Vue.use(Row);
Vue.use(Checkbox);
Vue.use(CheckboxGroup);
import { requestRegUser } from "../utils/request";
import { Dialog } from 'vant';
Vue.use(Dialog);
export default {
  props: [],
  components: {},
  data() {
    return {
      phone: "",
      password: "",
      msgPassword: "",
      checked: false
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    reg() {
      if (this.checked) {
        requestRegUser(this.phone, this.password).then(res => {
          
          if (res.data.status == 1) {
         Dialog.alert({
          message: "注册成功(#^.^#)"
        }).then(() => {
          this.$router.push("/login");
        //  this.$router.push("/detail");
        });
        } else {
          Dialog.alert({
          message: res.data.msg
        }).then(() => {
          // on close
        });
        }
        });
      } else {
        Dialog.alert({
          message: "请同意并勾选协议"
        }).then(() => {
          // on close
        });
      }
    }
  },
  mounted() {},
  beforeDestroy() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';

.getmsg {
  display: flex;
}

.getmsg .van-field {
  width: 65%;
}

.getmsg .v-button {
  flex: 1;
  padding: 0.1rem;
}

.van-button {
  background: $primary !important;
}

.van-checkbox {
  font-size: $fs1;
  padding-left: $padding;
}

.box {
  background: $primary;
  height: $distance;
  width: 100%;
  color: $c1;
  font-size: $fs1;
  line-height: $distance;
  text-align: center;
  height: $distance;
  margin: 0 auto;
}

.box .goback {
  float: left;
  padding-left: $padding;
  line-height: $distance;
  // height $distance
  // width 1rem
  // color black
}

.btn {
  background: $primary;
  margin-top: 0.5rem;
}

.box a {
  display: block;
  width: 1rem;
  font-size: $fs1;
  height: $distance;
  line-height: $distance;
  float: right;
  color: $c1;
}

.inp a {
  color: black;
  float: right;
  font-size: $fs1;
}
</style>