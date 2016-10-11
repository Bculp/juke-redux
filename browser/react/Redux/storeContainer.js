/* jshint esversion:6*/



import {createStore} from 'redux';

const initialState = {
  albums: [],
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
const GET_ALL_ALBUMS= "GET_ALL_ALBUMS";



var reducer = (state = initialState ,action) =>{
    switch (action.type) {
      case GET_ALL_ALBUMS:
      return Object.assign({},state,{albums:action.albums}) ;
      default: return state;
    }
};

let store = createStore(reducer,initialState);

console.log(store.getState());
store.dispatch({type:'GET_ALL_ALBUMS', albums: "SONGGG"});
console.log(store.getState());

export default store;
