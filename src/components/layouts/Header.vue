<script setup>
    import Github from '../social/Github.vue'
	import Reddit from '../social/Reddit.vue'
	// import Scratch from '../social/Scratch.vue'
	import Darflen from '../social/Darflen.vue'
</script>
<template>
    <header class="backdrop-blur-xl bg-slate-50/50 text-slate-700 text-center select-none p-8 space-y-8 sm:rounded-2xl sm:w-2/3 sm:py-16 sm:mx-auto">
		<div class="space-y-4">
			<img src="/profile.png" class="rounded-full shadow shadow-purple-950/10 w-32 h-32 mx-auto" />
			<div>
				<h1 class="text-2xl font-bold">happex</h1>
				<span class="block text-sm font-medium text-slate-500/50">@okayhappex</span>
			</div>
			<p class="text-slate-700/50 text-xs font-bold">Apprenti homme & apprenti dev</p>
		</div>
		<div class="grid gap-2 sm:grid-cols-2 md:flex md:space-x-8 md:gap-0 md:place-content-center">
			<a class="text-slate-950  text-sm text-left font-bold" href="https://github.com/okayhappex" target="_blank"><Github className="inline fill-slate-950 w-5 h-5 -translate-y-[1px]" /> Github</a>
			<a class="text-orange-600 text-sm text-left font-bold" href="https://reddit.com/u/ha2pex" target="_blank"><Reddit className="inline stroke-orange-600 fill-orange-600 w-5 h-5 -translate-y-[1px]" /> Reddit</a>
			<a class="text-rose-500   text-sm text-left font-bold" href="https://darflen.com/users/happex" target="_blank"><Darflen className="inline fill-rose-500 w-5 h-5 -translate-y-[1px]" /> Darflen</a>
		</div>
	</header>
</template>