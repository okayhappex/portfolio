<script setup>
	import Github from '../components/social/Github.vue'
	import Reddit from '../components/social/Reddit.vue'
	import Scratch from '../components/social/Scratch.vue'
	import Darflen from '../components/social/Darflen.vue'
</script>
<template>
	<header class="text-white text-center select-none">
		<div class="bg-gradient-to-b from-purple-900/50 to-transparent p-8 space-y-3 sm:py-16">
			<div class="space-y-4">
				<img src="/profile.png" class="rounded-full shadow shadow-purple-950/10 w-32 h-32 mx-auto" />
				<div>
					<h1 class="text-2xl font-bold">happex</h1>
					<span class="block text-sm text-slate-200/20">@okayhappex</span>
				</div>
			</div>
			<p class="text-white/50 text-xs font-medium">Homme - Ui/Ux designer (bientôt full-stack on y croit :l)</p>
			<div class="flex space-x-2 place-content-center md:space-x-2">
				<button class="rounded-full p-[6px] duration-300 hover:bg-purple-800/20"><a href="https://github.com/okayhappex"><Github className="fill-purple-600 w-5 h-5" /></a></button>
				<button class="rounded-full p-[6px] duration-300 hover:bg-purple-800/20"><a href="https://reddit.com/u/ha2pex"><Reddit className="stroke-purple-600 fill-purple-600 w-5 h-5" /></a></button>
				<button class="rounded-full p-[6px] duration-300 hover:bg-purple-800/20"><a href="https://scratch.mit.edu/users/happex"><Scratch className="fill-purple-600 w-5 h-5" /></a></button>
				<button class="rounded-full p-[6px] duration-300 hover:bg-purple-800/20"><a href="https://darflen.com/users/happex"><Darflen className="fill-purple-600 w-5 h-5" /></a></button>
			</div>
			<div class="space-y-2">
				<img src="https://skillicons.dev/icons?i=html,css,js,py,powershell&perline=5" class="h-8 mx-auto" />
				<img src="https://skillicons.dev/icons?i=flask,express,electron,vue&perline=5" class="h-8 mx-auto" />
				<img src="https://skillicons.dev/icons?i=vscode,replit,figma&perline=5" class="h-8 mx-auto" />
			</div>
		</div>
		
	</header>
</template>