<script setup>
import { ref, onMounted } from 'vue'
import { RouterLink } from 'vue-router'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon as Fa } from '@fortawesome/vue-fontawesome'

const isSidebarOpen = ref(false)

const toggleBarLateral = () => {
  isSidebarOpen.value = !isSidebarOpen.value
}

onMounted(() => {
  window.addEventListener("scroll", () => {
    document.querySelector("header")?.classList.toggle("roll", window.scrollY > 0)
  })
})
</script>

<template>
  <header>
    <div class="logo">
      <h1>Dionísio</h1>
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
    <div class="btn-responsive" @click="toggleBarLateral">
        <fa icon="equals" />
    </div>
  </header>

  <aside :class="{ open: isSidebarOpen }">
    <div class="close-btn" @click="toggleBarLateral">
      <Fa :icon="faXmark" />
    </div>
    <nav>
      <ul>
        <li><RouterLink to="/">Home</RouterLink></li>
        <li><RouterLink to="/about">About</RouterLink></li>
        <li><RouterLink to="/contact">Contact</RouterLink></li>
      </ul>
    </nav>
  </aside>

  <div v-if="isSidebarOpen" class="overlay" @click="toggleBarLateral" />
</template>

<style scoped>
/* Header fixo no topo */
header {
  background-color: var(--bg-secondary);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  width: 100%;
  z-index: 10;
  padding: 15px;
  transition: background-color 0.3s;
}

header.roll {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

/* Botão hamburguer */
.btn-responsive {
  cursor: pointer;
  font-size: 24px;
}

/* Menu lateral */
aside {
  position: fixed;
  top: 0;
  left: -250px;
  width: 250px;
  height: 100vh;
  background-color: var(--bg-secondary);
  padding: 20px;
  box-shadow: 2px 0 12px rgba(0, 0, 0, 0.1);
  transition: left 0.3s ease;
  z-index: 100;
}

aside.open {
  left: 0;
}

aside .close-btn {
  display: flex;
  justify-content: flex-end;
  font-size: 24px;
  cursor: pointer;
  margin-bottom: 20px;
}

aside nav ul {
  list-style: none;
  padding: 0;
}

aside nav ul li {
  margin: 15px 0;
}

aside nav ul li a {
  text-decoration: none;
  color: inherit;
  font-weight: bold;
}

/* Overlay para escurecer o fundo */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 50;
}
</style>



<!-- <script>
    window.addEventListener("scroll",  () => {
        document.querySelector("header").classList.toggle("roll", window.scrollY > 0)
    })
</script>

<template>
    <header>
        <div class="logo">
            <h1>Dionísio</h1>
        </div>
        <nav>
            <ul>
                <li class="active">
                    <RouterLink to="/">Home</RouterLink>
                </li>
                <li>
                    <RouterLink to="/about">About</RouterLink>
                </li>
                <li>
                    <RouterLink to="/contact">Contact</RouterLink>
                </li>
            </ul>
        </nav>
        <div class="btn-responsive" @click="toggleBarLateral">
            <fa icon="equals" />
        </div>
    </header>
</template>

<style>
   header{
    background-color: var(--bg-secondary);
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    width: 100%;
    z-index: 1;
    padding: 15px;
   }

   header nav ul {
    display: flex;
    align-items: center;
    gap: 10px;
   }
</style> -->