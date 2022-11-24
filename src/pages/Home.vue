<template>
  <div>
    <!-- Category Area Starts -->
    <section class="category-area section-padding">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <div class="section-top text-center">
              <h2>复古游戏</h2>
              <p>随便看看</p>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-3 col-md-6" v-for="(item, index) in RetroGameList" :key="index"
            @click="onClickRetroGame(index)">
            <a :href="item.url" target="_blank">
              <div class="single-category text-center mb-4">
                <img :src="item.img" alt="category" width="43" height="43">
                <h4>{{ item.name }}</h4>
                <h5>{{ item.desc }}</h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
    <!-- Category Area End -->

    <!-- Download Area Starts -->
    <!-- 预留下载app -->
    <!-- <section class="download-area section-padding">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-6">
            <div class="download-text">
              <h2>Download the app your mobile today</h2>
              <p class="py-3">
                Light earth also land can't. May you midst shall lights blessed in lights Have gathered image morning
                blessed grass him. Appear female rule all seas she'd winged</p>
              <div class="download-button d-sm-flex flex-row justify-content-start">
                <div class="download-btn mb-3 mb-sm-0 flex-row d-flex">
                  <i class="fa fa-apple" aria-hidden="true"></i>
                  <a href="#">
                    <p>
                      <span>Available</span> <br>
                      on App Store
                    </p>
                  </a>
                </div>
                <div class="download-btn dark flex-row d-flex">
                  <i class="fa fa-android" aria-hidden="true"></i>
                  <a href="#">
                    <p>
                      <span>Available</span> <br>
                      on Play Store
                    </p>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 pr-0">
            <div class="download-img"></div>
          </div>
        </div>
      </div>
    </section> -->
    <!-- Download Area End -->
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      RetroGameList: [
        {
          img: 'static/assets/images/game/game_1.webp',
          url: 'http://110.41.142.179:7001',
          name: '消灭星星',
          desc: '消灭星星'
        },
        {
          img: 'static/assets/images/game/game_2.webp',
          url: 'http://110.41.142.179:7002',
          name: '六边形消除',
          desc: '六边形消除'
        },
        {
          img: 'static/assets/images/game/game_3.webp',
          url: 'http://110.41.142.179:7003',
          name: '泡泡堂炸弹人',
          desc: '泡泡堂炸弹人'
        },
        {
          img: 'static/assets/images/game/game_4.webp',
          url: 'http://110.41.142.179:7004',
          name: '俄罗斯方块',
          desc: '俄罗斯方块'
        },
        {
          img: 'static/assets/images/game/game_5.webp',
          url: 'http://110.41.142.179:7005',
          name: '贪吃蛇',
          desc: '贪吃蛇'
        },
        {
          img: 'static/assets/images/game/game_6.webp',
          url: 'http://110.41.142.179:7006',
          name: '打砖块',
          desc: '打砖块'
        },
        {
          img: 'static/assets/images/game/game_7.webp',
          url: 'http://110.41.142.179:7007',
          name: '2048',
          desc: '2048'
        },
        {
          img: 'static/assets/images/game/game_8.webp',
          url: 'http://110.41.142.179:7008',
          name: '数独',
          desc: '数独'
        }
      ]
    }
  },
  methods: {
    onClickRetroGame(idx) {
      console.log('click:', this.RetroGameList[idx])
    }
  }
}
</script>

