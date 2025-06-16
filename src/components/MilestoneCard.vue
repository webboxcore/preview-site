<script setup>
import { format, formatDistanceToNow, parseISO } from 'date-fns';
import { computed } from 'vue';

const props = defineProps({
    title: String,
    date: String,
    content: String,
});

const formatedDate = computed(() => {
    const parsedDate = parseISO(props.date);

    const dayWithSuffix = format(parsedDate, "EEEE 'the' do");
    const monthYear = format(parsedDate, 'MMMM yyyy');
    const relative = formatDistanceToNow(parsedDate, { addSuffix: true });

    return `${dayWithSuffix}, ${monthYear} (${relative})`;
});

</script>

<template>
    <div class="w-full max-w-3xl bg-white text-black p-8 rounded-xl">
        <h4 class="text-2xl font-black">{{ title }}</h4>
        <h5 class="text-sm font-light">{{ formatedDate }}</h5>
        <br>
        <p class="whitespace-pre-line">{{ content }}</p>
    </div>
</template>