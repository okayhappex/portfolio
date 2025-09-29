<script setup>
    import School from '../School.vue';
</script>
<template>
    <section class="space-y-8">
        <h2 class="text-slate-900 text-xl text-center uppercase font-semibold mb-4 dark:text-slate-200">Parcours</h2>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <School
                schoolName="Lycée La Source à Meudon (92)"
                year="2022 - 2025"
                formation="Bac Général mention Assez Bien"
                field2="NSI, Cinéma - Audiovisuel, Maths en 1re"
                field3="Option Maths Complémentaires"
            />
            <School
                schoolName="IUT de Vélizy (78)"
                year="2025 - 2028"
                formation="BUT Métiers du Multimédia et d'Internet"
                field2="Université Versailles - Saint-Quentin"
            />
            <div class="bg-slate-400/5 backdrop-blur-lg border-[1.5px] border-dashed border-slate-400/50 rounded-xl px-4 py-3 space-y-2 dark:bg-slate-800/5 dark:border-slate-800/50">
                
            </div>
        </div>
        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
            <School
                year="2019 - Aujourd'hui"
                schoolName="Conservatoire de Chaville (92)"
                field1="Piano (classique de 2019 à 2025 puis jazz)"
                field2="Batterie depuis 2023"
            />
            <School
                year="2017 - 2022"
                schoolName="Sèvres Espace Loisirs (92)"
                formation="Théâtre"
            />
            <div class="bg-slate-400/5 backdrop-blur-lg border-[1.5px] border-dashed border-slate-400/50 rounded-xl px-4 py-3 space-y-2 dark:bg-slate-800/5 dark:border-slate-800/50">
                
            </div>
        </div>
    </section>
</template>