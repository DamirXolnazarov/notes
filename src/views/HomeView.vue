<script setup>

</script>

<template>
  <header class="bg-[#f7f7f7] flex justify-center items-center relative ">
    <div class="files mr-[55px]" @click="file()">
      <svg width="22" height="21" v-if="current == false" class="cursor-pointer" @click="pageHide()" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.24252" y="1.5" width="17.5018" height="17.6282" rx="1.5" fill="white" stroke="#9C9C9C" stroke-width="3"/>
<line x1="14.076" y1="11.4709" x2="14.076" y2="-9.53674e-07" stroke="#9C9C9C" stroke-width="3"/>
</svg>

<svg width="22" v-if="current" @click="pageShow()" class="cursor-pointer" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_0_1" fill="white">
<rect x="0.742523" width="20.5018" height="20.6282" rx="3"/>
</mask>
<rect x="0.742523" width="20.5018" height="20.6282" rx="3" fill="white" stroke="#EDD012" stroke-width="20.5018" mask="url(#path-1-inside-1_0_1)"/>
<line x1="14.076" y1="11.4709" x2="14.076" y2="-9.53674e-07" stroke="white" stroke-width="3"/>
</svg>
    </div>
    <div class="tick" @click="tick()">
      <svg width="22" v-if="current" class="cursor-pointer" @click="pageHide()" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.24252" y="1.5" width="17.5018" height="17.6282" rx="1.5" fill="white" stroke="#9C9C9C" stroke-width="3"/>
<path d="M6.01711 9.75272L8.50525 13.4017L15.9697 7.22653" stroke="#9C9C9C" stroke-width="2" stroke-linejoin="round"/>
</svg>
<svg width="22" v-if="current == false" @click="pageShow()" class="cursor-pointer" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_0_1" fill="white">
<rect x="0.742523" width="20.5018" height="20.6282" rx="3"/>
</mask>
<rect x="0.742523" width="20.5018" height="20.6282" rx="3" fill="white" stroke="#EDD012" stroke-width="20" mask="url(#path-1-inside-1_0_1)"/>
<path d="M6.01711 9.75272L8.50525 13.4017L15.9697 7.22653" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
    </div>
<div class="nastroyka absolute right-5">
<svg width="21" class="cursor-pointer" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5174 16.7265C7.81679 16.7265 6.06002 13.8849 7.26706 11.4691C8.60573 8.78986 12.429 8.78986 13.7677 11.4691C14.9747 13.8849 13.2179 16.7265 10.5174 16.7265Z" fill="white" stroke="black" stroke-width="2"/>
<path d="M1.11237 7.30423L10.5174 1.88088L19.9224 7.30423V18.1488L10.5174 23.5722L1.11237 18.1488V7.30423Z" stroke="black" stroke-width="2"/>
</svg>
</div>
  </header>
  <swiper class="mySwiper">
    <swiper-slide class="sw px-[30px]">
      <div class="top w-[100%] h-[125px] flex flex-col">
      <div class="search w-[100%] h-[50px] relative">
        <input type="text" placeholder="Search notes" class="bg-[#e4e4e4] w-[100%] h-[45px] rounded-[20px] text-gray-500 placeholder:text-gray-500 text-[15px] font-normal pl-[50px] focus:outline-0">
        <div class="searchIcon cursor-pointer absolute top-[13px] left-[13px] rotate-[-10deg]">
        <svg width="16" height="22" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<line x1="16.8409" y1="22.7666" x2="11.4343" y2="14.1569" stroke="#8D8D8D" stroke-width="2"/>
<circle cx="7.96173" cy="8.47355" r="6.53081" transform="rotate(-69.0442 7.96173 8.47355)" stroke="#8D8D8D" stroke-width="2"/>
</svg>
        </div>
      </div>
      <div class="categories py-[10px] w-[100%] flex justify-start">
        <div class="btn capitalize mr-[10px] bg-[#ffff] text-black font-semibold text-[13px] border-none hover:bg-[#eeeeee]" :class="{'red':selected==false}" @click="selected = !selected">All</div>
        <div class="category btn capitalize bg-[#ffff] text-black font-semibold text-[13px] border-none hover:bg-[#eeeeee] text-gray-400" :class="{'red':selected}" @click="selected = !selected">Uncategorized</div>
      </div>
      </div>
<div class="notes">
  <div class="block w-[100%] flex flex-col justify-between items-start p-[15px] h-[120px] bg-[#fff] rounded-[15px]">
    <div class="title text-black font-semibold">Hi wake up</div>
    <div class="text text-[#707070] text-[15px]">no text</div>
    <div class="date text-[#707070] text-[13px]">July 8</div>
  </div>
</div>

    </swiper-slide>
    <swiper-slide class="sw px-[30px]">

    </swiper-slide>
  </swiper>
</template>

<script>
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      current: true,
      selected: false,
    };
  },
  methods: {
    pageShow() {
      this.current = !this.current
    },
    pageHide() {
      this.current = !this.current
    },
    file(){
      let a = document.querySelectorAll('.sw')
       console.log(a);
    },
    tick(){
      
    }
  },
  setup() {
    return {};
  },
};
</script>

<style scoped>
header {
  width: 100%;
  height: 80px;

}
.swiper {
  width: 100%;
  background: rgb(255, 255, 255);
  height: 800px;
}
.red{
  background: #4d4d4d20;
  color: black;
}
.swiper-slide {
  text-align: center;
  font-size: 18px;
  background: #f7f7f7;
}

.swiper-slide img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

</style>