<script setup lang="ts">
    import theHeader from '@/components/theHeader.vue';
</script>
<template>
    <theHeader/>
    <main class="flex justify-center items-center flex-col gap-3 mt-10 text-center">
        <P class="text-6xl font-black">404</P>
        <h1 class="text-2xl font-bold">PAGE NOT FOUND </h1>
        <P class="max-w-70 text-neutral-600 font-medium">But if you don't change your direction, try refresh page.</P>
        <RouterLink to="/" class="border-1 px-5 py-1 rounded-full">Go home</RouterLink>
    </main>
</template>