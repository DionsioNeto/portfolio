<script setup>
  import theHeader from '../components/theHeader.vue';
  import TheFooter from '../components/theFooter.vue';
  import { Code, Mail, Linkedin, Book, Pin, MessagesSquare, BookOpen, Hourglass, ChevronDown, X } from 'lucide-vue-next';
</script>

<template>

  <main class="w-dvh sm:w-[65vw] m-auto border-l border-r border-neutral-500 -mt-10">
    <theHeader />
    <section class="flex flex-col md:flex-row gap-7 px-5 sm:px-15 py-25">
      <div class="w-full">
        <h1 class="text-3xl font-bold mb-2">About Me</h1>
        <p class="text-neutral-500 font-medium">
          As web developer full-stack with 6 month of experience,
        </p>
      </div>

      <div class="">
        <img src="./dn2.jpg" alt="" class="w-50 rounded-xl rotate-12">
      </div>
    </section>
       <section class=" container m-auto flex flex-col gap-10 justify-center items-center px-5 py-7 min-h-100">
      <h1 class="text-4xl font-bold text-center">Sobre</h1>
      <p class="text-center max-w-150">Estou sempre buscando fazer o melhor, aprender com os outros e entregar com qualidade.
        Gosto de experiências colaborativas, encerrar desafios e deixar tudo bem resolvido e
        cem cuidado no detahe</p>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
          <div class="p-3 w-full border-2 dark:bg-neutral-800/50 border-neutral-800 rounded-lg flex flex-col justify-center items-center gap-2">
            <div class="border-2 bg-neutral-800/50 border-neutral-800 p-2 rounded-full">
              <Code/>
            </div>
            <h2 class="text-2xl font-black text-center">Desenvolvendo Web</h2>
            <p class="text-center">Desenvolvo aplicaçoes cempletas (Full Stack), Responsivas, Acessíveis e de alto desempenho, construídas com tecnologias modernaas e focando na qualidade</p>
          </div>
          <div class="p-3 w-full border-2 dark:bg-neutral-800/50 border-neutral-800 rounded-lg flex flex-col justify-center items-center gap-2">
            <div class="border-2 bg-neutral-800/50 border-neutral-800 p-2 rounded-full">
              <BookOpen/>
            </div>
            <h2 class="text-2xl font-black text-center">Cultura de aprendizado</h2>
            <p class="text-center">Eterno amante da tecnológia, por isso, busco sempre aprimorar as habilidade que tenho e aprender coisas nova, e pesquisando novas forma de melhorar e deixar limpo o meu código.</p>
          </div>
          <div class="p-3 w-full border-2 dark:bg-neutral-800/50 border-neutral-800 rounded-lg flex flex-col justify-center items-center gap-2">
            <div class="border-2 bg-neutral-800/50 border-neutral-800 p-2 rounded-full">
              <Hourglass/>
            </div>
            <h2 class="text-2xl font-black text-center">Eficiência</h2>
            <p class="text-center">Desenvolvo de forma rápida, e obedecendo todos os paços e processo de desenvolvimento, e cumprindo prazos</p>
          </div>
        </div>
    </section>
    <the-footer/>
  </main>
</template>