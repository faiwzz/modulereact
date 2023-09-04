import React, {useEffect, useState} from 'react';
import albumsService from "../../services/albumsService";
import album from "./Album/Album";
import Album from "./Album/Album";

const Albums = () => {
    const [albums, setAlbums] = useState([]);

    useEffect(()=>{
        albumsService.getAll().then(({data})=>setAlbums(data))

    }, [])
    return (
        <div>
            {albums.map(album=><Album key={album.id} album={album}/>)}
        </div>
    );
};

export default Albums;