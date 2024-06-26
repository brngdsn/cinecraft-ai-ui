<template>
    <div>
        <SpinningHero />
        <section class="screenwrites-hero hero is-medium-with-navbar">
            <div class="hero-body">
                <div class="columns">

                    <!-- LIST -->
                    <div class="column is-3">
                        <div class="notification">
                            <div class="block">
                                <input class="input is-fullwidth" placeholder="Search..." />
                            </div>
                            <div class="block">
                                <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
                                    <a href="#" class="pagination-previous">Previous</a>
                                    <a href="#" class="pagination-next">Next page</a>
                                    <!-- <ul class="pagination-list">
                                        <li>
                                            <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
                                        </li>
                                        <li>
                                            <span class="pagination-ellipsis">&hellip;</span>
                                        </li>
                                        <li>
                                            <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
                                        </li>
                                    </ul> -->
                                </nav>
                            </div>
                            <div class="block">
                                <table class="table is-fullwidth">
                                    <thead>
                                        <tr>
                                            <th>Screenwrites</th>
                                            <th><abbr title=""></abbr></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(screenwrite, s) in screenwrites_carousel" :key="s">
                                            <td>
                                                <a :href="`/screenwrites/${screenwrite.sid}/scenes`">{{ screenwrite.stitle }}</a>
                                            </td>
                                            <td>
                                                <DeleteScreenwriteButton :screenwrite="screenwrite" />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <div class="block">
                                <textarea class="textarea" placeholder="a film about bunny bugs bunny, mickey mouse, and donald duck" v-model="prompt"></textarea>
                            </div>
                            <div class="block">
                                <a class="button is-primary is-dark is-focused is-fullwidth" @click="createScreenwrites">
                                    <span>Cinecraft Screenwrite</span>
                                    <span class="icon">
                                        <i class="fas fa-arrow-right"></i>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>

                    <!-- DETAILS -->
                    <div class="column is-two-thirds">

                            <div class="columns">
                                <div class="column is-3" v-for="(screenwrite, s) in screenwrites_carousel_images" :key="s">
                                    <!-- <div class="notification"> -->
                                        <img v-if="screenwrite.simage" :src="screenwrite.src">
                                        <div v-else>
                                            <div class="notification" style="height:34.85vh;">
                                                <div class="block">
                                                    Cinecraft Screenplay Poster
                                                </div>
                                                <div class="block">
                                                    <button class="button is-small is-primary is-dark" :class="{
                                                        'is-skeleton': screenwrite.scinecrafting,
                                                        'is-loading': !screenwrite.simage
                                                    }">Cinecraft Poster</button>
                                                </div>
                                                <div class="block" style="font-size:6px;">
                                                    <p style="font-size:8px;" :class="{
                                                        'is-skeleton': screenwrite.scinecrafting
                                                    }">{{  screenwrite.stitle }}</p><br />
                                                    <p :class="{
                                                        'is-skeleton skeleton-block': screenwrite.scinecrafting
                                                    }">{{  screenwrite.sdescription }}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- <img v-else :src="`/cinecraft-icon.png`"> -->
                                    <!-- </div> -->
                                </div>
                            </div>

                            <nav class="pagination is-centered is-small" role="navigation" aria-label="pagination">
                                <a href="#" class="pagination-previous" @click="onPrev">Previous</a>
                                <a href="#" class="pagination-next" @click="onNext">Next page</a>
                                <!-- <ul class="pagination-list">
                                    <li>
                                        <a href="#" class="pagination-link" aria-label="Goto page 1">1</a>
                                    </li>
                                    <li>
                                        <span class="pagination-ellipsis">&hellip;</span>
                                    </li>
                                    <li>
                                        <a href="#" class="pagination-link" aria-label="Goto page 86">86</a>
                                    </li>
                                </ul> -->
                            </nav>

                            <div class="column">
                                <div class="block">
                                    <p class="title" :class="{
                                        'is-skeleton': screenwrites_carousel_title.scinecrafting
                                    }">{{ screenwrites_carousel_title.stitle }}</p>
                                </div>
                                <div class="block">
                                    <p :class="{
                                        'is-skeleton': screenwrites_carousel_title.scinecrafting
                                    }">{{  screenwrites_carousel_title.ssynopsis }}</p>
                                </div>
                                <div class="block">
                                    <b-icon icon="lightbulb" size="is-large"></b-icon>
                                </div>
                                <div class="block">
                                    <a class="button is-info is-inverted"
                                        :class="{
                                            'is-skeleton': screenwrites_carousel_title.scinecrafting
                                        }"
                                    :href="`/screenwrites/${screenwrites_carousel_title.sid}/scenes`">Read Scenes</a>
                                </div>
                            </div>

                    </div>
                    
                </div>
            </div>
        </section>
    </div>
</template>

<script setup>
    import SpinningHero from '@/components/SpinningHero.vue'
    import DeleteScreenwriteButton from '@/components/DeleteScreenwriteButton'
    import { computed, ref, onMounted } from 'vue';
    import { useStore } from 'vuex';

    const prompt = ref(``);

    const store = useStore();
    // Use ref for reactive reference to screenwrite
    const screenwrites = computed(() => store.getters['screenwrites']);
    const screenwrites_carousel = computed(() => store.getters['screenwrites_carousel']);
    const screenwrites_carousel_title = computed(() => store.getters['screenwrites_carousel_title']);
    const screenwrites_carousel_images = computed(() => store.getters['screenwrites_carousel_images']);
    
    // Method to dispatch action
    const fetchScreenwrites = () => {
      store.dispatch('fetchScreenwrites');
    };

    const createScreenwrites = () => {
      store.dispatch('createScreenwrites', { prompt: prompt.value });
    };

    const onNext = () => {
        store.commit('ADVANCE_SCREENWRITES')
    };

    const onPrev = () => {
        store.commit('REWIND_SCREENWRITES')
    };

    onMounted(fetchScreenwrites);
</script>

<style lang="scss">
    section.screenwrites-hero {
        margin-top: 0vh !important;
    }
    section.screenwrites-hero.hero {
        margin-top: 3.25rem;
    }
    .button-text-left {
        justify-content: flex-start; /* Align content to the left */
        display: flex;
        align-items: center;
    }
    .button-text-left .icon {
        margin-left: auto; /* Pushes the icon to the right */
    }
    .into-shadow {
        max-width: 100vh;
    }
    // .column.is-two-thirds > .columns > .column.is-3 {
    //     background-image: url('/public/cinecraft-icon.png');
    //     background-repeat: repeat-y;
    //     background-size: 75%;
    //     background-position: center;
    // }
</style>