<script setup>
	defineProps({
		name: {
			type: String,
			required: true
		},
		locale: {
			type: String,
			required: true
		}
	})
</script>
<template>
	<span class="block">
		<img :src="'src/assets/flags/' + locale + '.png'" class="inline rounded-sm w-6 h-4 -translate-y-[2px]" /> {{ name }}
	</span>
</template>