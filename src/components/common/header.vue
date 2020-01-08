<template>
  <div id="headers">
    <div class="desc">
      <img :src="imgurl" />
    </div>
    <div class="search">
      <Input v-model='searchText' placeholder="搜索" />
    </div>
  </div>
</template>

<script>
export default {
  name:"headers",
  data(){
    return {
      imgurl:require('../../assets/img/sao.png'),
      searchText:''
    }
  }
}
</script>

<style lang="less">
  #headers{
    width:100%;
    height:0.44rem;
    line-height: 0.2rem;
    background:rgba(255,255,255,1);
    text-align: center;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    box-shadow:0px 4px 4px #e7e7e7 ;
    .desc{
      padding:0px 0.1rem;
      font-size: 12px;
      img{
        width:0.3rem
      }
    }
    Input{
      width: 283px;
      height: 30px;
      line-height: 20px;
      border-radius: 15px;
      background-color: rgba(240, 240, 240, 1);
      text-align: center;
    }
  }
</style>
