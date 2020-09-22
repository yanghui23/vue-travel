<template>
  <div class="wrapper">
    <swiper :options="swiperOptions">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: '.swiper-pagination',
        autoplay: 3000,
        loop: true
      },
      swiperList: [
        {
          id: '001',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/2005/30/307fa37039eab5cba3.water.jpg_600x330_8db87481.jpg'
        }, {
          id: '002',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg'
        }, {
          id: '003',
          imgUrl: 'http://img1.qunarzz.com/sight/p0/1602/92/920e47352552c1c990.water.jpg_600x330_ca603c01.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow: hidden
    width: 100%
    height: 0
    padding-bottom: 55%
    .swiper-img
      width: 100%
</style>
