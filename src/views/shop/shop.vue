<template>
  <div id="shop">
    <div class="head">
        <h4>购物车</h4>
        <p>编辑</p>
    </div>
    <div class="car">
      <div class="cartop">
        <p>京东自营</p>
        <p>京东自营</p>
      </div>
      <div class="carcenter">
        <div class="shoptop">
          <span>满赠</span>
          <span>已购买满19元，可领取赠品</span>
          <span>领赠品 > </span>
        </div>
        <div class="shopcontent">
          <div class="shopleft">
            <input type="checkbox" />
          </div>
          <div class="shopcenter">
            <img :src="imgsrc">
          </div>
          <div class="shopright">
            <p>Apple iphone 1 Plus 128G 红色特别版 移动联通电信4G手机</p>
            <div class="rightcenter">
              <span>重量390克</span>
              <span>选服务</span>
            </div>
            <div class="rightfoot">
              <span>￥5,699.00</span>
              <div class="shopnum">
                <button>-</button>
                <input type="text" />
                <button>+</button>
              </div>
            </div>
          </div>
        </div>
        <div class="shopfoot">
          <span>优惠：</span>
          <span>满100.00、105.00、110.00可换购商品</span>
          <span>修改</span>
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
            <div class="addcar">
              <img :src="imgarr" />
            </div>
          </div>
        </div>
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <div class="addcar">
              <img :src="imgarr" />
            </div>
          </div>
        </div>
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <div class="addcar">
              <img :src="imgarr" />
            </div>
          </div>
        </div>
      </div>
      <div class="mainlist">
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <div class="addcar">
              <img :src="imgarr" />
            </div>
          </div>
        </div>
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <div class="addcar">
              <img :src="imgarr" />
            </div>
          </div>
        </div>
        <div class="main">
          <img :src="imgsrc"/>
          <p>vivo X9 全网通 4GB +64G 移动联通电信4G 手机 双卡双待 </p>
          <div class="mainfoot">
            <p>￥5,799.00</p>
            <div class="addcar">
              <img :src="imgarr" />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="accounts">
      <div class="accleft">
        <input type="checkbox"/>全选
      </div>
      <div class="accright">
        <p>合计：￥5799.00</p>
        <p>￥5799.00</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shop',
  data(){
    return{
      imgsrc:require('../../assets/img/sj1.jpg'),
      imgarr:require('../../assets/img/car.png')
    }
  }
}
</script>

<style lang="less">
#shop {
  width:100%;
  height:100%;
  background:#f0f0f0;
  color:#101010;
  .head{
    width: 100%;
    height: 0.44rem;
    line-height: 0.44rem;
    background-color: rgba(255, 255, 255, 1);
    color: rgba(51, 51, 51, 1);
    font-family: Microsoft Yahei;
    display: flex;
    justify-content: center;
    box-shadow:0px 4px 4px #e7e7e7 ;
    position: relative;
    h4{
    font-weight: lighter;
    font-size: 0.18rem;
    }
    p{
      position:absolute;
      right:0.54rem;
      font-size: 0.15rem;
      color: #999999;
    }
  }
  .car{
    background: white;
    margin: 0.1rem 0;
    .cartop{
      line-height:0.45rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding:0 12px;
      box-sizing: border-box;
      font-size: 0.14rem;
    }
    .carcenter{
      padding: 0 7px;
      box-sizing: border-box;
      .shoptop{
        display: flex;
        justify-content: space-between;
        font-size:0.12rem;
        span:nth-of-type(1){
          color:#F23030 ;
          margin-right: 0.08rem;
        }
        span:nth-of-type(2){
          display: inline-block;
          flex:1;
          text-align: left;
        }
        span:nth-of-type(3){
          color:#F23030;
        }
      }
      .shopfoot{
        display: flex;
        line-height:0.34rem;
        justify-content: space-around;
        align-items: center;
        font-size: 0.12rem;
        color:#999;
      }
      .shopcontent{
        display: flex;
        justify-content: space-between;
        align-items: center;
        box-sizing: border-box;
        padding: 0.09rem 0;
        .shopcenter{
          width:0.93rem;
          height:0.93rem;
          border: 1px solid #e7e7e7;
          img{
            height:100%;
          }
        }
        .shopright{
          width:65%;
          height:0.93rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          p{
            font-size: 0.13rem;
            color:#333333;
          }
          .rightcenter{
            display: flex;
            justify-content: space-between;
            align-items: center;
            color:#999999;
            font-size: 0.12rem;
          }
          .rightfoot{
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 0.16rem;
            color:#F23030;
            button{
              width:0.24rem;
              height:0.24rem;
              border:none;
              background: white;
              color:#ccc;
            }
            input{
              width:0.38rem;
              height:0.22rem;
              border:none;
              border-left:1px solid #ccc;
              border-right:1px solid #ccc;
            }
          }
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
  .accounts{
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0.12rem;
    box-sizing: border-box;
    height:0.49rem;
    background: white;
    border: 1px solid rgba(225, 225, 225, 1);
    .accleft{
      margin-right:0.1rem;
      font-size: 0.12rem;
    }
    .accright{
      p:nth-of-type(1){
        font-size: 0.16rem;
      }
      p:nth-of-type(2){
        font-size: 0.1rem;
      }
    }
  }
}
</style>
