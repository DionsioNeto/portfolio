<script>
window.addEventListener("scroll",  () => {
    document.querySelector("header").classList.toggle("roll", window.scrollY > 0)
})
</script>

<template>
    <header>
        
    </header>

    <h1>Eklll</h1>

    
    
</template>

<style>
html{
height: 1000vh;
}


header{
    border: 2px solid var(--white);
    height: 45px;
}

header.roll{
    background-color: green;
  /* dps de descer */
}

</style>