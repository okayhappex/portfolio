<script setup>
  import Github from '../components/social/Github.vue'
  import Dribbble from '../components/social/Dribbble.vue'
  import Reddit from '../components/social/Reddit.vue'
  import Scratch from '../components/social/Scratch.vue'
  import Vue from '../components/prog/Vue.vue'
  import Tailwind from '../components/prog/Tailwind.vue'
  import Javascript from '../components/prog/Javascript.vue'
  import Python from '../components/prog/Python.vue'
</script>
<template>
  <header class="mb-8 space-y-8 md:flex md:space-x-8 md:space-y-0">
    <div class="bg-gradient-to-tr from-purple-500 to-blue-500 text-white rounded-3xl shadow-xl p-8 space-y-4 md:w-[28rem] dark:from-purple-700 dark:to-blue-700">
      <img src="https://cdn2.scratch.mit.edu/get_image/user/84212389_500x500.png"  class="w-36 h-36 mx-auto rounded-full shadow-2xl shadow-black/40"/>
      <div>
        <h1 class="text-2xl font-bold">@okayhappex</h1>
        <span class="block text-xs text-white/50">happex#2579 - Ui/Ux designer</span>
        <span>He - Him - <s>boy</s> Bro</span>
      </div>
      <div class="grid grid-cols-6 gap-1">
        <a href="https://github.com/okayhappex"><Github className="fill-white w-6 h-6" /></a>
        <a href="https://reddit.com/u/ha2pex"><Reddit className="stroke-white fill-white w-6 h-6" /></a>
        <a href="https://dribbble.com/happex"><Dribbble className="fill-white w-6 h-6" /></a>
        <a href="https://scratch.mit.edu/users/happex"><Scratch className="fill-white w-6 h-6" /></a>
      </div>
    </div>
    <div class="space-y-8 md:grow md:p-8">
      <div class="space-y-4">
        <h2 class="text-xl font-bold">About me</h2>
        <p>Hey! It's happex, a French guy in my teens. I've been programming for more than six years and I'm in the web development since March, 2021.</p>
      </div>
      <div class="space-y-5 overflow-x-auto md:overflow-hidden">
        <h2 class="text-xl font-bold">Tech stack <span class="text-xs">(provided by <a href="https://skillicons.dev" target="_blank" class="text-blue-500">Skill Icons</a>)</span></h2>
        <img src="https://skillicons.dev/icons?i=html,css,js,nodejs,tailwind,electron,vite,nextjs,vue,react,vercel,cloudflare,replit,github,git,vscode&perline=10">
      </div>
    </div>
  </header>
  <section class="space-y-8">
    <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
      <div class="bg-sky-600/20 text-center rounded-2xl p-4 space-y-2">
        <Tailwind className="w-16 h-16 mx-auto fill-sky-600" />
        <h2 class="text-2xl font-bold">TailwindCSS</h2>
        <div class="bg-slate-200 rounded-lg w-2/3 h-6 mx-auto sm:rounded-full sm:h-4 dark:bg-sky-900"><div class="bg-sky-600 rounded-lg w-[85%] h-full sm:rounded-full"></div></div>
      </div>
      <div class="bg-emerald-600/20 text-center rounded-2xl p-4 space-y-2">
        <Vue className="w-16 h-16 mx-auto fill-emerald-600" />
        <h2 class="text-2xl font-bold">Vue.js</h2>
        <div class="bg-slate-200 rounded-lg w-2/3 h-6 mx-auto sm:rounded-full sm:h-4 dark:bg-emerald-900"><div class="bg-emerald-600 rounded-lg w-[65%] h-full sm:rounded-full"></div></div>
      </div>
      <div class="bg-yellow-600/20 text-center rounded-2xl p-4 space-y-2">
        <Javascript className="w-16 h-16 mx-auto fill-yellow-600" />
        <h2 class="text-2xl font-bold">Javascript</h2>
        <div class="bg-slate-200 rounded-lg w-2/3 h-6 mx-auto sm:rounded-full sm:h-4 dark:bg-yellow-900"><div class="bg-yellow-600 rounded-lg w-[45%] h-full sm:rounded-full"></div></div>
      </div>
      <div class="bg-blue-800/20 text-center rounded-2xl p-4 space-y-2">
        <Python className="w-16 h-16 mx-auto" />
        <h2 class="text-2xl font-bold">Python</h2>
        <div class="bg-slate-200 rounded-lg w-2/3 h-6 mx-auto sm:rounded-full sm:h-4 dark:bg-blue-950"><div class="bg-blue-900 rounded-lg w-[70%] h-full sm:rounded-full"></div></div>
      </div>
    </div>
  </section>
</template>