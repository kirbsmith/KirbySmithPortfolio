<template>
  <nav class="flex flex-row place-content-evenly py-4 bg-slate-500 text-zinc-100 font-light text-2xl font-montserrat z-50 h-16 hidden">
    <router-link to="/" class="px-4">Home</router-link> 
    <router-link to="/projects" class="px-4">Projects</router-link>
    <router-link to="/questions" class="px-4">Questions</router-link>
  </nav>
  <nav class="md:hidden bg-slate-500 text-zinc-100 font-light text-2xl flex flex-col">
    <div class="flex flex-col place-items-center pt-4">
      <p @click="showMenu = !showMenu" v-if="!showMenu" class="mb-4 border-b-2 border-slate-600 pb-2">Show Navigation</p>
      <p @click="showMenu = !showMenu" class="border-b-2 border-slate-800 pb-2" v-else>Hide Navigation</p>
    </div>
    <div class="flex flex-col place-items-center gap-8 py-8" v-if="showMenu" @click="showMenu = !showMenu">
      <router-link to="/" class="px-4 pb-2 border-b border-slate-700">Home</router-link> 
      <router-link to="/projects" class="px-4 pb-2 border-b border-slate-700">Projects</router-link>
      <router-link to="/questions" class="px-4 pb-2 border-b border-slate-700">Questions</router-link>
    </div>
    <div class="flex flex-row justify-center gap-8 mb-4 text-zinc-800">
        <a href="https://www.linkedin.com/in/kirbsmith/" target="_blank"><font-awesome-icon icon="fa-brands fa-linkedin-in" class="hover:text-zinc-300 duration-300 border-b border-slate-900 pb-1"></font-awesome-icon></a>
        <a href="https://github.com/kirbsmith" target="_blank"><font-awesome-icon icon="fa-brands fa-github" class="hover:text-zinc-300 duration-300 border-b border-slate-900 pb-1"></font-awesome-icon></a>
    </div>
  </nav>
  <router-view/>
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
