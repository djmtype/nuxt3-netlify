
export default async (req, res) => {
	const allPlaylistData = await $fetch(
		// `https://gridsome-spotify-matrix.netlify.app/api/${process.env.PLAYLIST}`

		`https://gridsome-spotify-matrix.netlify.app/api/MyPlaylists`
	);

// const list = playlists.MyPlaylistsData.me.spotify.playlistsConnection.nodes;


// const response = playlists;

// console.log(response);

const playlists = allPlaylistData.MyPlaylistsData.me.spotify.playlistsConnection.nodes;
// *
// console.log(playlists);


// console.log(list[0].id);



  return playlists;

	// if (playlists) {
	// 	return playlists

		
	// } else {
	// 	return playlists.value.find(playlist => playlist.id == parseInt(id));
	// 	// const playlist = playlists.value.find(p => p.id === route.params.id)
	// }
};
