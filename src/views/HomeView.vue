<template>
  <div class="bg-zinc-800 text-gray-200 px-2 min-h-screen">
    <div class="flex flex-col place-items-center pt-6 gap-4 border-b-4 border-slate-400 mx-4">
        <div class="flex justify-center">
            <img src="../assets/portfolioImage.jpg" alt="Headshot image of me" class="w-5/6 rounded-xl my-8">
        </div>
        <div class="flex flex-col gap-12 mb-4">
            <h1 class="text-3xl">Hi, I'm Kirby, an Astronomy Teacher Turned Software Engineer</h1>
            <h3 class="text-xl">Want an efficient engineer who can tell you what happens if you fall into a black hole?</h3>
            <router-link to="/" class="border-2 border-zinc-200 hover:border-zinc-900 hover:text-zinc-800 hover:bg-zinc-200 mb-12 text-lg py-2 text-center rounded-lg duration-300">Let me introduce myself</router-link>
        </div>
    </div>
    <div class="flex flex-col mx-4 pt-8">
        <h2 class="text-2xl font-semibold border-b border-zinc-400 pb-4 mb-8">Latest Projects</h2>
        <div class="pb-12 border-b-2 border-zinc-500 mb-8">
            <a href="https://zengineschallengekirby.netlify.app/" target="_blank"><img src="../assets/hackernews.png" target="_blank" alt="" class="rounded-xl"></a>
            <h4 class="py-4 font-bold">Hacker News Clone</h4>
            <p class="pb-12"><span class="font-bold">Vue 3, TypeScript, Node.js</span> - Clone of Hacker News that pulls the top 50 stories at the time of page load</p>
            <a href="https://zengineschallengekirby.netlify.app/" target="_blank" ><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
        </div>
        <div class="pb-12 border-b-2 border-zinc-500 mb-8">
            <a href="https://capecodtelescope.netlify.app/" target="_blank"><img src="../assets/capecodtelescope.png" alt="" class="rounded-xl"></a>
            <h4 class="py-4 font-bold">Cape Cod Telescope</h4>
            <p class="pb-12"><span class="font-bold">HTML, CSS, JavaScript, PHP</span> - Ever wanted to take your own astrophotos to show your friends? </p>
            <a href="https://capecodtelescope.netlify.app/" target="_blank"><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
        </div>
        <div class="pb-12 border-b-2 border-zinc-500 mb-8">
            <a href="https://mtgcards.netlify.app/" target="_blank"><img src="../assets/mtggame.png" alt="" class="rounded-xl"></a>
            <h4 class="py-4 font-bold">Magic: the Gathering Card Game</h4>
            <p class="pb-12"><span class="font-bold">HTML, CSS, JavaScript</span> - Making playing MtG easier over zoom so you can track your opponent's cards</p>
            <a href="https://mtgcards.netlify.app/" target="_blank"><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
        </div>
        <div class="pb-12 border-b-2 border-zinc-500 mb-8">
            <a href="https://plantid.netlify.app/" target="_blank"><img src="../assets/plantid.png" alt="" class="rounded-xl duration-300"></a>
            <h4 class="py-4 font-bold">Plant Identification</h4>
            <p class="pb-12"><span class="font-bold">HTML, CSS, JavaScript</span> - You can upload images of plants and have them identified with a confidence rating</p>
            <a href="https://plantid.netlify.app/" target="_blank"><button class="rounded-lg border-2 px-6 py-2 border-white">Visit</button></a>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'


</script>

