<template>
  <div id="admin">
    <Layout>
        <div class="contatiner">

          <Content class="content">
            <router-view></router-view>
          </Content>
          <Footer>
            <ul class="list-nav">
              <li v-for="(item,i) in $router.options.routes[0].children" :key="i">
                <router-link :to="{path:item.path}">{{ item.alias }}</router-link>
              </li>
            </ul>
          </Footer>
        </div>
    </Layout>
  </div>
</template>

<script>

export default {
  name: "admin",

  data() {
    return {};
  }
};
</script>
<style lang="less">
#admin {
  width:100%;
  height:100%;
  background:#ccc;
  .ivu-layout{
     width:100%;
    height:100%;
    .contatiner{
    width:100%;
    height:100%;
    display:flex;
    justify-content: flex-start;
    flex-flow: column nowrap;
    .content{
      width:100%;
      flex:1;
      overflow-y: auto;
    }
    .ivu-layout-footer{
      width:100%;
      height:0.49rem;
      background-color: rgba(255, 255, 255, 1);
      padding:0;
      .list-nav{
        width:100%;
        height:100%;
        display: flex;
        justify-content: space-around;
        align-items: center;
        li{
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-flow: column nowrap;
          width:25%;
          line-height: 100%;
          list-style: none;
          text-align:center;
          color: rgba(204, 204, 204, 1);
          font-size: 12px;
          font-family: Microsoft Yahei;
          a{
            color:#ccc;
          }
        }
      }
    }
  }
  }
}
</style>
