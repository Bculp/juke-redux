/* jshint esversion:6*/



import {createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleWare from 'redux-thunk';

export const initialState = {
  allAlbums: [],
  album: {}, // the album we want to use
  currentSong: 0, // the id of the current song playing (0 if no song playing)
  currentSongList: [], // array of songs queued up to play
  isPlaying: false, // boolean for whether audio is playing or not
  progress: 0, // the percentage of the progress bar
};

//Actions Types
const REMOVE_SONG = "REMOVE SONG";
const LOAD_SONG = "LOAD_SONG";
export const TOGGLE = "TOGGLE";
export const START_SONG = "START_SONG"
export const PLAY_SONG = "PLAY_SONG";
const PAUSE_SONG = "PAUSE_SONG";
const NEXT_SONG = "NEXT_SONG";
const PREVIOUS_SONG= "PREVIOUS_SONG";
export const GET_ALBUM = "GET_ALBUM";   // from server
export const GET_ALL_ALBUMS= "GET_ALL_ALBUMS";
export const SET_CURRENT_SONG = "SET_CURRENT_SONG";

//action creators

const startSong = () => ({type :START_SONG});
const pauseSong = () => ({type : PAUSE_SONG});
const setCurrentSong = (currentSong,currentSongList) => ({
  type: SET_CURRENT_SONG, currentSong,currentSongList
})

//middleWare
const middleWare = applyMiddleware(createLogger(), thunkMiddleWare)

//----------------------

export const play = () => dispatch => {
  AUDIO.play();
  dispatch(startPlaying());
};

export const pause = () => dispatch => {
  AUDIO.pause();
  dispatch(stopPlaying());
};

export const load = (currentSong, currentSongList) => dispatch => {
  AUDIO.src = currentSong.audioUrl;
  AUDIO.load();
  dispatch(setCurrentSong(currentSong, currentSongList));
};

export const startSong = (song, list) => dispatch => {
  dispatch(pause());
  dispatch(load(song, list));
  dispatch(play());
};

export const toggle = () => (dispatch, getState) => {
  const { isPlaying } = getState();
  if (isPlaying) dispatch(pause()); 
  else dispatch(play());
};

export const toggleOne = (selectedSong, selectedSongList) => 
  (dispatch, getState) => {
    const { currentSong } = getState();
    if (selectedSong.id !== currentSong.id)
      dispatch(startSong(selectedSong, selectedSongList));
    else dispatch(toggle());
};





//Ruducers
var curretSongReducer = (state = 0,action)=>{
  switch(action.type){
    case SET_CURRENT_SONG:
    return action.index
  }
}


var getAlbumReducer = (state = {}, action)=>{
    switch(action.type){
      case GET_ALBUM:
      return action.album;
      default return state.
    }
}


var albumReducer = (state = [],action) =>{
    switch (action.type) {
      case GET_ALL_ALBUMS:
      return [...action.albums] ;
      default: return state;
    }
};

var isPlayingReducer = (state = false, action) =>{
  switch(action.type){
    case PLAY_SONG:
      return true;
    case PAUSE_SONG:
      return false;  
    default : return state;
  }

}

//Reducer Combined
const reducers = combineReducers({
 allAlbums : albumReducer,
 album: getAlbumReducer,
 isPlaying : isPlayingReducer
 currentSong : curretSongReducer
})


let store = createStore(reducers,middleWare);

// store.getState();
// store.dispatch({type:'GET_ALL_ALBUMS', albums: "SONGGG"});
// // console.log(store.getState());

export default store;
