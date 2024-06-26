<template>
    <section class="dashboard-gallery-hero hero is-medium-with-navbar">
        <div class="hero-body">
            <div class="">
                    <div class="columns is-vcentered">
                        <div class="column is-10 is-offset-1">
                            <div class="columns">
                                <div class="column">
                                    <div class="block">
                                        <div class="content">
                                            <h1>Your Cinecraft Dashboard</h1>
                                            <p>Easily manage your screenplays at a glance</p>
                                            <a class="button is-link is-inverted" href="/screenwrites">
                                                <span>Go to Dashboard</span>
                                                <span class="icon">
                                                    <i class="fa-solid fa-arrow-right-from-bracket"></i>
                                                </span>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="block">
                                        <FakeBrowser :image="`cinecraft-dashboard.png`" :link="`https://cinecraft.app/dashboard`" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    </section>
</template>

<script setup>
    import FakeBrowser from './FakeBrowser.vue';
</script>

<style lang="scss" scoped>
    section.dashboard-gallery-hero.hero {
        background-color: #222222;
    }
    // Ensure columns are flex containers and align items to the start
    .columns {
        align-items: flex-start; // Align column children to the top
    }

    .column {
        display: flex; // Make the notification a flex container
        flex-direction: column; // Stack its children vertically
        height: 100%; // Take full height of its parent column
    }
    span.icon {
        margin-right: 10px;
    }
</style>