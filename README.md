# ./

This template should help get you started developing with Vue 3 in Vite.

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur).

## Customize configuration

See [Vite Configuration Reference](https://vite.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```
<template>
    <Navbar v-bind:links="['Home', 'About', 'Contact']"/>
    <Login />   
    <Footer />
</template>  
<script> 
    import Navbar from './components/Navbar' 
    import Login from './components/Login' 
    import Footer from './components/Footer'   
    export default {   
        name: 'App',
        components: {     
            Navbar,     
            Login,     
            Footer   
        } 
    } 
</script>  
<style src="./index.css" />