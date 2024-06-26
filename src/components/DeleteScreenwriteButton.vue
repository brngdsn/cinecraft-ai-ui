<template>
    <button class="button is-white is-inverted is-small" :class="{ 'is-loading': is_loading }" @click="deleteScreenwrite(screenwrite)"><i class="fa-solid fa-trash-can"></i></button>
</template>

<script setup>
    import { ref, defineProps } from 'vue';
    import { useStore } from 'vuex';
    const props = defineProps({
        screenwrite: Object
    });
    const is_loading = ref(false);
    const store = useStore();
    const deleteScreenwrite = async (screenwrite) => {
        is_loading.value = true;
        await store.dispatch('deleteScreenwrites', { screenwrite })
        is_loading.value = false;
    }
</script>
