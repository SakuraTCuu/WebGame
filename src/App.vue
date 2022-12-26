<template>
  <div>
    <!-- Preloader Starts -->
    <div class="preloader">
      <div class="spinner"></div>
    </div>
    <!-- Preloader End -->

    <!-- Header Area Starts -->
    <header class="header-area single-page"
      style="z-index: 0; background-image: url('../static/assets/images/game/game_banner.png')">
      <div class="header-top">
        <div class="container">
          <div class="row">
            <div class="col-lg-2">
              <!-- <img src="https://visitor-badge.glitch.me/badge?page_id=SakuraTCuu.visitor-badge" alt="visitor badge" /> -->
              <!-- <div class="logo-area">
                <router-link to="/"><img src="static/assets/images/logo-light.png" alt="logo"></router-link>
              </div> -->
            </div>
            <div class="col-lg-10">
              <div class="custom-navbar">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div class="main-menu main-menu-light">
                <ul>
                  <li class="active">
                    <router-link to="/">game</router-link>
                  </li>
                  <li>
                    <router-link to="/about">about</router-link>
                  </li>
                  <li>
                    <router-link to="/blog">blog</router-link>
                  </li>
                  <!-- 留言功能 -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="page-title text-center">
        <div class="container">
          <div class="row">
            <div class="col-md-6 offset-md-3">
              <!-- <h2>来玩游戏</h2> -->
            </div>
          </div>
        </div>
      </div>
    </header>
    <!-- Header Area End -->

    <a href="https://github.com/SakuraTCuu" class="github-corner" aria-label="View source on GitHub"><svg width="80"
        height="80" viewBox="0 0 250 250"
        style="fill:#151513; color:#fff; position: absolute; top: 0; border: 0; right: 0;" aria-hidden="true">
        <path d="M0,0 L115,115 L130,115 L142,142 L250,250 L250,0 Z"></path>
        <path
          d="M128.3,109.0 C113.8,99.7 119.0,89.6 119.0,89.6 C122.0,82.7 120.5,78.6 120.5,78.6 C119.2,72.0 123.4,76.3 123.4,76.3 C127.3,80.9 125.5,87.3 125.5,87.3 C122.9,97.6 130.6,101.9 134.4,103.2"
          fill="currentColor" style="transform-origin: 130px 106px;" class="octo-arm"></path>
        <path
          d="M115.0,115.0 C114.9,115.1 118.7,116.5 119.8,115.4 L133.7,101.6 C136.9,99.2 139.9,98.4 142.2,98.6 C133.8,88.0 127.5,74.4 143.8,58.0 C148.5,53.4 154.0,51.2 159.7,51.0 C160.3,49.4 163.2,43.6 171.4,40.1 C171.4,40.1 176.1,42.5 178.8,56.2 C183.1,58.6 187.2,61.8 190.9,65.4 C194.5,69.0 197.7,73.2 200.1,77.6 C213.8,80.2 216.3,84.9 216.3,84.9 C212.7,93.1 206.9,96.0 205.4,96.6 C205.1,102.4 203.0,107.8 198.3,112.5 C181.9,128.9 168.3,122.5 157.7,114.1 C157.9,116.9 156.7,120.9 152.7,124.9 L141.0,136.5 C139.8,137.7 141.6,141.9 141.8,141.8 Z"
          fill="currentColor" class="octo-body"></path>
      </svg></a>

    <router-view></router-view>

    <!-- Footer Area Starts -->
    <footer class="footer-area section-padding">
      <div class="footer-widget">
        <div class="container">
          <div class="row">
            <div class="col-xl-2 col-lg-3">
              <div class="single-widget-home mb-5 mb-lg-0">
                <h3 class="mb-4">游戏类型</h3>
                <ul>
                  <li class="mb-2"><a href="#">休闲游戏</a></li>
                  <li class="mb-2"><a href="#">益智游戏</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="footer-copyright">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 col-md-6">
            </div>
            <div class="col-lg-4 col-md-6">
              <div class="social-icons">
                <ul>
                  <!-- <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                  <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                  <li><a href="#"><i class="fa fa-dribbble"></i></a></li>
                  <li><a href="#"><i class="fa fa-behance"></i></a></li> -->
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <!-- Footer Area End -->

  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {

    }
  }
}
</script>

<style>
.header-area {
  z-index: 0;
}

.github-corner:hover .octo-arm {
  animation: octocat-wave 560ms ease-in-out
}

@keyframes octocat-wave {

  0%,
  100% {
    transform: rotate(0)
  }

  20%,
  60% {
    transform: rotate(-25deg)
  }

  40%,
  80% {
    transform: rotate(10deg)
  }
}

@media (max-width:500px) {
  .github-corner:hover .octo-arm {
    animation: none
  }

  .github-corner .octo-arm {
    animation: octocat-wave 560ms ease-in-out
  }
}
</style>
