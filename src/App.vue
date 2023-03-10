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
  <div class="flex flex-col flex-wrap px-4 pt-2 bg-zinc-800 text-gray-200 font-thin">
        <h2 class="text-2xl font-semibold border-b border-zinc-400 pb-4 mb-8">Latest Projects</h2>
        <div class="md:flex md:flex-row md:gap-8 md:flex-wrap md:place-items-center md:place-content-center">
            <div class="pb-12 border-b-2 border-zinc-500 mb-8 md:max-w-md">
                <a href="https://zengineschallengekirby.netlify.app/" target="_blank"><img src="./assets/hackernews.png" alt="Screenshot of Hacker News Clone Website" class="rounded-xl"></a>
                <h4 class="py-4 font-bold">Hacker News Clone</h4>
                <p class="pb-12"><span class="font-bold">Vue 3, TypeScript, Node.js</span> - Clone of Hacker News that pulls the top 50 stories at the time of page load</p>
                <a href="https://zengineschallengekirby.netlify.app/" target="_blank" ><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
            </div>
            <div class="pb-12 border-b-2 border-zinc-500 mb-8 md:max-w-md">
                <a href="https://capecodtelescope.netlify.app/" target="_blank"><img src="./assets/capecodtelescope.png" alt="Screenshot of Cape Cod Telescope Website" class="rounded-xl"></a>
                <h4 class="py-4 font-bold">Cape Cod Telescope</h4>
                <p class="pb-12"><span class="font-bold">HTML, CSS, JavaScript, PHP</span> - Ever wanted to take your own astrophotos to show your friends? </p>
                <a href="https://capecodtelescope.netlify.app/" target="_blank"><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
            </div>
            <div class="pb-12 border-b-2 border-zinc-500 mb-8 md:max-w-md">
                <a href="https://mtgcards.netlify.app/" target="_blank"><img src="./assets/mtggame.png" alt="Screenshot of Magic: the Gathering Website" class="rounded-xl"></a>
                <h4 class="py-4 font-bold">Magic: the Gathering Card Game</h4>
                <p class="pb-12"><span class="font-bold">HTML, CSS, JavaScript</span> - Making playing MtG easier over zoom so you can track your opponent's cards</p>
                <a href="https://mtgcards.netlify.app/" target="_blank"><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
            </div>
            <div class="pb-12 border-b-2 border-zinc-500 mb-8 md:max-w-md">
                <a href="https://plantid.netlify.app/" target="_blank"><img src="./assets/plantid.png" alt="Screenshot of Plant Identification Website" class="rounded-xl duration-300"></a>
                <h4 class="py-4 font-bold">Plant Identification</h4>
                <p class="pb-12"><span class="font-bold">HTML, CSS, JavaScript</span> - You can upload images of plants and have them identified with a confidence rating</p>
                <a href="https://plantid.netlify.app/" target="_blank"><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
            </div>
            <div class="pb-12 border-b-2 border-zinc-500 mb-8 md:max-w-md">
                <a href="https://dreamblanket.netlify.app/" target="_blank"><img src="./assets/dreamblanket.png" alt="Screenshot of Plant Identification Website" class="rounded-xl duration-300"></a>
                <h4 class="py-4 font-bold">Dream Blanket</h4>
                <p class="pb-12"><span class="font-bold">HTML, CSS, JavaScript</span> - Made for a nonprofit company that published a book designed to comfort chidlren and families in shelters and provide them with homemade blankets.</p>
                <a href="https://dreamblanket.netlify.app/" target="_blank"><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
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
