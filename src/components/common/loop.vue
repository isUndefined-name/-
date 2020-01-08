<template>
  <div class="loop">
    <Carousel v-model="value1" :radius-dot="true" loop autoplay>
      <div v-for="(item,index) in arrs" :key="index">
        <CarouselItem>
          <div class="demo-carousel">
            <img :src="item" />
          </div>
        </CarouselItem>
      </div>
    </Carousel>
  </div>
</template>

<script>
export default {
  name: "loop",
  props: ['imgArr','arr'],
  data() {
    return {
      arrs:[],
      value1:0,
      imgSrc:require('../../assets/img/sj1.jpg')
    }
  },
  methods:{
    filterLoopitem(){
      this.arrs.length == 0?this.arrs.push(...this.imgArr):this.arrs.push(...this.arr);
      return this.arrs;
    }
  },
  mounted(){
    this.filterLoopitem();
    console.log(this.arrs)
  }
};
</script>

<style lang="less">
.loop {
  width: 100%;
  height: 1rem;
  background: white;
  .ivu-carousel {
    width: 100%;
    height: 1.04rem;
    line-height: 0.2rem;
    text-align: center;
    img {
      height: 100%;
    }
  }
}
</style>
