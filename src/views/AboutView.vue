<template>
    <div class="bg-zinc-800 text-gray-200 px-6 min-h-screen pt-6 font-thin md:flex-row">
        <div class="md:flex md:flex-row-reverse  md:border-b-2 border-white place-content-center place-items-center flex flex-col">
            <div class="md:flex md:flex-col md:place-content-center md:place-items-center md:w-1/3 lg:w-1/4 md:pl-12">
                <img src="../assets/portfolioImage.jpg" alt="Headshot image of me" class="w-72 md:w-80 rounded-xl my-2">
                <h1 class="text-4xl font-thin md:mb-8 text-center">About Me</h1>
            </div>
            <div class="md:flex md:flex-col md:w-2/3 lg:w-1/2">
                <p class="py-6">I love learning new things!</p>
                <p class="py-2">I am always trying to think of different ways to solve problems. At the start of the pandemic, I designed, programmed, and built my own 3D printer and CNC. I spend my free time learning new code, doing house renovation projects, and trying my best not to shock myself running new wires.</p>
                <p class="py-2">My name is Kirby Smith. I'm passionate about working positively with my colleagues to come to the best solutions to problems and challenges. I will do whatever it takes to learn more and hone my craft.</p>
                <p class="py-2">Get in touch to find solutions together</p>
                <div class="border-b md:border-hidden pb-4">
                    <a :href="`${publicPath}resume.pdf`" download="Kirby Smith Resume"><button class=" md:place-self-center border-2 border-zinc-200 rounded-lg px-4 py-2 my-4 hover:bg-zinc-300 hover:text-slate-800 duration-300"><font-awesome-icon icon="fa-angles-down" class="pr-3 text-xl duration-1000"></font-awesome-icon>Download resume</button></a>
                </div>
            </div>
        </div>
        <div class="pt-6 flex gap-8 flex-col place-items-center">
            <div class="text-center">
                <h3 class="text-lg underline pb-3 font-light"><font-awesome-icon icon="fa-arrows-spin" class="pr-3 text-xl"></font-awesome-icon>Web Development</h3>
                <p class="pb-4 font-thin">Front-end and back-end web development through the full lifecycle of a project</p>
            </div>
            <div class="text-center">
                <h3 class="text-lg underline pb-3 font-light"><font-awesome-icon icon="fa-compass-drafting" class="pr-3 text-xl"></font-awesome-icon>UI/UX Design</h3>
                <p class="pb-4 font-thin">Functional and efficient design decisions that create easy-to-navigate websites that follow accessibility rules and guidelines</p>
            </div>
            <div class="text-center">
                <h3 class="text-lg underline pb-3 font-light"><font-awesome-icon icon="fa-mobile-screen-button" class="pr-3 text-xl"></font-awesome-icon>Responsive Design</h3>
                <p class="pb-4 font-thin">Websites that run beautifully on all devices and platforms with functionally aesthetic page structure</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
let publicPath = process.env.BASE_URL

</script>