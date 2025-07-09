<script setup>
import { Linkedin, Github, Instagram } from 'lucide-vue-next';
</script>
<template>
    <footer class="container m-auto p-5 flex justify-between flex-col sm:flex-row items-center gap-5">
        <div class="text-neutral-500 font-bold">Dionísio Neto &copy; 2022 - 2025</div>
        <div class="text-neutral-500 font-bold">Developed by <strong>Dionísio Neto</strong></div>
        <div class="flex gap-4">
            <a href="https://www.linkedin.com/in/dion%C3%ADsioneto/" title="https://www.linkedin.com/in/dion%C3%ADsioneto/" target="_blank"><Linkedin  color="#4a4a4a"/></a>
            <a href="https://github.com/DionsioNeto" title="https://github.com/DionsioNeto" target="_blank"><Github  color="#4a4a4a"/></a>
            <a href="https://www.instagram.com/dionisio.neto14/" title="https://www.instagram.com/dionisio.neto14/" target="_blank"><Instagram  color="#4a4a4a"/></a>
        </div>
    </footer>
</template>