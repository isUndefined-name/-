<template>
  <div id="mine">
    <div class="head">
      <div class="headimg">
        <img :src="imgarr"/>
      </div>
      <div class="userinfo">
        <p>昵称</p>
        <div class="usercenter">
          <div class="userbar"></div>
          <span>78.3小白信用分</span>
        </div>
        <p>金牌会员</p>
      </div>
    </div>
    <div class="infobox">
      <div class="infolist">
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
      </div>
      <div class="infolist">
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
        <div class="info">
          <p>1</p>
          <p>待付款</p>
        </div>
      </div>
    </div>
    <div class="infobox">
      <div class="infolist">
        <div class="info">
          <span>2</span>
          <p>商品关注</p>
        </div>
        <div class="info">
          <span>2</span>
          <p>商品关注</p>
        </div>
        <div class="info">
          <span>2</span>
          <p>商品关注</p>
        </div>
        <div class="info">
          <span>2</span>
          <p>商品关注</p>
        </div>
        <div class="info">
          <span>2</span>
          <p>商品关注</p>
        </div>
      </div>
      <div class="infolist">
        <div class="info">
          <div class="infoicon"></div>
          <p>商品关注</p>
        </div>
        <div class="info">
          <div class="infoicon"></div>
          <p>商品关注</p>
        </div>
        <div class="info">
          <div class="infoicon"></div>
          <p>商品关注</p>
        </div>
        <div class="info">
          <div class="infoicon"></div>
          <p>商品关注</p>
        </div>
        <div class="info">
          <div class="infoicon"></div>
          <p>商品关注</p>
        </div>
      </div>
    </div>
    <div class="ad">
      <h4>为 / 你 / 推 / 荐</h4>
    </div>
    <div class="maincontent">
      <div class="mainlist">
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <span>看相似</span>
          </div>
        </div>
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <span>看相似</span>
          </div>
        </div>
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <span>看相似</span>
          </div>
        </div>
      </div>
      <div class="mainlist">
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <span>看相似</span>
          </div>
        </div>
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <span>看相似</span>
          </div>
        </div>
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <span>看相似</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data(){
    return{
      imgarr:require('../../assets/img/head.jpg'),
      imgsrc:require('../../assets/img/dn1.jpg'),
    }
  }
}
</script>

<style lang="less">
#mine {
  width:100%;
  height:100%;
  background:#f0f0f0;
  .head{
    width: 3.75rem;
    height: 1.34rem;
    background-color: rgba(240, 92, 58, 1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    box-sizing: border-box;
    padding-left: 0.17rem;
    .headimg{
      width:20%;
      img{
        width:0.6rem;
        height:0.6rem;
        border-radius: 0.3rem;
      }
    }
    .userinfo{
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      color:#fff;
      width:80%;
      height:0.6rem;
      p:nth-of-type(1){
        font-size: 0.15rem;
      }
      p:nth-of-type(2){
        font-size: 0.1rem;
      }
      .usercenter{
        color:#FFE09B;
        font-size: 0.09rem;
        display: flex;
        align-items: center;
        .userbar{
          width: 0.64rem;
          height: 0.03rem;
          line-height: 0.2rem;
          border-radius: 0.02rem;
          background-color:#FFE09B;
          text-align: center;
        }
      }
    }
  }
  .infobox{
    width:100%;
    background: white;
    height:1.7rem;
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    align-items: center;
    margin-bottom: 0.1rem;
    .infolist{
      width:100%;
      height:50%;
      box-sizing: border-box;
      border-bottom: 1px solid #f0f0f0;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .info{
        width:20%;
        height:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        font-size: 0.12rem;
        color:#333;
        p:nth-of-type(1){
          font-size: 0.16rem;
        }
        span{
          font-size: 0.16rem;
          color:#FF4548;
        }
        .infoicon{
          width:0.28rem;
          height:0.28rem;
          background: rgba(255, 69, 72, 1);
          border-radius: 50%;
        }
      }
    }
  }
    .ad{
    line-height: 0.34rem;
    font-size: 0.16rem;
    color:#333333;
    text-align: center;
    h4{
      font-weight: lighter;
    }
  }
  .maincontent{
    width:100%;
    display: flex;
    justify-content:space-between;
    align-items: center;
    margin-bottom: 0.02rem;
    .mainlist{
      width:1.86rem;
      height:100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      align-items: center;
      .main{
        width:100%;
        background: white;
        padding: 0.08rem 0 0.04rem 0;
        margin-bottom: 0.03rem;
        img{
          width:100%;
        }
        p{
          height:0.36rem;
          font-size: 0.13rem;
          color:#101010;
          padding: 0 0.06rem;
        }
        .mainfoot{
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 0.06rem;
          p{
            font-size: 0.16rem;
            color: #F23030 ;
            line-height: 0.34rem;
            padding: 0;
          }
          .addcar{
            width: 0.24rem;
            height: 0.24rem;
            border-radius: 2px;
            border: 1px solid rgba(225, 225, 225, 1);
            img{
              width:100%;
            }
          }
        }
      }
    }
  }
}
</style>
