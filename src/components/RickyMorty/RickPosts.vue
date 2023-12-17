<template>
    <h1 style="text-align: center;">Rick y Morty</h1>
    <div class="posts">
        <PostCard v-for="(post,i) in posts" :key="i" :post="post" />
    </div>
</template>
<script lang="ts" setup>
import { Ref, onBeforeMount } from 'vue';
import RickApi from '@/services/RickApi';
import { IRickMorty } from '@/types';
import PostCard from './PostCard.vue';

const rickApi = new RickApi();
const posts:Ref<Array<IRickMorty>> = rickApi.getPosts();

onBeforeMount( () => {
    const numeroAletaorio = Math.floor(Math.random() * 19) + 1;
    
    rickApi.fetchAll(numeroAletaorio.toString());
});
</script>

<style scoped>
.posts{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.card{
    margin-top: 20px;
}
</style>