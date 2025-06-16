<script setup>
import Logo from '@/components/Logo.vue';
</script>

<template>
    
    <div class="fixed top-0 left-0 z-40 w-full h-screen bg-black/80 backdrop-blur-3xl flex flex-col gap-8 items-center justify-center p-16">
        <div class="absolute top-2 left-8 flex items-center gap-4">
            <Logo class="w-12 h-12" />
            <p class="text-3xl font-light"><b class="font-bold">WebBox</b> Core</p>
        </div>
        <div class="text-center">
            <h2 class="text-6xl font-black">Join the Revolution</h2>
            <h3 class="text-3xl font-light">Development Newsletter</h3>
        </div>
        <div class="w-full max-w-3xl p-8 bg-white text-black rounded-xl">
            <h4 class="text-2xl font-black">Our Newsletter is Invite Only</h4>
            <br>
            <p>Currently the Development Newsletter is Invite Only.</p>
            <p class="text-sm font-light">Please Stay Tuned for any Advancements to the WebBox Core platform.</p>
        </div>
    </div>
    
</template>