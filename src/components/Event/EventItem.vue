<template>
    <BaseCard class="event-type-card">
            <figure>
                <router-link :to="{name: 'event-details', params: {id: id}}">
                    <img :src="image" :alt="title"  />
                </router-link>
            </figure>
            <div class="description">
                    <h2>
                        <router-link :to="{name: 'event-details', params: {id: id}}">
                        {{ title }}
                        </router-link>
                    </h2>
                <p>{{ description }}</p>
            </div>
    </BaseCard>
</template>

<script setup>

    const props = defineProps({
        
        id: {
            required: true
        },
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    });
</script>

<style scoped>
    .event-type-card {
        padding: 0;
    }

    figure {
        margin: 0;
        overflow: hidden;
        height: 15rem;
    }
    figure img {
        width: 100%;
        height: 100%;
        transition: all 0.2s ease-in-out;
    }

    figure img:hover {
        opacity: 0.8;
        transform: scale(1.1);
    }

    .description {
        font-family: Aleo;
        padding: 1.5rem;
    }

    .description h2 {
        font-size: 1.5rem;
        text-transform: uppercase;
        letter-spacing: 0.1rem;
    }

    .description p {
        margin: 0;
    }

    .description a {
        color:#0254a7;
        text-decoration: none;
    }
</style>