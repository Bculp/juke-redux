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
const PLAY_SONG = "PLAY_SONG";
const PAUSE_SONG = "PAUSE_SONG";
const NEXT_SONG = "NEXT_SONG";
const PREVIOUS_SONG= "PREVIOUS_SONG";
const GET_ALBUM = "GET_ALBUM";   // from server
export const GET_ALL_ALBUMS= "GET_ALL_ALBUMS";


const middleWare = applyMiddleware(createLogger(), thunkMiddleWare)

var albumReducer = (state = [],action) =>{
    switch (action.type) {
      case GET_ALL_ALBUMS:
      return [...action.albums] ;
      default: return state;
    }
};

const reducers = combineReducers({
 allAlbums : albumReducer
})


let store = createStore(reducers,middleWare);

// store.getState();
// store.dispatch({type:'GET_ALL_ALBUMS', albums: "SONGGG"});
// // console.log(store.getState());

export default store;
