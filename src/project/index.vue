<script setup>
  import theHeader from '../components/theHeader.vue';
  import TheFooter from '../components/theFooter.vue';
  import { Code, Mail, Linkedin, Book, Pin, MessagesSquare, BookOpen, Hourglass, ChevronDown, X } from 'lucide-vue-next';
  import IconHtml from '@/icon/IconHtml.vue';
  import IconCss from '@/icon/IconCss.vue';
  import IconJs from '@/icon/IconJs.vue';
  import IconPhp from '@/icon/IconPhp.vue';
  import IconGit from '@/icon/IconGit.vue';
  import IconC from '@/icon/IconC.vue';
  import IconLaravel from '@/icon/IconLaravel.vue';
  import IconLivewire from '@/icon/IconLivewire.vue';
  import IconMysql from '@/icon/IconMysql.vue';
  import IconPostgre from '@/icon/IconPostgre.vue';
  import IconVue from '@/icon/IconVue.vue';
  import IconSass from '@/icon/IconSass.vue';
  import IconBootstrap from '@/icon/IconBootstrap.vue';
  import IconSql from '@/icon/IconSql.vue';
  import IconTailwindcss from '@/icon/IconTailwindcss.vue';
  import IconGithub from '@/icon/IconGithub.vue';
  import other from '@/icon/other.vue';
  import IconDocker from '@/icon/IconDocker.vue';
  import IconComposer from '@/icon/IconComposer.vue';
  import IconVscode from '@/icon/IconVscode.vue';
  import IconNpm from '@/icon/IconNpm.vue';
  import IconInsomnia from '@/icon/IconInsomnia.vue';
  import InconXTwitter from '@/icon/InconXTwitter.vue';
  import IconLinkedin from '@/icon/IconLinkedin.vue';
  import { ref } from 'vue'

  const items = [
    {
      title: 'Dionísio Neto?',
      content: 'Lorem.'
    },
  ]

  const openIndex = ref(null)

  const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index
  }
</script>
<template>
  <theHeader />
  <main class="sm:w-[65vw] m-auto border-l border-r border-neutral-500 -mt-10">
    <section class="flex flex-col gap-5 justify-center items-center p-5 min-h-[100vh]">
      <div class="h-40 w-40 rounded-full border-2 border-neutral-500 relative overflow-hidden mt-10">
        <img src="./dn.jpg" alt="" class="absolute w-full h-full object-cover">
      </div>
      <h1 class="text-5xl font-bold text-center max-w-120">Hey, I'm Dionísio Neto Web Developer and informatic</h1>
      <p class="font-bold max-w-140 text-center text-neutral-700">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea possimus velit sunt excepturi minus alias similique.
      </p>
      <div class="flex gap-3 items-center">
        <RouterLink to="/contact" class="flex gap-3 dark:bg-white bg-black dark:text-black text-white rounded-md py-2 px-3 font-bold" title="Say with me!"><MessagesSquare/>Say with me!</RouterLink>
        <div class="text-sky-500 flex items-center gap-2 font-medium">
          <span class="relative flex size-3">
            <span class="absolute flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
          </span>
          Available for new projects
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <a href="" class="dark:hover:bg-neutral-800 p-1 rounded-lg">
          <IconGithub class="h-5"/>
        </a>
        <a href="" class="dark:hover:bg-neutral-800 p-1 rounded-lg">
          <InconXTwitter class="h-5"/>
        </a>
        <a href="" class="dark:hover:bg-neutral-800 p-1 rounded-lg">
          <IconLinkedin class="h-6"/>
        </a>
      </div>
    </section>
   
    <section class="flex flex-col md:flex-row gap-7 px-5 sm:px-15 py-15">

      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">About Me</h1>
        <p class="text-neutral-500 font-medium">
          As web developer full-stack with 6 month of experience,
        </p>
      </div>

      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">Work Experience</h1>
        <div class="">
          <p class="text-neutral-500">Present ________ Profissional Freelancer</p>
          <p class="text-neutral-500">6 Month _______ proffissional as dev full stack at <span class="text-blue-500 font-bold">POBU  Bussnes</span> </p>
        </div>
      </div>


    </section>

    <section class="flex flex-col md:flex-row gap-7 px-5 sm:px-15 py-15">
      <div class="w-full">tecs</div>
      <div class="w-full grid grid-cols-4 gap-3">
        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconHtml class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconCss class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconJs class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconGit class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconPhp class="h-9"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconSql class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconGithub class="h-8"/>
        </div>
        
        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconC class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconLaravel class="h-8"/>
        </div>

          <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconLivewire class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconPostgre class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconMysql class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconVue class="h-8"/>
        </div>
        
          <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconSass class="h-8"/>
        </div>

          <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconBootstrap class="h-8"/>
        </div>

          <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconTailwindcss class="h-8"/>
        </div>

          <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <other class="h-8"/>
        </div>
        
        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconDocker class="h-8"/>
        </div>
        
        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconComposer class="h-8"/>
        </div>
        
        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconVscode class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconNpm class="h-8"/>
        </div>

        <div class="dark:bg-neutral-800 p-1 rounded-lg w-12 h-12 flex items-center justify-center">
          <IconInsomnia class="h-8"/>
        </div>
      </div>
    </section>
    
     <div
      v-for="(item, index) in items"
      :key="index"
      class="select-none mx-20"
    >
      <div @click="toggle(index)" class="flex items-center justify-between bg-neutral-900 my-2 p-2 rounded-lg">
        <h2 class="text-lg font-mediu">
          {{ item.title }}
        </h2>
        <X
          :class="[
            'w-5 h-5  transition-transform duration-300 rotate-44',
            openIndex === index ? 'rotate-180' : ''
          ]"
          
        />
      </div>
      <transition name="accordion">
        <div
          v-show="openIndex === index"
          class="mt-2  text-sm leading-relaxed"
        >
          {{ item.content }}
        </div>
      </transition>
    </div>
    <section class=" container m-auto flex flex-col gap-7 justify-center items-center px-5 py-7 min-h-100">
      <h1 class="text-4xl font-bold text-center">Conctaco</h1>
      <p class="text-center w-110">Agradeço imenso por visitar o meu site pessoal, e se quiser falar comig sobre alguma coisa, seja ela qual for, pode entrar em contacto comigo clicando abaixo! ;-) </p>
      <RouterLink to="/contact" class="flex gap-3 dark:bg-white bg-black dark:text-black text-white rounded-md py-2 px-3 font-bold" title="Say with me!"><MessagesSquare/>Say with me!</RouterLink>
    </section>
    <TheFooter />
  </main>
</template>

<style scoped>
.accordion-enter-active,
.accordion-leave-active {
  transition: all 0.3s ease;
}
.accordion-enter-from,
.accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to,
.accordion-leave-from {
  opacity: 1;
  max-height: 200px;
}
</style>