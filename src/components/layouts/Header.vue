<script setup>
    import Social from '@/components/layouts/Social.vue';
</script>
<template>
    <header class="bg-white text-slate-800 text-center select-none p-16 space-y-8 dark:bg-slate-900 dark:text-white">
		<div class="space-y-4">
			<img src="/profile.png" class="rounded-full shadow shadow-sky-950/10 w-32 h-32 mx-auto" />
			<div>
				<h1 class="text-2xl font-bold">Loan</h1>
			</div>
			<div class="text-xs font-medium">
				<p>Il/lui - Apprenti dev</p>
				<p>Spaghetti fan depuis 2008</p>
			</div>
		</div>
		<Social />
	</header>
</template>
