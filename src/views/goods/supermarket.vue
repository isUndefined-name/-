<template>
  <div id="supermarket">
    <div class="headad">
      <img :src="imgarr" />
    </div>
    <h3>休闲食品</h3>
      <div class="shoplist">
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
      </div>
      <div class="shop">
      </div>
    </div>
    <h3>京东生鲜</h3>
    <div class="shoplist">
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
      <div class="shop">
        <img :src="imgsrc" />
        <p>冰箱</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'supermarket',
  data() {
    return{
      imgarr: require("../../assets/img/banner4.jpg"),
      imgsrc: require("../../assets/img/bx1.jpg")
    }
  }
}
</script>

<style lang="less">
#supermarket {
  width:100%;
  height:100%;
  background:#f0f0f0;
  color:#333;
  .headad {
    width: 265px;
    height: 90px;
    background-color: rgba(255, 255, 255, 1);
    margin-top: 0.15rem;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .shoplist{
    width:2.65rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    background:white;
  }
  .shop{
    width:0.76rem;
    height:1.29rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    img{
      width:100%;
    }
    p{
      font-size: 0.13rem;
      line-height: 0.18rem;
    }
  }
  h3{
    font-size: 0.13rem;
    line-height: 0.32rem;
    height: 0.32rem;
    margin-bottom: 0.06rem;
  }
}
</style>
