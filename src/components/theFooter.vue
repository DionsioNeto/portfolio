<script setup>
    import { Linkedin, Github, Instagram } from 'lucide-vue-next';
    const YearNow = new Date().getFullYear();
</script>
<template>
    <footer class="container m-auto p-5 flex justify-between flex-col sm:flex-row items-center gap-5">
        <div class="text-neutral-500 font-semibold text-xs">Dionísio Neto &copy; {{ YearNow }}</div>
        <div class="text-neutral-500 font-semibold text-xs">{{ $t('Developed by') }} <strong>Dionísio Neto</strong></div>
        <div class="flex gap-4">
            <a 
                href="https://www.linkedin.com/in/dion%C3%ADsioneto/" 
                class="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-1 rounded-lg"
                title="https://www.linkedin.com/in/dion%C3%ADsioneto/" 
                target="_blank"
            >
                <Linkedin color="#4a4a4a" :size="18"/>
            </a>
            <a 
                href="https://github.com/DionsioNeto" 
                class="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-1 rounded-lg"
                title="https://github.com/DionsioNeto" 
                target="_blank"
            >
                <Github color="#4a4a4a" :size="18"/>
            </a>
            <a 
                href="https://www.instagram.com/dionisio.neto14/" 
                class="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-1 rounded-lg"
                title="https://www.instagram.com/dionisio.neto14/" 
                target="_blank"
            >
                <Instagram color="#4a4a4a" :size="18"/>
            </a>
        </div>
    </footer>
</template>