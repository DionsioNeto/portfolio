<script setup>
  import theHeader from '../components/theHeader.vue';
  import TheFooter from '../components/theFooter.vue';
  import IconGithub from '@/icon/IconGithub.vue';
  import InconXTwitter from '@/icon/InconXTwitter.vue';
  import IconLinkedin from '@/icon/IconLinkedin.vue';
  import Modal from '../components/modal.vue';
  import { MoveUpRight, X, Download } from 'lucide-vue-next';

  import { ref } from 'vue';
  const toggleModal = ref(false)

  function nn(){
    toggleModal.value = !toggleModal.value
  }

  const showModal = ref(false)


  const items = [
    {
      title: 'about_me.title',
      content: 'about_me.content'
    },
    {
      title: 'Efficiency.title',
      content: 'Efficiency.content'
    },
    {
      title: 'Learning_Culture.title',
      content: 'Learning_Culture.content'
    },
    {
      title: 'Web_Development.title',
      content: 'Web_Development.content'
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
        <div class="max-w-20 md:max-w-40  rounded-xl overflow-hidden relative">
          <img src="../assets/img/dn3.jpg" alt="Dionísio Neto" class="w-full">
        </div>
        <div class="w-full">
          <h1 class="text-3xl font-bold mb-2">Dionísio Neto</h1>
          <p class="text-neutral-500 font-medium">
            {{ $t('System developer, university student in computer engineering, with a high school diploma in computer science.') }}
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
              {{ $t('Available for work') }}
          </div>
        </div>
      </div>

      <div class="w-full mt-5">
        <h1 class="text-3xl font-bold mb-2">{{ $t('About') }}</h1>
        <p class="text-neutral-500 font-medium">
          {{ $t('about me') }}
        </p>
      </div>
      
      <div class="w-full mt-5">
        <h1 class="text-3xl font-bold mb-2">{{ $t('Work Experience') }}</h1>
        <div class="">
          <p class="text-neutral-500 font-medium">{{ $t('Present ________ Profissional Freelancer') }}</p>
          <p class="text-neutral-500 font-medium">
            {{ $t('6 Month _______ As an intern dev full stack at') }} 
            <a 
              target="_blank" 
              href="https://pobuc.com"
            >
              <span class="text-blue-500 font-bold underline">
                POBU  Business
                <MoveUpRight :size="18" class=" inline-block"/>
              </span> 
            </a>
          </p>
        </div>
      </div>

      <div class="w-full mt-5">
        <h1 class="text-3xl font-bold mb-2">{{ $t('Education') }}</h1>
        <ul class="flex flex-col gap-2">
          <li>
            <a 
              target="_blank" 
              href="#"
            >
              <div class=" font-medium">
                {{ $t('university student in computer engineering')}}
              </div>
              <div class="hover:text-neutral-600 underline">
                ...
                <MoveUpRight :size="18" class=" inline-block"/>
              </div>
            </a>
            <div class="text-neutral-500">2024/2025 _______ Present</div>
          </li>
          <li>
            <a
              target="_blank" 
              href="https://share.google/McBFr5S3UQNnWyP2F"
            >
              <div class=" font-medium">
                {{ $t('High school diploma in computer science.') }}
              </div>
              <div class="hover:text-neutral-600 underline">
                {{ $t('Private Polytechnic High School Institute') }} ANHERC (IMPPA)
                <MoveUpRight :size="18" class=" inline-block"/>
              </div>
            </a>
            <div class="text-neutral-500">2021/2022 _______ 2024/2025</div>
          </li>
        </ul>
      </div>
    </section>
    <section class="px-5 sm:px-15 mt-5">
      <h1 class="text-3xl font-bold mb-2">{{ $t('Curiosities')}}</h1>
        <p class="text-neutral-500 font-medium">{{ $t('Some facts about me') }}</p>
      <div
        v-for="(item, index) in items"
        :key="index"
        class="select-none max-w-[100%]"
      >
        <div @click="toggle(index)" class="flex items-center justify-between bg-neutral-300 dark:bg-neutral-900 my-2 p-2 rounded-lg">
          <h2 class="text-lg font-semibold">
            {{ $t(item.title) }}
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
            {{ $t(item.content) }}
          </div>
        </transition>
      </div>
    </section>


    <section 
      @click="showModal = true"
      class="w-full flex justify-center items-center py-2 cursor-pointer"
    >
      <div class="dark:bg-white bg-black rounded-full dark:text-black text-white flex justify-between gap-2 items-center w-fit p-1">
          <div class="font-bold">{{ $t('see resume') }}</div>
          <div class="dark:bg-black bg-white p-1 rounded-full dark:text-white text-black">
              <MoveUpRight />
          </div>
      </div>
    </section>

    <teleport to="body">
      <Modal :show="showModal" @close="showModal = false">
        <template #header>
          {{ $t('Resume') }}
        </template>

        <template #body>
          <img src="../assets/img/dn3.jpg" alt="Dionísio Neto" class="max-w-20 md:max-w-full rounded-xl">
        </template>

        <template #footer>
          <button
            class=""
            @click="$emit('close')"
          >
            <Download/>
          </button>
        </template>
      </Modal>
    </teleport>
    
    
     
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