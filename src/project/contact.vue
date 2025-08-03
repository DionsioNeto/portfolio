<script setup>
import theFooter from '../components/theFooter.vue'
import theHeader from '../components/theHeader.vue'
import { Copy,CopyCheck , Share2, Send, Mail, Smartphone } from 'lucide-vue-next';
import { ref } from 'vue';
const copiedEmail = ref(false)
const copiedNumber = ref(false)
const email = 'dionisioni304@gmail.com'
const number = '+244 923 287 660'

function copyEmailToClipboard() {
  navigator.clipboard.writeText(email)
  copiedEmail.value = true

  setTimeout(() => {
    copiedEmail.value = false
  }, 2000)
}

function copyNumberToClipboard() {
    navigator.clipboard.writeText(number)
    copiedNumber.value = true

    setTimeout(() => {
        copiedNumber.value = false
    }, 2000)
}

// Partilha (genérica)
function share(content) {
  if (navigator.share) {
    navigator.share({
      title: 'Contact Info',
      text: content,
    }).catch(err => {
      console.warn('User canceled or error:', err)
    })
  } else {
    alert('Partilha não suportada neste navegador.')
  }
}
</script>

<template>
    <main class="cw-dvh sm:w-[65vw] m-auto border-l border-r border-neutral-500 p-2">
        <theHeader />
        <h1 class="text-4xl font-black text-center my-5">Contact</h1>
        <div class="grid md:grid-cols-2 gap-4 h-auto">
            <div class="row-span-2 border-2 border-neutral-700/50 p-5 rounded-lg w-full h-full font-medium">
                <h1 class="text-2xl text-neutral-500 font-semibold">Feel free to talk to me.</h1>
                <p class="text-neutral-500 text-xs font-bold">
                    You're welcome to share any questions, concerns, or anything else you'd like to discuss ;-)
                </p>
                <form action="https://formsubmit.co/dionisioni304@gmail.com" method="POST">
                    <input type="hidden" name="_captcha" value="false">
                    <input type="hidden" name="_next" value="https://dionisio-neto.netlify.app/">
                    <div class="flex flex-col gap-2">
                        <div class="flex flex-col gap-1">
                            <label for="Name">Name</label>
                            <input 
                                type="text" 
                                name="name"
                                placeholder="Enter your name" 
                                id="Name" 
                                class="border-2 dark:bg-neutral-800/50 border-neutral-800 p-1 rounded-lg"
                            >
                        </div>
                        <div class="flex flex-col lg:flex-row w-full gap-1">
                            <div class="flex flex-col gap-1 w-full">
                                <label for="email">E-mail</label>
                                <input 
                                    type="text" 
                                    name="email" 
                                    placeholder="Enter your email" 
                                    id="email" 
                                    class="border-2 dark:bg-neutral-800/50 border-neutral-800 p-1 w-full rounded-lg"
                                >
                            </div>
                            <div class="flex flex-col gap-1 w-full">
                                <label for="numbber">Phone number</label>
                                <input 
                                    type="text" 
                                    name="phone"
                                    placeholder="Enter your phone number" 
                                    id="numbber" 
                                    class="border-2 dark:bg-neutral-800/50 border-neutral-800 p-1 w-full rounded-lg"
                                >
                            </div>
                        </div>
                        <div class="flex flex-col gap-1">
                            <label for="message">Message</label>
                            <textarea 
                                name="message"
                                placeholder="Enter your phone number" 
                                id="message" 
                                class="border-2 dark:bg-neutral-800/50 border-neutral-800 p-1 h-34 rounded-lg"
                            >
                            </textarea>
                            <p class="text-xs">Every message submitted is read only by me (Dionísio Neto).</p>
                        </div>
                        <button type="submit" class="dark:bg-white bg-black dark:text-black text-white flex items-center gap-2 font-semibold rounded-lg p-1.5 w-36">
                            <Send :size="18"/>
                            Send message
                        </button>
                    </div>
                </form>
            </div>

            <div class="border-2 border-neutral-700/50 p-5 rounded-lg w-full h-60 md:h-full flex justify-center items-center flex-col gap-2 relative overflow-hidden font-medium">
                <div class="absolute -bottom-12 left-0 rotate-40 -z-2">
                    <Mail :size="210" color="#4a4a4a" />
                </div>

                <h1>Email Me</h1>
                <a  :href="`mailto:${email}`">{{ email }}</a>

                <div class="flex gap-2">
                <!-- BOTÃO DE COPIAR -->
                <div
                    class="border-2 border-neutral-700/50 p-1 rounded-lg bg-neutral-800/50 cursor-pointer"
                    @click="copyEmailToClipboard()"
                >
                    <component :is="copiedEmail ? CopyCheck : Copy" class="w-5 h-5" />
                </div>

                <!-- BOTÃO DE PARTILHAR (exemplo) -->
                <div 
                    @click="share(email)"
                    class="border-2 border-neutral-700/50 p-1 rounded-lg bg-neutral-800/50"
                >
                    <Share2 class="w-5 h-5" />
                </div>
                </div>
            </div>
            <div class="border-2 border-neutral-700/50 p-5 rounded-lg w-full h-60 md:h-full flex justify-center items-center flex-col gap-2 relative overflow-hidden font-medium">
                <div class="absolute -top-10 -right-10 -rotate-25 -z-2">
                    <Smartphone :size="210" color="#4a4a4a"/>
                </div>
                <h1>Call or message me / whatsApp</h1>
                <a :href="`tel:${number}`">{{ number }}</a>
                <div class="flex gap-2">
                    <div 
                        @click="copyNumberToClipboard"
                        class="border-2 border-neutral-700/50 p-1 rounded-lg bg-neutral-800/50"
                    >
                        <component :is="copiedNumber ? CopyCheck : Copy" class="w-5 h-5" />
                    </div>
                    <div 
                        @click="share(number)"
                        class="border-2 border-neutral-700/50 p-1 rounded-lg bg-neutral-800/50"
                    >
                        <Share2 />
                    </div>
                </div>
            </div>
        </div>
    <theFooter />
    </main>
</template>