<script setup>
  import Github from '../components/social/Github.vue'
  import Dribbble from '../components/social/Dribbble.vue'
  import Reddit from '../components/social/Reddit.vue'
  import Scratch from '../components/social/Scratch.vue'
</script>
<template>
  <header class="flex mb-8 space-x-8">
    <div class="bg-gradient-to-br from-fuchsia-500 to-orange-500 text-white rounded-3xl shadow-xl w-96 p-8 space-y-4 dark:from-fuchsia-700 dark:to-orange-700">
      <img src="https://cdn2.scratch.mit.edu/get_image/user/84212389_500x500.png"  class="w-36 h-36 mx-auto rounded-full shadow-2xl shadow-black/40"/>
      <div>
        <h1 class="text-2xl font-bold">@happex <span class="text-xs text-white/50">(#2579)</span></h1>
        <span>He/Him - Ui/Ux designer</span>
      </div>
      <div class="grid grid-cols-6 gap-1">
        <a href="https://github.com/ha2pex"><Github className="fill-white w-6 h-6" /></a>
        <a href="https://reddit.com/u/ha2pex"><Reddit className="stroke-white fill-white w-6 h-6" /></a>
        <a href="https://dribbble.com/ha2pex"><Dribbble className="fill-white w-6 h-6" /></a>
        <a href="https://scratch.mit.edu/users/happex"><Scratch className="fill-white w-6 h-6" /></a>
      </div>
    </div>
    <div class="bg-slate-50 rounded-3xl shadow-xl w-full p-8 space-y-8 dark:bg-slate-900">
      <div class="space-y-2">
        <h2 class="text-xl font-bold">About me</h2>
        <p>Hey! It's happex, a French guy in my teens. I've been programming for more than six years and I'm in the web development since March, 2021.</p>
      </div>
      <div class="space-y-2">
        <h2 class="text-xl font-bold">Tech stack <span class="text-xs">(provided by <a href="https://skillicons.dev" target="_blank" class="text-blue-500">Skill Icons</a>)</span></h2>
        <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,tailwind,electron,vite,vue,vercel,cloudflare,replit,github,git,vscode&perline=11">
      </div>
    </div>
  </header>
  <section class="space-y-8">
    <div class="grid grid-cols-4 gap-4">
      <div class="bg-slate-50 rounded-xl shadow-xl p-4 space-y-2 dark:bg-slate-950">
        <div class="flex">
          <a href="https://geopen.vercel.app" class="text-blue-500 font-semibold w-full float-left">Geopen</a><br>
          <button class="bg-orange-400 text-white text-xs rounded-full px-2 py-[2px] float-right"><a class="font-medium">Archived</a></button>
        </div>
        <p class="text-xs">Geopen is a powerful Scratch library which makes you spend less time at coding.</p>
      </div>
      <div class="bg-slate-50 rounded-xl shadow-xl p-4 space-y-2 dark:bg-slate-950">
        <div class="flex">
          <a href="https://space-world.vercel.app" class="text-blue-500 font-semibold w-full float-left">Saturne</a><br>
          <button class="bg-orange-400 text-white text-xs rounded-full px-2 py-[2px] float-right"><a class="font-medium">WIP</a></button>
        </div>
        <p class="text-xs">A french Discord community. We're actually in maintenance but still open :)</p>
      </div>
      <div class="bg-slate-50 rounded-xl shadow-xl p-4 space-y-2 dark:bg-slate-950">
        <div class="flex">
          <a href="https://github.com/ha2pex/scratchreporter" class="text-blue-500 font-semibold w-full float-left">Scratch Reporter</a><br>
        </div>
        <p class="text-xs">Scratch Reporter is a Python library made to fetch data easily on the Scratch api.</p>
      </div>
      <div class="bg-slate-50 rounded-xl shadow-xl p-4 space-y-2 dark:bg-slate-950">
        <div class="flex">
          <a href="#" class="text-blue-500 font-semibold w-full float-left">Coming soon...</a><br>
          <button class="bg-indigo-500 text-white text-xs rounded-full px-2 py-[2px] float-right"><a class="font-medium">Hello</a></button>
        </div>
        <p class="text-xs">I can say arrow, nothing more.</p>
      </div>
    </div>
  </section>
</template>