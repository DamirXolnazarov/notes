<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="fixedP btn bg-warning w-[60px] h-[60px] border-0 text-[50px] fixed bottom-[30px] right-[590px] z-10 text-white font-normal rounded-[50%]"><span class="mt-[-10px]">+</span></div>
  <RouterView />
</template>

<style scoped>
header{
  width: 100%;
  height: 50px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}
.fixedP:hover{
background: #fbbe23c6;
}
</style>
