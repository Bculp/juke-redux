import { connect } from 'react-redux';
import Albums from './Albums.js';
import store from './storeContainer';
import { GET_ALL_ALBUMS } from './storeContainer';


const mapStateToProps = ({ allAlbums }) => ({
	allAlbums
})

const mapDispatchToProps = (dispatch) => ({
	fetchAlbumsFromServer: () => dispatch(fetchAlbumsFromServer())
})

//sync action creator
export const getAllAlbumsDispatcher = (arrayAlbums) => ({
  type: GET_ALL_ALBUMS,
  albums: arrayAlbums
})

//utility fn
const convertSong = song => {
  song.audioUrl = `/api/songs/${song.id}/audio`;
  return song;
};
//utility fn
const convertAlbum = album => {
  album.imageUrl = `/api/albums/${album.id}/image`;
  album.songs = album.songs.map(convertSong);
  return album;
};
//async getting albums
const fetchAlbumsFromServer = () => {
  return dispatch => {
    fetch('/api/albums')
      .then(res => res.json())
      // use the dispatch method the thunkMiddleware gave us
      .then(albums => dispatch(getAllAlbumsDispatcher(albums.map(convertAlbum))) 
  )}
}
//connection
const AlbumsContainer = connect(
	mapStateToProps, 
	mapDispatchToProps
	)(Albums);

export default AlbumsContainer


