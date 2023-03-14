<template>
  <nav class="flex flex-col place-items-center py-4 bg-slate-500 text-zinc-200 font-light text-2xl font-montserrat hidden md:flex">
    <div class="text-zinc-200">
      <router-link to="/" class="px-4 text-zinc-200">Home</router-link> 
    </div>
    <div class="flex flex-row justify-center gap-8 text-zinc-800 pt-4">
        <a href="https://www.linkedin.com/in/kirbsmith/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin-in" class="hover:text-zinc-300 duration-300 pb-1"></font-awesome-icon></a>
        <a href="https://github.com/kirbsmith" target="_blank"><font-awesome-icon icon="fa-brands fa-github" class="hover:text-zinc-300 duration-300  pb-1"></font-awesome-icon></a>
    </div>
  </nav>
  <nav class="md:hidden bg-slate-500 text-zinc-100 font-light text-2xl flex flex-col font-montserrat">
    <div class="flex flex-col place-items-center pt-4">
      <p @click="showMenu = !showMenu" v-if="!showMenu" class="mb-4 border-b-2 border-slate-600 pb-2">Show Navigation</p>
      <p @click="showMenu = !showMenu" class="border-b-2 border-slate-800 pb-2" v-else>Hide Navigation</p>
    </div>
    <div class="flex flex-col place-items-center gap-8 py-8" v-if="showMenu" @click="showMenu = !showMenu">
      <router-link to="/" class="px-4 pb-2 border-b border-slate-700">Home</router-link> 
    </div>
    <div class="flex flex-row justify-center gap-8 mb-4 text-zinc-800">
        <a href="https://www.linkedin.com/in/kirbsmith/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin-in" class="hover:text-zinc-300 duration-300 pb-1"></font-awesome-icon></a>
        <a href="https://github.com/kirbsmith" target="_blank"><font-awesome-icon icon="fa-brands fa-github" class="hover:text-zinc-300 duration-300  pb-1"></font-awesome-icon></a>
    </div>
  </nav>
  <router-view/>
  <div class="flex flex-col px-4 pt-2 bg-zinc-800 text-gray-200 font-thin">
        <h2 class="text-2xl font-semibold border-b border-zinc-400 pb-4 mb-8 lg:pl-24">Latest Projects</h2>
        <div class="flex flex-row flex-wrap bg-zinc-800 md:place-content-center">
          <div class="md:w-96 md:h-96 px-8 pb-8 flex flex-col border-b-2 border-zinc-300 mb-4">
            <a href="https://zengineschallengekirby.netlify.app/" target="_blank">
              <img src="./assets/hackernews.png" alt="" class="rounded-xl md:h-42">
            </a>
            <h3 class="font-bold py-3">Hacker News Clone</h3>
            <p class="pb-6"><span class="font-semibold">Vue 3, TypeScript, Node.js, TailwindCSS</span> - Hacker News clone that pulls the top 50 stories at the time of page load</p>
            <a href="https://zengineschallengekirby.netlify.app/" target="_blank">
              <button class="border-2 border-white rounded-lg px-3 py-1 hover:bg-zinc-300 hover:text-slate-800 duration-300">Visit</button>
            </a>
          </div>
          <div class="md:w-96 md:h-96 px-8 pb-8 flex flex-col border-b-2 border-zinc-300 mb-4">
            <a href="https://capecodtelescope.netlify.app/" target="_blank">
              <img src="./assets/capecodtelescope.png" alt="" class="rounded-xl md:h-42 md:mb-2">
            </a>
            <h3 class="font-bold py-3">Cape Cod Telescope</h3>
            <p class="pb-6"><span class="font-semibold">HTML, CSS, JavaScript, PHP</span> - Ever wanted to take your own astrophotos to show your friends?</p>
            <a href="https://capecodtelescope.netlify.app/" target="_blank">
              <button class="border-2 border-white rounded-lg px-3 py-1 hover:bg-zinc-300 hover:text-slate-800 duration-300">Visit</button>
            </a>
          </div>
          <div class="md:w-96 md:h-96 px-8 pb-8 flex flex-col border-b-2 border-zinc-300 mb-4">
            <a href="https://mtgcards.netlify.app/" target="_blank">
              <img src="./assets/mtggame.png" alt="" class="rounded-xl md:h-42">
            </a>
            <h3 class="font-bold py-3">Magic: the Gathering Card Game</h3>
            <p class="pb-6"><span class="font-semibold">HTML, CSS, JavaScript</span> - Making playing MtG easier over Zoom so you can track your opponent's cards</p>
            <a href="https://mtgcards.netlify.app/" target="_blank">
              <button class="border-2 border-white rounded-lg px-3 py-1 hover:bg-zinc-300 hover:text-slate-800 duration-300">Visit</button>
            </a>
          </div>
          <div class="md:w-96 md:h-96 px-8 pb-8 flex flex-col border-b-2 border-zinc-300 mb-4">
            <a href="https://plantid.netlify.app/" target="_blank">
              <img src="./assets/plantid.png" alt="" class="rounded-xl md:h-42 md:mb-6">
            </a>
            <h3 class="font-bold py-3">Plant Identification</h3>
            <p class="pb-6"><span class="font-semibold">HTML, CSS, JavaScript</span> - You can upload images of plants and have them identified with a confidence rating</p>
            <a href="https://plantid.netlify.app/" target="_blank">
              <button class="border-2 border-white rounded-lg px-3 py-1 hover:bg-zinc-300 hover:text-slate-800 duration-300">Visit</button>
            </a>
          </div>
          <div class="md:w-96 md:h-96 px-8 pb-8 flex flex-col border-b-2 border-zinc-300 mb-4">
            <a href="https://thedreamblanket.netlify.app/" target="_blank">
              <img src="./assets/dreamblanket.png" alt="" class="rounded-xl md:h-42">
            </a>
            <h3 class="font-bold py-3">Dream Blanket</h3>
            <p class="pb-6"><span class="font-semibold">HTML, CSS</span> - Made for a nonprofit company that published a book designed to comfort children and families in shelters and provide them with homemade blankets.</p>
            <a href="https://thedreamblanket.netlify.app/" target="_blank">
              <button class="border-2 border-white rounded-lg px-3 py-1 hover:bg-zinc-300 hover:text-slate-800 duration-300">Visit</button>
            </a>
          </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
let showMenu = ref(false)




</script>

<style>
nav a.router-link-exact-active {
  color: #1c1917;
}
</style>
