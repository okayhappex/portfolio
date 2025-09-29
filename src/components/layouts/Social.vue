<script setup>
    import Github from '../social/Github.vue';
    import Instagram from '../social/Instagram.vue';
</script>
<template>
    <div class="px-8 space-x-4 md:w-fit md:mx-auto">
        <a href="https://github.com/okayhappex" class="inline-block text-center">
            <Github className="inline fill-slate-800 w-5 h-5 -translate-y-[1px] dark:fill-white" />
        </a>
        <a href="https://instagram.com/ejnalo" class="inline-block text-center">
            <Instagram className="inline fill-slate-800 w-5 h-5 -translate-y-[1px] dark:fill-white" />
        </a>
    </div>
</template>