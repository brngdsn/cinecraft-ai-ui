<template>
    <section class="spinning-hero hero is-medium-with-navbar">
        <div class="hero-body">

        </div>
    </section>
</template>

<style lang="scss">
    section.spinning-hero.hero {
        margin-top: 3.25rem;
        background-image: url('/public/3dgifmaker14060.gif');
        background-repeat: no-repeat;
        background-size: 125%;
        background-position: center;
    }
    section.spinning-hero.hero > div.hero-body > div > p.title {
        font-size: 120px;
    }
    section.spinning-hero.hero > div.hero-body > div > p.subtitle {
        font-size: 50px;
    }
    .spinning-hero {
        max-height: 0.5rem;
    }
</style>