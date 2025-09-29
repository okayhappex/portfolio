<script setup>
    import Project from '../Project.vue';
</script>
<template>
    <section class="space-y-8">
        <h2 class="text-slate-900 text-xl text-center uppercase font-semibold mb-4 dark:text-slate-200">Projets et Expérience</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <Project
                year="2024 - Aujourd'hui"
                titre="Fondateur de Nation"
                lien="https://github.com/1nserv"
                description="Fondateur du projet Nation Server condamné à rester éternellement en développement"
            />
            <Project
                year="2025"
                titre="Cadreur pour Le Premier Pavé"
                description="Également cadreur dans une équipe de quatre pour le film qu'on a dû réaliser au baccalauréat"
            />
            <Project
                year="2025 - Aujourd'hui"
                titre="Cadreur pour Cappyrio64"
                lien="https://youtube.com/@Cappyrio"
                description="Cadreur pour les vidéos de Cappyrio64 sur Youtube"
            />
        </div>
    </section>
</template>