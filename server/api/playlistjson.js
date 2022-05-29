import playlistjson from '../../data/playlists.json';



export default defineEventHandler((event) => {
	
	const playlists = playlistjson.MyPlaylistsData.me.spotify.playlistsConnection.nodes
	
	return playlists;

})






 



