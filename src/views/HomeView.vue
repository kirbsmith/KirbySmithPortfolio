<template>
  <div class="bg-zinc-800 text-gray-200 px-2 min-h-screen md:min-h-fit">
    <div class="flex flex-col place-items-center pt-6 gap-4 border-b-2 border-slate-400 mx-4 font-thin md:flex-row-reverse md:place-content-center">
        <div class="flex justify-center">
            <img src="../assets/portfolioImage.jpg" alt="Headshot image of me" class="w-5/6 rounded-xl my-8">
        </div>
        <div class="flex flex-col gap-10 mb-4 font-montserrat font-light">
            <h1 class="text-3xl">Hi, I'm Kirby, an Astronomy Teacher Turned Software Engineer</h1>
            <h3 class="text-xl">Want an efficient engineer who can tell you what happens if you fall into a black hole?</h3>
            <router-link to="/about" class="border-2 border-zinc-200 hover:border-zinc-900 hover:text-zinc-800 hover:bg-zinc-200 mb-12 text-lg py-2 text-center rounded-lg duration-300">Let me introduce myself</router-link>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'


</script>

