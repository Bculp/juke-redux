import React from 'react';



export default class Albums extends React.Component {
  componentDidMount() {
    this.props.fetchAlbumsFromServer();
  //   fetch('/api/albums')
  //   .then(res => res.json())
    // .then(albumsArr=>{
    //   const convertedAlbums = albumsArr.map(album => convertAlbum(album));
    //   this.props.getTheAlbums(convertedAlbums)
  // })
  //   .catch(console.error)
  }


  render() {
      // Makes column for each album
      console.log("props", this.props);
      let displayAlbums = this.props.allAlbums.map(album =>(
              <div key={album.id} className="col-xs-4">
                <a className="thumbnail" href="#">
                  <img src={album.imageUrl} />
                  <div className="caption">
                    <h5>
                      <span>{album.name}</span>
                    </h5>
                    <small>{album.songs.length}</small>
                  </div>
                </a>
              </div>
         ));

    return (
      <div>
        <h3>Albums</h3>
        <div className="row">
        {displayAlbums}   
        </div>
      </div>
    )
  }
}


