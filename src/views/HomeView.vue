<script setup>
	import Header from '@/components/layouts/Header.vue';
	import Footer from '@/components/layouts/Footer.vue';

	import Education from '@/components/layouts/Education.vue';
	import Projects from '@/components/layouts/Projects.vue';
	import Skills from '@/components/layouts/Skills.vue';
	import Hobbies from '@/components/layouts/Hobbies.vue';
	import Languages from '@/components/layouts/Languages.vue';
</script>
<template>
	<Header />
	<main class="px-64 py-16 space-y-16">
		<Education />
		<Projects />
		<Skills />
		<Hobbies />
		<Languages />
	</main>
	<Footer />
</template>