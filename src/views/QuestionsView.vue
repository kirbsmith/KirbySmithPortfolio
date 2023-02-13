<template>
    <div class="text-center font-montserrat bg-zinc-800 text-gray-200 min-h-screen">
        <div class="border-b-white">
            <h2 class="pt-6">Manipulating Strings</h2>
            <form action="" class="pt-4" @submit.prevent>
                <input type="text" placeholder="Type a word here" class="text-center text-gray-800" v-model="userString"/>
                <button class="ml-4 px-2 py-1 rounded-md hover:bg-gray-300 hover:text-gray-800" @click="manipulateString()">Submit</button>
            </form>
            <div>
                <div class="text-gray-200 flex flex-col pt-4 gap-4">
                    <p>Reversed input: {{ reverseString }}</p>
                    <p>All capitals: {{ upperString }}</p>
                    <p>All lowercase: {{ lowerString }}</p>
                    <p>Alternate case (first letter always capitalized): {{ alternateCase }}</p>
                    <p>Alternate case (first letter is always lower): {{ alternateLower }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'

    let userString = ref('')
    let reverseString = ref('')
    let upperString = ref('')
    let lowerString = ref('')
    let alternateCase = ref('')
    let alternateLower = ref('')

    function manipulateString(){
        reverseString.value = userString.value.split('').reverse().join('')
        lowerString.value = userString.value.toLowerCase()
        upperString.value = userString.value.toUpperCase()
        alternateCase.value = userString.value.split('').map( (letter,i) => (i % 2) == 0 ? letter.toUpperCase() : letter.toLowerCase()).join('')
        alternateLower.value = userString.value.split('').map((letter, i) => (i % 2) == 0 ? letter.toLowerCase() : letter.toUpperCase()).join('')
        console.log(reverseString.value)
    }

</script>