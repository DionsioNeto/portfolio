<script setup>
  import theHeader from '../components/theHeader.vue';
  import TheFooter from '../components/theFooter.vue';
  import { Linkedin, MessagesSquare, X, MoveRight } from 'lucide-vue-next';
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
  import  IconNuxt from '@/icon/IconNuxt.vue';
  import  IconInertia from '@/icon/IconInertia.vue';
  import IconTS from '@/icon/IconTS.vue';
  import IconAlpine from '@/icon/IconAlpine.vue';
  import IconTrello from '@/icon/IconTrello.vue';
  import IconJava from '@/icon/IconJava.vue';
  import IconSpringBot from '@/icon/IconSpringBot.vue';
  import { ref } from 'vue'

  const langTec = ref(true)
</script>
<template>
  <main class="sm:w-[65vw] m-auto border-l border-r border-neutral-500 -mt-10">
    <theHeader />
    <section class="flex flex-col gap-5 justify-center items-center p-5 min-h-[100vh]">
      <div class="h-40 w-40 rounded-full border-2 border-neutral-500 relative overflow-hidden mt-10">
        <img src="../assets/img/dn.jpg" alt="Dionísio Neto" class="absolute w-full h-full object-cover">
      </div>
      <h1 class="text-5xl font-bold text-center max-w-120">Hey, I'm Dionísio Neto, a systems developer.</h1>
      <p class="font-semibold max-w-140 text-center text-neutral-700">
        I’m looking for an opportunity to contribute to the development of dynamic and innovative projects, using my technical skills, strong desire to learn new things, and grow into an increasingly skilled professional.
      </p>
      <div class="flex gap-3 items-center">
        <RouterLink to="/contact" class="flex  gap-3 dark:bg-white bg-black dark:text-black text-white rounded-md py-2 px-3 font-bold" title="Say with me!"><MessagesSquare/>Say with me!</RouterLink>
        <div class="text-sky-500 flex items-center gap-2 font-medium">
          <span class="relative flex size-3">
            <span class="absolute flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
            <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
          </span>
          Available for work
        </div>
      </div>
      <div class="flex gap-3 items-center">
        <a
          href="https://github.com/DionsioNeto" 
          title="https://github.com/DionsioNeto" 
          target="_blank" 
          class="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-1 rounded-lg"
        >
          <IconGithub class="h-5"/>
        </a>
        <a 
          href="https://x.com/dionsio_14" 
          title="https://x.com/dionsio_14" 
          target="_blank" 
          class="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-1 rounded-lg"
        >
          <InconXTwitter class="h-5"/>
        </a>
        <a
          href="https://www.linkedin.com/in/dion%C3%ADsioneto/" 
          title="https://www.linkedin.com/in/dionísioneto/" 
          target="_blank" 
          class="hover:bg-neutral-300 dark:hover:bg-neutral-800 p-1 rounded-lg"
        >
          <IconLinkedin class="h-6"/>
        </a>
      </div>
    </section>
   
    <section class="flex flex-col md:flex-row gap-7 px-5 sm:px-15 py-15">
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">About Work Experience</h1>
        <p class="text-neutral-500 font-medium inline-block">
          6 Month as an intern, I performed duties as a full-stack web developer, achieving a final grade of 18 out of 20.
          <RouterLink 
            class="text-blue-500"
            to="/about"
          >
            See more 
            <MoveRight :size="20" class="inline"/>
          </RouterLink>
        </p>
      </div>

      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">Work Experience</h1>
        <div class="">
          <p class="text-neutral-500 font-medium">Present ________ Profissional Freelancer</p>
          <p class="text-neutral-500 font-medium">6 Month _______ As an intern dev full stack at <span class="text-blue-500 font-bold">POBU  Bussnes</span> </p>
        </div>
      </div>
    </section>

    <section class="flex flex-col lg:flex-row gap-5 px-5 sm:px-15 py-10">
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">Some tools and tecs, used by me</h1>
        <p class="text-neutral-500 font-medium">
          These are some of the technologies and tools I use in my projects, and I’m currently studying some of them.
        </p>
        <div class="flex justify-center items-center w-full py-5">
          <div class="dark:bg-white bg-black rounded-full dark:text-black text-white flex justify-between items-center w-fil p-1 font-bold">
            <div
              @click="langTec = true" 
              :class="!langTec 
                ? 'cursor-pointer px-4 p-1 rounded-full dark:text-black text-white' 
                : 'cursor-pointer px-4 p-1 rounded-full dark:text-white text-black dark:bg-black bg-white'"
            >
              All
            </div>
            <div 
              @click="langTec = false"
              class="cursor-pointer p-1 px-4"
              :class="!langTec 
                ? 'cursor-pointer px-4 p-1 rounded-full dark:text-white text-black dark:bg-black bg-white' 
                : 'cursor-pointer p-1 px-4'"
            >
                Studying
            </div>
          </div>
        </div>
      </div>
      <div class="flex justify-center items-center w-full">
        <div class="grid grid-cols-6 gap-3">
          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="HTML">
            <IconHtml class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="CSS">
            <IconCss class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="JavaScript">
            <IconJs class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="GIT">
            <IconGit class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="PHP">
            <IconPhp class="h-9"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="SQL">
            <IconSql class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Git Hub">
            <IconGithub class="h-8"/>
          </div>
          
          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="C">
            <IconC class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Trello">
            <IconTrello class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Laravel PHP">
            <IconLaravel class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title=" Laravel Livewire">
            <IconLivewire class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="PostgreSql">
            <IconPostgre class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="MySql">
            <IconMysql class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Vue JS">
            <IconVue class="h-8"/>
          </div>
          
            <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Sass">
            <IconSass class="h-8"/>
          </div>
          
          <div class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="TypeScript">
            <IconTS class="h-8"/>
          </div>

          <div class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Alpine JS">
            <IconAlpine class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Bootstrap">
            <IconBootstrap class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Tailwind CSS">
            <IconTailwindcss class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="SQL Server">
            <other class="h-8"/>
          </div>

          <div class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Nuxt JS">
            <IconNuxt class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Inertia JS">
            <IconInertia class="h-8"/>
          </div>
          
          <div class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Docker">
            <IconDocker class="h-8"/>
          </div>
          
          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Composer">
            <IconComposer class="h-8"/>
          </div>
          
          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="VS Code">
            <IconVscode class="h-8"/>
          </div>

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="NPM">
            <IconNpm class="h-8"/>
          </div>

           <div class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Java">
            <IconJava class="h-8"/>
          </div>

          <div class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Spring">
            <IconSpringBot class="h-8"/>
          </div>

                
     

          <div v-if="langTec" class="bg-neutral-300 dark:bg-neutral-900 p-1 rounded-lg w-12 h-12 flex items-center justify-center" title="Insomnia">
            <IconInsomnia class="h-8"/>
          </div>
        </div>
      </div>
    </section>

    <section class=" container m-auto flex flex-col gap-7 justify-center items-center px-5 py-10">
      <p class="text-center max-w-110 font-medium">Thank you so much for visiting my personal website! If you’d like to talk to me about anything at all, feel free to get in touch by clicking below! ;-) </p>
      <RouterLink to="/contact" class="flex gap-3 dark:bg-white bg-black dark:text-black text-white rounded-md py-2 px-3 font-bold" title="Say with me!"><MessagesSquare/>Say with me!</RouterLink>
    </section>
    <TheFooter />
  </main>
</template>