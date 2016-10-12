'use strict';

import React from 'react';
import Songs from '../components/Songs';

export default ({ album}) => (
  <div className="album">
    <div>
      <h3>{ album.name }</h3>
      <img src={ album.imageUrl } className="img-thumbnail" />
    </div>
    <Songs 
      songs={album.songs}
  </div>
);