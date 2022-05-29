export default async (req, res) => {
	const allPlaylistData = await $fetch(
		`https://gridsome-spotify-matrix.netlify.app/api/MyPlaylists`
	);

	const playlists =
		allPlaylistData.MyPlaylistsData.me.spotify.playlistsConnection.nodes;

	return playlists;
};
