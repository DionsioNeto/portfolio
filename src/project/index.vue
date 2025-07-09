<script setup>
  import theHeader from '../components/theHeader.vue';
  import TheFooter from '../components/theFooter.vue';
  import { Code, Mail, Github, Linkedin, Book, Pin, MessagesSquare, BookOpen, Hourglass } from 'lucide-vue-next';
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
</script>
<template>
  <theHeader />
  <main>
    <section class=" container m-auto flex flex-col gap-5 justify-center items-center p-5 min-h-100">
      <h1 class="text-5xl font-black text-center">Dionísio Neto</h1>
      <p class="text-center max-w-150"><strong>Desenvolvedor Web Full Stack</strong> com um ano de experiência, especializado na  criação de Apps responsivas, modernas e com clean code</p>
      <a href="mailto:dionisioni304@gmail.com" class="flex gap-3 dark:bg-white bg-black dark:text-black text-white rounded-md py-2 px-3 font-bold" title="dionisioni304@gmail.com"><Mail/> Mail me</a>
    </section>
    <section class="flex flex-col sm:flex-row justify-center items-center my-5 gap-2">
      <a href="https://github.com/DionsioNeto" title="Git Hub" target="_blank" class="flex flex-row gap-2">
        <Github/>/DionsioNeto
      </a> |
      <a href="https://www.linkedin.com/in/dion%C3%ADsioneto/" title="Linkedin" target="_blank" class="flex flex-row gap-2">
        <Linkedin/>/Dionsio Neto
      </a> | 
      <a href="mailto:dionisioni304@gmail.com" title="E-mail" class="flex flex-row gap-2">
        <Mail/>/dionisioni304@gmail.com
      </a>
    </section>
    <hr class="border-neutral-500">
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
    <hr class="border-neutral-500">
    <section class=" container m-auto flex flex-col gap-7 justify-center items-center px-5 py-7 min-h-100">
      <h1 class="text-4xl font-bold text-center">Experiência</h1>
        <div class="grid grid-cols-1 gap-5">
          <div class="p-3 w-full border-2 dark:bg-neutral-800/50 border-neutral-800 rounded-lg flex flex-col gap-2 max-w-100">
            <h2 class="text-lg font-medium">Profissional autônomo . Freelance</h2>
            <p class="text-neutral-500">Desenvolvedor Web Full Stack</p>
            <p class="text-neutral-500 text-sm">abr de 2025 . Atual</p>
            <p class="flex items-center gap-1"><Pin :size="19"/> Remoto</p>
          </div>
          <div class="p-3 w-full border-2 dark:bg-neutral-800/50 border-neutral-800 rounded-lg flex flex-col gap-2 max-w-100">
            <h2 class="text-lg font-medium">POBU Busness . Estágio</h2>
            <p class="text-neutral-500">Desenvolvedor Web Full Stack</p>
            <p class="text-neutral-500 text-sm">abr de 2025 - mai 2025</p>
            <p class="flex items-center gap-1"><Pin :size="19"/> Híbrido</p>
            <p class="text-xs">Estágio profissional cujo a nota foi de 18 valores</p>
          </div>
        </div>
    </section>
    <hr class="border-neutral-500">
    <section class=" container m-auto flex flex-col gap-5 justify-center items-center p-5 min-h-100">
      <h1 class="text-4xl font-bold text-center">Projects</h1>
    </section>
    <hr class="border-neutral-500">
    <section class=" container m-auto flex flex-col gap-7 justify-center items-center px-5 py-7 min-h-100">
      <h1 class="text-4xl font-bold text-center">Tecnologes</h1>
      <p class="text-center max-w-100">Vê alguma das tecnologias e ferramentas que fazem parte das minha stacks de trabalho</p>
        <div class="grid grid-cols-3 md:grid-cols-6 sm:grid-cols-4 gap-2 sm:gap-5">
          <div class="flex gap-2 items-center">
            <IconHtml class="h-8"/> <span class="text-neutral-500 font-bold">HTML</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconCss class="h-8"/> <span class="text-neutral-500 font-bold">CSS</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconJs class="h-8"/><span class="text-neutral-500 font-bold">JavaScript</span>
          </div>

          
          <div class="flex gap-2 items-center">
            <IconGit class="h-8"/><span class="text-neutral-500 font-bold">Git</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconPhp class="h-9"/><span class="text-neutral-500 font-bold">PHP</span>
          </div>

          <div  class="flex gap-2 items-center">
            <IconSql class="h-8"/><span class="text-neutral-500 font-bold">SQL</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconGithub class="h-8"/><span class="text-neutral-500 font-bold">Git Hub</span>
          </div>
          
          <div class="flex gap-2 items-center">
            <IconC class="h-8"/>
            <span class="text-neutral-500 font-bold">C</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconLaravel class="h-8"/>
            <span class="text-neutral-500 font-bold">Laravel</span>
          </div>

            <div class="flex gap-2 items-center">
            <IconLivewire class="h-8"/><span class="text-neutral-500 font-bold">Livewire</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconPostgre class="h-8"/><span class="text-neutral-500 font-bold">PostgreSQL</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconMysql class="h-8"/><span class="text-neutral-500 font-bold">MySQL</span>
          </div>

            <div class="flex gap-2 items-center">
            <IconVue class="h-8"/><span class="text-neutral-500 font-bold">Vue.Js</span>
          </div>
          
            <div class="flex gap-2 items-center">
            <IconSass class="h-8"/><span class="text-neutral-500 font-bold">Sass</span>
          </div>

            <div class="flex gap-2 items-center">
            <IconBootstrap class="h-8"/><span class="text-neutral-500 font-bold">Bootstrap</span>
          </div>

            <div class="flex gap-2 items-center">
            <IconTailwindcss class="h-8"/><span class="text-neutral-500 font-bold">Tailwind CSS</span>
          </div>

            <div class="flex gap-2 items-center">
            <other class="h-8"/><span  class="text-neutral-500 font-bold">SQL Server</span>
          </div>
          
          <div class="flex gap-2 items-center">
            <IconDocker class="h-8"/><span  class="text-neutral-500 font-bold">Docker</span>
          </div>
          
          <div class="flex gap-2 items-center">
            <IconComposer class="h-8"/><span  class="text-neutral-500 font-bold">Composer</span>
          </div>
          
          <div class="flex gap-2 items-center">
            <IconVscode class="h-8"/><span  class="text-neutral-500 font-bold">VS Code</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconNpm class="h-8"/><span  class="text-neutral-500 font-bold">NPM</span>
          </div>

          <div class="flex gap-2 items-center">
            <IconInsomnia class="h-8"/><span  class="text-neutral-500 font-bold">Insomnia</span>
          </div>
        </div>
    </section>
    <hr class="border-neutral-500">
    <section class=" container m-auto flex flex-col gap-7 justify-center items-center px-5 py-7 min-h-100">
      <h1 class="text-4xl font-bold text-center">Conctaco</h1>
      <p class="text-center w-110">Agradeço imenso por visitar o meu site pessoal, e se quiser falar comig sobre alguma coisa, seja ela qual for, pode entrar em contacto comigo clicando abaixo! ;-) </p>
      <RouterLink to="/contact" class="flex gap-3 dark:bg-white bg-black dark:text-black text-white rounded-md py-2 px-3 font-bold" title="Say with me!"><MessagesSquare/>Say with me!</RouterLink>
    </section>
  </main>
  <TheFooter />
</template>