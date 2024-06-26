<template>
    <section class="neural-net-gallery-hero hero is-medium-with-navbar">
        <div class="hero-body">
            <div class="">
                    <div class="columns is-vcentered">
                        <div class="column is-10 is-offset-1">
                            <div class="columns">
                                <div class="column">
                                    <div class="block">
                                        <FakeBrowser :image="`cinecraft-neural-network.png`" :link="`https://cinecraft.app/swarm`" />
                                    </div>
                                </div>
                                <div class="column">
                                    <div class="block">
                                        <div class="content">
                                            <h1>Agent Swarms</h1>
                                            <p>Engage programmed AI agents to act as your characters against one another for real-time dialogue</p>
                                            <a class="button is-secondary is-focused" href="/screenwrites">
                                                <span>Go to Dashboard</span>
                                                <span class="icon">
                                                    <i class="fas fa-arrow-right"></i>
                                                </span>
                                            </a>
                                        </div>
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
    section.neural-net-gallery-hero.hero {
        background-color: #111111;
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