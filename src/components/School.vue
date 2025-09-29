<script setup>
  defineProps({
    formation: {
      type: String,
      required: false
    },
    year: {
      type: String,
      required: true
    },
    schoolName: {
      type: String,
      required: true
    },
    field1: {
      type: String,
      required: false
    },
    field2: {
      type: String,
      required: false
    },
    field3: {
      type: String,
      required: false
    }
  })
</script>
<template>
    <div class="bg-slate-400/10 backdrop-blur-lg border-[1.5px] border-slate-400 rounded-xl px-4 py-3 space-y-2 dark:bg-slate-800/10 dark:border-slate-800">
        <span class="inline-block text-primary text-xs ">{{ year }}</span>
        <div>
            <h3 class="text-slate-700 text-lg font-semibold dark:text-slate-300">{{ formation || schoolName }}</h3>
        </div>
        <div>
            <span class="text-slate-600 text-sm dark:text-slate-400">{{ formation ? schoolName : field1 }}</span><br />
            <span class="text-slate-600 text-sm dark:text-slate-400">{{ field2 }}</span><br />
            <span class="text-slate-600 text-sm dark:text-slate-400">{{ field3 }}</span>
        </div>
    </div>
</template>