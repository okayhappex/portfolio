<script setup>
    import Language from '../Language.vue';
</script>
<template>
    <section class="space-y-8">
        <h2 class="text-slate-900 text-xl text-center uppercase font-semibold mb-4 dark:text-slate-200">Langues (auto-évaluation)</h2>
        <div class="text-slate-800 dark:text-slate-400">
            <Language name="Français (langue maternelle)" locale="fr_FR" />
            <Language name="Anglais (C1)" locale="en_GB" />
            <Language name="Espagnol (B1)" locale="es_ES" />
            <Language name="Grec (A1)" locale="el_GR" />
        </div>
    </section>
</template>