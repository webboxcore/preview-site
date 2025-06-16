<script setup>
import Logo from '@/components/Logo.vue';
</script>

<template>
    <section class="w-full h-screen flex flex-col gap-8 items-center justify-center">
        <Logo class="w-64 h-64" />
        
        <div class="text-center">
            <h1 class="text-6xl font-light"><b class="font-bold">WebBox</b> Core</h1>
            <h2 class="text-3xl font-thin">Build Once Everywhere</h2>
        </div>
        
        <div class="text-center">
            <p>Cross-Platform Web-Based Native-Like Applications</p>
            <p>Windows — macOS — Linux</p>
        </div>
        
        <div class="flex items-center justify-center gap-8">
            <RouterLink to="/milestones" class="block px-8 py-2 border border-white bg-white text-black rounded-full hover:scale-105 transition-transform duration-300">Track the Chaos</RouterLink>
            <RouterLink to="/goals" class="block px-8 py-2 border border-white bg-white text-black rounded-full hover:scale-105 transition-transform duration-300">See the Vision</RouterLink>
        </div>
        
    </section>
</template>