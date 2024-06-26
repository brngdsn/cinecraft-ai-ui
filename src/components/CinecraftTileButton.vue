<template>
    <button class="button is-small is-link"
        :class="{
            'is-loading is-disabled': is_loading || scene.cdrawing,
            'is-inverted':  !is_loading && !scene.cdrawing,
            'button is-small is-link': !recycle,
            'button is-small is-ghost': recycle
        }"
        @click="cinecraftTile(scene.cid)"
        >
        <span v-if="!recycle">Cinecraft Tile</span>
        <span v-else><i class="fa-solid fa-rotate-right"></i></span>
    </button>
</template>

<script setup>
    import { ref, defineProps } from 'vue';
    import { useStore } from 'vuex';
    const props = defineProps({
        scene: Object,
        recycle: Boolean
    });
    const is_loading = ref(false);
    const store = useStore();
    const cinecraftTile = async (cid) => {
        is_loading.value = true;
        if (props.recycle) {
            await store.dispatch('deleteTiles', { cid })
            await store.dispatch('createTiles', { cid })
        } else {
            await store.dispatch('createTiles', { cid })
        }
        is_loading.value = false;
    }
</script>
