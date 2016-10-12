import {connect} from 'react-redux';
import Album from '../../components/Album';
import {GET_ALBUM, PLAY_SONG} from '../storeContainer';
import store from '../storeContainer';





const mapDispatchToProps = (dispatch) => ({
	toggle: () => dispatch(toggleSong())
})

const toggleSong = () => (
	return (dispatch,getState) =>{
		audio.play();
		dispatch(sendPlayAction())
	}
)

const sendPlayAction = () => ({type : PLAY_SONG});