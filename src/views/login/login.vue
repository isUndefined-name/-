<template>
  <div id="login">
    <van-cell-group>
      <van-field
        v-model="username"
        required
        clearable
        label="用户名"
        placeholder="请输入用户名"/>
      <van-field
        v-model="password"
        type="password"
        label="密码"
        placeholder="请输入密码"
        required />
    </van-cell-group>
    <van-button type="danger" @click="login">登录</van-button>
  </div>
</template>

<script>
  export default {
    name:'login',
    data(){
      return {
        username:'',
        password:''
      }
    },
    methods:{
      login(){
        this.$router.push({
          path:'/admin'
        })
      }
    },
  }
</script>
<style lang="less">
  .login{
    width:100%;
    height:100%;
    text-align: center;
    .van-cell-group{
      margin-top:1.5rem;
    }
    .van-button{
      width:90%;
    }
  }
</style>
