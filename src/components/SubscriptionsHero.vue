<template>
    <section class="subscriptions-hero hero is-medium-with-navbar">
        <div class="hero-body">
            <div class="">
                    <div class="columns is-vcentered">
                        <div class="column is-10 is-offset-1">
                            <div class="columns">
                                <div class="column" v-for="(plan, p) in [{
                                    tier: 'Basic Tier',
                                    icon: `tree`,
                                    price: `Free`,
                                    features: ['500 Tokens', '10 MB', 'Basic Access to GPTs', 'AI Screenwriting Basics', 'Storyboarding Access'],
                                    color: `info`,
                                    action: `Get Started`,
                                }, {
                                    tier: 'Pro Tier',
                                    icon: `plane`,
                                    price: `$29.99`,
                                    features: ['10,000 Tokens', '1 GB', 'Priority Access to GPTs','Priority Agent Swarm Access',`Knowledge Base`,'Priority Storyboarding'],
                                    color: `success`,
                                    action: `Subscribe Now`,
                                },  {
                                    tier: 'Studio Tier',
                                    icon: `gem`,
                                    price: `$79.99`,
                                    features: ['100,000 Tokens','50 GB','Exclusive Access to GPTs','Exclusive Agent Swarm Access',`Knowledge Base`,'Advanced Screenwriting Analysis','Exclusive Storyboarding','Early Access Features'],
                                    color: `danger`,
                                    action: `Join Studio`,
                                }]" :key="p">
                                    <div class="notification">
                                        <div class="block">
                                            <p class="title">
                                                <span class="icon">
                                                    <i :class="`fas fa-${plan.icon}`"></i>
                                                </span>
                                                {{  plan.tier }}
                                            </p>
                                        </div>
                                        <table class="table is-fullwidth">
                                            <thead>
                                                <tr>
                                                    <th>Features</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr v-for="(feature, f) in plan.features" :key="f">
                                                    <td>
                                                        {{  feature }}
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                        <div class="block">
                                            <button class="button is-inverted is-outlined" :class="`is-${plan.color}`">{{ plan.action }}</button>
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

</script>

<style lang="scss" scoped>
    section.subscriptions-hero.hero {
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