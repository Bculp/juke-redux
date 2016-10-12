import {connect} from 'react-redux';
import Album from '../../components/Album';
import {GET_ALBUM, PLAY_SONG} from '../storeContainer';
import store from '../storeContainer';

const mapStateToProps = ({ album }) => ({
	album
})

const mapDispatchToProps = (dispatch) => ({
		
})


const AlbumContainer = connect(
	mapStateToProps,
	mapDispatchToProps
	)(Album);

export default AlbumContainer
