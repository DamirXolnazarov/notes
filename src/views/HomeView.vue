<script setup>

</script>

<template>
  <header class="bg-[#f7f7f7] fixed top-0 left-0 flex justify-center items-center relative ">
    <div class="files mr-[55px]" @click="file()">
      <svg width="22" height="21" v-if="current == false" class="cursor-pointer" @click="pageHide()" viewBox="0 0 22 21"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.24252" y="1.5" width="17.5018" height="17.6282" rx="1.5" fill="white" stroke="#9C9C9C"
          stroke-width="3" />
        <line x1="14.076" y1="11.4709" x2="14.076" y2="-9.53674e-07" stroke="#9C9C9C" stroke-width="3" />
      </svg>

      <svg width="22" v-if="current" @click="pageShow()" class="cursor-pointer" height="21" viewBox="0 0 22 21"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_0_1" fill="white">
          <rect x="0.742523" width="20.5018" height="20.6282" rx="3" />
        </mask>
        <rect x="0.742523" width="20.5018" height="20.6282" rx="3" fill="white" stroke="#EDD012" stroke-width="20.5018"
          mask="url(#path-1-inside-1_0_1)" />
        <line x1="14.076" y1="11.4709" x2="14.076" y2="-9.53674e-07" stroke="white" stroke-width="3" />
      </svg>
    </div>
    <div class="tick" @click="tick()">
      <svg width="22" v-if="current" class="cursor-pointer" @click="pageHide()" height="21" viewBox="0 0 22 21"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.24252" y="1.5" width="17.5018" height="17.6282" rx="1.5" fill="white" stroke="#9C9C9C"
          stroke-width="3" />
        <path d="M6.01711 9.75272L8.50525 13.4017L15.9697 7.22653" stroke="#9C9C9C" stroke-width="2"
          stroke-linejoin="round" />
      </svg>
      <svg width="22" v-if="current == false" @click="pageShow()" class="cursor-pointer" height="21" viewBox="0 0 22 21"
        fill="none" xmlns="http://www.w3.org/2000/svg">
        <mask id="path-1-inside-1_0_1" fill="white">
          <rect x="0.742523" width="20.5018" height="20.6282" rx="3" />
        </mask>
        <rect x="0.742523" width="20.5018" height="20.6282" rx="3" fill="white" stroke="#EDD012" stroke-width="20"
          mask="url(#path-1-inside-1_0_1)" />
        <path d="M6.01711 9.75272L8.50525 13.4017L15.9697 7.22653" stroke="white" stroke-width="2"
          stroke-linejoin="round" />
      </svg>
    </div>
    <div class="troyka absolute right-5" @click="setActive()">
      <svg width="21" class="cursor-pointer" height="25" viewBox="0 0 21 25" fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5174 16.7265C7.81679 16.7265 6.06002 13.8849 7.26706 11.4691C8.60573 8.78986 12.429 8.78986 13.7677 11.4691C14.9747 13.8849 13.2179 16.7265 10.5174 16.7265Z"
          fill="white" stroke="black" stroke-width="2" />
        <path d="M1.11237 7.30423L10.5174 1.88088L19.9224 7.30423V18.1488L10.5174 23.5722L1.11237 18.1488V7.30423Z"
          stroke="black" stroke-width="2" />
      </svg>
    </div>
  </header>

  <swiper @real-index-change="af()" :navigation="true" :modules="modules" class="mySwiper">
    <swiper-slide class="sw px-[10px]">
      <div class="top w-[100%] h-[150px] flex flex-col">
        <div class="search w-[100%] h-[50px] relative">
          <input type="text" @input="search(searc)" v-model="searc" placeholder="Search notes"
            class="bg-[#e4e4e4] w-[100%] h-[45px] rounded-[20px] text-gray-500 placeholder:text-gray-500 text-[15px] font-normal pl-[50px] focus:outline-0">
          <div class="searchIcon cursor-pointer absolute top-[13px] left-[13px] rotate-[-10deg]">
            <svg width="16" height="22" viewBox="0 0 18 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <line x1="16.8409" y1="22.7666" x2="11.4343" y2="14.1569" stroke="#8D8D8D" stroke-width="2" />
              <circle cx="7.96173" cy="8.47355" r="6.53081" transform="rotate(-69.0442 7.96173 8.47355)" stroke="#8D8D8D"
                stroke-width="2" />
            </svg>
          </div>
        </div>
        <div class="fods w-[100%] h-[100px] flex flex-row justify-between items-center">
          <div @click="category()" class="categories items-center w-[100%] h-[100px] flex justify-start">
            <div
              class="btn capitalize mr-[10px] bg-[#ffff] text-black font-semibold text-[13px] border-none hover:bg-[#eeeeee]">
              All</div>
            <div v-for="i of this.folders" :key="i.id"
              class="folders mx-[5px] btn capitalize bg-[#ffff] text-black font-semibold text-[13px] border-none hover:bg-[#eeeeee] text-gray-400">
              {{ i.title }}</div>
          </div>
          <div @click="createFolder()"
            class="newFolder btn ml-[10px] bg-[#ffff] border-0 shadow-[rgba(50,50,93,0.25)_0px_6px_12px_-2px,_rgba(0,0,0,0.3)_0px_3px_7px_-3px] hover:bg-[#eeeeee]">
            <svg width="30" height="22" viewBox="0 0 30 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2.24428 19.7976L2.38683 1.56587" stroke="#EDD012" stroke-width="3" stroke-linecap="round" />
              <path d="M27.619 2.94519L14.4064 2.94519" stroke="#EDD012" stroke-width="3" stroke-linecap="round" />
              <path d="M27.619 19.7979V2.94519" stroke="#EDD012" stroke-width="3" stroke-linecap="round" />
              <path d="M27.6881 19.7976L2.24428 19.7976" stroke="#EDD012" stroke-width="3" stroke-linecap="round" />
              <path
                d="M2.38246 1.56612H10.9259C11.9705 1.56612 12.958 2.04258 13.6081 2.86021L13.8736 3.19419C14.1837 3.58421 14.3525 4.06779 14.3525 4.56606V4.56606C14.3525 5.78349 15.3395 6.77042 16.5569 6.77042H27.4309"
                stroke="#EDD012" stroke-width="3" stroke-linecap="round" />
            </svg>
          </div>
        </div>
      </div>
      <div class="notes overflow-y-scroll pb-[150px] h-[100%]">
        <div v-for="i of this.allTasks" :key="i.id"
          class="block w-[100%] my-[10px] flex flex-col justify-between items-start p-[15px] h-[120px] bg-[#fff] rounded-[15px] waves-effect waves-light r">
          <div class="title text-black font-semibold">{{ i.title }}</div>
          <div class="text text-[#707070] text-[15px]">{{ i.body }}</div>
          <div class="date text-[#707070] text-[13px]">{{ i.date }}</div>
        </div>
        <div v-if="allTasks.length == 0"
          class="noNote w-[100%] flex flex-col h-[130px] justify-between items-center absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          <svg width="99" height="95" viewBox="0 0 99 95" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.469513" y="14.0793" width="70" height="80" rx="5" fill="#FFF1E2" />
            <rect x="13.0353" y="0.834259" width="70" height="80" rx="5" fill="#FBE9C3" />
            <path d="M28.1671 22.0593H67.9036" stroke="white" stroke-width="4" stroke-linecap="round" />
            <path d="M28.1671 34.9647H67.9036" stroke="white" stroke-width="4" stroke-linecap="round" />
            <path d="M28.165 47.4267H54.133" stroke="white" stroke-width="4" stroke-linecap="round" />
            <path
              d="M61.942 54.4164L59.2225 57.3497L65.0892 62.7886L67.8087 59.8553L61.942 54.4164ZM92.1678 21.8132L61.942 54.4164L67.8087 59.8553L98.0345 27.2522L92.1678 21.8132Z"
              fill="white" />
            <path d="M59.9905 55.7028L66.4429 61.4107L58.7167 64.2228L59.9905 55.7028Z" fill="white" />
          </svg>
          <span class="text-gray-500 text-[15px] block text-center">No notes here yet</span>
        </div>

      </div>

    </swiper-slide>
    <swiper-slide class="sw px-[10px] h-[100%]">
      <div class="uncompleted my-[10px]" v-for="i of this.allTasks" :key="i.id">
        <div class="task rounded-[10px] bg-white py-[10px] w-[100%] flex flex-row justify-start items-center">
          <div class="check w-[50px] flex flex-row justify-center items-center">
            <svg width="22" @click="done(i)" class="cursor-pointer" height="22" viewBox="0 0 22 22" fill="none"
              xmlns="http://www.w3.org/2000/svg">
              <rect x="2.24252" y="1.90076" width="17.5018" height="17.6282" rx="1.5" fill="white" stroke="#9E9E9E"
                stroke-width="3" />
            </svg>
          </div>
          <div class="title flex flex-col justify-between items-start">
            <span class="text-[18px] font-bold text-black">{{ i.title }}</span>
            <span class="text-[12px] text-gray-400 font-semibold flex justify-center items-center">{{ i.date }} Expired
              <svg xmlns="http://www.w3.org/2000/svg" class="ml-[5px]" width="12px" height="12px" viewBox="0 0 24 24"
                fill="none">
                <g id="style=stroke">
                  <g id="clock-stand">
                    <path id="line (Stroke)" fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.4697 19.9697C17.7626 19.6768 18.2374 19.6768 18.5303 19.9697L20.0303 21.4697C20.3232 21.7626 20.3232 22.2374 20.0303 22.5303C19.7374 22.8232 19.2626 22.8232 18.9697 22.5303L17.4697 21.0303C17.1768 20.7374 17.1768 20.2626 17.4697 19.9697Z"
                      fill="gray" />
                    <path id="line (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.53033 19.9697C6.23744 19.6768 5.76256 19.6768 5.46967 19.9697L3.96967 21.4697C3.67678 21.7626 3.67678 22.2374 3.96967 22.5303C4.26256 22.8232 4.73744 22.8232 5.03033 22.5303L6.53033 21.0303C6.82322 20.7374 6.82322 20.2626 6.53033 19.9697Z"
                      fill="gray" />
                    <path id="vector (Stroke)" fill-rule="evenodd" clip-rule="evenodd"
                      d="M12 4.75C7.44621 4.75 3.75 8.44621 3.75 13C3.75 17.5538 7.44621 21.25 12 21.25C16.5538 21.25 20.25 17.5538 20.25 13C20.25 8.44621 16.5538 4.75 12 4.75ZM2.25 13C2.25 7.61779 6.61779 3.25 12 3.25C17.3822 3.25 21.75 7.61779 21.75 13C21.75 18.3822 17.3822 22.75 12 22.75C6.61779 22.75 2.25 18.3822 2.25 13Z"
                      fill="gray" />
                    <path id="vector (Stroke)_2" fill-rule="evenodd" clip-rule="evenodd"
                      d="M11.667 8.20898C12.0812 8.20898 12.417 8.54477 12.417 8.95898V12.649C12.417 12.771 12.4646 12.9586 12.5772 13.1561C12.6899 13.3536 12.827 13.4899 12.9313 13.5518L12.9333 13.5529L15.7233 15.2179C16.079 15.4302 16.1953 15.8906 15.983 16.2463C15.7708 16.602 15.3103 16.7183 14.9546 16.506L12.1666 14.8422C12.1663 14.842 12.1659 14.8418 12.1656 14.8416C11.7844 14.6154 11.4809 14.2615 11.2742 13.8991C11.0674 13.5364 10.917 13.0939 10.917 12.649V8.95898C10.917 8.54477 11.2528 8.20898 11.667 8.20898Z"
                      fill="gray" />
                    <path id="line (Stroke)_3" fill-rule="evenodd" clip-rule="evenodd"
                      d="M17.4379 1.50345C17.7121 1.19304 18.1861 1.16374 18.4965 1.438L22.2434 4.74864C22.5539 5.0229 22.5832 5.49687 22.3089 5.80728C22.0346 6.11769 21.5607 6.14699 21.2503 5.87273L17.5033 2.56209C17.1929 2.28783 17.1636 1.81386 17.4379 1.50345Z"
                      fill="gray" />
                    <path id="line (Stroke)_4" fill-rule="evenodd" clip-rule="evenodd"
                      d="M6.56203 1.50345C6.28776 1.19304 5.81379 1.16374 5.50339 1.438L1.75643 4.74864C1.44602 5.0229 1.41672 5.49687 1.69098 5.80728C1.96524 6.11769 2.43921 6.14699 2.74962 5.87273L6.49658 2.56209C6.80699 2.28783 6.83629 1.81386 6.56203 1.50345Z"
                      fill="gray" />
                  </g>
                </g>
              </svg></span>
          </div>
        </div>
      </div>
      <div class="mention px-[20px] opacity-70 w-[100%] h-[60px] flex flex-row jutify-start items-center">
        <span class="flex text-[13px] font-bold flex-row jutify-start text-gray-500 items-center">
          <svg width="15px" class="mr-[5px]" height="15px" viewBox="0 0 24 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="gray" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
          </svg> Completed {{ this.complete.length }}
        </span>
      </div>
      <div class="completed">
        <div v-for="i of this.allDeleted" :key="i.id"
          class="rounded-[10px] opacity-50 h-[65px] bg-white py-[10px] w-[100%] flex flex-row justify-start items-center">
          <div class="check w-[50px] flex flex-row justify-center items-center">
            <svg width="22" height="21" viewBox="0 0 22 21" fill="none" xmlns="http://www.w3.org/2000/svg">
              <mask id="path-1-inside-1_0_1" fill="white">
                <rect x="0.742523" width="20.5018" height="20.6282" rx="3" />
              </mask>
              <rect x="0.742523" width="20.5018" height="20.6282" rx="3" fill="white" stroke="#9E9E9E" stroke-width="20"
                mask="url(#path-1-inside-1_0_1)" />
              <path d="M6.01711 9.75272L8.50525 13.4017L15.9697 7.22653" stroke="white" stroke-width="2"
                stroke-linejoin="round" />
            </svg>
          </div>
          <div class="title flex flex-col justify-between items-start">
            <span class="text-[18px] font-bold text-black">{{ i.title }}</span>
          </div>
        </div>
      </div>
    </swiper-slide>
    <div class="newFold px-[15px] flex flex-col justify-start items-center w-[100%] h-[100%]'"
      :class="{ 'actFold': newFold }">
      <div class="title w-[100%] h-[50px] flex flex-row justify-between items-center">
        <div @click="closeFold()"
          class="btn bg-[#f7f7f7] text-5xl border-0 text-black m-0 w-0 hover:bg-[#f7f7f7] focus:outline-0">&larr;</div>
        <span class="text-xl block text-gray-600">Folders</span>
        <svg @click="deleteFolder()" width="30" class="cursor-pointer" height="38" viewBox="0 0 30 38" fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <rect x="1.33724" y="0.0464397" width="15.8376" height="10.231" rx="2"
            transform="matrix(0.694417 -0.719573 0.642826 0.766013 5.34729 12.7745)" fill="white" stroke="black"
            stroke-width="2" />
          <rect x="4.47003" y="11.0991" width="21.2461" height="25.4459" rx="4" fill="white" stroke="black"
            stroke-width="2" />
          <line x1="0.949707" y1="10.8014" x2="29.2364" y2="10.8014" stroke="black" stroke-width="2" />
          <line x1="9.19434" y1="18.6506" x2="9.19434" y2="28.9934" stroke="black" stroke-width="2" />
          <line x1="22.2703" y1="18.5987" x2="22.2703" y2="28.9415" stroke="black" stroke-width="2" />
          <line x1="16.093" y1="18.5987" x2="16.093" y2="28.9415" stroke="black" stroke-width="2" />
        </svg>

      </div>
      <div class="folders w-[100%] h-[100%] flex flex-col">
        <div
          class="fold w-[100%] cursor-pointer h-[70px] flex flex-row items-center px-[15px] justify-between bg-white rounded-[10px] my-[7px]"
          v-for="i of this.folders" :key="i.id">
          <input type="checkbox" class="checkbox checkbox-warning" name="" id="">
          <span class="ml-[-150px] text-gray-600 font-semibold">{{ i.title }}</span>
          <span class="text-gray-600">{{ i.todos.length }}</span>
        </div>
        <div @click="creeF()"
          class="addNewFolder cursor-pointer bg-white rounded-[15px] w-[100%] h-[120px] flex flex-col items-center justify-center">
          <div
            class="plus w-[30px] h-[30px] text-white font-semibold text-[25px] cursor-pointer rounded-[50%] flex flex-row items-center justify-center bg-warning">
            +</div>
          <span class="text-gray-600 text-[13px]">New folder</span>
        </div>
      </div>
      <div class="creF" :class="{ 'actCreF': creF }">
        <form class="" @submit.prevent="createF()">
          <div
            class="fold w-[100%] cursor-pointer h-[70px] flex flex-row items-center px-[15px] justify-between bg-white rounded-[10px] my-[7px]">
            <input type="checkbox" class="checkbox checkbox-warning" name="" id="">
            <span class="example ml-[-150px] text-gray-600 font-semibold"></span>
            <span class="text-gray-600">0</span>
          </div>
          <label class="text-left text-gray-400">Create a new folder
            <input type="text" required placeholder="Enter the name of folder" v-model="nameFolder" @input="typeF()"
              class="input input-bordered input-info w-full max-w-xs my-[15px]" />
          </label>
          <input type="submit" class="btn btn-info " value="Create">
        </form>
      </div>
    </div>
    <div class="newTask flex flex-col justify-center items-center" :class="{ 'actNewTask': createNote }">
      <div class="m-auto cursor-pointer h-[30px] absolute top-[30px]" @click="createNote = !createNote"><svg width="25px"
          class="" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 9L12 15L18 9" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg></div>
      <form action="" class=" flex flex-col justify-between items-center" @submit.prevent="createNewNote()">
        <div
          class="w-[100%] my-[10px] flex flex-col justify-between items-start p-[15px] h-[120px] bg-[#fff] rounded-[15px]">
          <div id="title" class="title text-black font-semibold"></div>
          <div id="text" class="text text-[#707070] text-[15px]"></div>
          <div id="date" class="date text-[#707070] text-[13px]"></div>
        </div>
        <label class="text-left text-gray-400">Create a new note <br>
          <input type="text" required placeholder="Enter the name of note" v-model="taskName" @input="taskNamee()"
            class="input input-bordered input-info w-full bg-white max-w-xs my-[15px]" />
          <input type="text" required placeholder="Enter the description of note" v-model="taskMsg" @input="taskMsge()"
            class="input input-bordered input-info w-full bg-white max-w-xs my-[15px]" />
          <input type="datetime-local" required placeholder="Enter the date of note" v-model="taskDate"
            @input="taskDatee()" class="input input-bordered input-info w-full bg-white w-[100%] my-[15px]" />
        </label>
        <input type="submit" class="btn btn-info text-white" value="Create">
      </form>
    </div>
    <div class="delete" :class="{ 'trashFold': trashFolders }">
    </div>
    <div @click="newNote()"
      class="fixedP btn bg-warning w-[50px] h-[50px] border-0 text-[50px] fixed bottom-[60px] right-[30px] z-10 text-white font-normal rounded-[50%]">
      <span class="mt-[-10px]">+</span>
    </div>
    <div :class="{ 'setAct': setAct }"
      class="settings p-0 mb-0 m-0 flex flex-col justify-flex start items-start absolute px-[20px] bg-[#f7f7f7] shadow-none w-[100%]">
      <div @click="closeSet()"
        class="btn bg-[#f7f7f7] text-5xl border-0 text-black m-0 w-0 hover:bg-[#f7f7f7] focus:outline-0">
        &larr;</div>
      <span class="text-[30px] text-thin text-black mt-[40px] mb-[30px]">Notes</span>
      <div class="cloudService mb-[25px]">
        <span class="uppercase text-gray-400 text-[15px]">cloud Service</span>
        <div class="block1 w-[100%] h-[70px] bg-[#f7f7f7] flex flex-row justify-between items-center">
          <span class="w-[120px] text-black font-bold">Xiaomi Cloud</span>
          <span class="flex flex-row justify-center items-center text-warning text-[14px]">Turn on the sync with the cloud
            <svg width="15px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
            </svg></span>
        </div>
        <div class="block1 border-b-[1px] w-[100%] h-[70px] bg-[#f7f7f7] flex flex-row justify-between items-center">
          <span class="text-black font-bold">Deleted notes in the cloud</span>
          <svg width="15px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1"
            xmlns="http://www.w3.org/2000/svg">
            <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
          </svg>
        </div>
      </div>
      <div class="style w-[100%] mb-[25px]">
        <span class="uppercase text-gray-400 text-[15px]">STYLE</span>
        <div class="block1 w-[100%] h-[70px] bg-[#f7f7f7] flex flex-row justify-between items-center">
          <span class="w-[120px] text-black font-bold">Font size</span>
          <span class="flex flex-row justify-center items-center bg-[#f7f7f7] text-[14px]">
            <select class="select bg-[#f7f7f7] border-0 shadow-none text-black focus:outline-0">
              <option selected>Medium</option>
              <option>Small</option>
              <option>Large</option>
            </select>
          </span>
        </div>
        <div class="block1 border-b-[1px] w-[100%] h-[70px] bg-[#f7f7f7] flex flex-row justify-between items-center">
          <span class="w-[120px] text-black font-bold">Sort</span>
          <span class="flex flex-row justify-center items-center bg-[#f7f7f7] text-[14px]">
            <select class="select bg-[#f7f7f7] border-0 shadow-none text-black focus:outline-0">
              <option selected>By modification date</option>
              <option></option>
            </select>
          </span>
        </div>

      </div>
      <div class="quick w-[100%] mb-[25px]">
        <span class="uppercase text-gray-400 text-[15px]">Quick features</span>
        <div class="block1 w-[100%] h-[70px] bg-[#f7f7f7] flex flex-row justify-between items-center border-b-[1px]">
          <span class="w-[120px] text-black font-bold">Quick notes</span>
          <span class="flex flex-row justify-center items-center bg-[#f7f7f7] text-[14px]">
            <svg width="15px" height="15px" viewBox="0 0 1024 1024" class="icon" version="1.1"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M256 120.768L306.432 64 768 512l-461.568 448L256 903.232 659.072 512z" fill="#000000" />
            </svg>
          </span>
        </div>

      </div>
      <div class="w-[100%]">
        <span class="uppercase text-gray-400 text-[15px]">Reminders</span>
        <div class="block1 w-[100%] h-[70px] bg-[#f7f7f7] flex flex-row justify-between items-center">
          <div class="left p-0">
            <span class="w-[120px] text-black font-bold ">High-priority reminders</span>
            <span class="flex flex-row justify-center items-center bg-[#f7f7f7] text-[14px]">
              Play sound even when Silent or DND mode is on
            </span>
          </div>
          <input type="checkbox" class="toggle" checked />
        </div>
      </div>
    </div>
  </swiper>
</template>

<script>
import Fixed from '../components/Fixed.vue'
import store from '../store/index'
// Import Swiper Vue.js components
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from 'swiper/vue';
// Import Swiper styles
import 'swiper/css';
import { onMounted } from 'vue';

export default {
  name: 'HomeView',
  components: {
    Swiper,
    SwiperSlide,
    Fixed
  },
  data() {
    return {
      all: store.state.all,
      folders: store.state.folders,
      completed: store.state.completed,
      nameFolder: '',
      realFolderId: '1',
      FOLds: [],
      newNoteForm: {},
      complete: [],
      setAct: false,
      // allDeleted: JSON.parse(window.localStorage.deleted),
      alldeleted: [],
      currentFold: 0,
      Nots: [],
      allComplete: [],
      current: true,
      selected: false,
      creF: false,
      month: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
      dateOfNote: '',
      trashFolders: false,
      createNote: false,
      taskDate: '',
      taskMsg: '',
      taskTime: '',
      taskName: '',
      newFold: false,
      deleteFold: [],
      searc: '',
      allTasks: [],
      presentArr: [],
    };
  },
  methods: {
    file() {
      const swiper = document.querySelector('.swiper').swiper;
      swiper.slidePrev();
      this.current = true
      let a = document.querySelectorAll('.sw')
      console.log(swiper.realIndex);
    },
    tick() {
      const swiper = document.querySelector('.swiper').swiper;
      swiper.slideNext();
      this.current = false
      let a = document.querySelectorAll('.sw')
      console.log(swiper.realIndex);
    },
    af() {
      const swiper = document.querySelector('.swiper').swiper;
      console.log(swiper.realIndex);
      if (swiper.realIndex == 0) {
        this.current = true
      } else {
        this.current = false
      }
    },
    setActive() {
      this.setAct = !this.setAct
    },
    closeSet() {
      this.setAct = !this.setAct
    },
    createFolder() {
      this.newFold = !this.newFold
    },
    createF() {
      let newF = {
        id: this.folders.length + 1,
        title: this.nameFolder,
        todos: [],
      }
      window.localStorage.folder = JSON.stringify(newF)
      window.localStorage.folders = JSON.stringify(this.folders)
      this.FOLds = JSON.parse(window.localStorage.folders)
      this.FOLds.push(JSON.parse(window.localStorage.folder))
      window.localStorage.allFolds = JSON.stringify(this.FOLds)
      store.dispatch('ADD_NEW_FOLDER', newF)
      this.creF = !this.creF
      this.folders = JSON.parse(window.localStorage.allFolds)
    },
    closeFold() {
      this.newFold = !this.newFold
    },
    typeF() {
      let ex = document.querySelector('.example')
      ex.innerHTML = this.nameFolder
    },
    done(task) {
      store.dispatch('DONE_MUTATION', task)
      this.allComplete = JSON.parse(window.localStorage.completed)
      this.allTasks.splice(this.allTasks.indexOf(task), 1)
      window.localStorage.allNotes = JSON.stringify(this.allTasks)
    },
    deleteFolder() {
      let checks = document.querySelectorAll('.checkbox')
      for (let i of checks) {
        if (i.checked == true) {
          for (let o of this.FOLds) {
            if (i.parentElement.children[1].innerHTML == o.title) {
              this.FOLds.splice(this.FOLds.indexOf(o), 1)
              this.deleted.push(o)
              // window.localStorage.deleted = JSON.stringify.apply(this.deleted)
            }
          }
        } else if (i.checked == false) {
          this.trashFolders = !this.trashFolders
        }
      }
    },
    category() {
      let wrapper = document.querySelector('.categories')
      for (let i of wrapper.childNodes) {
        i.onclick = (e) => {
          this.allTasks = JSON.parse(window.localStorage.allNotes)
          for (let o of this.folders) {
            if (e.target.innerHTML == 'All') {
              this.allTasks = JSON.parse(window.localStorage.allNotes)
              this.realFolderId = 0
            }
            else if (e.target.innerHTML == o.title) {
              this.allTasks = JSON.parse(window.localStorage.allNotes).filter(item => item.folder == o.id)
              this.realFolderId = o.id
            }
          }
        }
      }
    },
    creeF() {
      this.creF = !this.creF
    },
    newNote() {
      this.createNote = !this.createNote
    },
    taskNamee() {
      let title = document.querySelector('#title')
      title.innerHTML = this.taskName
    },
    taskMsge() {
      let text = document.querySelector('#text')
      text.innerHTML = this.taskMsg
    },
    taskDatee() {
      let datee = document.querySelector('#date')
      let date = new Date(this.taskDate)
      if (new Date().getFullYear() == date.getFullYear() && new Date().getMonth() == date.getMonth() && new Date().getDay() == date.getDay()) {
        if (date.getMinutes().toString().split('').length == 1) {
          let hour = date.getHours()
          let minute = date.getMinutes()
          datee.innerHTML = `Today ${hour}:0${minute}`
        } else {
          let hour = date.getHours()
          let minute = date.getMinutes()
          datee.innerHTML = `Today ${hour}:${minute}`
        }
      } else {
        if (parseInt(this.taskDate.toString().split('-')[1].toString('')) < 10) {
          let month = this.taskDate.toString().split('-')[1].toString('')[1]
          let day = date.getDate()
          datee.innerHTML = `${this.month[parseInt(month) - 1]} ${day}`
        } else {
          let day = date.getDate()
          let month = this.taskDate.toString().split('-')[1].toString('')
          datee.innerHTML = `${this.month[parseInt(month) - 1]} ${day}`
        }
      }
      let note = {
        title: this.taskName,
        id: Math.round(Math.random() * 100),
        folder: this.realFolderId,
        date: datee.innerHTML,
        body: this.taskMsg
      }
      this.newNoteForm = note
    },
    createNewNote() {
      window.localStorage.note = JSON.stringify(this.newNoteForm)
      window.localStorage.notes = JSON.stringify(this.allTasks)
      this.Nots = JSON.parse(window.localStorage.notes)
      this.Nots.push(JSON.parse(window.localStorage.note))
      window.localStorage.allNotes = JSON.stringify(this.Nots)
      this.allTasks = JSON.parse(window.localStorage.allNotes)
      store.dispatch('ADD_NEW_NOTE', this.newNoteForm)
      this.createNote = !this.createNote
    },
  },
  created() {
    this.allTasks = JSON.parse(window.localStorage.allNotes)
    this.folders = JSON.parse(window.localStorage.allFolds)
    // this.complete = JSON.parse(window.localStorage.completed)
    // this.allComplete = JSON.parse(window.localStorage.completed)
    // this.allDeleted = JSON.parse(window.localStorage.deleted)
  },

};
</script>

<style scoped>
.fixedP:hover {
  background: #fbbe23c6;
}

.settings {
  position: absolute;
  left: -100%;
  top: 0;
  transition: .3s;
  width: 100%;
  height: 100%;
  z-index: 9999;
}

.setAct {
  top: 0px;
  left: 0 !important;
}

header {
  width: 100%;
  height: 80px;

}

.actCreF {
  bottom: 0 !important;
}

.trashFold {
  left: 0 !important;
}

.creF {
  padding: 15px;
  width: 100%;
  height: 80%;
  background: rgb(231, 231, 231);
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  bottom: -100%;
  left: 0;
  transition: .3s;
}

.newFold {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 124124;
  left: -100%;
  background: #f7f7f7;
  transition: .3s;
}

.actFold {
  left: 0 !important;
}

.delete {
  position: absolute;
  width: 100%;
  height: 100%;
  background: white;
  top: 0;
  left: -100%;
}

.newTask {
  width: 100%;
  height: 90%;
  position: absolute;
  bottom: -100%;
  z-index: 124124;
  padding: 30px;
  transition: .3s ease-in-out;
  left: 0;
  background: rgb(231, 231, 231);
}

.actNewTask {
  bottom: 0% !important;
}

.swiper {
  position: relative;
  width: 100%;
  background: #f7f7f7;
  height: 100%;
}

.swiper-wrapper {
  width: 100%;
  position: relative;
}

@media (max-width: 768px) {
  .swiper-slide {
    padding: 0.5rem;
  }

}

.red {
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

.categories {
  overflow-x: scroll;
  overflow-y: hidden;
  overflow-wrap: normal;
  width: 100%;
}

@media screen and (max-width: 355px) {
  #app {
    width: 355px;
  }

  body,
  html {
    width: 355px;
  }
}

@media screen and (min-width: 355px) {
  html {
    width: 100%;
  }
}
</style>