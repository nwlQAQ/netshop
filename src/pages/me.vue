<template>
  <div class="me">
    <div class="box">
      <header>
        <van-icon id="setting" name="setting-o" color="#fff" />
        <p>个人中心</p>
        <van-icon id="msg" name="chat-o" badge="99+" color="#fff" />
      </header>
      <div class="headicon">
        <img
          src="https://igdata.kuaiso.com/grab_files/2020/05/16/0d62fd0f4489fbbecbd125102e67ae6b.jpg"
          alt
        />
      </div>
    </div>
    <div class="personalinfo">
      <p>Sia</p>
      <div class="save">
        <van-icon name="like-o" color="red" />&nbsp;我的收藏&nbsp;&nbsp;(16)
      </div>
    </div>
    <div class="order">
      <div class="top">
        <a href id="myorder">我的订单</a>
        <a href id="allorder">查看全部订单</a>
      </div>
      <div class="bottom">
        <div class="card">
          <van-icon name="paid" color="#999" />
          <p>待付款</p>
        </div>
        <div class="card">
          <van-icon name="logistics" color="#999" />
          <p>待发货</p>
        </div>
        <div class="card">
          <van-icon name="sign" color="#999" />
          <p>待收货</p>
        </div>
        <div class="card">
          <van-icon name="comment-o" color="#999" />
          <p>待评价</p>
        </div>
        <div class="card">
          <van-icon name="after-sale" color="#999" />
          <p>退款/售后</p>
        </div>
      </div>
    </div>
    <div class="address" @click="show=!show">
      收货地址管理
      <div v-if="show">
        <van-address-list
        v-model="chosenAddressId"
        :list="list"
        :disabled-list="disabledList"
        disabled-text="以下地址超出配送范围"
        default-tag-text="默认"
        @add="onAdd"
        @edit="onEdit"
      />
      </div>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import { Icon } from "vant";
import { Toast } from "vant";
Vue.use(Icon);
Vue.use(Toast);
// import Vue from 'vue';
import { AddressList } from "vant";

Vue.use(AddressList);
export default {
  props: [],
  components: {},
  data() {
    return {
         chosenAddressId: '1',
         show:false,
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '北京市朝阳区望京街道浦项中心A座89层',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ],
      disabledList: [
        {
          id: '3',
          name: '王五',
          tel: '1320000000',
          address: '银河系火星',
        },
      ],
    
    };
  },
  methods: {
       onAdd() {
      Toast('新增地址');
    },
    onEdit(item, index) {
      Toast('编辑地址:' + index);
    },
  },
  mounted() {},
  beforeDestroy() {}
};
</script>
<style lang="stylus" scoped>
@import '../stylus/index.styl';
.van-address-list{
  position fixed
  width 100vw
  height 100vh
  top 0
  left 0
  background rgba(0,0,0,0.7)
  padding-bottom 2rem
  padding-top 1.2rem
  }
.van-address-list__bottom{
  margin-bottom 1rem}
.me {
  height: 85vh;
}

.address {
  height: 1.3rem;
  background: white;
  margin-top: 0.1rem;
  font-size: 0.35rem;
  line-height: 1.3rem;
  text-indent: 0.5rem;
  color: #b3b3b3;
}

.bottom {
  display: flex;
  height: 1.7rem;
  padding-top: 0.3rem;
}

.bottom .card {
  flex: 1;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
}

.bottom .card .van-icon {
  padding: 0 0.2rem;
  transform: scale(0.65);
  width: 0.8rem;
  height: 0.8rem;
}

.bottom .card p {
  color: #999999;
  font-size: 0.25rem;
  text-align: center;
  flex: 1;
  line-height: 0.5rem;
}

.order {
  background: white;
  height: 3rem;
  margin-top: 0.1rem;
}

.order .top #myorder {
  display: block;
  float: left;
  font-size: 0.3rem;
  color: #333333;
  padding-left: 0.6rem;
}

.order .top {
  overflow: hidden;
  line-height: 1rem;
  border-bottom: 1px solid #b3b3b3;
}

.order .top #allorder {
  display: block;
  float: right;
  font-size: 0.3rem;
  color: #999999;
}

.me {
  background: #efeeee;
}

.save {
  widows: 100%;
  height: 1rem;
  line-height: 1rem;
  font-size: 0.3rem;
  text-indent: 0.5em;
}

.personalinfo {
  padding-top: 1.5rem;
  background: white;
}

.personalinfo p {
  text-align: center;
  font-size: 0.4rem;
  line-height: 0.6rem;
  color: #333333;
}

.box {
  background: $primary;
  height: 3rem;
  width: 100%;
  position: relative;
}

.box header p {
  margin: 0 auto;
  width: 2rem;
  text-align: center;
  height: $distance;
  color: $c1;
  font-size: 0.4rem;
  line-height: $distance;
  position: relative;
}

.box .headicon {
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  bottom: -50%;
  border: 4px solid white;
  transform: translateX(-50%);
}

.box .headicon img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 50%;
}

header #setting {
  position: absolute;
  top: 0.2rem;
  left: 0.3rem;
  transform: scale(0.7);
}

header #msg {
  position: absolute;
  top: 0.2rem;
  right: 0.3rem;
  transform: scale(0.7);
}
</style>