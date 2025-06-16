<script setup>
import MilestoneCard from '@/components/MilestoneCard.vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Pagination, Keyboard, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const swiperModules = [Pagination, Keyboard, Navigation];

const cards = [
{
    title: 'T-Minus Zero',
    date: '2025-06-13',
    content: `The domain "webboxcore.com" was registered, marking the starting point of development.\nJune 13th was intentionally chosen to reflect the 613 area code — a subtle tribute to the region at the heart of the project's development.`,
},
{
    title: 'Hello, World!',
    date: '2025-06-16',
    content: `Alpha Stage, This Project Preview website marks the beginning of the journey — a temporary home for the domain as development continues toward the first release of the platform. It exists to share the project's goals and intentions, offer a glimpse into progress as it unfolds, and highlight key milestones — even the challenges along the way. Think of it as a living build log, capturing the path from concept to completion.`,
},
]

</script>

<template>
    <section class="w-full h-screen flex flex-col gap-8 items-center justify-center">
        <div class="text-center">
            <h2 class="text-6xl font-black">Track the Chaos</h2>
            <h3 class="text-3xl font-light">Development Milestones</h3>
        </div>
        
        <Swiper 
        class="w-full"
        :modules="swiperModules"
        :pagination="{ 
            clickable: true 
        }"
        :keyboard="{
            enabled: true
        }"
        :navigation="true"
        >
        <SwiperSlide v-for="(card, i) in cards" :key="i" :slides-per-view="1" class="p-16">
            <MilestoneCard :title="card.title" :date="card.date" :content="card.content" class="mx-auto" />
        </SwiperSlide>
    </Swiper>
</section>
</template>

<style>
.swiper-pagination-bullet {
    background: white;
    opacity: 0.5;
}

.swiper-pagination-bullet-active {
    background: white;
    opacity: 1;
}

.swiper-button-next,
.swiper-button-prev {
  color: white;
}
</style>