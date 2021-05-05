<template>
  <div class="index">
      <div class="nav">
          <ul>
              <li>发现音乐</li>
              <li>推荐歌单</li>
              <li>最新音乐</li>
              <li>最新MV</li>
          </ul>
      </div>
      <div class="main">
          <discovery></discovery>
          <router-view></router-view>
      </div>
  </div>
</template>

<script>
import discovery from '@/components/discovery.vue'
export default {
  components: { discovery },
}
</script>

<style>
    .index{
        display: flex;
        height: 830px;
    }
    .index .nav{
        width: 200px;
        background-color: #ededed;
    }
    .index.nav li{
        text-align: center;
        margin: 10px;
    }
    .main{
        background-color: orange;
        /* 使用剩余的尺寸 */
        flex: 1;
    }
</style>