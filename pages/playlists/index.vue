<template>
	<div>
    <h1>Playlists</h1>
    <ol>

      <li v-for="playlist in playlists" :key="playlist.id">
<NuxtLink :to="`/playlists/${playlist.id}`">{{ playlist.name }}</NuxtLink>
</li>



    </ol>
	</div>
</template>

<script setup>

// import { ref } from 'vue'
// // import slugify from '@sindresorhus/slugify';
const { data: playlists } = await useFetch('/api/playlists');
// const {data: playlists} = await useFetch("/api/playlists");

// const info = ref(playlists);

// const playlists = useState('playlists', () => allPlaylists.value)
</script>

