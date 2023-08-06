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
    <swiper-slide class="sw px-[10px]">
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
    <swiper-slide class="sw px-[10px]">
   <div class="uncompleted">
    <div class="task rounded-[10px] bg-white py-[10px] w-[100%] flex flex-row justify-start items-center">
      <div class="check w-[50px] flex flex-row justify-center items-center">
        <svg width="22" class="cursor-pointer" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="2.24252" y="1.90076" width="17.5018" height="17.6282" rx="1.5" fill="white" stroke="#9E9E9E" stroke-width="3"/>
</svg>
      </div>
      <div class="title flex flex-col justify-between items-start">
        <span class="text-[18px] font-bold text-black">Title</span>
        <span class="text-[12px] text-gray-400 font-semibold flex justify-center items-center">Today 00:00 Expired <svg xmlns="http://www.w3.org/2000/svg" class="ml-[5px]" width="12px" height="12px" viewBox="0 0 24 24" fill="none">
<g id="style=stroke">
<g id="clock-stand">
<path id="line (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M17.4697 19.9697C17.7626 19.6768 18.2374 19.6768 18.5303 19.9697L20.0303 21.4697C20.3232 21.7626 20.3232 22.2374 20.0303 22.5303C19.7374 22.8232 19.2626 22.8232 18.9697 22.5303L17.4697 21.0303C17.1768 20.7374 17.1768 20.2626 17.4697 19.9697Z" fill="gray"/>
<path id="line (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M6.53033 19.9697C6.23744 19.6768 5.76256 19.6768 5.46967 19.9697L3.96967 21.4697C3.67678 21.7626 3.67678 22.2374 3.96967 22.5303C4.26256 22.8232 4.73744 22.8232 5.03033 22.5303L6.53033 21.0303C6.82322 20.7374 6.82322 20.2626 6.53033 19.9697Z" fill="gray"/>
<path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd" d="M12 4.75C7.44621 4.75 3.75 8.44621 3.75 13C3.75 17.5538 7.44621 21.25 12 21.25C16.5538 21.25 20.25 17.5538 20.25 13C20.25 8.44621 16.5538 4.75 12 4.75ZM2.25 13C2.25 7.61779 6.61779 3.25 12 3.25C17.3822 3.25 21.75 7.61779 21.75 13C21.75 18.3822 17.3822 22.75 12 22.75C6.61779 22.75 2.25 18.3822 2.25 13Z" fill="gray"/>
<path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd" d="M11.667 8.20898C12.0812 8.20898 12.417 8.54477 12.417 8.95898V12.649C12.417 12.771 12.4646 12.9586 12.5772 13.1561C12.6899 13.3536 12.827 13.4899 12.9313 13.5518L12.9333 13.5529L15.7233 15.2179C16.079 15.4302 16.1953 15.8906 15.983 16.2463C15.7708 16.602 15.3103 16.7183 14.9546 16.506L12.1666 14.8422C12.1663 14.842 12.1659 14.8418 12.1656 14.8416C11.7844 14.6154 11.4809 14.2615 11.2742 13.8991C11.0674 13.5364 10.917 13.0939 10.917 12.649V8.95898C10.917 8.54477 11.2528 8.20898 11.667 8.20898Z" fill="gray"/>
<path id="line (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd" d="M17.4379 1.50345C17.7121 1.19304 18.1861 1.16374 18.4965 1.438L22.2434 4.74864C22.5539 5.0229 22.5832 5.49687 22.3089 5.80728C22.0346 6.11769 21.5607 6.14699 21.2503 5.87273L17.5033 2.56209C17.1929 2.28783 17.1636 1.81386 17.4379 1.50345Z" fill="gray"/>
<path id="line (Stroke)_4" fill-rule="evenodd" clip-rule="evenodd" d="M6.56203 1.50345C6.28776 1.19304 5.81379 1.16374 5.50339 1.438L1.75643 4.74864C1.44602 5.0229 1.41672 5.49687 1.69098 5.80728C1.96524 6.11769 2.43921 6.14699 2.74962 5.87273L6.49658 2.56209C6.80699 2.28783 6.83629 1.81386 6.56203 1.50345Z" fill="gray"/>
</g>
</g>
</svg></span>
      </div>
    </div>
   </div>
   <div class="mention px-[20px] opacity-70 w-[100%] h-[60px] flex flex-row jutify-start items-center">
    <span class="flex text-[13px] font-bold flex-row jutify-start text-gray-500 items-center">
      <svg width="15px" class="mr-[5px]" height="15px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" stroke="gray" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
</svg> Completed 1
    </span>
   </div>
   <div class="completed">
    <div class="rounded-[10px] opacity-50 h-[65px] bg-white py-[10px] w-[100%] flex flex-row justify-start items-center">
      <div class="check w-[50px] flex flex-row justify-center items-center">
        <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
<mask id="path-1-inside-1_0_1" fill="white">
<rect x="0.742523" width="20.5018" height="20.6282" rx="3"/>
</mask>
<rect x="0.742523" width="20.5018" height="20.6282" rx="3" fill="white" stroke="#9E9E9E" stroke-width="20" mask="url(#path-1-inside-1_0_1)"/>
<path d="M6.01711 9.75272L8.50525 13.4017L15.9697 7.22653" stroke="white" stroke-width="2" stroke-linejoin="round"/>
</svg>
      </div>
      <div class="title flex flex-col justify-between items-start">
        <span class="text-[18px] font-bold text-black">Title</span>
      </div>
      </div>
   </div>
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