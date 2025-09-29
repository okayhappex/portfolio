<script setup>
	defineProps({
		name: {
			type: String,
			required: true
		},
		color: {
			type: String,
			required: true
		}
	})
</script>
<template>
	<button :class="`bg-slate-400/10 backdrop-blur-lg text-slate-700 border-[1.5px] border-slate-400 rounded-full px-4 py-2 duration-150 dark:bg-slate-700/10 dark:text-slate-400 dark:border-slate-700 hover:bg-primary/10 hover:text-primary hover:border-primary`">
		<span class="text-sm font-medium">{{ name }}</span>
	</button>
</template>