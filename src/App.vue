<template>
    <RouterView />
    <svg class="fixed inset-0 size-full stroke-neutral-900/30 dark:stroke-neutral-100/10 -z-2" fill="none">
        <defs>
            <pattern :id="patternId" x="0" y="0" width="8" height="8" patternUnits="userSpaceOnUse">
                <path d="M-1 5L5 -1M3 9L8.5 3.5" stroke-width="0.5"></path>
            </pattern>
        </defs>
        <rect stroke="none" :fill="`url(#${patternId})`" width="100%" height="100%"></rect>
    </svg>
</template>
<script setup lang="ts">
    import { computed } from 'vue';
    const patternId = computed(() => `pattern-${Math.random().toString(36).substring(2, 9)}`);
</script>