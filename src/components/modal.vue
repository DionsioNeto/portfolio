<script setup>
  import { X } from 'lucide-vue-next';
  const props = defineProps({
    show: Boolean
  })
</script>
<template>
  <Transition name="modal">
    <div 
        v-if="show" 
        class="fixed z-998 top-0 left-0 w-full h-full bg-neutral-800/70 flex transition-opacity ease-in backdrop-blur-xs"
    >
      <div class="w-80 m-auto bg-neutral-100  dark:bg-neutral-900 rounded-lg shadow transition ease-in">
        <div class="border-b border-gray-500 p-2 flex justify-between items-center text-lg font-bold">
          <slot name="header">default header</slot>
          <button 
            @click="$emit('close')"
            class="cursor-pointer"
          >
            <X :size="22"/>
          </button>
        </div>
        <div class="text-neutral-600 font-medium p-2">
          <slot name="body">default body</slot>
        </div>
        <div class="modal-footer p-2 text-xs">
          <slot name="footer">
            <button
              class="bg-red-600 p-1 rounded"
              @click="$emit('close')"
            >Cancel</button>
          </slot>
        </div>
      </div>
    </div>
  </Transition>
</template>
<style>
  .modal-enter-from {
    opacity: 0;
  }

  .modal-leave-to {
    opacity: 0;
  }

  .modal-enter-from .modal-container,
  .modal-leave-to .modal-container {
    -webkit-transform: scale(1.1);
    transform: scale(1.1);
  }
</style>