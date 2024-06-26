<template>
    <section class="landing-hero hero is-medium-with-navbar">
        <div class="hero-body">
            <div class="">
                <p class="title">Cinecraft AI</p>
                <p class="subtitle">AI-powered Screenwriting and Storyboarding Tool</p>
                <a class="button is-primary is-dark" href="/screenwrites">
                    <span>Cinecraft Screenwrite</span>
                    <span class="icon">
                        <i class="fas fa-arrow-right"></i>
                    </span>
                </a>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    section.landing-hero.hero {
        margin-top: 3.25rem;
        background-image: url('/public/3dgifmaker14060.gif');
        background-repeat: no-repeat;
        background-size: 125%;
        background-position: center;
    }
    section.landing-hero.hero > div.hero-body > div > p.title {
        font-size: 120px;
    }
    section.landing-hero.hero > div.hero-body > div > p.subtitle {
        font-size: 50px;
    }
</style>