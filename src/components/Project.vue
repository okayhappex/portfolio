<script setup>
	defineProps({
		year: {
			type: String,
			required: true
		},
		titre: {
			type: String,
			required: true
		},
		lien: {
			type: String,
			required: false
		},
		description: {
			type: String,
			required: false
		}
	})
</script>
<template>
	<div class="bg-slate-400/10 backdrop-blur-lg border-[1.5px] border-slate-400 rounded-xl px-4 py-3 space-y-2 dark:bg-slate-800/10 dark:border-slate-800">
		<span class="inline-block text-primary text-xs ">{{ year }}</span>
		<div>
			<h3 class="text-slate-700 text-lg font-semibold dark:text-slate-300">{{ titre }}</h3>
		</div>
		<div>
			<a :href="lien" target="_blank" class="text-primary text-sm font-semibold">{{ lien ? 'Lien' : '' }}</a>
			<p class="text-slate-600 text-sm dark:text-slate-400">{{ description }}</p>
		</div>
	</div>
</template>