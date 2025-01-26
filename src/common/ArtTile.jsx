import React from 'react';
import {Link} from "react-router-dom";

function ArtTile({src}) {
    return (
      <>
        <img src={src} alt={'${src} picture'} />
      </>
    );
  }
  
  export default ArtTile;
  