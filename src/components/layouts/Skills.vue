<script setup>
    import Tool from '../Tool.vue';
</script>
<template>
    <section class="space-y-8">
        <h2 class="text-slate-900 text-xl text-center uppercase font-semibold mb-4 dark:text-slate-200">Hard skills</h2>
        <div class="flex text-slate-800 space-x-2 dark:text-slate-400 max-sm:overflow-x-scroll sm:place-content-center">
            <Tool name="HTML" color="red-600" />
            <Tool name="CSS" color="blue-700" />
            <Tool name="Javascript" color="yellow-500" />
            <Tool name="Typescript" color="blue-800" />
            <Tool name="Python" color="sky-950" />
            <Tool name="Vue" color="emerald-600" />
            <Tool name="TailwindCSS" color="cyan-500" />
        </div>
        <div class="flex text-slate-800 space-x-2 dark:text-slate-400 max-sm:overflow-x-scroll sm:place-content-center">
            <Tool name="Canva" color="indigo-500" />
            <Tool name="Figma" color="red-500" />
            <Tool name="DaVinci Resolve" color="blue-600" />
            <Tool name="Lightroom" color="blue-500" />
        </div>
    </section>
</template>