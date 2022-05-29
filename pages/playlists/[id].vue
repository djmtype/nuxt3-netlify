<template>
	<div>
		<div>
			Test 
			{{ playlist.name }}
		</div>
	</div>
</template>

<script setup>
	const route = useRoute();

	const { data: playlists } = await useFetch(`/api/playlistjson`);

	const playlist = playlists.value.find(playlist => playlist.id === route.params.id);

	






	// import slugify from '@sindresorhus/slugify';
  // const route = useRoute()
  // const playlists = useState('playlists')
  // const playlist = playlists.value.find(p => p.id === route.params.id)




  // useHead({ title: `${playlist.name} - Vue SEO Nuxt` })
</script>
