<script>
export default {
    methods: {
        redirect() {
            if (this.$route.params.url == 'scratch') {
                window.location.href = 'https://scratch.mit.edu/users/happex'
            } else if (this.$route.params.url == 'github') {
                window.location.href = 'https://github.com/okayhappex'
            } else if (this.$route.params.url == 'replit') {
                window.location.href = 'https://replit.com/@happex'
            } else if (this.$route.params.url == 'reddit') {
                window.location.href = 'https://reddit.com/u/ha2pex'
            } else if (this.$route.params.url == 'dribbble') {
                window.location.href = 'https://dribbble.com/happex'
            } else if (this.$route.params.url == 'darflen') {
                window.location.href = 'https://darflen.com/users/6fed9705839fa26ef4f010e9'
            } else if (this.$route.params.url == 'aviate') {
                window.location.href = 'https://aviate.scratchers.tech/api/happex'
            } else {
                window.location.href = 'https://happex.vercel.app'
            }
        }
    }
}
</script>
<template>
    <div @load="redirect" class="text-center p-8 py-24 space-y-8">
        <div class="space-y-2">
            <h1 class="text-3xl font-bold">Didn't get redirected ?</h1>
            <span>We tried to redirect you to my {{ $route.params.url }} profile.</span>
        </div>
        <button class="text-sm font-bold border-[1.5px] border-white/25 rounded-full px-5 py-2 duration-300 hover:bg-white/10" @click="redirect">Go there</button>
    </div>
</template>