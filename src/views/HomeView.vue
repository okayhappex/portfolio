<script setup>
  import Github from '../components/social/Github.vue'
  import Dribbble from '../components/social/Dribbble.vue'
  import Reddit from '../components/social/Reddit.vue'
  import Scratch from '../components/social/Scratch.vue'
  import Darflen from '../components/social/Darflen.vue'

  import Vue from '../components/prog/Vue.vue'
  import Tailwind from '../components/prog/Tailwind.vue'
  import Javascript from '../components/prog/Javascript.vue'
  import Python from '../components/prog/Python.vue'
</script>
<template>
  <header class="bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat text-white rounded--3xl md:text-center">
    <div class="backdrop-blur-3xl rounded--3xl p-8 space-y-4 shadow-2xl">
      <img src="https://cdn2.scratch.mit.edu/get_image/user/84212389_500x500.png" class="w-32 h-32 rounded-full shadow-2xl shadow-black/40 md:mx-auto"/>
      <div>
        <h1 class="text-4xl font-bold">happex</h1>
        <span class="block text-sm">@okayhappex</span>
      </div>
      <p class="text-white/50 text-xs font-medium">he/him - Ui/Ux designer</p>
      <div class="flex space-x-2 md:place-content-center md:space-x-3">
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="https://github.com/okayhappex"><Github className="fill-white w-5 h-5" /></a></button>
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="https://reddit.com/u/ha2pex"><Reddit className="stroke-white fill-white w-5 h-5" /></a></button>
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="https://dribbble.com/happex"><Dribbble className="fill-white w-5 h-5" /></a></button>
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="https://scratch.mit.edu/users/happex"><Scratch className="fill-white w-5 h-5" /></a></button>
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="https://darflen.com/users/6fed9705839fa26ef4f010e9"><Darflen className="fill-white w-5 h-5" /></a></button>
      </div>
    </div>
  </header>
  <div class="px-8 space-y-8 md:px-24">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">About me</h2>
      <p>Hey! It's happex, a French guy in my teens. I've been programming for more than six years and I'm in the web development since March, 2021.</p>
    </div>
    <div class="space-y-5 overflow-x-auto md:overflow-hidden">
      <h2 class="text-xl font-bold">Tech stack <span class="text-xs">(provided by <a href="https://skillicons.dev" target="_blank" class="text-blue-500">Skill Icons</a>)</span></h2>
      <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,tailwind,electron,vite,nextjs,vue,react,vercel,cloudflare,replit,github,git,vscode&perline=10" class="hidden md:block" />
      <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,tailwind,electron,vite,nextjs,vue,react,vercel,cloudflare,replit,github,git,vscode&perline=5" class="md:hidden" />
    </div>
  </div>
  <section class="px-8 space-y-8 md:px-24">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      <div class="bg-sky-600/30 text-center rounded-2xl p-4 space-y-2">
        <Tailwind className="w-16 h-16 mx-auto fill-sky-600" />
        <h2 class="text-2xl font-bold">TailwindCSS</h2>
        <div class="bg-slate-200 rounded-full w-2/3 h-6 mx-auto sm:h-4 dark:bg-sky-900"><div class="bg-sky-600 rounded-full w-[85%] h-full"></div></div>
      </div>
      <div class="bg-emerald-600/30 text-center rounded-2xl p-4 space-y-2">
        <Vue className="w-16 h-16 mx-auto fill-emerald-600" />
        <h2 class="text-2xl font-bold">Vue.js</h2>
        <div class="bg-slate-200 rounded-full w-2/3 h-6 mx-auto sm:h-4 dark:bg-emerald-900"><div class="bg-emerald-600 rounded-full w-[65%] h-full"></div></div>
      </div>
      <div class="bg-yellow-600/30 text-center rounded-2xl p-4 space-y-2">
        <Javascript className="w-16 h-16 mx-auto fill-yellow-600" />
        <h2 class="text-2xl font-bold">Javascript</h2>
        <div class="bg-slate-200 rounded-full w-2/3 h-6 mx-auto sm:h-4 dark:bg-yellow-900"><div class="bg-yellow-600 rounded-full w-[45%] h-full"></div></div>
      </div>
      <div class="bg-blue-800/30 text-center rounded-2xl p-4 space-y-2">
        <Python className="w-16 h-16 mx-auto" />
        <h2 class="text-2xl font-bold">Python</h2>
        <div class="bg-slate-200 rounded-full w-2/3 h-6 mx-auto sm:h-4 dark:bg-blue-950"><div class="bg-blue-900 rounded-full w-[70%] h-full"></div></div>
      </div>
    </div>
  </section>
  <footer class="text-center p-8 md:px-24">
    <div>(c) happex 2023 - Present</div>
  </footer>
</template>