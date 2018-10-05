<template>
    <div id="app" class="app">
        <AppHeader />
        <main class="app__main">
            <div class="container is-fluid">
                <div class="columns">
                    <div class="column is-4-tablet is-3-desktop is-2-widescreen">
                        <AppAside />
                    </div>
                    <div class="column is-8-tablet is-9-desktop is-10-widescreen">
                        <router-view/>
                    </div>
                </div>
            </div>
        </main>
        <AppFooter />
    </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue';
import AppAside from './components/AppAside.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    components: {
        AppHeader,
        AppAside,
        AppFooter
    }
};
</script>

<style>
.app {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
}
.app__main {
    flex: 1;
}
/* .fa {
    margin: 0 0.5rem;
} */
</style>
