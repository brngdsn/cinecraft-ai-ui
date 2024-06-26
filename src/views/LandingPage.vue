<template>
  <div class="landing-page">
    <LandingHero />
    <GeneralInfoHero />
    <DashboardGalleryHero />
    <ScenesGalleryHero />
    <!-- <NeuralNetGalleryHero /> -->
    <SubscriptionsHero />
  </div>
</template>
  
<script setup>
  import LandingHero from '@/components/LandingHero.vue'
  import GeneralInfoHero from '@/components/GeneralInfoHero.vue'
  import DashboardGalleryHero from '@/components/DashboardGalleryHero.vue'
  import ScenesGalleryHero from '@/components/ScenesGalleryHero.vue'
  import NeuralNetGalleryHero from '@/components/NeuralNetGalleryHero.vue'
  import SubscriptionsHero from '@/components/SubscriptionsHero.vue'
</script>
  