<template>
    <div class="card" style="width: 18rem;">
        <img :src="post.image" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">{{ post.name }}</h5>
            <p class="card-text">{{ post.origin }}</p>
            <a href="#" class="btn btn-primary">{{ post.id }}</a>
        </div>
    </div>
</template>
<script lang="ts" setup>
    import { IRickMorty } from '@/types';
    import { defineProps} from 'vue';

    defineProps<{post:IRickMorty}>();
</script>