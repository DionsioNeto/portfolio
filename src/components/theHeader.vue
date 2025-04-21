<script>
    window.addEventListener("scroll",  () => {
        document.querySelector("header").classList.toggle("roll", window.scrollY > 0)
    })
</script>

<template>
    <header>
        <div class="btn-responsive">
            <fa icon="bars" />
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
    </header>
</template>

<style>
   header{
    background-color: var(--bg-secondary);
    display: flex;
    position: fixed;
    width: 100%;
    z-index: 1;
   }
   header.foll{
    background-color: red;
   }
</style>