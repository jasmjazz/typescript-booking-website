<template>
  <div class="home-page">
    <navTop></navTop>
    <div class="home-banner">
      <img src="@/assets/img/banner.png" alt="" />

      <div class="banner-text">
        <div class="name">
          享樂酒店<br />
          <span>Enjoyment Luxury Hotel</span>
        </div>
        <div class="blur-wrap">
          <div class="blur-wrap-inner">
            <div class="title">
              高雄<br />
              豪華住宿之選
            </div>

            <span class="desc">我們致力於為您提供無與倫比的奢華體驗與優質服務</span>

            <RouterLink class="go-to-order-btn" to="/room">立即訂房 ———————</RouterLink>
          </div>
        </div>
      </div>
    </div>

    <section class="news-section">
      <div class="section-inner">
        <img class="top-dot" src="@/assets/img/dot.png" alt="" />
        <div class="section-title">最新<br />消息</div>

        <div class="news-list">
          <div class="news">
            <img src="@/assets/img/news1.png" alt="" />
            <div class="news-text">
              <div class="title">秋季旅遊，豪華享受方案</div>
              <div class="desc">
                秋天就是要來場豪華的旅遊！我們為您準備了一系列的秋季特別方案，包括舒適的住宿、美食饗宴，以及精彩的活動。不論您是想來一趟浪漫之旅，還是想和家人共度美好時光，都能在這裡找到最適合的方案。
              </div>
            </div>
          </div>

          <div class="news">
            <img src="@/assets/img/news2.png" alt="" />
            <div class="news-text">
              <div class="title">輕鬆住房專案</div>
              <div class="desc">
                我們知道，有時候您只是需要一個舒適的地方放鬆心情。因此，我們推出了「輕鬆住房專案」，讓您無壓力地享受住宿。不管是短期的休息，還是長期的住宿，我們都會以最貼心的服務，讓您感到賓至如歸。
              </div>
            </div>
          </div>

          <div class="news">
            <img src="@/assets/img/news3.png" alt="" />
            <div class="news-text">
              <div class="title">耶誕快樂，住房送禮</div>
              <div class="desc">
                聖誕節來臨，我們為您準備了特別的禮物！在聖誕期間訂房，不僅有特別優惠，還會送上我們精心準備的聖誕禮物。讓我們一起慶祝這個溫馨的節日吧！
              </div>
            </div>
          </div>
        </div>

        <img class="bottom-dot" src="@/assets/img/dot.png" alt="" />
      </div>
    </section>
    <div style="background-color: #000; height: 100px"></div>
    <section class="about-section">
      <div class="text-wrap">
        <div class="title">
          <span
            >關於
            <br />
            我們</span
          >
        </div>
        <div class="desc">
          享樂酒店，位於美麗島高雄的心臟地帶，是這座城市的璀璨瑰寶與傲人地標。<br />
          我們的存在，不僅僅是為了提供奢華的住宿體驗，更是為了將高雄的美麗與活力，獻給每一位蒞臨的旅客。
          <br />

          們的酒店，擁有時尚典雅的裝潢，每一個細節都充滿著藝術與設計的精緻。<br />
          我們的員工，都以熱情的服務與專業的態度，讓每一位客人都能感受到賓至如歸的溫暖。
          <br />

          在這裡，您可以遙望窗外，欣賞高雄的城市景色，感受這座城市的繁華與活力；您也可以舒適地坐在我們的餐廳，品嚐精緻的佳餚，體驗無與倫比的味覺盛宴。<br />

          享樂酒店，不僅是您在高雄的住宿之選，更是您感受高雄魅力的最佳舞台。我們期待著您的蒞臨，讓我們共同編織一段難忘的高雄故事。<br />
        </div>
      </div>
    </section>

    <div style="background-color: #000; height: 200px"></div>

    <section class="home-room-section">
      <img src="@/assets/img/room1.png" alt="" />

      <div class="info">
        <div class="img-wrap">
          <img src="@/assets/img/line3.png" alt="" />
        </div>
        <div class="text-wrap">
          <div class="name">尊爵雙人房</div>
          <div class="desc">享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。</div>
          <div class="price">NT$ 10,000</div>

          <a href="#" class="view-more">查看更多 ———————</a>
        </div>
      </div>
    </section>

    <section class="food-section">
      <div class="section-title">
        <span>佳餚<br />美饌</span>
      </div>

      <carousel :items-to-show="4">
        <slide v-for="slide in 10" :key="slide">
          <div class="slide-wrap">
            <div class="side-wrap-inner">
              <img src="@/assets/img/food1.png" alt="" />
              <div class="text-wrap">
                <div class="info">
                  <span class="title">海霸</span>
                  <span class="time">SUN-MON 11:00-20:30</span>
                </div>

                <div class="desc">
                  以新鮮海產料理聞名，我們的專業廚師選用高雄當地的海鮮，每一道菜都充滿海洋的鮮美與清甜。無論是烤魚、蒸蝦還是煮蛤蜊，都能讓您品嚐到最新鮮的海洋風味。
                </div>
              </div>
            </div>
          </div>
        </slide>

        <template #addons>
          <navigation />
          <pagination />
        </template>
      </carousel>
    </section>

    <section class="map-section">
      <div class="section-inner">
        <div class="section-title">
          <span>交通<br />方式</span>
        </div>

        <div class="address">台灣高雄市新興區六角路123號</div>

        <img class="map" src="@/assets/img/map.png" alt="" />

        <div class="info-list">
          <div class="info">
            <div class="title">自行開車</div>
            <div class="desc">
              如果您選擇自行開車，可以透過國道一號下高雄交流道，往市區方向行駛，並依路標指示即可抵達「享樂酒店」。飯店內設有停車場，讓您停車方便。
            </div>
          </div>
          <div class="info">
            <div class="title">高鐵/火車</div>
            <div class="desc">
              如果您是搭乘高鐵或火車，可於左營站下車，外頭有計程車站，搭乘計程車約20分鐘即可抵達。或者您也可以轉乘捷運紅線至中央公園站下車，步行約10分鐘便可抵達。
            </div>
          </div>
          <div class="info">
            <div class="title">禮賓車服務</div>
            <div class="desc">
              承億酒店提供禮賓專車接送服務，但因目的地遠近會有不同的收費，請撥打電話將由專人為您服務洽詢專線：(07)123-4567
            </div>
          </div>
        </div>
      </div>
      <img class="line" src="@/assets/img/line2.png" />
    </section>
    <section class="footer-section">
      <div class="section-inner">
        <div class="flex-wrap">
          <div class="logo-wrap">
            <img src="@/assets/img/logo.png" alt="" />
          </div>
          <table class="info-wrap">
            <tr>
              <td class="info">
                <label>TEL</label>
                +886-7-1234567
              </td>
              <td class="info">
                <label>MAIL</label>
                elh@hexschool.com
              </td>
            </tr>
            <tr>
              <td class="info">
                <label>FAX</label>
                +886-7-1234567
              </td>
              <td class="info">
                <label>WEB</label>
                www.elhhexshcool.com.tw
              </td>
            </tr>
          </table>
        </div>
        <div class="copy-right-wrap">
          <span>806023 台灣高雄市新興區六角路123號</span>
          <span>© 享樂酒店 2023 All Rights Reserved.</span>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import navTop from '@/components/navTop.vue'
</script>
