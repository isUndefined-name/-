<template>
  <div id="goods">
    <Headers />
    <div class="leftnav">
      <ul class="navlist" v-for="(item,index) in $router.options.routes[0].children" :key="index">
        <li v-for="(item1,index1) in item.children" :key="index1">
          <router-link :to="{path:item1.path}">{{ item1.alias }}</router-link>
        </li>
      </ul>
    </div>
    <div class="rightnav">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Headers from "../../components/common/header";
export default {
  name: 'goods',
  components: {
    Headers
  },
}
</script>

<style lang="less">
#goods {
  width:100%;
  height:100%;
  background:#F0F0F0 ;
  .leftnav{
    width:25%;
    height:100%;
    float:left;
    text-align: center;
    .navlist li{
      line-height:0.5rem;
      a{
        color:#333;
        font-size: 0.13rem;
      }
    }
  }
  .rightnav{
    width:75%;
    height:auto;
    float:left;

  }
}
</style>
