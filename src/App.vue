<template>
  <nav class="flex flex-row place-content-evenly py-4 bg-slate-500 text-zinc-100 font-light text-2xl font-montserrat z-50 h-16">
    <router-link to="/" class="px-4">Home</router-link> 
    <router-link to="/projects" class="px-4">Projects</router-link>
    <router-link to="/questions" class="px-4">Questions</router-link>
  </nav>
  <router-view/>
</template>

<style>
nav a.router-link-exact-active {
  color: #1c1917;
}
</style>
