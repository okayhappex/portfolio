<script setup>
  defineProps({
    className: {
      type: String,
      required: true
    }
  })
</script>
<template>
    <svg :class="className" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M24.4,3.925H30L16,28.075,2,3.925H12.71L16,9.525l3.22-5.6Z" /><path d="M2,3.925l14,24.15L30,3.925H24.4L16,18.415,7.53,3.925Z" /><path d="M7.53,3.925,16,18.485l8.4-14.56H19.22L16,9.525l-3.29-5.6Z" class="fill-slate-800"/></svg>
</template>