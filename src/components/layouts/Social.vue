<script setup>
    import Github from '../social/Github.vue'
	import Reddit from '../social/Reddit.vue'
	import Scratch from '../social/Scratch.vue'
	import Darflen from '../social/Darflen.vue'
	import Behance from '../social/Behance.vue'
</script>
<template>
    <section class="p-4 space-y-4">
        <h2 class="text-slate-800 text-lg text-center font-semibold dark:text-slate-400">Réseaux sociaux</h2>
        <div class="grid grid-cols-2 text-slate-800 gap-4 px-8 md:grid-cols-5 md:w-fit md:mx-auto dark:text-slate-400">
            <a href="https://github.com/okayhappex" class="block text-center border-2 border-slate-700/20 rounded-full px-4 py-3 space-y-0">
                <span class="block text-lg font-semibold md:text-sm"><Github className="inline fill-slate-800 w-5 h-5 -translate-y-[1px] dark:fill-slate-400" /> Github</span>
            </a>
            <a href="https://reddit.com/u/ha2pex" class="block text-center border-2 border-slate-700/20 rounded-full px-4 py-3 space-y-0">
                <span class="block text-lg font-semibold md:text-sm"><Reddit className="inline fill-slate-800 stroke-slate-800 w-5 h-5 -translate-y-[1px] dark:fill-slate-400 dark:stroke-slate-400" /> Reddit</span>
            </a>
            <a href="https://scratch.mit.edu/users/happex" class="block text-center border-2 border-slate-700/20 rounded-full px-4 py-3 space-y-0">
                <span class="block text-lg font-semibold md:text-sm"><Scratch className="inline fill-slate-800 w-5 h-5 -translate-y-[1px] dark:fill-slate-400" /> Scratch</span>
            </a> 
            <a href="https://darflen.com/users/happex" class="block text-center border-2 border-slate-700/20 rounded-full px-4 py-3 space-y-0">
                <span class="block text-lg font-semibold md:text-sm"><Darflen className="inline fill-slate-800 w-5 h-5 -translate-y-[1px] dark:fill-slate-400" /> Darflen</span>
            </a>
            <a href="https://behance.net/happoutre" class="block text-center border-2 border-slate-700/20 rounded-full px-4 py-3 space-y-0">
                <span class="block text-lg font-semibold md:text-sm"><Behance className="inline fill-slate-800 w-5 h-5 -translate-y-[1px] dark:fill-slate-400" /> Behance</span>
            </a>
        </div>
    </section>
</template>