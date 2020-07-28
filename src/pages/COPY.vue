<!-- 1.详情和评价的切换，使用isXiang控制显示的内容和选中的样式 -->
    <div class="nav">
      <div class="nav-item" @click="isXiang=true" :class="[isXiang?'nav-item-select':'']">商品详情</div>
      <div class="nav-item" @click="isXiang=false" :class="[!isXiang?'nav-item-select':'']">商品评价</div>
    </div>
    <div v-if="isXiang">商品详情内容</div>

    <!-- 商品评论内容 -->
    <div v-else>
      <!-- 2.评论导航 -->
      <div class="comment-nav">
        <div
          class="comment-nav-item"
          v-for="(item,index) in arr"
          :key="item"
          :class="[num===index?'comment-nav-item-select':'']"
          @click="num=index"
        >{{item}}</div>
      </div>

      <!-- 评价具体内容 -->
      <div v-for="item in comments" :key="item.postDescribe">{{item.postDescribe}}</div>
    </div>