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
  <header class="bg-[url('/banner.png')] bg-cover bg-center bg-no-repeat text-white select-none md:text-center">
    <div class="backdrop-blur-3xl rounded--3xl p-8 space-y-4 shadow-2xl">
      <img src="/profile.png" class="w-32 h-32 rounded-full shadow-2xl shadow-black/40 md:mx-auto"/>
      <div>
        <h1 class="text-4xl font-bold">happex</h1>
        <span class="block text-sm">@okayhappex</span>
      </div>
      <p class="text-white/50 text-xs font-medium">he/him - Ui/Ux designer</p>
      <div class="flex space-x-2 md:place-content-center md:space-x-3">
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="/p/github"><Github className="fill-white w-5 h-5" /></a></button>
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="/p/reddit"><Reddit className="stroke-white fill-white w-5 h-5" /></a></button>
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="/p/dribbble"><Dribbble className="fill-white w-5 h-5" /></a></button>
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="/p/scratch"><Scratch className="fill-white w-5 h-5" /></a></button>
        <button class="bg-white/10 rounded-full p-[6px] duration-150 hover:bg-white/20"><a href="/p/darflen"><Darflen className="fill-white w-5 h-5" /></a></button>
      </div>
    </div>
  </header>
  <div class="px-8 space-y-8 md:px-24">
    <div class="space-y-4">
      <h2 class="text-xl font-bold">About me</h2>
      <p>Hey! It's happex, a French guy in my teens. I've been programming for more than six years and I'm in the web development since March, 2021. Now I'm a Vue and TailwindCSS enthusiast and I still make interesting things of an higher level Scratch (I just don't share it :P)</p>
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
        <div class="bg-sky-900 rounded-full w-2/3 h-6 mx-auto sm:h-4"><div class="bg-sky-600 rounded-full w-[85%] h-full"></div></div>
      </div>
      <div class="bg-emerald-600/30 text-center rounded-2xl p-4 space-y-2">
        <Vue className="w-16 h-16 mx-auto fill-emerald-600" />
        <h2 class="text-2xl font-bold">Vue.js</h2>
        <div class="bg-emerald-900 rounded-full w-2/3 h-6 mx-auto sm:h-4"><div class="bg-emerald-600 rounded-full w-[65%] h-full"></div></div>
      </div>
      <div class="bg-yellow-600/30 text-center rounded-2xl p-4 space-y-2">
        <Javascript className="w-16 h-16 mx-auto fill-yellow-600" />
        <h2 class="text-2xl font-bold">Javascript</h2>
        <div class="bg-yellow-900 rounded-full w-2/3 h-6 mx-auto sm:h-4"><div class="bg-yellow-600 rounded-full w-[45%] h-full"></div></div>
      </div>
      <div class="bg-blue-800/30 text-center rounded-2xl p-4 space-y-2">
        <Python className="w-16 h-16 mx-auto" />
        <h2 class="text-2xl font-bold">Python</h2>
        <div class="bg-blue-950 rounded-full w-2/3 h-6 mx-auto sm:h-4"><div class="bg-blue-900 rounded-full w-[70%] h-full"></div></div>
      </div>
    </div>
  </section>
  <section class="p-8 space-y-8 md:px-24">
    <h2 class="text-xl font-bold sm:text-center">What about Scratch ?</h2>
    <img src="https://aviate.scratchers.tech/api/image/happex?width=600&height=90&dark=true" class="hidden mx-auto md:block" onclick="location.href = '/p/aviate'" />
    <div class="grid grid-cols-1 rounded-3xl overflow-hidden sm:grid-cols-2">
      <div class="bg-blue-500/20 text-center p-6 space-y-4">
        <img src="https://cdn2.scratch.mit.edu/get_image/user/84212389_256x256.png" class="rounded-full shadow-lg w-24 h-auto mx-auto" />
        <div>
          <h2 class="text-xl font-bold">@happex <span class="text-white/50">#84212389</span></h2>
          <h3 class="font-semibold">Main account</h3>
        </div>
        <p class="text-sm">This is my main account on where I make games (once a century) and some random brandings, sometimes.</p>
      </div>
      <div class="bg-red-500/20 text-center p-6 space-y-4">
        <img src="https://cdn2.scratch.mit.edu/get_image/user/107843467_256x256.png" class="rounded-full shadow-lg w-24 h-auto mx-auto" />
        <div>
          <h2 class="text-xl font-bold">@WhatAnHaitianGuy <span class="text-white/50">#107843467</span></h2>
          <h3 class="font-semibold">Test account</h3>
        </div>
        <p class="text-sm">Don't worry about the name. This is my test account on which I remix projects and I share engines, and other junk technical stuff.</p>
      </div>
      <div class="bg-orange-500/20 text-center p-6 space-y-4">
        <img src="https://cdn2.scratch.mit.edu/get_image/user/93313766_256x256.png" class="rounded-full shadow-lg w-24 h-24 mx-auto" />
        <div>
          <h2 class="text-xl font-bold">@happette <span class="text-white/50">#93313766</span></h2>
          <h3 class="font-semibold">Test account</h3>
        </div>
        <p class="text-sm">happette is my bot account. I use it sometimes in order to test real bots I want to make (like Europium which is coming soon)</p>
      </div>
      <div class="bg-amber-500/20 text-center p-6 space-y-4">
        <img src="https://cdn2.scratch.mit.edu/get_image/user/18948_256x256.png" class="rounded-full shadow-lg w-24 h-24 mx-auto" />
        <div>
          <h2 class="text-xl font-bold">@username <span class="text-white/50">#18948</span></h2>
          <h3 class="font-semibold">Not my account</h3>
        </div>
        <p class="text-sm">This 5-digit account ID may be older than myself but who cares</p>
      </div>
    </div>
  </section>
  <footer class="text-center px-8 pb-8 md:px-24">
    <div>(c) happex 2023 - Present</div>
  </footer>
</template>