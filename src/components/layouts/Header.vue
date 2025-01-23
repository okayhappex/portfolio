<script setup>
    import Github from '../social/Github.vue'
	import Reddit from '../social/Reddit.vue'
	import Scratch from '../social/Scratch.vue'
	import Darflen from '../social/Darflen.vue'
	import Behance from '../social/Behance.vue'
</script>
<template>
    <header class="text-slate-800 text-center select-none p-8 space-y-8 dark:text-slate-400">
		<div class="space-y-4">
			<img src="/profile.png" class="rounded-full shadow shadow-sky-950/10 w-32 h-32 mx-auto" />
			<div>
				<h1 class="text-2xl font-bold select-text">'Ναλω</h1>
				<span class="block text-slate-500/75 text-sm font-medium dark:text-slate-700/50">@okayhappex</span>
			</div>
			<div class="text-slate-500 text-xs font-medium">
				<p>Il/lui - Apprenti dev</p>
				<p>Spaghetti fan depuis 2008</p>
			</div>
			
		</div>
		<div class="flex border-2 border-slate-700/20 rounded-full w-fit px-4 py-2 mx-auto space-x-2 place-content-center">
			<a class="block" href="https://github.com/okayhappex" target="_blank"><Github className="inline fill-blue-900 w-5 h-5 -translate-y-[1px]" /></a>
			<a class="block" href="https://reddit.com/u/ha2pex" target="_blank"><Reddit className="inline stroke-blue-900 fill-blue-900 w-5 h-5 -translate-y-[1px]" /></a>
			<a class="block" href="https://darflen.com/users/happex" target="_blank"><Darflen className="inline fill-blue-900 w-5 h-5 -translate-y-[1px]" /></a>
			<a class="block" href="https://scratch.mit.edu/users/happex" target="_blank"><Scratch className="inline fill-blue-900 w-5 h-5 -translate-y-[1px]" /></a>
			<a class="block" href="https://behance.net/happoutre" target="_blank"><Behance className="inline fill-blue-900 w-5 h-5 -translate-y-[1px]" /></a>
		</div>
	</header>
</template>
