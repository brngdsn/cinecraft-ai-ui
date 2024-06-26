<template>
    <div>
        <SpinningHero />
        <section class="scenes-hero hero is-medium-with-navbar">
            <div class="hero-body" style="padding-top:2.5vh;">
                <nav class="breadcrumb has-arrow-separator is-small" aria-label="breadcrumbs">
                    <ul>
                        <li><a href="/screenwrites">Screenwrites</a></li>
                        <li><a href="#">{{ scenes_carousel_title?.stitle }}</a></li>
                        <li class="is-active"><a href="#" aria-current="page">{{ get_title(scenes_carousel_title) }}</a></li>
                    </ul>
                </nav>
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
                                            <th>Scenes</th>
                                            <th><abbr title=""></abbr></th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(scene, s) in scenes_carousel" :key="s">
                                            <td>
                                                <a :href="`/scene/${scene.cid}`">{{ get_scene_heading(scene) }}</a>
                                            </td>
                                            <!-- <td>
                                                <DeleteScenewriteButton :scene="scene" />
                                            </td> -->
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            <!-- <div class="block">
                                <textarea class="textarea" placeholder="a film about bunny bugs bunny, mickey mouse, and donald duck" v-model="prompt"></textarea>
                            </div> -->
                            <div class="block">
                                <a class="button is-link is-dark is-focused is-fullwidth" @click="createStoryboards">
                                    <span>Cinecraft Storyboard</span>
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
                                <div class="column" :style="{ 'margin-left': s === 0 ? '11px' : 'inherit' }" v-for="(scene, s) in scenes_carousel_images" :key="s">
                                    <div class="notification" :style="{
                                        'background-size': 'cover',
                                        'background-position': 'center center',
                                        'background-repeat': 'no-repeat',
                                        'background-image': scene.cimage ? `url('http://10.0.0.198:3000/scenes/${scene.cid}/storyboards/tiles')` : `inherit`
                                    }">
                                        <div class="columns" :style="{
                                                    'height': s === 0 ? '300px' : '225px',
                                                    'width': s === 0 ? '580px' : '275px',}">
                                            <div class="column is-half">
                                                <div class="block" >
                                                    <span v-if="!scene.cimage">Cinecraft Storyboard Tile</span>
                                                    <span v-else="!scene.cimage">{{ get_scene_text(scene) }}</span>
                                                </div>
                                                <div class="block">
                                                    <CinecraftTileButton :scene="scene" :recycle="scene.cimage" />
                                                </div>
                                            </div>
                                            <div class="column is-half">
                                                <div class="block" style="font-size:6px;" :style="{
                                                    'color': ((s === 0) && (scene.cimage)) ? 'rgba(0,0,0,0)' : 'inherit',}">
                                                    {{ [scene.cid, scene.sid] }} {{ get_scene_text(scene) }}<br /><br />
                                                    {{ get_scene_text(scene, 1) }}...
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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
                                    <pre class="screenwrite-page" v-for="(element, s) in scenes_carousel_title?.cdata.elements">{{  getElementText(element)  }}</pre>
                                </div>
                                <div class="block">
                                    <button class="button is-info is-inverted">Like</button>
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
    import CinecraftTileButton from '@/components/CinecraftTileButton.vue'
    // import DeleteScreenwriteButton from '@/components/DeleteScreenwriteButton'
    import { computed, ref, onMounted } from 'vue';
    import { useRoute } from 'vue-router';
    import { useStore } from 'vuex';

    const prompt = ref(``);
    const route = useRoute();
    const store = useStore();
    // Use ref for reactive reference to screenwrite
    const scenes = computed(() => store.getters['scenes']);
    const scenes_carousel = computed(() => store.getters['scenes_carousel']);
    const scenes_carousel_title = computed(() => store.getters['scenes_carousel_title']);
    const scenes_carousel_images = computed(() => store.getters['scenes_carousel_images']);
    
    // Method to dispatch action
    const fetchScenes = () => {
        const sid = route.params.sid;
        store.dispatch('fetchScenes', { sid });
    };

    const onNext = () => {
        store.commit('ADVANCE_SCENES')
    };

    const onPrev = () => {
        store.commit('REWIND_SCENES')
    };

    const getElementText = (element) => {
        const { text, type, character, parenthetical } = element;
        switch (type) {
            case 'action': return text;
            case 'scene_heading': return text;
            case 'dialogue': return `${character}\n${parenthetical ? `(${parenthetical})\n` : ``}${text}`;
        }
    };

    const get_title = (scenes_carousel_title) => {
        if (scenes_carousel_title?.cdata?.elements && scenes_carousel_title?.cdata?.elements?.length > 0) {
            return scenes_carousel_title.cdata.elements[0].text
        } else {
            return ``
        }
    };

    const get_scene_heading = (scene) => {
        if (scene?.cdata?.elements && scene?.cdata?.elements?.length > 0) {
            return scene?.cdata?.elements[0]?.text
        } else {
            return ``
        }
    };

    const get_scene_text = (scene, index = 0) => {
        if (scene?.cdata?.elements && scene?.cdata?.elements?.length > 0) {
            return scene.cdata.elements[index].text
        } else {
            return ``
        }
    }

    onMounted(fetchScenes);
</script>

<style lang="scss">
    // section.scenes-hero.hero {
    //     margin-top: 3.25rem;
    // }
    .screenwrite-page {
        overflow-x: hidden;
        padding: 1;
        max-width: 600px;
        white-space: break-spaces;
        word-wrap: break;
    }
</style>