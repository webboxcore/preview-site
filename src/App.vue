<script setup>
import Logo from '@/components/Logo.vue';

import { useToggle } from '@vueuse/core';

const [showNewsletterPopup, toggleNewsletterPopup] = useToggle(false)

import { ref, nextTick } from 'vue'

const showPopup = ref(false)
const popupReady = ref(false)

async function togglePopup() {
    showPopup.value = !showPopup.value
    
    if (showPopup.value) {
        await nextTick()
        popupReady.value = true
    } else {
        popupReady.value = false
    }
}

</script>

<template>
    <header class="flex z-40 items-center justify-between gap-8 px-8 py-2 fixed top-0 left-0 w-full">
        <nav>
            <RouterLink to="/" @click="showPopup=false" class="flex items-center gap-4 hover:opacity-60 transition-opacity duration-300 cursor-pointer">
                <Logo class="w-12 h-12" />
                <p class="text-3xl font-light"><b class="font-bold">WebBox</b> Core</p>
            </RouterLink>
        </nav>
        <nav class="flex items-center justify-end gap-8">
            <button @click="togglePopup" class="block px-8 py-2 bg-white text-black rounded-full hover:scale-105 transition-transform duration-300 cursor-pointer">
                {{ showPopup ? 'Close Popup' : 'Join the Revolution' }}
            </button>
        </nav>
    </header>
    <main class="w-full min-h-screen">
        <RouterView />
    </main>
    <footer class="p-8 text-center">
        <p class="text-xs">&copy; Copyright {{ new Date().getFullYear() }}, <a href="https://opticalraze.com" target="_blank" class="hover:opacity-60 transition-opacity duration-300">Optical Raze Inc.</a></p>
    </footer>
    
    <Transition name="fade">
        
        
        
        <div v-if="showPopup" class="fixed z-30 top-0 left-0 w-full h-screen bg-black/80 backdrop-blur-3xl p-16 flex flex-col gap-8 items-center justify-center">
            <div class="text-center">
                <h2 class="text-6xl font-black">Join the Revolution</h2>
                <h3 class="text-3xl font-light">Development Newsletter</h3>
            </div>
            <div class="text-center">
                <p>Stay tuned at <a href="https://webboxcore.com" class="underline hover:opacity-60 transition-opacity duration-300">webboxcore.com</a> — the official preview site for our project news and updates.</p>
            </div>
        </div>
        
    </Transition>
    
    <div class="fixed top-0 left-0 w-full h-screen -z-20 pointer-events-none overflow-hidden">
        <div class="grain-layer layer-1"></div>
        <div class="grain-layer layer-2"></div>
    </div>
    
    
</template>

<style scoped>
.fade-enter-active, .fade-leave-active {
    transition: opacity 0.3s ease;
}
.fade-enter-from, .fade-leave-to {
    opacity: 0;
}
.fade-enter-to, .fade-leave-from {
    opacity: 1;
}

@keyframes grainMotion1 {
  0% { transform: translate(0, 0) rotate(0deg); }
  20% { transform: translate(-40px, 25px) rotate(0.5deg); }
  40% { transform: translate(30px, -20px) rotate(-0.5deg); }
  60% { transform: translate(-25px, 30px) rotate(1deg); }
  80% { transform: translate(20px, -25px) rotate(-1deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

@keyframes grainMotion2 {
  0% { transform: translate(0, 0) rotate(0deg); }
  25% { transform: translate(20px, -15px) rotate(1deg); }
  50% { transform: translate(-10px, 20px) rotate(-1deg); }
  75% { transform: translate(15px, -10px) rotate(0.5deg); }
  100% { transform: translate(0, 0) rotate(0deg); }
}

.grain-layer {
  position: absolute;
  top: -25%;
  left: -25%;
  width: 150%;
  height: 150%;
  background-image: url('./assets/grain.webp');
  background-repeat: repeat;
  pointer-events: none;
  will-change: transform;
  mix-blend-mode: overlay;
  opacity: 0.5;
}

.layer-1 {
  background-size: 64px 64px;
  animation: grainMotion1 1.2s steps(1) infinite;
}

.layer-2 {
  background-size: 128px 128px;
  opacity: 0.35;
  animation: grainMotion2 2.3s steps(1) infinite reverse;
}
</style>
