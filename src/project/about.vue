<script setup>
  import theHeader from '../components/theHeader.vue';
  import TheFooter from '../components/theFooter.vue';
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

  <main class="w-dvh sm:w-[65vw] m-auto border-l border-r border-neutral-500 -mt-10">
    <theHeader />
    <section class="flex flex-col md:flex-row gap-7 px-5 sm:px-15 py-25">
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">About Me</h1>
        <p class="text-neutral-500 font-medium">
          As web developer full-stack with 6 month of experience. <br>
          I’m always striving to do my best, learn from others, and deliver with quality. I enjoy collaborative experiences, closing challenges, and leaving everything well-resolved — without forgetting attention to detail.
        </p>
      </div>

      <div class="w-full flex justify-center items-center">
        <img src="../assets/img/dn3.jpg" alt="Dionísio Neto" class="max-w-45 rounded-xl rotate-12">
      </div>
    </section>

    <section class="flex flex-col-reverse md:flex-row gap-7 px-5 sm:px-15 py-25">
      <div class="w-full flex justify-center items-center">
        <img src="../assets/img/d.png" alt="Dionísio Neto" class="max-w-45 rounded-xl">
      </div>
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">Educations</h1>
        <p class="text-neutral-500 font-medium">
          As web developer full-stack with 6 month of experience. <br>
          I’m always striving to do my best, learn from others, and deliver with quality. I enjoy collaborative experiences, closing challenges, and leaving everything well-resolved — without forgetting attention to detail.
        </p>
      </div>      
    </section>
    <section class="w-full flex justify-center items-center py-10">
      <div class="dark:bg-white bg-black rounded-full dark:text-black text-white flex justify-between items-center w-34 p-1">
          <div class="font-bold">see resume</div>
          <div class="dark:bg-black bg-white p-1 rounded-full dark:text-white text-black">
              <MoveUpRight />
          </div>
      </div>
    </section>

    
    <section class=" px-5 sm:px-15 py-10">
    
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