<template>
  <div id="home">
    <Headers />
    <Loop :imgArr="imgArr"/>
    <Loop :arr="arr"/>
    <div class="jd-fast">
      <span>京东快报</span>
      <span>雪山旗舰店入驻京东全球购</span>
    </div>
    <div>
      <div class="top">
        京东秒杀 14点场
      </div>
      <div class="goods-list">
        <dl class="goods-item">
          <dt>
            <img :src="imgSrc" />
          </dt>
          <dd>￥4999</dd>
          <dd>￥5200</dd>
        </dl>
        <dl class="goods-item">
          <dt>
            <img :src="imgSrc" />
          </dt>
          <dd>￥4999</dd>
          <dd>￥5200</dd>
        </dl>
        <dl class="goods-item">
          <dt>
            <img :src="imgSrc" />
          </dt>
          <dd>￥4999</dd>
          <dd>￥5200</dd>
        </dl>
        <dl class="goods-item">
          <dt>
            <img :src="imgSrc" />
          </dt>
          <dd>￥4999</dd>
          <dd>￥5200</dd>
        </dl>
      </div>
      <div class="goodloop">
        <Loop :imgArr="imgArr" />
      </div>
      <div class="find-goods">
        <div class="find-goods-item">
          <dl>
            <dd>优品专辑</dd>
            <dd>五一放肆嗨</dd>
            <dt>
              <img :src="imgSrc" />
            </dt>
          </dl>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Loop from '../../components/common/loop';
import Headers from "../../components/common/header";
export default {
  name: 'home',
  components:{
    Loop,
    Headers
  },
  data(){
    return {
      value1:0,
      imgArr:[require('../../assets/img/banner1.jpg'),require('../../assets/img/banner2.jpg'),require('../../assets/img/banner3.jpg'),require('../../assets/img/banner4.jpg'),require('../../assets/img/banner5.jpg')],
      arr:[1,2,3,4,5],
      imgSrc:require('../../assets/img/sj1.jpg')
    }
  }
}
</script>

<style lang="less">
#home {
  width:100%;
  // height:100%;
  // background:#ccc;
  .ivu-carousel{
    width:100%;
    height: 1.04rem;
    line-height: 0.2rem;
    text-align: center;
    img{
      width:100%;
      height:1.04rem;
    }
  }
  .jd-fast{
    width:100%;
    height:0.5rem;
    padding:10px 0px;
    font:14px/30px "PingFangSC-regular";
    color: rgba(51, 51, 51, 1);
    text-indent:15px;
    span:nth-of-type(1){
      margin-right: 0.1rem;
    }
  }
  .top{
    height:0.32rem;
    line-height: 0.2rem;
    background: white;
  }
  .goodloop{
      background: #F0F0F0 100%;
      padding:0.18rem 0.09rem;
    }
  .goods-list{
    width:100%;
    display: flex;
    justify-content: flex-start;
    background: white;
    .goods-item{
      width:25%;
      height:1.26rem;
      text-align: center;
      dd{
        height: .23rem;
        line-height: .23rem;
        color: rgba(241, 55, 55, 1);
        font-size: 16px;
        text-align: center;
        font-family: PingFangSC-regular;
      }
      dd:nth-last-child(1){
        height: .17rem;
        line-height: .17rem;
        color: rgba(204, 204, 204, 1);
        font-size: 12px;
        // text-align: left;
        font-family: PingFangSC-regular;
      }
      dt{
        width:100%;
        height:.8rem;
        vertical-align: middle;
        img{
          width:.78rem;
          height:.78rem;
        }
      }
    }
  }
  .find-goods{
    width:100%;
    .find-goods-item:nth-of-type(3n -2){
      width: 1.87rem;
      height: 1.2rem;
      background-color: rgb(255, 255, 255);
      dd{
        // width: 49px;
        height: 0.23rem;
        line-height: 23px;
        color: rgba(255, 87, 198, 1);
        font-size: 16px;
        font-family: PingFangSC-regular;
      }
      dd:nth-of-type(2){
        height: 17px;
        line-height: 17px;
        color: rgba(102, 102, 102, 1);
        font-size: 12px;
        text-align: left;
        font-family: PingFangSC-regular;
      }
      img{
        width:100%;
        height:.72rem;
      }
    }
    .find-goods-item{
      width:0.93rem;
      height:1.2rem;
      background-color: rgb(255, 255, 255);
      img{
        width:.93rem;
        height:.72rem;
      }
    }
  }
}
</style>
