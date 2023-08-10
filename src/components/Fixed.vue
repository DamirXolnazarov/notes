<template>
    <div  @click="newNote()" class="fixedP btn bg-warning w-[50px] h-[50px] border-0 text-[50px] fixed bottom-[60px] left-[270px] z-10 text-white font-normal rounded-[50%]"><span class="mt-[-10px]">+</span></div>
</template>

<script>
export default {
    name: 'Fixed',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style scoped>
.fixedP:hover{
  background: #fbbe23c6;
}
</style>