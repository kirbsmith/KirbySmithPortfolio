<template>
  <nav class="flex flex-row place-content-evenly py-4 bg-slate-500 text-zinc-100 font-light text-xl font-montserrat">
    <router-link to="/" class="px-4">Home</router-link> 
    <router-link to="/projects" class="px-4">Projects</router-link>
  </nav>
  <router-view/>
</template>

<style>
nav a.router-link-exact-active {
  color: #1c1917;
}
</style>
