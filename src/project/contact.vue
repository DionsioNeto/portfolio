<script setup>
import theFooter from '../components/theFooter.vue'
import theHeader from '../components/theHeader.vue'
import { Copy,CopyCheck , Share2, Send, Mail, Smartphone } from 'lucide-vue-next';
</script>

<template>
    <main class="cw-dvh sm:w-[65vw] m-auto border-l border-r border-neutral-500 p-2">
        <theHeader />
        <h1 class="text-4xl font-black text-center my-5">Contact</h1>
        <div class="grid md:grid-cols-2 gap-4 h-auto">
            <div class="row-span-2 border-2 border-neutral-700/50 p-5 rounded-lg w-full h-full">
                <h1 class="text-2xl text-neutral-500 font-semibold">Fique à vontade para falar comigo</h1>
                <p class="text-neutral-500 text-xs font-bold">
                    Fique a vontade para expressar qualquer dúvida, inquientação ou qualquer outro assunto ;-)
                </p>
                <form action="#" method="post">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-col gap-1">
                            <label for="Name">Name</label>
                            <input type="text" placeholder="Writte your name" id="Name" class="border-2 dark:bg-neutral-800/50 border-neutral-800 p-1 rounded-lg">
                        </div>
                        <div class="flex flex-col lg:flex-row w-full gap-1">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="email">E-mail</label>
                                <input type="text" placeholder="Writte your name" id="email" class="border-2 dark:bg-neutral-800/50 border-neutral-800 p-1 w-full rounded-lg">
                            </div>
                            <div class="flex flex-col gap-1 w-full">
                                <label for="numbber">Phone numbber</label>
                                <input type="text" placeholder="Writte your name" id="numbber" class="border-2 dark:bg-neutral-800/50 border-neutral-800 p-1 w-full rounded-lg">
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="message">Content</label>
                            <textarea placeholder="Writte your name" id="message" class="border-2 dark:bg-neutral-800/50 border-neutral-800 p-1 h-34 rounded-lg"></textarea>
                            <p class="text-xs">Todo e qualquer mensagem submetido é lida apenas por mim (Dionísio Neto).</p>
                        </div>
                        <button type="submit" class="dark:bg-white bg-black dark:text-black text-white flex items-center gap-2 font-semibold rounded-lg p-1.5 w-36">
                            <Send :size="18"/>
                            Send message
                        </button>
                    </div>
                </form>
            </div>

            <div class="border-2 border-neutral-700/50 p-5 rounded-lg w-full h-60 md:h-full flex justify-center items-center flex-col gap-2 relative overflow-hidden">
                <div class="absolute -bottom-12 left-0 rotate-40 -z-2">
                    <Mail :size="210" color="#4a4a4a"/>
                </div>
                <h1>Send me a Email</h1>
                <a href="mailto:dionisioni304@gmail.com">dionisioni304@gmail.com</a>
                <div class="flex gap-2">
                    <div class="border-2 border-neutral-700/50 p-1 rounded-lg bg-neutral-800/50">
                        <Copy /> <CopyCheck/>
                    </div>
                    <div class="border-2 border-neutral-700/50 p-1 rounded-lg bg-neutral-800/50">
                        <Share2 />
                    </div>
                </div>
            </div>
            <div class="border-2 border-neutral-700/50 p-5 rounded-lg w-full h-60 md:h-full flex justify-center items-center flex-col gap-2 relative overflow-hidden">
                <div class="absolute -top-10 -right-10 -rotate-25 -z-2">
                    <Smartphone :size="210" color="#4a4a4a"/>
                </div>
                <h1>Call or message me / whatsApp</h1>
                <a href="tel:+244923287660">+244 923 287 660</a>
                <div class="flex gap-2">
                    <div class="border-2 border-neutral-700/50 p-1 rounded-lg bg-neutral-800/50">
                        <Copy /><CopyCheck/>
                    </div>
                    <div class="border-2 border-neutral-700/50 p-1 rounded-lg bg-neutral-800/50">
                        <Share2 />
                    </div>
                </div>
            </div>
        </div>
    <theFooter />
    </main>
</template>