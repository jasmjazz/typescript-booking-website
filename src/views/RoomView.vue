<template>
  <div class="home-page">
    <navTop></navTop>

    <div class="room-banner">
      <img src="@/assets/img/banner.png" alt="" />

      <div class="banner-text">
        <div class="name">
          享樂酒店<br />
          <span>Enjoyment Luxury Hotel</span>
        </div>
        <div class="blur-wrap">
          <div class="blur-wrap-inner">
            <div class="title">客房旅宿</div>
          </div>
        </div>
      </div>
    </div>

    <section class="room-section">
      <div class="section-inner">
        <div class="section-sub-title">房型選擇</div>
        <div class="section-title">各種房型，任您挑選</div>

        <div class="room-list">
          <div class="room" v-for="item in 10" :key="item">
            <div class="img-wrap">
              <carousel :items-to-show="1">
                <slide v-for="slide in 10" :key="slide">
                  <div class="s-img">
                    <img src="@/assets/img/room2-1.png" alt="" />
                  </div>
                </slide>

                <template #addons>
                  <navigation />
                  <pagination />
                </template>
              </carousel>
            </div>

            <div class="room-info">
              <div class="name">尊爵雙人房</div>
              <div class="desc">
                享受高級的住宿體驗，尊爵雙人房提供給您舒適寬敞的空間和精緻的裝潢。
              </div>

              <div class="detail-list">
                <span>24坪</span>
                <span>一張大床</span>
                <span>2-4人</span>
              </div>

              <div class="line"></div>

              <div class="price">
                <span>NT$ 10,000</span>

                <span>→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
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
