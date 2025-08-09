<script setup>
  import theHeader from '../components/theHeader.vue';
  import TheFooter from '../components/theFooter.vue';
  import IconGithub from '@/icon/IconGithub.vue';
  import InconXTwitter from '@/icon/InconXTwitter.vue';
  import IconLinkedin from '@/icon/IconLinkedin.vue';
  import { MoveUpRight, X } from 'lucide-vue-next';
  import { ref } from 'vue';
  const items = [
    {
      title: 'About me',
      content: 'I’m always striving to do my best, learn from others, and deliver with quality. I enjoy collaborative experiences, closing challenges, and leaving everything well-resolved — without forgetting attention to detail.'
    },
    {
      title: 'Efficiency',
      content: 'I develop quickly while following all steps and processes of software development, consistently meeting deadlines.'
    },
    {
      title: 'Learning Culture',
      content: 'A lifelong technology enthusiast, I’m always looking to improve my existing skills and learn new things — constantly exploring better ways to write clean and efficient code.'
    },
    {
      title: 'Web Development',
      content: 'I build complete (Full Stack), responsive, accessible, and high-performance applications using modern technologies, with a strong focus on quality of code.'
    }
  ]

  const openIndex = ref(null)

  const toggle = (index) => {
    openIndex.value = openIndex.value === index ? null : index
  }
</script>

<template>

  <main class="sm:w-[65vw] m-auto border-l border-r border-neutral-500 -mt-10">
    <theHeader />
    <section class="px-5 sm:px-15 pt-25">
      <div class="flex flex-row gap-4 ">
        <div class="">
          <img src="../assets/img/dn3.jpg" alt="Dionísio Neto" class="max-w-20 md:max-w-40 rounded-xl">
        </div>
        <div class="w-full">
          <h1 class="text-3xl font-bold mb-2">Dionísio Neto</h1>
          <p class="text-neutral-500 font-medium">
            System developer, university student in computer engineering, with a high school diploma in computer science.
          </p>
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
          <div class="text-sky-500 flex items-center gap-2 font-medium">
            <span class="relative flex size-3">
              <span class="absolute flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
              <span class="relative inline-flex size-3 rounded-full bg-sky-500"></span>
            </span>
              Available for work
          </div>
        </div>
      </div>

      <div class="w-full mt-5">
        <h1 class="text-3xl font-bold mb-2">About</h1>
        <p class="text-neutral-500 font-medium">
          As web developer full-stack with 6 month of experience. <br>
          I’m always striving to do my best, learn from others, and deliver with quality. I enjoy collaborative experiences, closing challenges, and leaving everything well-resolved — without forgetting attention to detail.
        </p>
      </div>
      
      <div class="w-full mt-5">
        <h1 class="text-3xl font-bold mb-2">Work Experience</h1>
        <div class="">
          <p class="text-neutral-500 font-medium">Present ________ Profissional Freelancer</p>
          <p class="text-neutral-500 font-medium">6 Month _______ As an intern dev full stack at <span class="text-blue-500 font-bold">POBU  Bussnes</span> </p>
        </div>
      </div>

      <div class="w-full mt-5">
        <h1 class="text-3xl font-bold mb-2">Education</h1>
        <ul class="flex flex-col gap-2">
          <li>
            <a href="#">
              <div class=" font-medium">
                university student in computer engineering
              </div>
              <div class="hover:text-neutral-600 underline">
                ...
                <MoveUpRight :size="18" class=" inline-block"/>
              </div>
            </a>
            <div class="text-neutral-500">2024/2025 _______ Present</div>
          </li>
          <li>
            <a href="https://share.google/McBFr5S3UQNnWyP2F">
              <div class=" font-medium">
                High school diploma in computer science.
              </div>
              <div class="hover:text-neutral-600 underline">
                Instituto Médio Politécnico Privado ANHERC (IMPPA)
                <MoveUpRight :size="18" class=" inline-block"/>
              </div>
            </a>
            <div class="text-neutral-500">2021/2022 _______ 2024/2025</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="px-5 sm:px-15">
      <h1 class="text-3xl font-bold mb-2">Curiosities</h1>
        <p class="text-neutral-500 font-medium">Some facts about me</p>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="select-none max-w-[100%]"
      >
        <div @click="toggle(index)" class="flex items-center justify-between bg-neutral-300 dark:bg-neutral-900 my-2 p-2 rounded-lg">
          <h2 class="text-lg font-semibold">
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
            class="mt-2 mx-2 text-sm leading-relaxed font-medium text-neutral-600"
          >
            {{ item.content }}
          </div>
        </transition>
      </div>
    </section>


    <section class="w-full flex justify-center items-center py-2">
      <div class="dark:bg-white bg-black rounded-full dark:text-black text-white flex justify-between items-center w-34 p-1">
          <div class="font-bold">see resume</div>
          <div class="dark:bg-black bg-white p-1 rounded-full dark:text-white text-black">
              <MoveUpRight />
          </div>
      </div>
    </section>

    
    
     
    <the-footer/>
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